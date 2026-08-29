import { Moon, Sun, Monitor } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { useTheme, useLanguage } from "@/hooks";

export interface ThemeToggleProps {
  collapsed?: boolean;
}

/**
 * Returns the Lucide icon representing the active theme mode.
 * @param theme - Current theme string identifier
 * @returns JSX Element for the theme icon
 */
function getThemeIcon(theme: string) {
  switch (theme) {
    case "light":
      return <Sun className="w-4 h-4 text-muted-foreground" />;
    case "dark":
      return <Moon className="w-4 h-4 text-muted-foreground" />;
    default:
      return <Monitor className="w-4 h-4 text-muted-foreground" />;
  }
}

/**
 * Theme toggle button allowing users to switch between Light, Dark, and System modes with active language awareness and sentence-case labels.
 * @param collapsed - When true, renders in compact icon-only mode
 * @returns Rendered ThemeToggle element
 */
export function ThemeToggle({ collapsed = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const { language } = useLanguage();

  const getThemeTitle = () => {
    if (language === "ja") {
      switch (theme) {
        case "light":
          return "ライトテーマ";
        case "dark":
          return "ダークテーマ";
        default:
          return "システム設定";
      }
    }
    switch (theme) {
      case "light":
        return "Light theme";
      case "dark":
        return "Dark theme";
      default:
        return "System theme";
    }
  };

  if (collapsed) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="cursor-pointer hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-secondary/60 outline-none flex items-center justify-center"
            title={getThemeTitle()}
            aria-label="Toggle theme"
          >
            {getThemeIcon(theme)}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" side="right">
          <DropdownMenuItem onClick={() => setTheme("light")} className="gap-2">
            <Sun className="w-4 h-4" />
            <span>{language === "ja" ? "ライト" : "Light theme"}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")} className="gap-2">
            <Moon className="w-4 h-4" />
            <span>{language === "ja" ? "ダーク" : "Dark theme"}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")} className="gap-2">
            <Monitor className="w-4 h-4" />
            <span>{language === "ja" ? "システム" : "System theme"}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center justify-between w-full text-xs font-medium text-muted-foreground hover:text-foreground transition-colors py-1 px-1 rounded-lg hover:bg-secondary/40 outline-none cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            {getThemeIcon(theme)}
            <span>{language === "ja" ? "テーマ切替" : "Theme mode"}</span>
          </div>
          <span className="text-[10px] bg-secondary/80 px-2 py-0.5 rounded-md text-muted-foreground">
            {language === "ja"
              ? theme === "light"
                ? "ライト"
                : theme === "dark"
                ? "ダーク"
                : "システム"
              : theme === "light"
              ? "Light theme"
              : theme === "dark"
              ? "Dark theme"
              : "System theme"}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="top" className="w-40">
        <DropdownMenuItem onClick={() => setTheme("light")} className="gap-2 cursor-pointer">
          <Sun className="w-4 h-4" />
          <span>{language === "ja" ? "ライト" : "Light theme"}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="gap-2 cursor-pointer">
          <Moon className="w-4 h-4" />
          <span>{language === "ja" ? "ダーク" : "Dark theme"}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="gap-2 cursor-pointer">
          <Monitor className="w-4 h-4" />
          <span>{language === "ja" ? "システム" : "System theme"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeToggle;