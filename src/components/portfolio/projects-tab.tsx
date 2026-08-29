import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import ReactMarkdown from "react-markdown";
import {
  ExternalLink,
  X,
  ChevronRight,
  Sparkles,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

import { Avatar, AvatarImage, AvatarFallback, Badge } from "@/components/ui";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/hooks";
import type { Project, Experience, Skill } from "@/types";

export interface ProjectsTabProps {
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  personalPhoto: string;
}

const MEDIA_TITLES: Record<string, { en: string; ja: string }> = {
  "assets/autopilotChat.png": {
    en: "Task chat & specification",
    ja: "タスク入力・チャット対話",
  },
  "assets/autopilot-runs.png": {
    en: "Multi-run execution dashboard",
    ja: "並行実行ダッシュボード",
  },
  "assets/autopilot-run.png": {
    en: "Automated run & trace logs",
    ja: "個別ラン実行トレース・検証",
  },
  "assets/autopilot-Kb-draft.png": {
    en: "Knowledge-base draft review",
    ja: "ナレッジベース下書き記事",
  },
  "assets/renshuu-mcp-lockup.svg": {
    en: "Renshuu MCP logo lockup",
    ja: "Renshuu MCP ブランドロゴ",
  },
  "assets/renshuu-mcp-icon.svg": {
    en: "Renshuu MCP icon mark",
    ja: "Renshuu MCP アイコンマーク",
  },
};

interface ZoomableImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

/**
 * Interactive zoomable image modal supporting mouse wheel zooming, click-and-drag panning, and zoom controls.
 * @param src - Image source URL
 * @param alt - Image alternative description
 * @param onClose - Callback when modal is dismissed
 * @returns Rendered ZoomableImageModal element
 */
function ZoomableImageModal({ src, alt, onClose }: ZoomableImageModalProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 3.5));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return next;
    });
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleDoubleClick = () => {
    if (scale > 1) {
      handleReset();
    } else {
      setScale(2);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.25 : -0.25;
      setScale((prev) => {
        const next = Math.min(Math.max(prev + delta, 1), 3.5);
        if (next === 1) {
          setPosition({ x: 0, y: 0 });
        }
        return next;
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl p-0 bg-background/95 border-border overflow-hidden rounded-2xl shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/80 bg-card/80 backdrop-blur-sm z-20">
          <DialogTitle className="text-sm font-semibold truncate text-foreground pr-4">
            {alt}
          </DialogTitle>

          <div className="flex items-center gap-1.5 shrink-0">
            <div className="flex items-center gap-1 bg-secondary/80 rounded-lg p-1 border border-border/60">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={scale <= 1}
                title="Zoom out"
                aria-label="Zoom out"
                className="p-1 rounded hover:bg-background text-muted-foreground hover:text-foreground disabled:opacity-40 transition-colors cursor-pointer"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-medium px-1.5 min-w-[3.2rem] text-center text-foreground select-none">
                {Math.round(scale * 100)}%
              </span>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={scale >= 3.5}
                title="Zoom in"
                aria-label="Zoom in"
                className="p-1 rounded hover:bg-background text-muted-foreground hover:text-foreground disabled:opacity-40 transition-colors cursor-pointer"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              {scale > 1 && (
                <button
                  type="button"
                  onClick={handleReset}
                  title="Reset zoom"
                  aria-label="Reset zoom"
                  className="p-1 rounded hover:bg-background text-muted-foreground hover:text-foreground transition-colors cursor-pointer border-l border-border/60 ml-0.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onDoubleClick={handleDoubleClick}
          className={[
            "relative w-full h-[75vh] max-h-[800px] overflow-hidden bg-black/80 flex items-center justify-center select-none",
            scale > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in",
          ].join(" ")}
        >
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transition: isDragging ? "none" : "transform 0.15s ease-out",
            }}
            className="origin-center max-w-full max-h-full flex items-center justify-center"
          >
            <img
              src={src}
              alt={alt}
              draggable={false}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-xl pointer-events-none"
            />
          </div>

          <div className="absolute bottom-3 left-4 pointer-events-none bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-white/80 border border-white/10">
            Scroll or double-click to zoom · Drag to pan
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Projects tab rendering a responsive Bento card grid and portaled slide-over drawer with sentence-case typography.
 * @param projects - List of projects to display
 * @param experience - Experience data used to resolve company info
 * @param skills - Skill definitions used to display project skill badges
 * @param personalPhoto - Fallback photo for personal projects
 * @returns Rendered Projects tab JSX
 */
export function ProjectsTab({ projects, experience, skills, personalPhoto }: ProjectsTabProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { language } = useLanguage();

  const experienceMap = experience.reduce(
    (acc, exp) => {
      acc[exp.id] = exp;
      return acc;
    },
    {} as Record<string, Experience>
  );

  const skillsMap = skills.reduce(
    (acc, skill) => {
      acc[skill.id] = skill;
      return acc;
    },
    {} as Record<string, Skill>
  );

  const getCompanyInfo = (madeAt: number) => {
    if (madeAt === 0) {
      return {
        name: language === "ja" ? "個人開発" : "Personal",
        logo: personalPhoto,
      };
    }
    const company = experienceMap[madeAt.toString()];
    return company
      ? {
          name: language === "ja" ? "Webosphere社" : company.companyName,
          logo: company.logo,
        }
      : {
          name: language === "ja" ? "その他" : "Unknown",
          logo: personalPhoto,
        };
  };

  const getSkillsByIds = (skillIds: string[]) =>
    skillIds.map((id) => skillsMap[id]).filter(Boolean);

  const openDrawer = (project: Project) => {
    setSelectedProject(project);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (previewImage) {
          setPreviewImage(null);
        } else {
          closeDrawer();
        }
      }
    };
    if (drawerOpen) {
      document.addEventListener("keydown", handler);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [drawerOpen, previewImage]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
          {language === "ja" ? "主要プロジェクト" : "Featured projects"}
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          {language === "ja"
            ? "製薬DX、AIデリバリー、自動テスト基盤などの開発実績。"
            : "Production systems, AI workflows, and developer infrastructure."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => {
          const companyInfo = getCompanyInfo(project.madeAt);
          const projectSkills = getSkillsByIds(project.skills ?? []);
          const isPersonal = project.madeAt === 0;
          const currentSlogan = (language === "ja" && project.sloganJa) ? project.sloganJa : project.slogan;

          return (
            <article
              key={project.id + "-" + i}
              onClick={() => openDrawer(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openDrawer(project)}
              aria-label={`View details for ${project.name}`}
              className="group relative flex flex-col border border-border/80 rounded-2xl p-5 bg-card/80 backdrop-blur-sm cursor-pointer card-hover outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative shrink-0">
                  {project.logoComponent ? (
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary/80 border border-border/50">
                      <project.logoComponent size={30} />
                    </div>
                  ) : (
                    <Avatar className="w-12 h-12 rounded-xl">
                      <AvatarImage
                        src={project.logo}
                        alt={project.name}
                        className="object-cover object-top rounded-xl"
                      />
                      <AvatarFallback className="rounded-xl text-sm font-semibold bg-primary/10 text-primary">
                        {project.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-base leading-snug text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                    {currentSlogan}
                  </p>
                </div>

                <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Avatar className="w-5 h-5">
                  <AvatarImage
                    src={companyInfo.logo}
                    alt={companyInfo.name}
                    className="object-cover object-top"
                  />
                  <AvatarFallback className="text-[9px] font-bold">
                    {companyInfo.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span
                  className={[
                    "text-xs font-medium px-2 py-0.5 rounded-full",
                    isPersonal
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "bg-primary/10 text-primary",
                  ].join(" ")}
                >
                  {companyInfo.name}
                </span>
              </div>

              {projectSkills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-border/40">
                  {projectSkills.slice(0, 4).map((skill) => (
                    <span
                      key={skill.id}
                      className="text-[11px] bg-secondary/80 text-muted-foreground px-2 py-0.5 rounded-md font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                  {projectSkills.length > 4 && (
                    <span className="text-[11px] text-muted-foreground/60 px-1 py-0.5 font-medium">
                      +{projectSkills.length - 4} more
                    </span>
                  )}
                </div>
              )}

              {project.projectUrl && (
                <div className="absolute top-4 right-10">
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                </div>
              )}
            </article>
          );
        })}
      </div>

      {drawerOpen && selectedProject && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-50 flex justify-end"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeDrawer();
            }
          }}
        >
          <div
            className="fixed inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-[5px] animate-fade-in"
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.name}
            className="relative w-full max-w-2xl h-full bg-card border-l border-border shadow-2xl flex flex-col z-10 animate-slide-in-right"
          >
            <div className="flex items-start justify-between p-6 border-b border-border shrink-0 bg-card/95 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                {selectedProject.logoComponent ? (
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary/80 border border-border/50">
                    <selectedProject.logoComponent size={30} />
                  </div>
                ) : (
                  <Avatar className="w-12 h-12 rounded-xl">
                    <AvatarImage
                      src={selectedProject.logo}
                      alt={selectedProject.name}
                      className="object-cover object-top rounded-xl"
                    />
                    <AvatarFallback className="rounded-xl text-sm font-semibold bg-primary/10 text-primary">
                      {selectedProject.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div>
                  <h2 className="font-display font-bold text-xl tracking-tight text-foreground">
                    {selectedProject.name}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {language === "ja" && selectedProject.sloganJa ? selectedProject.sloganJa : selectedProject.slogan}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeDrawer}
                aria-label="Close project details"
                className="p-1.5 rounded-lg hover:bg-secondary/70 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-6">
                {selectedProject.projectUrl && (
                  <div className="flex items-center gap-3">
                    <a
                      href={selectedProject.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{language === "ja" ? "GitHubリポジトリを見る" : "View GitHub repository"}</span>
                    </a>
                  </div>
                )}

                <div className="prose prose-sm dark:prose-invert max-w-none
                  prose-headings:font-display prose-headings:tracking-tight
                  prose-h2:text-base prose-h2:font-semibold prose-h2:mt-5 prose-h2:mb-2
                  prose-h3:text-sm prose-h3:font-semibold prose-h3:mt-4 prose-h3:mb-1.5
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-li:text-muted-foreground prose-li:leading-relaxed
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-ul:my-2 prose-li:my-0.5
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                  <ReactMarkdown>
                    {language === "ja" && selectedProject.descriptionJa
                      ? selectedProject.descriptionJa
                      : selectedProject.description}
                  </ReactMarkdown>
                </div>

                {selectedProject.media && selectedProject.media.length > 0 && (
                  <div className="space-y-3 pt-2 border-t border-border/40">
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      <span>{language === "ja" ? "画面キャプチャ" : "Screenshots"}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {selectedProject.media.map((url, idx) => {
                        const meta = MEDIA_TITLES[url];
                        const title = meta
                          ? language === "ja"
                            ? meta.ja
                            : meta.en
                          : `${selectedProject.name} #${idx + 1}`;

                        return (
                          <div
                            key={idx}
                            onClick={() => setPreviewImage({ src: url, alt: title })}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && setPreviewImage({ src: url, alt: title })}
                            className="group relative border border-border/80 rounded-xl overflow-hidden bg-card/60 cursor-pointer card-hover"
                          >
                            <div className="aspect-video relative overflow-hidden bg-muted">
                              <img
                                src={url}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-xs text-white font-medium bg-black/70 px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                                  <ZoomIn className="w-3.5 h-3.5" />
                                  <span>{language === "ja" ? "拡大表示" : "Enlarge image"}</span>
                                </span>
                              </div>
                            </div>
                            <div className="p-2.5 bg-card/90 border-t border-border/50">
                              <p className="text-xs font-medium text-foreground truncate">
                                {title}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {getSkillsByIds(selectedProject.skills ?? []).length > 0 && (
                  <div className="space-y-3 pt-2 border-t border-border/40">
                    <h3 className="text-xs font-semibold text-foreground">
                      {language === "ja" ? "使用技術・ツール" : "Technical capabilities & tooling"}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {getSkillsByIds(selectedProject.skills ?? []).map((skill) => (
                        <Badge key={skill.id} variant="secondary" className="text-xs rounded-lg py-1 px-2.5">
                          <span className="font-semibold">{skill.name}</span>
                          <span className="ml-1.5 text-muted-foreground/70 font-normal">
                            · {skill.level.charAt(0).toUpperCase() + skill.level.slice(1).toLowerCase()}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {previewImage && (
        <ZoomableImageModal
          src={previewImage.src}
          alt={previewImage.alt}
          onClose={() => setPreviewImage(null)}
        />
      )}
    </div>
  );
}

export default ProjectsTab;
