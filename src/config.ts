export const SITE = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "Sat Naing",
  profile: "https://satnaing.dev/",
  title: "AstroPaper",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.", // default description
  lang: "en", // default language
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    url: "https://github.com/satnaing/astro-paper/edit/main/",
    text: "Suggest Changes", // default edit text
  },
  dynamicOgImage: true,
  defaultLocale: "en", // default locale
  supportedLocales: ["en", "zh"] as const,
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

// Locale-specific configurations
export const LOCALE_CONFIG = {
  en: {
    lang: "en",
    desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
    editPost: {
      text: "Suggest Changes",
    },
  },
  zh: {
    lang: "zh",
    desc: "一个极简、响应式且SEO友好的Astro博客主题。",
    editPost: {
      text: "建议修改",
    },
  },
} as const;

export type SupportedLocale = typeof SITE.supportedLocales[number];
