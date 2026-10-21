import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback, Badge } from "@/components/ui";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { GraduationCap, Award, ExternalLink, Calendar, BookOpen } from "lucide-react";
import { formatPortfolioDate } from "@/lib";
import { useLanguage } from "@/hooks";
import type { Education, Certificate } from "@/types";

export interface EducationTabProps {
  education: Education[];
  certificates: Certificate[];
}

/**
 * Education tab rendering academic background and verified technical certifications with sentence-case typography.
 * @param education - Array of academic institutions and grades
 * @param certificates - List of technical certifications
 * @returns Rendered Education tab JSX
 */
export function EducationTab({ education, certificates }: EducationTabProps) {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const { language } = useLanguage();
  const isJa = language === "ja";

  const groupedEducation = education.reduce((acc, edu) => {
    if (!acc[edu.id]) {
      acc[edu.id] = [];
    }
    acc[edu.id].push(edu);
    return acc;
  }, {} as Record<string, Education[]>);

  return (
    <div className="space-y-10">
      <section className="space-y-6">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            {isJa ? "学歴" : "Education"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {isJa
              ? "大学学位、学業成績（SPI/GPA）、教育機関情報。"
              : "Academic degrees, academic performance scores, and institutions."}
          </p>
        </div>

        <div className="space-y-4">
          {Object.entries(groupedEducation).map(([id, eduGroup]) => (
            <div
              key={id}
              className="border border-border/80 rounded-2xl p-5 sm:p-6 bg-card/80 backdrop-blur-sm card-hover"
            >
              <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-border/60">
                <Avatar className="w-12 h-12 ring-2 ring-primary/20 ring-offset-2 ring-offset-background rounded-xl">
                  <AvatarImage
                    src={eduGroup[0].logo}
                    alt={eduGroup[0].instituteName}
                    className="object-cover object-top rounded-xl"
                  />
                  <AvatarFallback className="text-sm font-semibold rounded-xl bg-primary/10 text-primary">
                    {eduGroup[0].instituteName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display font-semibold text-lg leading-tight text-foreground">
                    {eduGroup[0].instituteName}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                    <GraduationCap className="w-3.5 h-3.5 text-primary" />
                    <span>{isJa ? "学位・教育プログラム" : "Degree & academic programs"}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {eduGroup.map((edu, index) => (
                  <div key={`${edu.id}-${index}`} className="space-y-3">
                    {index > 0 && <div className="h-px bg-border/50 my-3" />}

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary/70 shrink-0" />
                        <h4 className="font-semibold text-base text-foreground">
                          {isJa ? (edu.courseJa ?? edu.course) : edu.course}
                        </h4>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-secondary/80 border border-border/60 px-3 py-1 rounded-full w-fit">
                        <Calendar className="w-3 h-3" />
                        {(() => {
                          const chunks = edu.timeframe.match(/\d{2}-[A-Za-z]+-\d{4}|Present/gi) ?? [];
                          if (chunks.length === 2) {
                            return `${formatPortfolioDate(chunks[0])} — ${formatPortfolioDate(chunks[1])}`;
                          }
                          if (chunks.length === 1) {
                            return formatPortfolioDate(chunks[0]);
                          }
                          return edu.timeframe;
                        })()}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {edu.grades.map((grade, gradeIndex) => (
                        <div
                          key={gradeIndex}
                          className="inline-flex items-center gap-1.5 text-xs bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-lg font-medium"
                        >
                          <span className="text-muted-foreground">{grade.type}:</span>
                          <span className="font-bold text-foreground">{grade.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 pt-4 border-t border-border/60">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            {isJa ? "資格・修了証" : "Certificates & credentials"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {isJa
              ? "AI、クラウド、データベース、プログラミングの修了認定証一覧。"
              : "Verified course credentials in AI, cloud, databases, and software development."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedCert(cert)}
              aria-label={`View certificate for ${cert.name}`}
              className="group border border-border/70 rounded-2xl p-3.5 bg-card/70 backdrop-blur-sm card-hover flex flex-col justify-between cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div>
                <div className="relative mb-3 overflow-hidden rounded-xl bg-muted aspect-[16/10]">
                  <img
                    src={cert.imageUrl}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs text-white font-medium bg-black/60 px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                      <ExternalLink className="w-3 h-3" />
                      {isJa ? "修了証を見る" : "View certificate"}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-semibold text-sm leading-snug line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Award className="w-3.5 h-3.5 text-primary/70" />
                    <span className="truncate">{cert.institute}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-2 border-t border-border/40 flex justify-between items-center text-[11px] text-muted-foreground font-medium">
                <Badge variant="secondary" className="text-[10px] px-2 py-0.5">
                  {isJa ? "認定済" : "Verified"}
                </Badge>
                <span className="group-hover:text-primary transition-colors">
                  {isJa ? "拡大表示 ↗" : "Preview ↗"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedCert && (
        <Dialog open={Boolean(selectedCert)} onOpenChange={(open) => !open && setSelectedCert(null)}>
          <DialogContent aria-describedby={undefined} className="max-w-2xl p-4 bg-card border-border">
            <DialogTitle className="sr-only">{selectedCert.name}</DialogTitle>
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-bold text-lg">{selectedCert.name}</h3>
                  <p className="text-xs text-muted-foreground">{selectedCert.institute}</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-border bg-black/40">
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.name}
                  className="w-full h-auto object-contain max-h-[70vh]"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default EducationTab;
