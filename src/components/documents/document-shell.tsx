import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, Printer } from "lucide-react";
import "./documents.css";

const PAPER_WIDTH_PX = (210 / 25.4) * 96;

export interface DocumentShellProps {
  title: string;
  hint: string;
  pageSize?: string;
  toolbar?: ReactNode;
  children: ReactNode;
}

/**
 * Screen chrome around an A4 document: toolbar, fit-to-width preview, and print setup.
 * @param title - Browser tab title while the document is open
 * @param hint - Short instruction shown next to the print button
 * @param pageSize - CSS page size used when printing (default A4)
 * @param toolbar - Extra document-specific controls
 * @param children - The A4 pages
 * @returns Rendered document viewer
 */
export function DocumentShell({ title, hint, pageSize = "A4", toolbar, children }: DocumentShellProps) {
  const [scale, setScale] = useState(1);
  const previousTitle = useRef(document.title);

  useEffect(() => {
    const original = previousTitle.current;
    document.title = title;
    document.documentElement.classList.add("doc-mode");
    return () => {
      document.title = original;
      document.documentElement.classList.remove("doc-mode");
    };
  }, [title]);

  useEffect(() => {
    const fit = () => setScale(Math.min(1, (window.innerWidth - 32) / PAPER_WIDTH_PX));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div className="doc-viewer">
      <style>{`@page { size: ${pageSize}; margin: 0; }`}</style>
      <header className="doc-toolbar">
        <a className="doc-btn doc-btn-ghost" href="#/">
          <ArrowLeft size={16} />
          <span>Portfolio</span>
        </a>
        <div className="doc-toolbar-spacer" />
        {toolbar}
        <span className="doc-hint">{hint}</span>
        <button type="button" className="doc-btn doc-btn-primary" onClick={() => window.print()}>
          <Printer size={16} />
          <span>Print / Save as PDF</span>
        </button>
      </header>
      <main className="doc-stage">
        <div className="doc-zoom" style={{ zoom: scale }}>
          {children}
        </div>
      </main>
    </div>
  );
}
