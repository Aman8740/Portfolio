import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback, Button, Collapsible, CollapsibleContent } from "@/components/ui"
import { Linkedin, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"
import type { PersonalInfo } from "@/types"

interface SidebarProps {
  personalInfo: PersonalInfo
}

export function Sidebar({ personalInfo }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={cn(
      "bg-card border-r border-border flex flex-col transition-all duration-300",
      "w-full lg:min-h-screen lg:w-auto",
      isCollapsed ? "lg:w-16" : "lg:w-60 xl:w-72 2xl:w-80"
    )}>
      <div className="p-3 sm:p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="ml-auto mb-2 sm:mb-4 hidden lg:flex"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <Collapsible open={!isCollapsed} className="flex-1">
        <div className="flex flex-col justify-between h-full">
          {/* Mobile horizontal layout */}
          <div className="flex lg:hidden items-center justify-center space-x-3 sm:space-x-4 px-3 sm:px-4 py-2">
            <Avatar className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0">
              <AvatarImage src={personalInfo.photo} alt={personalInfo.name} />
              <AvatarFallback className="text-xs sm:text-sm md:text-base">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h1 className="text-base sm:text-lg md:text-xl font-bold break-words">{personalInfo.name}</h1>
              <div className="flex items-center space-x-2 sm:space-x-3 mt-1">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
                <ThemeToggle collapsed={true} />
              </div>
            </div>
          </div>

          {/* Desktop vertical layout */}
          <div className="hidden lg:flex flex-col items-center space-y-6 px-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className={cn(
                "transition-all duration-300",
                isCollapsed ? "w-8 h-8" : "w-32 h-32"
              )}>
                <AvatarImage src={personalInfo.photo} alt={personalInfo.name} />
                <AvatarFallback className={cn(
                  "transition-all duration-300",
                  isCollapsed ? "text-xs" : "text-2xl"
                )}>
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>

              <CollapsibleContent>
                <h1 className="text-2xl font-bold text-center">{personalInfo.name}</h1>
              </CollapsibleContent>
            </div>

            <CollapsibleContent className="w-full">
              <div className="w-full space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <Linkedin className="w-4 h-4 text-muted-foreground" />
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    LinkedIn
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <Github className="w-4 h-4 text-muted-foreground" />
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    GitHub
                  </a>
                </div>

                <ThemeToggle />
              </div>
            </CollapsibleContent>

            {isCollapsed && (
              <div className="flex flex-col items-center space-y-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="cursor-pointer hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-muted-foreground" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="cursor-pointer hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4 text-muted-foreground" />
                </a>
                <div className="mt-4">
                  <ThemeToggle collapsed={true} />
                </div>
              </div>
            )}
          </div>
        </div>
      </Collapsible>
    </div>
  )
}