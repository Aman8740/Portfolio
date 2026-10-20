import { lazy, Suspense, useState } from "react";
import { ThemeProvider, LanguageProvider, useLanguage, useHashRoute } from "@/hooks";
import { ScrollArea } from "@/components/ui";
import { Sidebar, LanguageToggle } from "@/components/layout";
import { EducationTab, ExperienceTab, ProjectsTab, InterviewsTab } from "@/components/portfolio";

// The generator pages exist only in the dev server (npm run dev / npm run pdf); the live site never includes them.
const ResumePage = import.meta.env.DEV
  ? lazy(() => import("@/components/documents/resume-page").then((m) => ({ default: m.ResumePage })))
  : null;
const RirekishoPage = import.meta.env.DEV
  ? lazy(() => import("@/components/documents/rirekisho-page").then((m) => ({ default: m.RirekishoPage })))
  : null;
import {
  personalInfo,
  educationData,
  certificatesData,
  experienceData,
  skillsData,
  projectsData,
} from "@/data";

const isPrivateMode = import.meta.env.VITE_MODE === "private";

type TabId = "projects" | "experience" | "education" | "interviews";

interface TabConfig {
  id: TabId;
  labelEn: string;
  labelJa: string;
  privateOnly?: boolean;
}

const TABS: TabConfig[] = [
  { id: "projects", labelEn: "Projects", labelJa: "プロジェクト" },
  { id: "experience", labelEn: "Experience", labelJa: "職務経歴" },
  { id: "education", labelEn: "Education", labelJa: "学歴・資格" },
  { id: "interviews", labelEn: "Interviews", labelJa: "面接記録", privateOnly: true },
];

/**
 * Inner portfolio shell consuming language and theme state.
 * @returns Rendered PortfolioContent element
 */
function PortfolioContent() {
  const [activeTab, setActiveTab] = useState<TabId>("projects");
  const { language } = useLanguage();

  const visibleTabs = TABS.filter((t) => !t.privateOnly || isPrivateMode);

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      <Sidebar personalInfo={personalInfo} />

      <main className="flex-1 flex flex-col min-h-0 lg:min-h-screen">
        <div className="sticky top-0 z-10 bg-background/90 backdrop-blur-md border-b border-border/80">
          <div className="px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3">
            <nav
              role="tablist"
              aria-label="Portfolio sections"
              className="flex items-center gap-1 bg-secondary/70 dark:bg-secondary/50 rounded-xl p-1"
            >
              {visibleTabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={[
                    "px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer",
                    activeTab === tab.id
                      ? "bg-background text-foreground shadow-xs font-semibold tab-active-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50",
                  ].join(" ")}
                >
                  {language === "ja" ? tab.labelJa : tab.labelEn}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <LanguageToggle />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <ScrollArea key={activeTab} className="h-[calc(100vh-57px)]">
            <div className="px-4 sm:px-6 lg:px-8 py-6 pb-16">
              <div
                role="tabpanel"
                id="panel-projects"
                aria-labelledby="tab-projects"
                hidden={activeTab !== "projects"}
                className={activeTab === "projects" ? "animate-fade-up" : ""}
              >
                {activeTab === "projects" && (
                  <ProjectsTab
                    projects={projectsData}
                    experience={experienceData}
                    skills={skillsData}
                    personalPhoto={personalInfo.photo}
                  />
                )}
              </div>

              <div
                role="tabpanel"
                id="panel-experience"
                aria-labelledby="tab-experience"
                hidden={activeTab !== "experience"}
                className={activeTab === "experience" ? "animate-fade-up" : ""}
              >
                {activeTab === "experience" && (
                  <ExperienceTab experience={experienceData} skills={skillsData} />
                )}
              </div>

              <div
                role="tabpanel"
                id="panel-education"
                aria-labelledby="tab-education"
                hidden={activeTab !== "education"}
                className={activeTab === "education" ? "animate-fade-up" : ""}
              >
                {activeTab === "education" && (
                  <EducationTab education={educationData} certificates={certificatesData} />
                )}
              </div>

              {isPrivateMode && (
                <div
                  role="tabpanel"
                  id="panel-interviews"
                  aria-labelledby="tab-interviews"
                  hidden={activeTab !== "interviews"}
                  className={activeTab === "interviews" ? "animate-fade-up" : ""}
                >
                  {activeTab === "interviews" && <InterviewsTab />}
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
}

/**
 * Root application component.
 * Wraps portfolio shell with ThemeProvider and LanguageProvider.
 * @returns Root JSX element
 */
export function App() {
  const route = useHashRoute();

  if (ResumePage && route === "resume") {
    return (
      <Suspense fallback={null}>
        <ResumePage />
      </Suspense>
    );
  }
  if (RirekishoPage && route === "rirekisho") {
    return (
      <Suspense fallback={null}>
        <RirekishoPage />
      </Suspense>
    );
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <LanguageProvider defaultLanguage="en">
        <PortfolioContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;