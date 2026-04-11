import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

const home: Bilingual = { zh: "首页", en: "Home" };
const insightsHub: Bilingual = { zh: "行业洞察", en: "Industry insights" };

const hChallenges: Bilingual = {
  zh: "行业特点与主要挑战",
  en: "Industry traits & challenges",
};
const hApproach: Bilingual = {
  zh: "道生应对思路（摘要）",
  en: "Daosoon approach (summary)",
};
const hRelated: Bilingual = { zh: "相关案例", en: "Related cases" };

const discrete = {
  crumb: { zh: "离散制造", en: "Discrete manufacturing" },
  title: {
    zh: "离散制造供应链洞察",
    en: "Supply chain insights: discrete manufacturing",
  },
  subtitle: {
    zh: "多品种小批量、BOM 复杂、变更频繁——协同与计划的典型挑战与数智化应对",
    en: "High mix / low volume, complex BOMs, frequent changes—collaboration, planning, and digital responses.",
  },
  s1p: {
    zh: "离散制造普遍面临产品谱系多、工程变更频繁、物料齐套与产能平衡难度大的问题。计划层需要同时兼顾订单履约、库存占用与供应链柔性；执行层则要求供应商快速响应图纸与工艺变更，并保持质量与交付稳定。",
    en: "Discrete manufacturers juggle broad product families, frequent ECOs, kitting, and capacity balance. Planning must cover order fulfillment, inventory, and flexibility; execution needs suppliers to react quickly to drawings and process changes while keeping quality and delivery stable.",
  },
  bullets: [
    {
      zh: "物料齐套难：多层级 BOM 与替代料策略若缺少统一数据底座，易导致停线与插单。",
      en: "Kitting gaps: without a unified data backbone for multi-level BOMs and alternates, lines stall and hot orders pile up.",
    },
    {
      zh: "排程复杂：瓶颈资源、换型损失与急单冲突需要可解释的计划规则与可视化协同。",
      en: "Scheduling complexity: bottlenecks, changeover loss, and rush conflicts need explainable rules and visible collaboration.",
    },
    {
      zh: "供应商协同要求高：图纸、质检与交付状态若仍依赖离线表格，协同成本与错误率显著上升。",
      en: "Supplier collaboration: drawings, QC, and delivery status on spreadsheets drive cost and error rates.",
    },
  ] as const satisfies readonly Bilingual[],
  s2p: {
    zh: "以 AI 辅助需求预测提升短期可执行计划的可信度，以 SRM 供应商协同平台统一订单、交期、变更与质量闭环，减少信息割裂；并与 ERP/MES 集成形成「需求—计划—采购—履约」可追溯链路。",
    en: "Use AI-assisted demand forecasting to make short-term plans more credible; unify orders, dates, changes, and quality loops in SRM to cut fragmentation; integrate ERP/MES for a traceable demand–plan–procure–fulfill chain.",
  },
  relatedBefore: {
    zh: "可结合 ",
    en: "See ",
  },
  relatedLink: { zh: "中联重科案例", en: "Zoomlion case study" },
  relatedAfter: {
    zh: " 了解大规模供应网络下的协同与周期优化实践（详情含背景与挑战结构，可随项目阶段扩展）。",
    en: " for collaboration and cycle-time practices at scale (expandable by project phase).",
  },
  relatedHref: "/case/zoomlion",
  cta: {
    zh: "获取离散制造供应链解决方案",
    en: "Get discrete manufacturing solutions",
  },
} as const;

const process = {
  crumb: { zh: "流程制造", en: "Process manufacturing" },
  title: {
    zh: "流程制造供应链洞察",
    en: "Supply chain insights: process manufacturing",
  },
  subtitle: {
    zh: "连续生产、配方管理、副产物多——批次追溯与稳定运营的双重压力",
    en: "Continuous production, recipes, coproducts—batch traceability and stable operations under pressure.",
  },
  s1p: {
    zh: "流程制造强调配方一致性、批次可追溯与装置产能利用。原材料价格波动、副产品综合利用与质量合规往往交织在一起，使得「从采购到生产到出厂」的数据链条必须高度一致。",
    en: "Process industries need recipe consistency, batch traceability, and asset utilization. Raw material volatility, coproduct use, and compliance intertwine, so the procure-to-ship data chain must stay aligned.",
  },
  bullets: [
    {
      zh: "批次追溯难：从原辅料到成品与副产物的正向 / 逆向追溯需跨系统集成。",
      en: "Batch traceability: forward/reverse from feedstock to product and coproducts needs cross-system integration.",
    },
    {
      zh: "设备效率与计划耦合：计划扰动对能耗与收率影响显著，需要运营可视化。",
      en: "OEE and planning are coupled: schedule shocks hit energy and yield—operations need visibility.",
    },
    {
      zh: "原料价格与供应风险：需更早识别价格与供应异常，支持采购与配方策略调整。",
      en: "Price and supply risk: earlier signals support procurement and recipe adjustments.",
    },
  ] as const satisfies readonly Bilingual[],
  s2p: {
    zh: "通过 MES 集成打通生产实绩与物料消耗，构建批次与质量的数字化底座；辅以供应链风险预警（交期、价格、单一来源等维度）支持采购与计划的前置决策。",
    en: "MES integration links production results and material consumption for a digital batch-and-quality base; supply risk alerts (lead time, price, single-source, etc.) inform procurement and planning earlier.",
  },
  relatedBefore: null,
  relatedLink: null,
  relatedAfter: null,
  relatedHref: null,
  cta: {
    zh: "获取流程制造解决方案",
    en: "Get process manufacturing solutions",
  },
} as const;

const agriculture = {
  crumb: { zh: "农业", en: "Agriculture" },
  title: {
    zh: "农业供应链洞察",
    en: "Agriculture supply chain insights",
  },
  subtitle: {
    zh: "季节性、产地分散、质量标准多样——产销协同与冷链履约的典型难题",
    en: "Seasonality, scattered origins, diverse quality standards—sales–production sync and cold-chain fulfillment.",
  },
  s1p: {
    zh: "农产品供给受季节与气候影响显著，产地分散、分级标准不统一会加剧下游履约难度。冷链断链与信息不对称往往导致损耗与价格波动，需要端到端的可视化与协同机制。",
    en: "Supply swings with season and weather; fragmented origins and inconsistent grading raise downstream fulfillment risk. Cold-chain gaps and information asymmetry drive spoilage and price volatility—end-to-end visibility and coordination help.",
  },
  bullets: [
    {
      zh: "冷链物流复杂：温区、时效与时效证明需贯穿仓储与运输。",
      en: "Cold chain complexity: temperature zones, SLAs, and proof need to span warehouse and transport.",
    },
    {
      zh: "产销对接难：小农户 / 合作社与渠道之间缺乏统一的质量与交付语言。",
      en: "Farm–channel alignment: smallholders and co-ops often lack a shared quality and delivery language with channels.",
    },
    {
      zh: "政策与市场双重影响：需灵活的销量预测与供给调度策略。",
      en: "Policy and markets together: flexible demand forecasts and supply dispatch matter.",
    },
  ] as const satisfies readonly Bilingual[],
  s2p: {
    zh: "以数字化产地仓统一入库质检、分级与库存可视化，以供需匹配平台连接产地与渠道需求，缩短信息链路并降低损耗。",
    en: "Digitized origin hubs unify inbound QC, grading, and inventory visibility; a demand–supply matching platform links origins to channel demand, shortening information paths and cutting losses.",
  },
  relatedBefore: {
    zh: "参见 ",
    en: "See ",
  },
  relatedLink: {
    zh: "农业装备研发机构案例",
    en: "Ag equipment R&D case",
  },
  relatedAfter: {
    zh: " 中多品种小批量采购与准入优化实践。",
    en: " for high-mix/low-volume procurement and supplier onboarding improvements.",
  },
  relatedHref: "/case/caas",
  cta: {
    zh: "获取农业供应链解决方案",
    en: "Get agriculture supply chain solutions",
  },
} as const;

const REGISTRY = {
  discrete,
  process,
  agriculture,
} as const;

export type IndustrySlug = keyof typeof REGISTRY;

const slugPath: Record<IndustrySlug, string> = {
  discrete: "/discrete-manufacturing",
  process: "/process-manufacturing",
  agriculture: "/agriculture",
};

export function industryInsightStrings(slug: IndustrySlug, locale: SiteLocale) {
  const d = REGISTRY[slug];
  const hasRelated =
    d.relatedHref != null &&
    d.relatedLink != null &&
    d.relatedBefore != null &&
    d.relatedAfter != null;

  return {
    title: T(locale, d.title),
    subtitle: T(locale, d.subtitle),
    breadcrumb: [
      { label: T(locale, home), href: "/" },
      { label: T(locale, insightsHub), href: "/insights" },
      { label: T(locale, d.crumb), href: slugPath[slug] },
    ],
    hChallenges: T(locale, hChallenges),
    hApproach: T(locale, hApproach),
    hRelated: T(locale, hRelated),
    s1p: T(locale, d.s1p),
    bullets: d.bullets.map((b) => T(locale, b)),
    s2p: T(locale, d.s2p),
    relatedCase: hasRelated
      ? {
          href: d.relatedHref as string,
          linkText: T(locale, d.relatedLink as Bilingual),
          before: T(locale, d.relatedBefore as Bilingual),
          after: T(locale, d.relatedAfter as Bilingual),
        }
      : null,
    cta: T(locale, d.cta),
  };
}
