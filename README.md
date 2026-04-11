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

### 商业网络（BN-MVP / 交易汇）入口

首页与解决方案中的「商业网络平台」在配置了环境变量后会显示 **打开交易汇演示**，新标签页打开独立 BN-MVP 应用。

复制 [`.env.example`](./.env.example) 为 `.env.local`，设置：

```bash
NEXT_PUBLIC_BN_MVP_URL=http://localhost:3000
```

将 URL 换成你的 BN 前端实际地址（与官网端口冲突时请为其中一个项目指定 `-p`）。静态导出构建前同样需要该变量，否则生产包中不展示外链按钮。

## 部署

```bash
npm run build
npm start
```

静态站托管在 **GitHub Pages** 时使用：

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/daosoon-website-v2 npm run build
```

若需线上展示「打开交易汇演示」，在同一命令前加上 `NEXT_PUBLIC_BN_MVP_URL=https://你的-bn-域名`（完整 `https` URL）。

## 内容 / 资料后台

- 资源列表数据：`content/resources.json`
- 附件目录：`public/uploads/`
- 可视化编辑（Decap CMS）线上路径：`/admin/`（完整 URL 见 `docs/ADMIN_SETUP.md`）
- 配置与 OAuth、本地调试说明：**[docs/ADMIN_SETUP.md](./docs/ADMIN_SETUP.md)**
