# 道生数智官网 v2

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-green)](https://tailwindcss.com)

## 项目介绍

道生数智 - 端到端供应链 AI 应用服务商

## 技术栈

- Next.js 16.2.2
- React 19.2.4
- TypeScript 5.x
- Tailwind CSS v4

## 开发

```bash
npm run dev
```

## 部署

```bash
npm run build
npm start
```

静态站托管在 **GitHub Pages** 时使用：

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/daosoon-website-v2 npm run build
```

## 内容 / 资料后台

- 资源列表数据：`content/resources.json`
- 附件目录：`public/uploads/`
- 可视化编辑（Decap CMS）线上路径：`/admin/`（完整 URL 见 `docs/ADMIN_SETUP.md`）
- 配置与 OAuth、本地调试说明：**[docs/ADMIN_SETUP.md](./docs/ADMIN_SETUP.md)**
