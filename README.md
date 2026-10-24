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

Which PDFs visitors can download is set by `publishedDocuments` in [src/data/portfolio-data.ts](src/data/portfolio-data.ts). Remove an entry to stop publishing that PDF. The published PDFs never contain email, phone, birth date, gender, postal code or address (see below).

You can also print a page directly with **Print / Save as PDF** (paper A4, margins None).

The builders are pure functions in [src/lib/documents.ts](src/lib/documents.ts); the pages are in [src/components/documents/](src/components/documents/).

### Filling in the rirekisho

Cells with no data print blank so they can be handwritten. `motivation` and `requests` live in `rirekishoConfig` in `portfolio-data.ts`.
Age is calculated automatically from the birth date, and the ふりがな is derived from `personalInfo.nameJa`.

### Private details (email, phone, birth date, address)

This repository is public, so these are **not** stored in `portfolio-data.ts`. They live in `src/data/private.local.ts`, which is git-ignored and is never part of the production build:

```ts
import type { PrivateDetails } from '@/types'

export const privateDetails: PrivateDetails = {
  email: "you@example.com",
  phone: "+00 0000000000",
  rirekisho: {
    birthDate: "DD-Mon-YYYY",
    gender: undefined,
    postalCode: "000000",
    address: "...",
    addressJa: "...",
    addressFurigana: "...",
    // optional: contactPostalCode, contactAddress, contactAddressFurigana, contactPhone
  },
}
```

The dev server reads this file, so the preview pages (`#/resume`, `#/rirekisho`) and **Print / Save as PDF** include these details. Use that for the copies you send to employers.

`npm run pdf` builds the **public** PDFs in `public/assets/` with all of these details left out (the personal cells print blank, so they can be filled in by hand). The same applies on a fresh clone or GitHub Actions, where the file does not exist.

## Deployment

Pushing to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds and publishes to GitHub Pages.
