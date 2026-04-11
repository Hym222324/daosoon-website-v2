import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

const home: Bilingual = { zh: "首页", en: "Home" };
const casesCrumb: Bilingual = { zh: "案例", en: "Cases" };

const hBg: Bilingual = { zh: "背景与挑战", en: "Context & challenges" };
const hApproach: Bilingual = { zh: "解决方案要点", en: "Solution highlights" };
const hOutcomes: Bilingual = {
  zh: "成果（业务沟通口径）",
  en: "Outcomes (business narrative)",
};
const hRelated: Bilingual = { zh: "相关阅读", en: "Related reading" };
const cta: Bilingual = { zh: "预约专家咨询", en: "Book expert consultation" };

const zoomlion = {
  crumb: { zh: "中联重科", en: "Zoomlion" },
  title: {
    zh: "中联重科：SRM 系统助力采购周期缩短约 25%",
    en: "Zoomlion: SRM and ~25% shorter procurement cycles",
  },
  subtitle: {
    zh: "工程机械龙头 · 供应商网络庞大 · 协同与合规并重",
    en: "Construction equipment leader · large supplier network · collaboration & compliance",
  },
  pBg: {
    zh: "企业处于工程机械细分领域领先地位，供应商数量多、品类广，采购与交付协同链路长。传统线下协同与分散的表格管理难以及时反映交期与质量状态，影响整机排产与订单履约。",
    en: "A leading construction equipment player with many suppliers and broad categories—long procurement and delivery chains. Offline coordination and spreadsheets struggle to reflect lead times and quality, impacting build schedules and fulfillment.",
  },
  bullets: [
    {
      zh: "建立统一的供应商协同门户，规范订单、图纸变更与质量闭环流程。",
      en: "Unified supplier collaboration portal for orders, drawing changes, and quality loops.",
    },
    {
      zh: "与内部计划、物料系统衔接，提升可承诺交期的透明度。",
      en: "Tie-in to planning and materials for clearer committed dates.",
    },
    {
      zh: "分阶段推广：先核心品类与高价值供应商，再扩展到全量网络。",
      en: "Phased rollout: core categories and strategic suppliers first, then the full network.",
    },
  ] as const satisfies readonly Bilingual[],
  outcome: {
    zh: "采购周期缩短约 25%，供应商响应速度提升约 40%（以项目合同约定与验收口径为准）。",
    en: "~25% shorter procurement cycles; ~40% faster supplier response (per contract and acceptance).",
  },
  relatedLinkText: { zh: "离散制造行业洞察", en: "Discrete manufacturing insights" },
  relatedHref: "/discrete-manufacturing",
} as const;

const nio = {
  crumb: { zh: "蔚来汽车", en: "NIO" },
  title: {
    zh: "蔚来汽车：寻源效率提升约 50%，库存周转率提高约 30%",
    en: "NIO: ~50% sourcing efficiency, ~30% inventory turns",
  },
  subtitle: {
    zh: "新能源车企 · 零部件品类多、变更快 · 供应链韧性要求高",
    en: "EV OEM · many fast-changing parts · resilience matters",
  },
  pBg: {
    zh: "车型迭代与配置组合带来部品变更频繁，寻源与认证周期长；同时需平衡库存占用与交付风险，对数据一致的预测与供应可视化提出更高要求。",
    en: "Model mix and options drive frequent part changes and long sourcing/qualification cycles; balancing inventory and delivery risk needs consistent data, forecasting, and supply visibility.",
  },
  bullets: [
    {
      zh: "规范寻源与认证流程在线化，缩短跨部门协同周期。",
      en: "Online sourcing and qualification to shorten cross-functional cycles.",
    },
    {
      zh: "结合需求预测与供应风险视图，驱动补货与备选策略。",
      en: "Demand forecast plus supply risk views drive replenishment and alternates.",
    },
    {
      zh: "与质量、研发衔接部品变更，减少断点与呆滞。",
      en: "Align with quality and R&D on part changes to reduce stockouts and excess.",
    },
  ] as const satisfies readonly Bilingual[],
  outcome: {
    zh: "寻源效率提升约 50%，库存周转率提高约 30%（以项目合同约定与验收口径为准）。",
    en: "~50% sourcing efficiency; ~30% inventory turns (per contract and acceptance).",
  },
} as const;

const caas = {
  crumb: { zh: "农业研究院中农机", en: "CAAS agricultural machinery" },
  title: {
    zh: "农业研究院中农机：研发采购降本与准入提效",
    en: "CAAS machinery: R&D procurement savings and faster onboarding",
  },
  subtitle: {
    zh: "农业装备研发机构 · 多品种小批量 · 合规与敏捷需兼顾",
    en: "Ag equipment R&D · high mix/low volume · compliance and agility",
  },
  pBg: {
    zh: "研发试制与量产准备并行，临时需求多、供应商替换频繁；传统准入与比价流程偏长，影响试制进度与成本控制。",
    en: "Pilot and ramp run in parallel with many ad-hoc needs and supplier churn; long qualification and RFQ cycles slow pilots and cost control.",
  },
  bullets: [
    {
      zh: "分层供应商策略：试制类快速通道 + 量产类合规强化。",
      en: "Tiered supplier strategy: fast track for pilots, stronger compliance for production.",
    },
    {
      zh: "线上准入与资质档案，减少重复提交与邮件往返。",
      en: "Digital onboarding and credential files to cut repeat submissions.",
    },
    {
      zh: "采购支出可视化支撑品类策略与降本专项。",
      en: "Spend visibility to support category strategy and cost programs.",
    },
  ] as const satisfies readonly Bilingual[],
  outcome: {
    zh: "采购成本降低约 18%，供应商准入周期缩短约 60%（以项目合同约定与验收口径为准）。",
    en: "~18% lower procurement cost; ~60% shorter supplier onboarding (per contract and acceptance).",
  },
  inlineLinkText: { zh: "农业供应链洞察", en: "Agriculture supply chain insights" },
  inlineHref: "/agriculture",
} as const;

const REGISTRY = {
  zoomlion,
  nio,
  caas,
} as const;

export type CaseStudySlug = keyof typeof REGISTRY;

const paths: Record<CaseStudySlug, string> = {
  zoomlion: "/case/zoomlion",
  nio: "/case/nio",
  caas: "/case/caas",
};

export function caseStudyStrings(slug: CaseStudySlug, locale: SiteLocale) {
  const d = REGISTRY[slug];
  const bullets = d.bullets.map((b) => T(locale, b));

  const base = {
    title: T(locale, d.title),
    subtitle: T(locale, d.subtitle),
    breadcrumb: [
      { label: T(locale, home), href: "/" },
      { label: T(locale, casesCrumb), href: "/cases" },
      { label: T(locale, d.crumb), href: paths[slug] },
    ],
    hBg: T(locale, hBg),
    pBg: T(locale, d.pBg),
    hApproach: T(locale, hApproach),
    bullets,
    hOutcomes: T(locale, hOutcomes),
    outcome: T(locale, d.outcome),
    cta: T(locale, cta),
    hRelated: T(locale, hRelated),
  };

  if (slug === "zoomlion") {
    return {
      ...base,
      relatedBlock: {
        kind: "section" as const,
        linkHref: zoomlion.relatedHref,
        linkText: T(locale, zoomlion.relatedLinkText),
      },
    };
  }
  if (slug === "caas") {
    return {
      ...base,
      relatedBlock: {
        kind: "inline" as const,
        linkHref: caas.inlineHref,
        linkText: T(locale, caas.inlineLinkText),
      },
    };
  }
  return { ...base, relatedBlock: null };
}
