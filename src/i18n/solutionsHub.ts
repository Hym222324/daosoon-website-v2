import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

export const solutionsHub = {
  heroLine1: { zh: "供应协同", en: "Supply collaboration " },
  heroLine1Accent: { zh: "解决方案", en: "solutions" },
  heroSub1: { zh: "一站式供应协同服务，从咨询规划到实施落地", en: "One-stop services—from strategy to implementation" },
  heroSub2: { zh: "助力企业供应链数字化转型", en: "Accelerate your supply chain digital transformation" },
  stat1: { zh: "成功实施项目", en: "Delivered projects" },
  stat2: { zh: "行业经验", en: "Years in industry" },
  stat3: { zh: "客户满意度", en: "Client satisfaction" },
  stat4: { zh: "核心服务领域", en: "Core service areas" },
  gridTitle: { zh: "八大核心服务", en: "Eight core services" },
  coverageTitle: { zh: "服务覆盖", en: "Coverage" },
  learnMore: { zh: "了解更多", en: "Learn more" },
  openExchange: { zh: "打开交易汇（在线演示）", en: "Open Exchange (live demo)" },
  whyTitle: { zh: "为什么选择道生数智？", en: "Why Daosoon?" },
  why1t: { zh: "专业专注", en: "Domain focus" },
  why1d: { zh: "专注供应协同领域，深耕行业 10 年+", en: "10+ years in supply collaboration" },
  why2t: { zh: "资深团队", en: "Senior team" },
  why2d: { zh: "平均 10 年 + 行业经验的专家队伍", en: "Experts averaging 10+ years" },
  why3t: { zh: "数据驱动", en: "Data-driven" },
  why3d: { zh: "基于数据的科学决策和效果验证", en: "Decisions and outcomes backed by data" },
  why4t: { zh: "陪伴式服务", en: "Embedded partnership" },
  why4d: { zh: "全程伴随，确保项目成功落地", en: "We stay with you until value is live" },
  ctaTitle: { zh: "需要更详细的解决方案？", en: "Need a tailored solution?" },
  ctaSub: { zh: "预约专家咨询，获取定制化方案与案例分享", en: "Book experts for customized proposals and case sharing" },
  ctaBtn: { zh: "预约演示", en: "Book a demo" },
  hot: { zh: "热门", en: "Hot" },
  new: { zh: "新品", en: "New" },
  aiBadge: { zh: "AI", en: "AI" },
  vip: { zh: "VIP", en: "VIP" },
  sConsultTitle: { zh: "端到端供应链咨询", en: "End-to-end supply chain consulting" },
  sConsultSub: { zh: "行业洞察·体系建设·业务辅导", en: "Insights · systems · coaching" },
  sConsultD1: { zh: "业务诊断与规划", en: "Diagnostics & planning" },
  sConsultD2: { zh: "体系建设与优化", en: "System build & optimization" },
  sConsultD3: { zh: "实施辅导与落地", en: "Implementation coaching" },
  sConsultD4: { zh: "AI 应用咨询", en: "AI advisory" },
  sImplTitle: { zh: "端到端供应链实施", en: "End-to-end implementation" },
  sImplSub: { zh: "全线软件选型与项目交付", en: "Software selection and delivery" },
  sImplD1: { zh: "APS 高级计划排产", en: "APS advanced planning" },
  sImplD2: { zh: "SRM 供应商关系管理", en: "SRM" },
  sImplD3: { zh: "WMS 仓储管理系统", en: "WMS" },
  sImplD4: { zh: "MOM 制造运营管理系统", en: "MOM / manufacturing operations" },
  sSoftTitle: { zh: "自研软件产品", en: "Proprietary software" },
  sSoftSub: { zh: "自主可控的供应链 SaaS", en: "Ownable supply chain SaaS" },
  sSoftD1: { zh: "供应协同平台", en: "Collaboration platform" },
  sSoftD2: { zh: "智能寻源引擎", en: "Intelligent sourcing engine" },
  sSoftD3: { zh: "供应计划 AI", en: "Supply planning AI" },
  sSoftD4: { zh: "供应商绩效平台", en: "Supplier performance" },
  sTechTitle: { zh: "技术服务", en: "Technical services" },
  sTechSub: { zh: "系统托管、迁移、运维保障", en: "Hosting, migration, operations" },
  sTechD1: { zh: "系统托管服务", en: "Managed hosting" },
  sTechD2: { zh: "数据迁移服务", en: "Data migration" },
  sTechD3: { zh: "系统优化服务", en: "Optimization" },
  sTechD4: { zh: "7x24 运维保障", en: "24/7 operations support" },
  sAiTitle: { zh: "AI 应用服务", en: "AI application services" },
  sAiSub: { zh: "AI 咨询、智能分析、场景落地", en: "AI consulting, analytics, rollout" },
  sAiD1: { zh: "AI 供应咨询", en: "AI supply advisory" },
  sAiD2: { zh: "智能分析引擎", en: "Analytics engine" },
  sAiD3: { zh: "智能寻源匹配", en: "Smart sourcing match" },
  sAiD4: { zh: "智能计划排产", en: "Intelligent planning" },
  sProcTitle: { zh: "采购业务服务", en: "Procurement services" },
  sProcSub: { zh: "供应寻源对接、采购服务、协同执行", en: "Sourcing, procurement execution, collaboration" },
  sProcD1: { zh: "供应寻源对接", en: "Sourcing alignment" },
  sProcD2: { zh: "供应采购服务", en: "Procurement services" },
  sProcD3: { zh: "供应商协同执行", en: "Supplier execution" },
  sProcD4: { zh: "供应绩效管理", en: "Performance management" },
  sTalentTitle: { zh: "专业人才库", en: "Talent programs" },
  sTalentSub: { zh: "人才培训、企业招聘、匹配服务", en: "Training, hiring, matching" },
  sTalentD1: { zh: "供应人才培训", en: "Supply talent training" },
  sTalentD2: { zh: "供应人才招聘", en: "Recruiting" },
  sTalentD3: { zh: "人才灵活用工", en: "Flexible workforce" },
  sTalentD4: { zh: "数字人才转型", en: "Digital talent transformation" },
  sPlatTitle: { zh: "商业网络平台", en: "Business network platform" },
  sPlatSub: { zh: "专属定制、系统对接、协同网络", en: "Custom build, integration, network" },
  sPlatD1: { zh: "专属定制服务", en: "Custom services" },
  sPlatD2: { zh: "系统对接服务", en: "System integration" },
  sPlatD3: { zh: "协同网络搭建", en: "Collaboration network" },
  sPlatD4: { zh: "数据中台建设", en: "Data middle platform" },
  badgeFoundation: { zh: "基础", en: "Core" },
  badgeProService: { zh: "专业服务", en: "Professional" },
  badgeVipService: { zh: "VIP 服务", en: "VIP" },
  badgeProfessional: { zh: "专业", en: "Pro" },
  openTradingDemo: { zh: "打开交易汇演示", en: "Open Exchange demo" },
  stat1Value: { zh: "100+", en: "100+" },
  stat2Value: { zh: "10 年 +", en: "10+ yrs" },
  stat3Value: { zh: "98%", en: "98%" },
  stat4Value: { zh: "8", en: "8" },
} as const satisfies Record<string, Bilingual>;

export type SolutionsHubServiceId =
  | "consulting"
  | "implementation"
  | "software"
  | "tech-services"
  | "ai-services"
  | "procurement-services"
  | "talent"
  | "platform";

type HubServiceResolved = {
  id: SolutionsHubServiceId;
  href: string;
  title: string;
  subtitle: string;
  details: string[];
  badge?: string;
};

const HUB_SERVICE_ORDER = [
  "consulting",
  "implementation",
  "software",
  "tech-services",
  "ai-services",
  "procurement-services",
  "talent",
  "platform",
] as const satisfies readonly SolutionsHubServiceId[];

const HUB_PATH: Record<SolutionsHubServiceId, string> = {
  consulting: "/solutions/consulting",
  implementation: "/solutions/implementation",
  software: "/solutions/software",
  "tech-services": "/solutions/tech-services",
  "ai-services": "/solutions/ai-services",
  "procurement-services": "/solutions/procurement-services",
  talent: "/solutions/talent",
  platform: "/solutions/platform",
};

function hubService(locale: SiteLocale, id: SolutionsHubServiceId): HubServiceResolved {
  const hub = solutionsHub;
  const d = (b: Bilingual) => T(locale, b);
  switch (id) {
    case "consulting":
      return {
        id,
        href: HUB_PATH[id],
        title: d(hub.sConsultTitle),
        subtitle: d(hub.sConsultSub),
        details: [d(hub.sConsultD1), d(hub.sConsultD2), d(hub.sConsultD3), d(hub.sConsultD4)],
        badge: d(hub.hot),
      };
    case "implementation":
      return {
        id,
        href: HUB_PATH[id],
        title: d(hub.sImplTitle),
        subtitle: d(hub.sImplSub),
        details: [d(hub.sImplD1), d(hub.sImplD2), d(hub.sImplD3), d(hub.sImplD4)],
      };
    case "software":
      return {
        id,
        href: HUB_PATH[id],
        title: d(hub.sSoftTitle),
        subtitle: d(hub.sSoftSub),
        details: [d(hub.sSoftD1), d(hub.sSoftD2), d(hub.sSoftD3), d(hub.sSoftD4)],
        badge: d(hub.new),
      };
    case "tech-services":
      return {
        id,
        href: HUB_PATH[id],
        title: d(hub.sTechTitle),
        subtitle: d(hub.sTechSub),
        details: [d(hub.sTechD1), d(hub.sTechD2), d(hub.sTechD3), d(hub.sTechD4)],
        badge: d(hub.badgeFoundation),
      };
    case "ai-services":
      return {
        id,
        href: HUB_PATH[id],
        title: d(hub.sAiTitle),
        subtitle: d(hub.sAiSub),
        details: [d(hub.sAiD1), d(hub.sAiD2), d(hub.sAiD3), d(hub.sAiD4)],
        badge: d(hub.aiBadge),
      };
    case "procurement-services":
      return {
        id,
        href: HUB_PATH[id],
        title: d(hub.sProcTitle),
        subtitle: d(hub.sProcSub),
        details: [d(hub.sProcD1), d(hub.sProcD2), d(hub.sProcD3), d(hub.sProcD4)],
        badge: d(hub.badgeProfessional),
      };
    case "talent":
      return {
        id,
        href: HUB_PATH[id],
        title: d(hub.sTalentTitle),
        subtitle: d(hub.sTalentSub),
        details: [d(hub.sTalentD1), d(hub.sTalentD2), d(hub.sTalentD3), d(hub.sTalentD4)],
        badge: d(hub.badgeProService),
      };
    case "platform":
      return {
        id,
        href: HUB_PATH[id],
        title: d(hub.sPlatTitle),
        subtitle: d(hub.sPlatSub),
        details: [d(hub.sPlatD1), d(hub.sPlatD2), d(hub.sPlatD3), d(hub.sPlatD4)],
        badge: d(hub.badgeVipService),
      };
  }
}

export function solutionsHubStrings(locale: SiteLocale) {
  const hub = solutionsHub;
  const d = (b: Bilingual) => T(locale, b);
  return {
    heroLine1: d(hub.heroLine1),
    heroLine1Accent: d(hub.heroLine1Accent),
    heroSub1: d(hub.heroSub1),
    heroSub2: d(hub.heroSub2),
    stats: [
      { value: d(hub.stat1Value), label: d(hub.stat1) },
      { value: d(hub.stat2Value), label: d(hub.stat2) },
      { value: d(hub.stat3Value), label: d(hub.stat3) },
      { value: d(hub.stat4Value), label: d(hub.stat4) },
    ],
    gridTitle: d(hub.gridTitle),
    coverageTitle: d(hub.coverageTitle),
    learnMore: d(hub.learnMore),
    openExchange: d(hub.openExchange),
    whyTitle: d(hub.whyTitle),
    whyItems: [
      { title: d(hub.why1t), desc: d(hub.why1d) },
      { title: d(hub.why2t), desc: d(hub.why2d) },
      { title: d(hub.why3t), desc: d(hub.why3d) },
      { title: d(hub.why4t), desc: d(hub.why4d) },
    ],
    ctaTitle: d(hub.ctaTitle),
    ctaSub: d(hub.ctaSub),
    ctaBtn: d(hub.ctaBtn),
    services: HUB_SERVICE_ORDER.map((id) => hubService(locale, id)),
  };
}
