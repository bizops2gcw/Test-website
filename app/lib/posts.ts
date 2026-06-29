import fs from "node:fs";
import path from "node:path";
import type { PostData } from "../section-types";

const POSTS_DIR = path.join(process.cwd(), "app", "_data", "posts");

/** Liệt kê toàn bộ bài viết, sắp xếp mới nhất trước. */
export function getAllPosts(): PostData[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".json"));
  const posts = files.map(
    (f) => JSON.parse(fs.readFileSync(path.join(POSTS_DIR, f), "utf-8")) as PostData
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Đọc 1 bài viết theo slug. */
export function loadPost(slug: string): PostData | null {
  const file = path.join(POSTS_DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf-8")) as PostData;
}
