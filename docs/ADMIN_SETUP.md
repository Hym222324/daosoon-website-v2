# 后台内容管理说明

站点为 **Next.js 静态导出** + **GitHub Pages**，没有常驻服务器。资料与资源列表改为：

- 数据：`content/resources.json`（构建时打入站点）
- 附件：`public/uploads/` 下的文件（构建后随静态资源发布）
- 后台界面：**Decap CMS**（`/admin/`），通过 **GitHub 登录** 直接提交到仓库，触发 Actions 重新部署

线上入口（需先完成 OAuth 配置后登录）：

<https://hym222324.github.io/daosoon-website-v2/admin/>

---

## 方式 A：在 GitHub 网页里改 JSON（免 OAuth）

1. 打开仓库文件：[`content/resources.json`](https://github.com/Hym222324/daosoon-website-v2/blob/main/content/resources.json)
2. 点击 **编辑**，改标题、日期、`downloadUrl` 等
3. 大文件上传到 `public/uploads/`（可网页 Upload files），JSON 里填写 `/uploads/你的文件名.pdf`
4. **Commit to main**，等待 **Deploy GitHub Pages** 成功

适合偶尔更新、不依赖可视化后台。

---

## 方式 B：Decap 可视化后台（推荐）

### 1. 安装依赖说明

- `/admin/` 加载 Decap 脚本，配置在 `public/admin/config.yml`
- 若仅用本地编辑：在 `config.yml` 里把 `local_backend: false` 改为 `true`，项目根目录执行：
  ```bash
  npx decap-server
  ```
  浏览器打开 <http://localhost:8080/admin/>（端口以终端为准），可本地写回 `content/`（不经过 GitHub OAuth）

### 2. 线上登录 GitHub（OAuth）

Decap 需在 GitHub 创建 **OAuth App**，并部署一个 **OAuth 代理**（GitHub 不直接支持浏览器隐式授权给 Decap）。

简要步骤：

1. GitHub → **Settings → Developer settings → OAuth Apps → New**
   - Homepage URL：`https://hym222324.github.io/daosoon-website-v2`
   - Authorization callback URL：按你部署的代理文档填写（常见为代理域名 + `/callback`）

2. 任选一种 **开源 OAuth 代理** 部署到 Vercel / Railway（免费即可），例如社区常用的 **netlify-cms-github-oauth** 系项目，环境变量填入：
   - `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`（OAuth App）
   - 允许的 `ORIGIN` 或站点域名（按项目 README）

3. 将代理根地址写入 `public/admin/config.yml` 的 `backend.base_url`，并按代理说明设置 `auth_endpoint`（若有）。

4. 将 `config.yml` 提交推送后，再打开 `/admin/` 使用 **有仓库写权限** 的 GitHub 账号登录。

具体按钮名称以 Decap 当前文档为准：  
<https://decapcms.org/docs/github-backend/>

### 3. 上传资料

1. 进入后台 **资讯与资源列表**
2. 使用 **媒体库** 上传 PDF 等 → 路径形如 `/uploads/xxx.pdf`
3. 在对应条目的 **资料下载** 中填写该路径
4. **Publish** 后等待 CI 部署，前台「资源」列表会出现下载链接（若条目里已配置 `downloadUrl`）

---

## 构建环境变量

GitHub Actions 已设置 `GITHUB_PAGES=true`。若需在客户端拼接附件绝对路径，可增加：

`NEXT_PUBLIC_BASE_PATH=/daosoon-website-v2`

（与 `next.config.ts` 中 `basePath` 保持一致。）

---

## 安全提示

- `/admin/` 入口对公网可见，但只有能通过 **GitHub OAuth** 且对仓库有 **写权限** 的账号才能发布
- 勿将 OAuth **Client Secret** 写进仓库；仅放在代理托管平台的环境变量中
