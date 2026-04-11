import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

const home: Bilingual = { zh: "首页", en: "Home" };
const resourcesCrumb: Bilingual = { zh: "资源", en: "Resources" };

export type ResourceArticleSlug = "whitepaper" | "trend" | "webinar" | "forum";

type Action = { href: string; label: Bilingual; style: "orange" | "blue" | "purple" | "outline" };

type Base = {
  title: string;
  subtitle: string;
  breadcrumb: { label: string; href: string }[];
  intro?: string;
  introLink?: { href: string; text: string; before: string; after: string };
  bullets?: string[];
  toc?: { heading: string; items: string[]; ordered: boolean };
  actions: { href: string; label: string; style: Action["style"] }[];
};

const whitepaper: {
  title: Bilingual;
  subtitle: Bilingual;
  lastCrumb: Bilingual;
  intro: Bilingual;
  tocHeading: Bilingual;
  toc: Bilingual[];
  cta: Bilingual;
} = {
  title: {
    zh: "2026 供应链 AI 应用白皮书",
    en: "2026 Supply Chain AI Applications Whitepaper",
  },
  subtitle: {
    zh: "发布日期：2026-03-15 · 白皮书",
    en: "Published 2026-03-15 · Whitepaper",
  },
  lastCrumb: { zh: "白皮书", en: "Whitepaper" },
  intro: {
    zh: "本书面材料面向制造与供应链管理者，梳理 AI 在需求预测、寻源、合同与风险等场景的价值逻辑、数据前置条件与落地节奏（完整 PDF 可按 PRD 通过留资邮箱发送）。",
    en: "For manufacturing and supply chain leaders: how AI creates value in forecasting, sourcing, contracts, and risk—data prerequisites and rollout rhythm (full PDF via lead form per PRD).",
  },
  tocHeading: { zh: "目录（示例）", en: "Table of contents (sample)" },
  toc: [
    { zh: "供应链数智化与 AI 的定位", en: "Digital supply chain and the role of AI" },
    { zh: "高价值场景筛选与数据治理", en: "High-value use cases and data governance" },
    { zh: "实施路径与组织协同", en: "Implementation path and org alignment" },
    {
      zh: "常见误区与避坑清单（与 /challenges 联动）",
      en: "Common pitfalls (links to /challenges)",
    },
  ],
  cta: { zh: "留资下载白皮书", en: "Download (lead form)" },
};

const trend: {
  title: Bilingual;
  subtitle: Bilingual;
  lastCrumb: Bilingual;
  introBefore: Bilingual;
  introLink: Bilingual;
  introAfter: Bilingual;
  bullets: Bilingual[];
  cta: Bilingual;
} = {
  title: {
    zh: "供应链数智化转型的四个关键阶段",
    en: "Four stages of supply chain digital transformation",
  },
  subtitle: { zh: "趋势解读 · 2026-03-20", en: "Trend brief · 2026-03-20" },
  lastCrumb: { zh: "趋势解读", en: "Trend brief" },
  introBefore: {
    zh: "本文用「诊断—搭建—试点推广—持续优化」四阶段概括大多数制造企业的数智化节奏；每一阶段的关键里程碑与常见雷区可与 ",
    en: "This article summarizes a diagnose–build–pilot–optimize rhythm for most manufacturers; compare milestones and pitfalls with the ",
  },
  introLink: { zh: "实施路线图", en: "implementation roadmap" },
  introAfter: {
    zh: " 对照阅读。",
    en: " for cross-reading.",
  },
  bullets: [
    { zh: "阶段 1：统一语言与基线评估", en: "Stage 1: shared language and baseline" },
    { zh: "阶段 2：数据与流程最小可行闭环", en: "Stage 2: MVP data and process loop" },
    { zh: "阶段 3：场景扩展与供应网络协同", en: "Stage 3: scale scenarios & network collaboration" },
    { zh: "阶段 4：指标运营与持续迭代", en: "Stage 4: metrics operations and iteration" },
  ],
  cta: { zh: "联系顾问获取解读材料", en: "Contact us for the brief" },
};

const webinar: {
  title: Bilingual;
  subtitle: Bilingual;
  lastCrumb: Bilingual;
  intro: Bilingual;
  btnCommunity: Bilingual;
  btnEnterprise: Bilingual;
} = {
  title: {
    zh: "AI 在供应商寻源中的应用实战",
    en: "AI in supplier sourcing—hands-on",
  },
  subtitle: { zh: "公开课回放 · 2026-03-25", en: "Webinar replay · 2026-03-25" },
  lastCrumb: { zh: "公开课", en: "Webinar" },
  intro: {
    zh: "实录内容将覆盖：寻源业务流程拆解、可用数据清单、模型与规则混合方案、以及如何与 SRM 工作流衔接。完整视频可按 PRD 设计接入注册 / 登录后观看。",
    en: "Covers sourcing process breakdown, data inventory, hybrid model-and-rules design, and SRM workflow handoff. Full video after sign-in per PRD.",
  },
  btnCommunity: { zh: "前往社区登记回放权限", en: "Register in community for replay" },
  btnEnterprise: { zh: "企业批量开通", en: "Enterprise bulk access" },
};

const forum: {
  title: Bilingual;
  subtitle: Bilingual;
  lastCrumb: Bilingual;
  intro: Bilingual;
  cta: Bilingual;
} = {
  title: {
    zh: "采购成本分析模板分享",
    en: "Procurement cost analysis templates",
  },
  subtitle: { zh: "论坛精选 · 2026-03-28", en: "Forum picks · 2026-03-28" },
  lastCrumb: { zh: "论坛精选", en: "Forum picks" },
  intro: {
    zh: "本篇整理社区中关于采购成本分析模板的高票讨论：指标口径、分摊逻辑、以及与预算 / 实际执行的对比方式。按 PRD，论坛详情可对低质量页面配置 noindex，此处为精选摘要页。",
    en: "Curated from highly voted forum threads on templates: metric definitions, allocation logic, and budget vs. actual. Per PRD, low-quality forum pages may be noindex—this is a digest landing page.",
  },
  cta: { zh: "登录后查看完整帖子", en: "View full thread after sign-in" },
};

const paths: Record<ResourceArticleSlug, string> = {
  whitepaper: "/resources/whitepaper",
  trend: "/resources/trend",
  webinar: "/resources/webinar",
  forum: "/resources/forum",
};

export function resourceArticleStrings(slug: ResourceArticleSlug, locale: SiteLocale): Base {
  const crumb = (last: Bilingual) => [
    { label: T(locale, home), href: "/" },
    { label: T(locale, resourcesCrumb), href: "/resources" },
    { label: T(locale, last), href: paths[slug] },
  ];

  if (slug === "whitepaper") {
    return {
      title: T(locale, whitepaper.title),
      subtitle: T(locale, whitepaper.subtitle),
      breadcrumb: crumb(whitepaper.lastCrumb),
      intro: T(locale, whitepaper.intro),
      toc: {
        heading: T(locale, whitepaper.tocHeading),
        items: whitepaper.toc.map((x) => T(locale, x)),
        ordered: true,
      },
      actions: [{ href: "/connect", label: T(locale, whitepaper.cta), style: "orange" }],
    };
  }
  if (slug === "trend") {
    return {
      title: T(locale, trend.title),
      subtitle: T(locale, trend.subtitle),
      breadcrumb: crumb(trend.lastCrumb),
      introLink: {
        href: "/roadmap",
        text: T(locale, trend.introLink),
        before: T(locale, trend.introBefore),
        after: T(locale, trend.introAfter),
      },
      bullets: trend.bullets.map((b) => T(locale, b)),
      actions: [{ href: "/connect", label: T(locale, trend.cta), style: "blue" }],
    };
  }
  if (slug === "webinar") {
    return {
      title: T(locale, webinar.title),
      subtitle: T(locale, webinar.subtitle),
      breadcrumb: crumb(webinar.lastCrumb),
      intro: T(locale, webinar.intro),
      actions: [
        { href: "/community", label: T(locale, webinar.btnCommunity), style: "purple" },
        { href: "/connect", label: T(locale, webinar.btnEnterprise), style: "outline" },
      ],
    };
  }
  return {
    title: T(locale, forum.title),
    subtitle: T(locale, forum.subtitle),
    breadcrumb: crumb(forum.lastCrumb),
    intro: T(locale, forum.intro),
    actions: [{ href: "/forum", label: T(locale, forum.cta), style: "blue" }],
  };
}
