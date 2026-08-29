import { useState } from "react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { Linkedin, Github, Download, MapPin, Briefcase, Languages, Sparkles } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { useLanguage } from "@/hooks";
import type { PersonalInfo, Resume } from "@/types";

export interface SidebarProps {
  personalInfo: PersonalInfo;
  resumes: Resume[];
}

/**
 * Hero panel displayed on the left side of the portfolio.
 * Shows identity, current role, Japanese language proficiency, social links, and resume download.
 * @param personalInfo - Personal details including name, photo, and social links
 * @param resumes - List of downloadable resume files
 * @returns Rendered Sidebar component
 */
export function Sidebar({ personalInfo, resumes }: SidebarProps) {
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const { language } = useLanguage();

  const handleDownloadResume = (fileName: string) => {
    fetch(`/Portfolio/assets/${fileName}`).then(
      async (response) => {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      },
      () => {
        window.open(`/Portfolio/assets/${fileName}`, "_blank");
      }
    );
  };

  const initials = personalInfo.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <>
      <div className="flex lg:hidden items-center justify-between px-4 py-3 border-b border-border bg-card/90 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Avatar className="w-9 h-9 ring-2 ring-primary/30 ring-offset-1 ring-offset-background">
            <AvatarImage
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="object-cover object-top"
            />
            <AvatarFallback className="text-xs font-semibold bg-primary/10 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm leading-tight text-foreground">
              {language === "ja" ? "アマン・シェイク" : personalInfo.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {language === "ja" ? "フルスタック・AI開発" : "Full-stack & AI"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-1.5 rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-1.5 rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          {resumes.length === 1 ? (
            <button
              type="button"
              onClick={() => handleDownloadResume(resumes[0].fileName)}
              aria-label="Download resume"
              className="p-1.5 rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
            </button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  aria-label="Download resume"
                  className="p-1.5 rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {resumes.map((resume) => (
                  <DropdownMenuItem
                    key={resume.id}
                    onClick={() => handleDownloadResume(resume.fileName)}
                  >
                    {resume.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <LanguageToggle compact={true} />
          <ThemeToggle collapsed={true} />
        </div>
      </div>

      <aside className="hidden lg:flex flex-col min-h-screen w-72 xl:w-80 border-r border-border hero-gradient sticky top-0 shrink-0">
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-64 pointer-events-none overflow-hidden rounded-b-3xl"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, hsl(var(--primary) / 0.18) 0%, transparent 70%)",
          }}
        />

        <div className="relative flex flex-col flex-1 px-7 pt-10 pb-8 gap-0">
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 70%)",
                }}
              />
              <Avatar
                className="w-28 h-28 xl:w-32 xl:h-32 ring-[3px] ring-primary/40 ring-offset-4 ring-offset-background shadow-2xl"
                style={{ opacity: avatarLoaded ? 1 : 0, transition: "opacity 0.4s ease" }}
              >
                <AvatarImage
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="object-cover object-top"
                  onLoad={() => setAvatarLoaded(true)}
                />
                <AvatarFallback className="text-3xl font-bold bg-primary/10 text-primary">
                  {initials}
                </AvatarFallback>
              </Avatar>
              {!avatarLoaded && (
                <div className="absolute inset-0 w-28 h-28 xl:w-32 xl:h-32 rounded-full bg-muted animate-pulse" />
              )}
            </div>
          </div>

          <div className="text-center mb-5 animate-fade-up">
            <h1 className="font-display text-2xl xl:text-3xl font-bold tracking-tight text-foreground">
              {language === "ja" ? "アマン・シェイク" : personalInfo.name}
            </h1>
            <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>
                {language === "ja" ? "フルスタック・AIシステム開発" : "Full-stack & AI systems"}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-6 animate-fade-up" style={{ animationDelay: "60ms" }}>
            <div className="flex items-center justify-between text-xs text-muted-foreground bg-card/80 dark:bg-secondary/50 rounded-xl px-3 py-2 border border-border shadow-xs">
              <span className="flex items-center gap-1.5 font-medium text-foreground">
                <Languages className="w-3.5 h-3.5 text-primary" />
                {language === "ja" ? "日本語能力" : "Japanese language"}
              </span>
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                {language === "ja" ? "Pre-Advanced (実務対応)" : "Pre-advanced"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 bg-card/80 dark:bg-secondary/50 rounded-lg px-2.5 py-1.5 border border-border shadow-xs text-foreground">
                <Briefcase className="w-3 h-3 text-primary" />
                <span className="truncate">Webosphere</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-card/80 dark:bg-secondary/50 rounded-lg px-2.5 py-1.5 border border-border shadow-xs text-foreground">
                <MapPin className="w-3 h-3 text-primary" />
                <span className="truncate">{language === "ja" ? "インド" : "India"}</span>
              </span>
            </div>
          </div>

          <div className="h-px bg-border mb-6" />

          <nav
            className="flex flex-col gap-2 animate-fade-up"
            style={{ animationDelay: "120ms" }}
            aria-label="Social links and actions"
          >
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="linkedin-link"
              className="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-card dark:hover:bg-secondary/70 border border-transparent hover:border-border transition-all duration-200"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0077b5]/10 text-[#0077b5] group-hover:bg-[#0077b5]/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </span>
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              id="github-link"
              className="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-card dark:hover:bg-secondary/70 border border-transparent hover:border-border transition-all duration-200"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-foreground/10 text-foreground group-hover:bg-foreground/15 transition-colors">
                <Github className="w-4 h-4" />
              </span>
              <span>GitHub</span>
            </a>

            {resumes.length === 1 ? (
              <button
                type="button"
                id="resume-download-btn"
                onClick={() => handleDownloadResume(resumes[0].fileName)}
                className="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-card dark:hover:bg-secondary/70 border border-transparent hover:border-border transition-all duration-200 w-full text-left cursor-pointer"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Download className="w-4 h-4" />
                </span>
                <span>{language === "ja" ? "履歴書をダウンロード" : "Download resume"}</span>
              </button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    id="resume-download-btn"
                    className="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-card dark:hover:bg-secondary/70 border border-transparent hover:border-border transition-all duration-200 w-full text-left cursor-pointer"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Download className="w-4 h-4" />
                    </span>
                    <span>{language === "ja" ? "履歴書をダウンロード" : "Download resume"}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" side="bottom" className="w-56">
                  {resumes.map((resume) => (
                    <DropdownMenuItem
                      key={resume.id}
                      onClick={() => handleDownloadResume(resume.fileName)}
                    >
                      {resume.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>

          <div className="flex-1" />

          <div className="pt-5 border-t border-border">
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
