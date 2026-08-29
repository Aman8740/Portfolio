import { Globe } from "lucide-react";
import { useLanguage } from "@/hooks";

export interface LanguageToggleProps {
  compact?: boolean;
}

/**
 * Global language toggle button for switching between English and Japanese across the portfolio.
 * @param compact - When true, renders in minimal icon + badge format
 * @returns Rendered LanguageToggle element
 */
export function LanguageToggle({ compact = false }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  if (compact) {
    return (
      <button
        type="button"
        onClick={() => setLanguage(language === "en" ? "ja" : "en")}
        title={language === "en" ? "日本語に切り替え" : "Switch to English"}
        aria-label="Toggle language"
        className="p-1.5 rounded-lg hover:bg-secondary/70 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-xs font-semibold cursor-pointer"
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{language === "en" ? "JA" : "EN"}</span>
      </button>
    );
  }

  return (
    <div className="flex items-center p-0.5 bg-secondary/70 dark:bg-secondary/50 border border-border rounded-xl">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={[
          "px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer",
          language === "en"
            ? "bg-background text-foreground shadow-xs font-semibold"
            : "text-muted-foreground hover:text-foreground",
        ].join(" ")}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => setLanguage("ja")}
        className={[
          "px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer",
          language === "ja"
            ? "bg-background text-foreground shadow-xs font-semibold text-primary"
            : "text-muted-foreground hover:text-foreground",
        ].join(" ")}
      >
        日本語
      </button>
    </div>
  );
}

export default LanguageToggle;
