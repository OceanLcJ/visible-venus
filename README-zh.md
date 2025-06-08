# AstroPaper 📄

![AstroPaper](public/astropaper-og.jpg)
[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/community/file/1356898632249991861)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub](https://img.shields.io/github/license/satnaing/astro-paper?color=%232F3741&style=for-the-badge)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white&style=for-the-badge)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge)](http://commitizen.github.io/cz-cli/)

AstroPaper 是一个极简、响应式、无障碍且SEO友好的Astro博客主题。这个主题是基于[我的个人博客](https://satnaing.dev/blog)设计和制作的。

阅读[博客文章](https://astro-paper.pages.dev/posts/)或查看[README文档部分](#-文档)获取更多信息。

## 🔥 特性

- [x] 类型安全的markdown
- [x] 超快的性能
- [x] 无障碍访问（键盘/VoiceOver）
- [x] 响应式设计（移动端～桌面端）
- [x] SEO友好
- [x] 明亮和暗黑模式
- [x] 模糊搜索
- [x] 草稿文章和分页
- [x] 站点地图和RSS订阅
- [x] 遵循最佳实践
- [x] 高度可定制
- [x] 博客文章的动态OG图片生成 [#15](https://github.com/satnaing/astro-paper/pull/15) ([博客文章](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/))

_注意：我已经在Mac上使用**VoiceOver**和Android上使用**TalkBack**测试了AstroPaper的屏幕阅读器无障碍性。我无法测试所有其他屏幕阅读器。但是，AstroPaper中的无障碍增强功能在其他设备上也应该能正常工作。_

## ✅ Lighthouse评分

<p align="center">
  <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fastro-paper.pages.dev%2F&form_factor=desktop">
    <img width="710" alt="AstroPaper Lighthouse Score" src="AstroPaper-lighthouse-score.svg">
  <a>
</p>

## 🚀 项目结构

在AstroPaper中，你会看到以下文件夹和文件：

```bash
/
├── public/
│   ├── assets/
|   ├── pagefind/ # 构建时自动生成
│   └── favicon.svg
│   └── astropaper-og.jpg
│   └── favicon.svg
│   └── toggle-theme.js
├── src/
│   ├── assets/
│   │   └── icons/
│   │   └── images/
│   ├── components/
│   ├── data/
│   │   └── blog/
│   │       └── some-blog-posts.md
│   ├── layouts/
│   └── pages/
│   └── styles/
│   └── utils/
│   └── config.ts
│   └── constants.ts
│   └── content.config.ts
└── astro.config.ts
```

Astro会在`src/pages/`目录中查找`.astro`或`.md`文件。每个页面都会根据其文件名作为路由暴露。

任何静态资源，如图片，都可以放在`public/`目录中。

所有博客文章都存储在`src/data/blog`目录中。

## 📖 文档

文档可以用两种格式阅读：_markdown_ 和 _博客文章_。

- 配置 - [markdown](src/data/blog/how-to-configure-astropaper-theme.md) | [博客文章](https://astro-paper.pages.dev/posts/how-to-configure-astropaper-theme/)
- 添加文章 - [markdown](src/data/blog/adding-new-post.md) | [博客文章](https://astro-paper.pages.dev/posts/adding-new-posts-in-astropaper-theme/)
- 自定义配色方案 - [markdown](src/data/blog/customizing-astropaper-theme-color-schemes.md) | [博客文章](https://astro-paper.pages.dev/posts/customizing-astropaper-theme-color-schemes/)
- 预定义配色方案 - [markdown](src/data/blog/predefined-color-schemes.md) | [博客文章](https://astro-paper.pages.dev/posts/predefined-color-schemes/)

## 💻 技术栈

**主框架** - [Astro](https://astro.build/)  
**类型检查** - [TypeScript](https://www.typescriptlang.org/)  
**样式** - [TailwindCSS](https://tailwindcss.com/)  
**UI/UX** - [Figma设计文件](https://www.figma.com/community/file/1356898632249991861)  
**静态搜索** - [FuseJS](https://pagefind.app/)  
**图标** - [Tablers](https://tabler-icons.io/)  
**代码格式化** - [Prettier](https://prettier.io/)  
**部署** - [Cloudflare Pages](https://pages.cloudflare.com/)  
**关于页面插图** - [https://freesvgillustration.com](https://freesvgillustration.com/)  
**代码检查** - [ESLint](https://eslint.org)

## 👨🏻‍💻 本地运行

你可以通过在所需目录中运行以下命令来开始在本地使用此项目：

```bash
# pnpm
pnpm create astro@latest --template satnaing/astro-paper

# npm
npm create astro@latest -- --template satnaing/astro-paper

# yarn
yarn create astro --template satnaing/astro-paper
```

然后通过运行以下命令启动项目：

```bash
# 如果你在上一步中还没有安装依赖项，请安装依赖项
pnpm install

# 开始运行项目
pnpm run dev
```

作为替代方法，如果你安装了Docker，可以使用Docker在本地运行此项目。方法如下：

```bash
# 构建Docker镜像
docker build -t astropaper .

# 运行Docker容器
docker run -p 4321:80 astropaper
```

## Google站点验证（可选）

你可以使用环境变量轻松地在AstroPaper中添加你的[Google站点验证HTML标签](https://support.google.com/webmasters/answer/9008080#meta_tag_verification&zippy=%2Chtml-tag)。这一步是可选的。如果你不添加以下环境变量，google-site-verification标签将不会出现在HTML的`<head>`部分。

```bash
# 在你的环境变量文件(.env)中
PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-site-verification-value
```

> 查看[此讨论](https://github.com/satnaing/astro-paper/discussions/334#discussioncomment-10139247)了解如何将AstroPaper添加到Google Search Console。

## 🧞 命令

所有命令都从项目根目录的终端运行：

> **_注意！_** 对于`Docker`命令，我们必须在你的机器上[安装](https://docs.docker.com/engine/install/)它。

| 命令                                 | 操作                                                                                                                           |
| :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`                       | 安装依赖项                                                                                                            |
| `pnpm run dev`                       | 在`localhost:4321`启动本地开发服务器                                                                                      |
| `pnpm run build`                     | 将生产站点构建到`./dist/`                                                                                          |
| `pnpm run preview`                   | 在部署前本地预览你的构建                                                                                     |
| `pnpm run format:check`              | 使用Prettier检查代码格式                                                                                                  |
| `pnpm run format`                    | 使用Prettier格式化代码                                                                                                       |
| `pnpm run sync`                      | 为所有Astro模块生成TypeScript类型。[了解更多](https://docs.astro.build/en/reference/cli-reference/#astro-sync)。 |
| `pnpm run lint`                      | 使用ESLint进行代码检查                                                                                                                 |
| `docker compose up -d`               | 在docker上运行AstroPaper，你可以使用与`dev`命令相同的主机名和端口访问。                              |
| `docker compose run app npm install` | 你可以在docker容器中运行上述任何命令。                                                                         |
| `docker build -t astropaper .`       | 为AstroPaper构建Docker镜像。                                                                                               |
| `docker run -p 4321:80 astropaper`   | 在Docker上运行AstroPaper。网站将在`http://localhost:4321`可访问。                                             |

> **_警告！_** Windows PowerShell用户如果想要在开发期间[运行诊断](https://docs.astro.build/en/reference/cli-reference/#astro-check)（`astro check --watch & astro dev`），可能需要安装[concurrently包](https://www.npmjs.com/package/concurrently)。更多信息请参见[此问题](https://github.com/satnaing/astro-paper/issues/113)。

## ✨ 反馈和建议

如果你有任何建议/反馈，可以通过[我的邮箱](mailto:contact@satnaing.dev)联系我。或者，如果你发现错误或想要请求新功能，请随时提出issue。

## 📜 许可证

根据MIT许可证授权，版权所有 © 2025

---

由[Sat Naing](https://satnaing.dev) 👨🏻‍💻 和[贡献者](https://github.com/satnaing/astro-paper/graphs/contributors)用🤍制作。
