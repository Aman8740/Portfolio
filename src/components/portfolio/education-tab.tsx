import { Avatar, AvatarImage, AvatarFallback, Badge } from "@/components/ui";
import type { Education, Certificate } from "@/types";

interface EducationTabProps {
  education: Education[];
  certificates: Certificate[];
}

export function EducationTab({ education, certificates }: EducationTabProps) {
  const groupedEducation = education.reduce((acc, edu) => {
    if (!acc[edu.id]) {
      acc[edu.id] = [];
    }
    acc[edu.id].push(edu);
    return acc;
  }, {} as Record<string, Education[]>);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Education</h2>
        {Object.entries(groupedEducation).map(([id, eduGroup]) => (
          <div
            key={id}
            className="border border-border rounded-lg p-2 sm:p-3 md:p-4"
          >
            <div className="flex items-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0">
                <AvatarImage
                  src={eduGroup[0].logo}
                  alt={eduGroup[0].instituteName}
                />
                <AvatarFallback className="text-xs sm:text-sm">
                  {eduGroup[0].instituteName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-sm sm:text-base md:text-lg leading-tight break-words">
                  {eduGroup[0].instituteName}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {eduGroup.map((edu, index) => (
                <div key={`${edu.id}-${index}`}>
                  {index > 0 && <hr className="my-4 border-border" />}

                  {/* Course and timeframe */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <p className="text-muted-foreground font-medium">
                      {edu.course}
                    </p>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                      {edu.timeframe}
                    </span>
                  </div>

                  {/* Grades */}
                  <div className="flex flex-wrap gap-2">
                    {edu.grades.map((grade, gradeIndex) => (
                      <Badge
                        key={gradeIndex}
                        variant="secondary"
                        className="text-xs sm:text-sm"
                      >
                        {grade.type}: {grade.value}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Certificates</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="border border-border rounded-lg p-3 sm:p-4 flex flex-col">
              <div className="mb-3">
                <img
                  src={cert.imageUrl}
                  alt={cert.name}
                  className="w-full aspect-video object-cover rounded-md"
                />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold text-sm sm:text-base break-words">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground break-words">
                  {cert.institute}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
