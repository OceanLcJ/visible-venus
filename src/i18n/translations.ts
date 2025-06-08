export const translations = {
  en: {
    // Navigation
    "nav.posts": "Posts",
    "nav.tags": "Tags",
    "nav.about": "About",
    "nav.archives": "Archives",
    "nav.search": "Search",
    "nav.skip_to_content": "Skip to content",
    "nav.open_menu": "Open Menu",
    "nav.close_menu": "Close Menu",
    
    // Theme
    "theme.toggle": "Toggles light & dark",
    "theme.auto": "auto",
    
    // Language
    "lang.switch_to_chinese": "切换到中文",
    "lang.switch_to_english": "Switch to English",
    "lang.current_language": "English",
    
    // Home page
    "home.featured": "Featured",
    "home.recent_posts": "Recent Posts",
    "home.all_posts": "All Posts",
    
    // Posts page
    "posts.title": "Posts",
    "posts.description": "All the articles I've posted.",
    
    // Tags page
    "tags.title": "Tags",
    "tags.description": "All the tags used in posts.",
    "tags.tag_prefix": "Tag:",
    "tags.articles_with_tag": "All the articles with the tag",
    
    // Search page
    "search.title": "Search",
    "search.description": "Search any article ...",
    
    // About page
    "about.title": "About",
    
    // Archives page
    "archives.title": "Archives",
    
    // Post details
    "post.back_to_top": "Back To Top",
    "post.suggest_changes": "Suggest Changes",
    "post.table_of_contents": "Table of contents",
    "post.published": "Published",
    "post.updated": "Updated",
    "post.reading_time": "min read",
    
    // Pagination
    "pagination.prev": "Prev",
    "pagination.next": "Next",
    
    // Footer
    "footer.copyright": "Copyright",
    "footer.all_rights_reserved": "All rights reserved.",
    
    // Common
    "common.loading": "Loading...",
    "common.no_posts": "No posts found.",
    "common.draft": "Draft",
    
    // Meta
    "meta.site_description": "A minimal, responsive and SEO-friendly Astro blog theme.",
  },
  zh: {
    // Navigation
    "nav.posts": "文章",
    "nav.tags": "标签",
    "nav.about": "关于",
    "nav.archives": "归档",
    "nav.search": "搜索",
    "nav.skip_to_content": "跳转到内容",
    "nav.open_menu": "打开菜单",
    "nav.close_menu": "关闭菜单",
    
    // Theme
    "theme.toggle": "切换明暗主题",
    "theme.auto": "自动",
    
    // Language
    "lang.switch_to_chinese": "切换到中文",
    "lang.switch_to_english": "Switch to English",
    "lang.current_language": "中文",
    
    // Home page
    "home.featured": "精选文章",
    "home.recent_posts": "最新文章",
    "home.all_posts": "所有文章",
    
    // Posts page
    "posts.title": "文章",
    "posts.description": "我发布的所有文章。",
    
    // Tags page
    "tags.title": "标签",
    "tags.description": "文章中使用的所有标签。",
    "tags.tag_prefix": "标签：",
    "tags.articles_with_tag": "所有带有标签的文章",
    
    // Search page
    "search.title": "搜索",
    "search.description": "搜索任何文章...",
    
    // About page
    "about.title": "关于",
    
    // Archives page
    "archives.title": "归档",
    
    // Post details
    "post.back_to_top": "回到顶部",
    "post.suggest_changes": "建议修改",
    "post.table_of_contents": "目录",
    "post.published": "发布于",
    "post.updated": "更新于",
    "post.reading_time": "分钟阅读",
    
    // Pagination
    "pagination.prev": "上一页",
    "pagination.next": "下一页",
    
    // Footer
    "footer.copyright": "版权所有",
    "footer.all_rights_reserved": "保留所有权利。",
    
    // Common
    "common.loading": "加载中...",
    "common.no_posts": "未找到文章。",
    "common.draft": "草稿",
    
    // Meta
    "meta.site_description": "一个极简、响应式且SEO友好的Astro博客主题。",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
export type Locale = keyof typeof translations;
