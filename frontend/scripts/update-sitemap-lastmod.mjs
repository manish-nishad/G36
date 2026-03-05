import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const sitemapPath = resolve(process.cwd(), "public", "sitemap.xml");
const today = new Date().toISOString().slice(0, 10);

const xml = readFileSync(sitemapPath, "utf8");
const updated = xml.replace(
  /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
  `<lastmod>${today}</lastmod>`,
);

if (updated !== xml) {
  writeFileSync(sitemapPath, updated, "utf8");
  console.log(`Updated sitemap lastmod to ${today}`);
} else {
  console.log("No sitemap lastmod changes needed");
}
