import type { Project } from "@/types";

export interface ProjectPickerProps {
  projects: Project[];
  selected: string[];
  onChange: (ids: string[]) => void;
  onReset: () => void;
}

/**
 * Dropdown of checkboxes choosing which projects appear in the document.
 * @param projects - All portfolio projects
 * @param selected - Ids currently included
 * @param onChange - Called with the new selection
 * @param onReset - Restores the configured default selection
 * @returns Rendered picker
 */
export function ProjectPicker({ projects, selected, onChange, onReset }: ProjectPickerProps) {
  const count = projects.filter((p) => selected.includes(p.id)).length;

  const toggle = (id: string) => {
    onChange(selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id]);
  };

  return (
    <details className="doc-picker">
      <summary className="doc-btn">
        Projects ({count}/{projects.length})
      </summary>
      <div className="doc-picker-menu">
        {projects.map((p) => (
          <label key={p.id} className="doc-picker-item">
            <input type="checkbox" checked={selected.includes(p.id)} onChange={() => toggle(p.id)} />
            <span>{p.name}</span>
          </label>
        ))}
        <button type="button" className="doc-btn doc-picker-reset" onClick={onReset}>
          Reset to default
        </button>
      </div>
    </details>
  );
}
