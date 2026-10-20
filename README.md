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

**Visitors only get the finished PDFs** (sidebar download links). The generator pages below exist only in the dev server and are not part of the live site.

Workflow after changing your data:

1. `npm run dev`, then open the sidebar links (**Resume (preview)**, **Rirekisho (preview)**) or go to `#/resume` / `#/rirekisho`. Check the result.
2. Use the toolbar to choose projects (and 西暦/和暦, photo on the rirekisho), then click **Save choices for PDF**. This writes [src/data/document-selection.json](src/data/document-selection.json).
3. `npm run pdf` regenerates both PDFs in `public/assets/` from your data and saved choices (needs Chrome or Edge; set `BROWSER_PATH` if it is not found).
4. Commit and push. The site then offers the new PDFs.

The portfolio always shows every project; only the PDFs use the chosen ones. The rirekisho lists them in Japanese from each project's `sloganJa`.

Which PDFs visitors can download is set by `publishedDocuments` in [src/data/document-data.ts](src/data/document-data.ts). Remove the rirekisho entry to stop publishing it (it contains your date of birth and address).

You can also print a page directly with **Print / Save as PDF** (paper A4, margins None).

The builders are pure functions in [src/lib/documents.ts](src/lib/documents.ts); the pages are in [src/components/documents/](src/components/documents/).

### Filling in the rirekisho

Cells with no data print blank so they can be handwritten. Set these in `rirekishoConfig` to fill them:
`birthDate` (`DD-Mon-YYYY`), `gender`, `postalCode`, `address`, `addressFurigana`, the `contact*` equivalents, and `motivation`.
Age is calculated automatically from `birthDate`, and the ふりがな is derived from `personalInfo.nameJa`.

## Deployment

Pushing to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds and publishes to GitHub Pages.
