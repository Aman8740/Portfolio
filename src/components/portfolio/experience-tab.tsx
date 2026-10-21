import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui";
import ReactMarkdown from "react-markdown";
import { formatPortfolioDate } from "@/lib";
import { useLanguage } from "@/hooks";
import { skillCategoryLabelsJa } from "@/data";
import {
  Briefcase,
  Bot,
  Languages,
  Layout,
  Server,
  Code2,
  Database,
  Wrench,
  Library,
  BrainCircuit,
  Sparkles,
} from "lucide-react";
import type { Experience, Skill } from "@/types";

export interface ExperienceTabProps {
  experience: Experience[];
  skills: Skill[];
}

const CATEGORY_META: Record<string, { labelEn: string; labelJa: string; icon: typeof Briefcase }> = {
  "AI Tools": { labelEn: "AI tools", labelJa: skillCategoryLabelsJa["AI Tools"], icon: Bot },
  "Language": { labelEn: "Languages", labelJa: skillCategoryLabelsJa["Language"], icon: Languages },
  "Frontend": { labelEn: "Frontend", labelJa: skillCategoryLabelsJa["Frontend"], icon: Layout },
  "Backend": { labelEn: "Backend", labelJa: skillCategoryLabelsJa["Backend"], icon: Server },
  "Programming Language": { labelEn: "Programming languages", labelJa: skillCategoryLabelsJa["Programming Language"], icon: Code2 },
  "Database": { labelEn: "Databases", labelJa: skillCategoryLabelsJa["Database"], icon: Database },
  "Query Language": { labelEn: "Query languages", labelJa: skillCategoryLabelsJa["Query Language"], icon: Code2 },
  "Tools": { labelEn: "Tools & devops", labelJa: skillCategoryLabelsJa["Tools"], icon: Wrench },
  "Libraries": { labelEn: "Libraries & frameworks", labelJa: skillCategoryLabelsJa["Libraries"], icon: Library },
  "Artificial Intelligence": { labelEn: "Artificial intelligence & ML", labelJa: skillCategoryLabelsJa["Artificial Intelligence"], icon: BrainCircuit },
};

const CATEGORY_ORDER: string[] = [
  "AI Tools",
  "Language",
  "Programming Language",
  "Frontend",
  "Backend",
  "Database",
  "Query Language",
  "Tools",
  "Libraries",
  "Artificial Intelligence",
];

/**
 * Translates skill proficiency levels to Japanese when active.
 * @param level - Standard English skill level string
 * @param isJa - Whether Japanese mode is active
 * @returns Translated or original skill level
 */
function translateSkillLevel(level: string, isJa: boolean): string {
  if (!isJa) {
    return level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();
  }
  switch (level.toLowerCase()) {
    case "native":
      return "ネイティブ";
    case "expert":
      return "エキスパート";
    case "advanced":
      return "上級";
    case "pre-advanced":
      return "準上級 (Pre-Advanced)";
    case "intermediate":
      return "中級";
    case "pre-intermediate":
      return "初中級";
    default:
      return level;
  }
}

/**
 * Returns tailored CSS classes for a skill level badge.
 * @param level - Skill proficiency level string
 * @returns CSS class names for badge styling
 */
function getSkillLevelClass(level: string): string {
  const normalized = level.toLowerCase();
  if (normalized.includes("native") || normalized.includes("expert")) {
    return "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
  }
  if (normalized.includes("pre-advanced")) {
    return "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30";
  }
  if (normalized.includes("advanced")) {
    return "bg-primary/15 text-primary border-primary/30";
  }
  return "bg-secondary text-muted-foreground border-border/60";
}

/**
 * Experience tab rendering career timeline and categorized skills matrix with sentence-case typography.
 * @param experience - List of professional experiences
 * @param skills - Array of categorized skills
 * @returns Rendered Experience tab JSX
 */
export function ExperienceTab({ experience, skills }: ExperienceTabProps) {
  const { language } = useLanguage();
  const isJa = language === "ja";

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const groupedExperience = experience.reduce((acc, exp) => {
    if (!acc[exp.id]) {
      acc[exp.id] = [];
    }
    acc[exp.id].push(exp);
    return acc;
  }, {} as Record<string, Experience[]>);

  const orderedCategories = CATEGORY_ORDER.filter(
    (cat) => skillsByCategory[cat] && skillsByCategory[cat].length > 0
  );

  return (
    <div className="space-y-10">
      <section className="space-y-6">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            {isJa ? "職務経歴" : "Work experience"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {isJa
              ? "製薬DXプラットフォームおよび生成AIシステムの開発・リーダーシップ実績。"
              : "Professional roles and technical leadership in pharma automation and AI systems."}
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/30 space-y-8 ml-3 sm:ml-4">
          {Object.entries(groupedExperience).map(([id, expGroup]) => (
            <div key={id} className="relative space-y-4">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-md">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="border border-border/80 rounded-2xl p-5 sm:p-6 bg-card/80 backdrop-blur-sm card-hover">
                <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-border/60">
                  <Avatar className="w-11 h-11 ring-2 ring-primary/20 ring-offset-2 ring-offset-background rounded-xl">
                    <AvatarImage
                      src={expGroup[0].logo}
                      alt={expGroup[0].companyName}
                      className="object-cover object-top rounded-xl"
                    />
                    <AvatarFallback className="text-sm font-semibold rounded-xl bg-primary/10 text-primary">
                      {expGroup[0].companyName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-semibold text-lg leading-tight text-foreground">
                      {isJa ? "Webosphere Technolabs" : expGroup[0].companyName}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {isJa ? "製薬・ライフサイエンス自動化" : "Pharma & life science automation"}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {expGroup.map((exp, index) => (
                    <div key={`${exp.id}-${index}`} className="space-y-2.5">
                      {index > 0 && <div className="h-px bg-border/50 my-4" />}

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                        <h4 className="font-semibold text-base text-foreground flex items-center gap-2">
                          <span>
                            {isJa ? (exp.positionJa ?? exp.position) : exp.position}
                          </span>
                          {index === 0 && (
                            <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                              {isJa ? "現職" : "Current"}
                            </span>
                          )}
                        </h4>
                        <span className="text-xs text-muted-foreground font-medium bg-secondary/80 border border-border/60 px-3 py-1 rounded-full w-fit">
                          {(() => {
                            const chunks = exp.timeframe.match(/\d{2}-[A-Za-z]+-\d{4}|Present/gi) ?? [];
                            if (chunks.length === 2) {
                              return `${formatPortfolioDate(chunks[0])} — ${formatPortfolioDate(chunks[1])}`;
                            }
                            if (chunks.length === 1) {
                              return formatPortfolioDate(chunks[0]);
                            }
                            return exp.timeframe;
                          })()}
                        </span>
                      </div>

                      <div className="text-sm leading-relaxed prose prose-sm dark:prose-invert max-w-none prose-p:text-muted-foreground prose-strong:text-foreground prose-strong:font-semibold">
                        <ReactMarkdown>
                          {isJa ? (exp.descriptionJa ?? exp.description) : exp.description}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 pt-4 border-t border-border/60">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            {isJa ? "スキル・技術スタック" : "Skills & tech stack"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {isJa
              ? "AI支援ツール、プログラミング言語、フロントエンド・バックエンド、データベース一覧。"
              : "Categorized technical capabilities, AI tooling workflows, and language proficiencies."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {orderedCategories.map((category) => {
            const meta = CATEGORY_META[category] ?? {
              labelEn: category,
              labelJa: category,
              icon: Sparkles,
            };
            const Icon = meta.icon;
            const categorySkills = skillsByCategory[category] ?? [];

            return (
              <div
                key={category}
                className="border border-border/70 rounded-2xl p-4 sm:p-5 bg-card/60 backdrop-blur-sm card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/40">
                    <span className="p-1.5 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h3 className="font-semibold text-sm leading-tight text-foreground">
                      {isJa ? meta.labelJa : meta.labelEn}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {categorySkills.map((skill) => (
                      <div
                        key={skill.id}
                        className={[
                          "inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg border transition-all",
                          getSkillLevelClass(skill.level),
                        ].join(" ")}
                      >
                        <span className="font-semibold">
                          {isJa && skill.name === "Japanese"
                            ? "日本語"
                            : isJa && skill.name === "English"
                            ? "英語"
                            : isJa && skill.name === "Hindi"
                            ? "ヒンディー語"
                            : isJa && skill.name === "Gujarati"
                            ? "グジャラート語"
                            : skill.name}
                        </span>
                        <span className="text-[10px] opacity-75 font-normal">
                          · {translateSkillLevel(skill.level, isJa)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ExperienceTab;