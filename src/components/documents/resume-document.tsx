import { Globe, Phone } from "lucide-react";
import type { ResumeModel } from "@/lib";

const GITHUB_PATH =
  "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12";
const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";
const MAIL_PATH =
  "M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v.4l-10 6.2L2 5.9v-.4Zm0 3.1 9.5 5.9a1 1 0 0 0 1 0L22 8.6v9.9a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5V8.6Z";

function SolidIcon({ path }: { path: string }) {
  return (
    <svg className="rs-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

export interface ResumeDocumentProps {
  model: ResumeModel;
}

/**
 * Single-page A4 resume rendered from the portfolio data.
 * @param model - Resume content built by buildResumeModel
 * @returns Rendered resume page
 */
export function ResumeDocument({ model }: ResumeDocumentProps) {
  const { contact } = model;
  const phoneHref = `tel:${contact.phone.replace(/[^+\d]/g, "")}`;

  return (
    <article className="resume-paper">
      <header className="rs-head">
        <h1 className="rs-name">{model.name}</h1>
        <p className="rs-title">{model.title}</p>
      </header>

      <div className="rs-body">
        <aside className="rs-side">
          <section className="rs-section">
            <h2 className="rs-h2">Contact</h2>
            <ul className="rs-contact">
              <li>
                <Phone className="rs-icon" fill="currentColor" />
                <a href={phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <SolidIcon path={MAIL_PATH} />
                <a href={`mailto:${contact.email}`}>Mail</a>
              </li>
              <li>
                <Globe className="rs-icon" strokeWidth={2.4} />
                <a href={contact.portfolioUrl}>Portfolio</a>
              </li>
              <li>
                <SolidIcon path={LINKEDIN_PATH} />
                <a href={contact.linkedin}>LinkedIn</a>
              </li>
              <li>
                <SolidIcon path={GITHUB_PATH} />
                <a href={contact.github}>GitHub</a>
              </li>
            </ul>
          </section>

          <section className="rs-section rs-section-languages">
            <h2 className="rs-h2">Languages</h2>
            <ul className="rs-bullets">
              {model.languages.map((l) => (
                <li key={l.name}>
                  {l.name}
                  {l.note && <span className="rs-note"> ({l.note})</span>}
                </li>
              ))}
            </ul>
          </section>

          <section className="rs-section rs-section-skills">
            <h2 className="rs-h2">Skills</h2>
            <ul className="rs-bullets rs-bullets-skills">
              {model.skills.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <section className="rs-section">
            <h2 className="rs-h2">Certifications</h2>
            <ul className="rs-certs">
              {model.certifications.map((c) => (
                <li key={c.name}>
                  {c.url ? <a href={c.url}>{c.name}</a> : <span>{c.name}</span>}
                  <span className="rs-cert-issuer">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </section>
        </aside>

        <div className="rs-main">
          <section className="rs-section">
            <h2 className="rs-h2">Profile</h2>
            <p className="rs-profile">{model.profile}</p>
          </section>

          <section className="rs-section rs-section-education">
            <h2 className="rs-h2">Education</h2>
            {model.education.map((e, i) => (
              <div className="rs-entry rs-edu" key={`${e.institution}-${i}`}>
                <div className="rs-entry-head">
                  <span className="rs-entry-name">{e.institution}</span>
                  <span className="rs-entry-period">{e.period}</span>
                </div>
                <div className="rs-edu-course">{e.course}</div>
              </div>
            ))}
          </section>

          <section className="rs-section rs-section-work">
            <h2 className="rs-h2">Work Experience</h2>
            {model.experience.map((x, i) => (
              <div className="rs-entry rs-work" key={`${x.company}-${i}`}>
                <div className="rs-entry-head">
                  <span className="rs-entry-name">{x.company}</span>
                  <span className="rs-entry-period">{x.period}</span>
                </div>
                <div className="rs-role">{x.position}</div>
                <ul className="rs-points">
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="rs-section">
            <h2 className="rs-h2">Projects</h2>
            {model.projects.map((p) => (
              <div className="rs-project" key={p.name}>
                <div className="rs-project-head">
                  <span className="rs-entry-name">{p.name}</span>
                  <span className="rs-project-headline"> — {p.headline}</span>
                </div>
                <ul className="rs-points rs-points-project">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="rs-tech">
                  <strong>Tech:</strong> {p.tech.join(", ")}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </article>
  );
}
