import { BLOG_PATH } from "@/content.config";
import { slugifyStr } from "./slugify";
import type { SupportedLocale } from "@/config";

/**
 * Get full path of a blog post with locale support
 * @param id - id of the blog post (aka slug)
 * @param filePath - the blog post full file location
 * @param includeBase - whether to include `/posts` in return value
 * @param locale - the locale of the post (en, zh)
 * @returns blog post path
 */
export function getPath(
  id: string,
  filePath: string | undefined,
  includeBase = true,
  locale?: SupportedLocale
) {
  const pathSegments = filePath
    ?.replace(BLOG_PATH, "")
    .split("/")
    .filter(path => path !== "") // remove empty string in the segments ["", "other-path"] <- empty string will be removed
    .filter(path => !path.startsWith("_")) // exclude directories start with underscore "_"
    .filter(path => path !== "en" && path !== "zh") // exclude locale directories
    .slice(0, -1) // remove the last segment_ file name_ since it's unnecessary
    .map(segment => slugifyStr(segment)); // slugify each segment path

  // Extract locale from filePath if not provided
  if (!locale) {
    const pathParts = filePath?.replace(BLOG_PATH, "").split("/").filter(Boolean);
    if (pathParts && (pathParts[0] === "en" || pathParts[0] === "zh")) {
      locale = pathParts[0] as SupportedLocale;
    } else {
      locale = "en"; // default to English
    }
  }

  const basePath = includeBase ? `/${locale}/posts` : `/${locale}`;

  // Making sure `id` does not contain the directory
  const blogId = id.split("/");
  const slug = blogId.length > 0 ? blogId.slice(-1) : blogId;

  // If not inside the sub-dir, simply return the file path
  if (!pathSegments || pathSegments.length < 1) {
    return [basePath, slug].join("/");
  }

  return [basePath, ...pathSegments, slug].join("/");
}

/**
 * Get localized path for navigation
 * @param path - the path without locale prefix
 * @param locale - target locale
 * @returns localized path
 */
export function getLocalizedPath(path: string, locale: SupportedLocale): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // If path is empty or just "/", return locale root
  if (!cleanPath) {
    return `/${locale}`;
  }

  return `/${locale}/${cleanPath}`;
}
