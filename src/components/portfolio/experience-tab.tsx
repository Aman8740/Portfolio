import { Avatar, AvatarImage, AvatarFallback, Badge } from "@/components/ui"
import ReactMarkdown from 'react-markdown'
import type { Experience, Skill } from "@/types"

interface ExperienceTabProps {
  experience: Experience[]
  skills: Skill[]
}

export function ExperienceTab({ experience, skills }: ExperienceTabProps) {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  // Group experience items by ID
  const groupedExperience = experience.reduce((acc, exp) => {
    if (!acc[exp.id]) {
      acc[exp.id] = []
    }
    acc[exp.id].push(exp)
    return acc
  }, {} as Record<string, Experience[]>)

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Experience</h2>
        {Object.entries(groupedExperience).map(([id, expGroup]) => (
          <div key={id} className="border border-border rounded-lg p-2 sm:p-3 md:p-4">
            {/* Header with company info */}
            <div className="flex items-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0">
                <AvatarImage src={expGroup[0].logo} alt={expGroup[0].companyName} />
                <AvatarFallback className="text-xs sm:text-sm">
                  {expGroup[0].companyName.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-sm sm:text-base md:text-lg leading-tight break-words">{expGroup[0].companyName}</h3>
              </div>
            </div>

            {/* Experience entries */}
            <div className="space-y-4">
              {expGroup.map((exp, index) => (
                <div key={`${exp.id}-${index}`}>
                  {index > 0 && <hr className="my-4 border-border" />}

                  {/* Position and timeframe */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <p className="text-muted-foreground font-medium">{exp.position}</p>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                      {exp.timeframe}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="text-sm leading-relaxed prose prose-sm dark:prose-invert max-w-none
                                  prose-p:text-muted-foreground prose-strong:text-foreground">
                    <ReactMarkdown>{exp.description}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Skills</h2>

        <div className="space-y-4 sm:space-y-6">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-base sm:text-lg font-medium">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <Badge key={skill.id} variant="outline" className="text-xs sm:text-sm">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}