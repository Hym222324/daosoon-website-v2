import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

const home: Bilingual = { zh: "首页", en: "Home" };
const crumb: Bilingual = { zh: "社区", en: "Community" };
const title: Bilingual = { zh: "参与社区", en: "Join the community" };
const subtitle: Bilingual = {
  zh: "供应链人的聚集地——发帖与收藏等功能将对接账号体系（PRD：手机号注册）。",
  en: "Where supply chain pros meet—posts and saves will tie to accounts (PRD: phone sign-up).",
};
const intro: Bilingual = {
  zh: "当前为静态信息架构页，用于对齐 PRD 中的板块划分与入口；正式论坛可在此基础上接入后端或第三方社区产品。",
  en: "Static IA for now, aligned with PRD sections; production can plug in a backend or third-party community.",
};

const boards: { name: Bilingual; desc: Bilingual }[] = [
  {
    name: { zh: "问题求助", en: "Q&A" },
    desc: { zh: "实施与选型中的实操问题", en: "Implementation and vendor selection questions" },
  },
  {
    name: { zh: "经验分享", en: "Best practices" },
    desc: { zh: "方法与模板沉淀", en: "Methods and templates" },
  },
  {
    name: { zh: "资源下载", en: "Downloads" },
    desc: { zh: "白皮书与工具模板入口", en: "Whitepapers and tool templates" },
  },
  {
    name: { zh: "行业动态", en: "Industry news" },
    desc: { zh: "政策与市场快讯", en: "Policy and market briefs" },
  },
];

const latestHeading: Bilingual = {
  zh: "最新帖子（示例）",
  en: "Latest posts (sample)",
};
const samplePosts: Bilingual[] = [
  {
    zh: "如何用 AI 快速筛选供应商资质？",
    en: "How can AI speed up supplier qualification screening?",
  },
  { zh: "SRM 选型避坑指南", en: "SRM selection pitfalls to avoid" },
  {
    zh: "采购成本分析模板分享",
    en: "Procurement cost analysis template share",
  },
];

const enterForum: Bilingual = { zh: "进入论坛 →", en: "Forum →" };
const btnForum: Bilingual = { zh: "前往论坛", en: "Go to forum" };
const btnProfile: Bilingual = { zh: "个人中心", en: "Profile" };

export function communityStrings(locale: SiteLocale) {
  return {
    title: T(locale, title),
    subtitle: T(locale, subtitle),
    breadcrumb: [
      { label: T(locale, home), href: "/" },
      { label: T(locale, crumb), href: "/community" },
    ],
    intro: T(locale, intro),
    boards: boards.map((b) => ({
      name: T(locale, b.name),
      desc: T(locale, b.desc),
    })),
    latestHeading: T(locale, latestHeading),
    samplePosts: samplePosts.map((p) => T(locale, p)),
    enterForum: T(locale, enterForum),
    btnForum: T(locale, btnForum),
    btnProfile: T(locale, btnProfile),
  };
}
