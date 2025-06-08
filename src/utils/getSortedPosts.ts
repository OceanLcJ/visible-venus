import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";
import type { SupportedLocale } from "@/config";

const getSortedPosts = (posts: CollectionEntry<"blog" | "blog-en" | "blog-zh">[]) => {
  return posts
    .filter(postFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

/**
 * Get sorted posts filtered by locale
 * @param posts - Array of blog posts
 * @param locale - Target locale to filter by
 * @returns Sorted and filtered posts
 */
export const getSortedPostsByLocale = (
  posts: CollectionEntry<"blog-en" | "blog-zh">[],
  locale?: SupportedLocale
) => {
  let filteredPosts = posts.filter(postFilter);

  // Filter by locale if specified
  if (locale) {
    filteredPosts = filteredPosts.filter(post =>
      post.data.locale === locale
    );
  }

  return filteredPosts.sort(
    (a, b) =>
      Math.floor(
        new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
      ) -
      Math.floor(
        new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
      )
  );
};

export default getSortedPosts;
