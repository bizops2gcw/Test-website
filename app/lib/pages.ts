import fs from "node:fs";
import path from "node:path";
import type { PageData } from "../section-types";

const PAGES_DIR = path.join(process.cwd(), "app", "_data", "pages");

/** Đọc nội dung 1 trang theo slug ("" = trang chủ -> home.json). */
export function loadPage(slug: string): PageData | null {
  const rel = slug === "" ? "home" : slug;
  const file = path.join(PAGES_DIR, `${rel}.json`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  return JSON.parse(raw) as PageData;
}

/** Liệt kê toàn bộ slug (đệ quy) từ các file JSON — dùng cho sitemap & static params. */
export function getAllSlugs(): string[] {
  const out: string[] = [];
  const walk = (dir: string, prefix: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), `${prefix}${entry.name}/`);
      } else if (entry.name.endsWith(".json")) {
        const name = entry.name.replace(/\.json$/, "");
        const slug = name === "home" ? "" : `${prefix}${name}`;
        out.push(slug);
      }
    }
  };
  walk(PAGES_DIR, "");
  return out;
}
