# Portfolio

Personal portfolio for Aman Shaikh: React 19, TypeScript, Vite, Tailwind CSS and Radix UI, deployed to GitHub Pages.
The same data also generates an English **resume** and a Japanese **rirekisho (履歴書)**.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server (http://localhost:5173/Portfolio/) |
| `npm run build` | Type-check and build to `dist/` |
| `npm run lint` | Run ESLint |
| `npm run preview` | Serve the production build |

Set `VITE_MODE=private` in `.env` to show the private Interviews tab.

## One source of truth

Edit the data once; the portfolio, resume and rirekisho all update.

| File | Holds |
| --- | --- |
| [src/data/portfolio-data.ts](src/data/portfolio-data.ts) | Personal info, education, certificates, experience, skills, projects |
| [src/data/document-data.ts](src/data/document-data.ts) | Resume-only text (profile, skill grouping) and rirekisho-only fields (birth date, address, motivation) |

Document-specific details live next to the data they describe:

- `Experience.resumeBullets` and `Project.resume` (headline, bullets, tech skill ids) feed the resume.
- `Certificate.completedOn`, `shortName` and `url` feed both documents.
- `Education.expectedEnd` is used while a course is still ongoing.

## Resume and rirekisho

Open the app and use the sidebar links, or go directly to:

- `#/resume`: single-page A4 resume (layout matches the original PDF)
- `#/rirekisho`: two-page 履歴書 on the MHLW (厚生労働省) standard A4 form. Add `?era=wareki` for 和暦 dates or `?photo=0` for an empty photo box.

Click **Print / Save as PDF**, choose paper **A4** and margins **None**.

The builders are pure functions in [src/lib/documents.ts](src/lib/documents.ts); the pages are in [src/components/documents/](src/components/documents/).

### Filling in the rirekisho

Cells with no data print blank so they can be handwritten. Set these in `rirekishoConfig` to fill them:
`birthDate` (`DD-Mon-YYYY`), `gender`, `postalCode`, `address`, `addressFurigana`, the `contact*` equivalents, and `motivation`.
Age is calculated automatically from `birthDate`, and the ふりがな is derived from `personalInfo.nameJa`.

## Deployment

Pushing to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds and publishes to GitHub Pages.
