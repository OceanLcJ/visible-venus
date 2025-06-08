---
title: 如何配置AstroPaper主题
author: Sat Naing
pubDatetime: 2024-01-02T00:00:00Z
featured: false
draft: false
tags:
  - 配置
  - 教程
  - astro
description: 学习如何配置和自定义AstroPaper主题以满足你的需求。
---

本文将指导你如何配置AstroPaper主题，让它完全符合你的需求。

## 基本配置

AstroPaper的主要配置文件位于`src/config.ts`。这里包含了网站的基本信息：

```typescript
export const SITE = {
  website: "https://your-domain.com/",
  author: "你的名字",
  title: "你的博客标题",
  desc: "你的博客描述",
  // ... 其他配置
};
```

## 重要配置项

### 网站信息
- `website`: 你的网站域名
- `author`: 作者名称
- `title`: 网站标题
- `desc`: 网站描述

### 功能开关
- `lightAndDarkMode`: 是否启用明暗主题切换
- `showArchives`: 是否显示归档页面
- `showBackButton`: 是否显示返回按钮

### 文章设置
- `postPerIndex`: 首页显示的文章数量
- `postPerPage`: 每页显示的文章数量

## 自定义样式

AstroPaper使用TailwindCSS进行样式管理。你可以在以下文件中自定义样式：

- `src/styles/global.css` - 全局样式
- `src/styles/typography.css` - 排版样式

## 社交媒体链接

在`src/components/Socials.astro`中配置你的社交媒体链接：

```astro
// 添加你的社交媒体账号
const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourusername" },
  { name: "Twitter", url: "https://twitter.com/yourusername" },
  // 添加更多链接...
];
```

## SEO优化

AstroPaper内置了SEO优化功能：

1. **元标签**: 自动生成适当的meta标签
2. **Open Graph**: 支持社交媒体分享预览
3. **站点地图**: 自动生成sitemap.xml
4. **RSS订阅**: 自动生成RSS feed

## 部署配置

在部署前，确保更新以下配置：

1. 在`src/config.ts`中设置正确的`website`URL
2. 配置适当的环境变量
3. 更新`astro.config.ts`中的site配置

## 总结

通过这些配置，你可以完全自定义AstroPaper主题。记住在修改配置后重启开发服务器以查看更改效果。

更多高级配置选项，请参考官方文档。
