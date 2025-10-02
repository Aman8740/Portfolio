import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui"
import { Avatar, AvatarImage, AvatarFallback, Badge } from "@/components/ui"
import ReactMarkdown from 'react-markdown'
import type { Project, Experience, Skill } from "@/types"

interface ProjectsTabProps {
  projects: Project[]
  experience: Experience[]
  skills: Skill[]
  personalPhoto: string
}

export function ProjectsTab({ projects, experience, skills, personalPhoto }: ProjectsTabProps) {
  // Create a map of experience IDs to company info
  const experienceMap = experience.reduce((acc, exp) => {
    acc[exp.id] = exp
    return acc
  }, {} as Record<string, Experience>)

  // Create a map of skill IDs to skill info
  const skillsMap = skills.reduce((acc, skill) => {
    acc[skill.id] = skill
    return acc
  }, {} as Record<string, Skill>)

  const getCompanyInfo = (madeAt: number) => {
    if (madeAt === 0) {
      return {
        name: "Personal Project",
        logo: personalPhoto
      }
    }
    const company = experienceMap[madeAt.toString()]
    return company ? {
      name: company.companyName,
      logo: company.logo
    } : {
      name: "Unknown",
      logo: personalPhoto
    }
  }

  const getSkillsByIds = (skillIds: string[]) => {
    return skillIds.map(id => skillsMap[id]).filter(Boolean)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {projects.map((project) => {
          const companyInfo = getCompanyInfo(project.madeAt)
          const projectSkills = getSkillsByIds(project.skills)

          return (
            <AccordionItem key={project.id} value={project.id} className="border border-border rounded-lg">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex items-start space-x-4 text-left w-full">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={project.logo} alt={project.name} />
                    <AvatarFallback>
                      {project.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{project.slogan}</p>

                    <div className="flex items-center space-x-2">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={companyInfo.logo} alt={companyInfo.name} />
                        <AvatarFallback className="text-xs">
                          {companyInfo.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <Badge variant="outline" className="text-xs">
                        {project.madeAt === 0 ? "Personal" : companyInfo.name}
                      </Badge>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-4">
                <div className="pt-2 border-t border-border space-y-4">
                  <div className="text-sm leading-relaxed prose prose-sm dark:prose-invert max-w-none
                                  prose-headings:text-foreground prose-p:text-muted-foreground
                                  prose-strong:text-foreground prose-li:text-muted-foreground
                                  prose-h2:text-base prose-h2:font-semibold prose-h2:mb-2
                                  prose-ul:my-2 prose-li:my-1">
                    <ReactMarkdown>
                      {project.description}
                    </ReactMarkdown>
                  </div>

                  {projectSkills.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {projectSkills.map((skill) => (
                          <Badge key={skill.id} variant="secondary" className="text-xs">
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}