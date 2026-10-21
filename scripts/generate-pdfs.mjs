// Generates the resume and rirekisho PDFs from the portfolio data using a local Chrome or Edge.
// Uses the choices saved in src/data/document-selection.json. Run with: npm run pdf
import { spawn, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Keep these file names in sync with publishedDocuments in src/data/portfolio-data.ts.
const outputs = [
  { route: "resume", file: path.join(root, "public", "assets", "Aman_Shaikh_resume_full_stack.pdf") },
  { route: "rirekisho", file: path.join(root, "public", "assets", "Aman_Shaikh_rirekisho.pdf") },
];

function findBrowser() {
  const candidates = [
    process.env.BROWSER_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  ].filter(Boolean);
  for (const candidate of candidates) if (existsSync(candidate)) return candidate;
  for (const name of ["google-chrome", "chromium", "chromium-browser", "microsoft-edge"]) {
    const found = spawnSync("which", [name], { encoding: "utf8" });
    if (found.status === 0) return found.stdout.trim();
  }
  throw new Error("No Chrome or Edge found. Set BROWSER_PATH to the browser executable.");
}

function printToPdf(browser, url, outFile, profileDir) {
  return new Promise((resolve, reject) => {
    mkdirSync(path.dirname(outFile), { recursive: true });
    rmSync(outFile, { force: true });
    const child = spawn(
      browser,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        `--user-data-dir=${profileDir}`,
        "--virtual-time-budget=20000",
        `--print-to-pdf=${outFile}`,
        url,
      ],
      { stdio: "ignore" },
    );
    child.on("error", reject);
    child.on("exit", () => (existsSync(outFile) ? resolve() : reject(new Error(`No PDF written for ${url}`))));
  });
}

const browser = findBrowser();
const profileDir = mkdtempSync(path.join(tmpdir(), "portfolio-pdf-"));
const server = await createServer({ root, logLevel: "error", server: { host: "127.0.0.1", port: 0 } });

try {
  await server.listen();
  const base = server.resolvedUrls.local[0];
  for (const { route, file } of outputs) {
    await printToPdf(browser, `${base}#/${route}`, file, profileDir);
    console.log(`${route}: ${path.relative(root, file)} (${Math.round(statSync(file).size / 1024)} KB)`);
  }
} finally {
  await server.close();
  rmSync(profileDir, { recursive: true, force: true });
}
