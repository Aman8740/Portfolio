import { ThemeProvider } from "@/hooks"
import { Tabs, TabsContent, TabsList, TabsTrigger, ScrollArea } from "@/components/ui"
import { Sidebar } from "@/components/layout"
import { EducationTab, ExperienceTab, ProjectsTab } from "@/components/portfolio"
import { personalInfo, educationData, certificatesData, experienceData, skillsData, projectsData } from "@/data"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background flex flex-col lg:flex-row">
        <Sidebar personalInfo={personalInfo} />

        <div className="flex-1 flex flex-col">
          <div className="p-3 sm:p-4 md:p-6">
            <Tabs defaultValue="education" className="w-full h-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="education" className="text-xs sm:text-sm">Education</TabsTrigger>
                <TabsTrigger value="experience" className="text-xs sm:text-sm">Experience</TabsTrigger>
                <TabsTrigger value="projects" className="text-xs sm:text-sm">Projects</TabsTrigger>
              </TabsList>

              <div className="mt-4 sm:mt-6 h-[calc(100vh-160px)] sm:h-[calc(100vh-140px)] lg:h-[calc(100vh-120px)]">
                <TabsContent value="education" className="h-full">
                  <ScrollArea className="h-full">
                    <div className="pr-2 sm:pr-4 pb-8">
                      <EducationTab education={educationData} certificates={certificatesData} />
                    </div>
                  </ScrollArea>
                </TabsContent>

                <TabsContent value="experience" className="h-full">
                  <ScrollArea className="h-full">
                    <div className="pr-2 sm:pr-4 pb-8">
                      <ExperienceTab experience={experienceData} skills={skillsData} />
                    </div>
                  </ScrollArea>
                </TabsContent>

                <TabsContent value="projects" className="h-full">
                  <ScrollArea className="h-full">
                    <div className="pr-2 sm:pr-4 pb-8">
                      <ProjectsTab
                        projects={projectsData}
                        experience={experienceData}
                        skills={skillsData}
                        personalPhoto={personalInfo.photo}
                      />
                    </div>
                  </ScrollArea>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App