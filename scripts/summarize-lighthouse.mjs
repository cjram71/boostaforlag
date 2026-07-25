import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const directory = path.join(process.cwd(), "lighthouse-results");
const files = (await readdir(directory)).filter((file) => file.endsWith(".report.json"));

if (files.length === 0) {
  throw new Error("No Lighthouse report JSON files were found.");
}

const rows = [];
for (const file of files) {
  const report = JSON.parse(await readFile(path.join(directory, file), "utf8"));
  const pathname = new URL(report.finalUrl).pathname;
  const score = (category) => Math.round((report.categories[category]?.score ?? 0) * 100);
  rows.push({
    pathname,
    performance: score("performance"),
    accessibility: score("accessibility"),
    bestPractices: score("best-practices"),
    seo: score("seo"),
  });
}

rows.sort((a, b) => a.pathname.localeCompare(b.pathname));

const markdown = [
  "### Lighthouse results",
  "",
  "| Page | Performance | Accessibility | Best Practices | SEO |",
  "|---|---:|---:|---:|---:|",
  ...rows.map((row) => `| \`${row.pathname}\` | ${row.performance} | ${row.accessibility} | ${row.bestPractices} | ${row.seo} |`),
  "",
  "Targets: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.",
  "",
].join("\n");

await writeFile("lighthouse-summary.md", markdown);
console.log(markdown);
