import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

const pageTitle: Bilingual = { zh: "自研软件产品", en: "Proprietary software" };
const pageDescription: Bilingual = {
  zh: "供应链协同与数字化工具，方法论沉淀为可配置能力",
  en: "Collaboration tools with configurable best practices.",
};

const principlesTitle: Bilingual = { zh: "产品原则", en: "Product principles" };
const matrixTitle: Bilingual = { zh: "核心产品矩阵", en: "Product portfolio" };
const featuresH: Bilingual = { zh: "核心功能", en: "Key features" };
const effectsH: Bilingual = { zh: "应用效果", en: "Outcomes" };

const principles: { title: Bilingual; body: Bilingual }[] = [
  {
    title: { zh: "贴近业务现场", en: "Close to operations" },
    body: {
      zh: "从计划到履约的流程语言设计，而不是脱离场景的功能堆砌。",
      en: "Process language from plan to fulfillment—not feature sprawl.",
    },
  },
  {
    title: { zh: "可组合、可演进", en: "Composable & evolvable" },
    body: {
      zh: "能力模块化，随企业成熟度分阶段启用与扩展。",
      en: "Modular capabilities that scale with maturity.",
    },
  },
  {
    title: { zh: "与实施服务互补", en: "Pairs with services" },
    body: {
      zh: "工具与咨询、实施联动，保证「能用、好用、有人用」。",
      en: "Tools plus consulting and implementation so teams actually adopt.",
    },
  },
];

export type SoftwareTagKind = "core" | "ai" | "mgmt" | "tool" | "data";

const products: {
  title: Bilingual;
  description: Bilingual;
  tag: Bilingual;
  tagKind: SoftwareTagKind;
  features: Bilingual[];
  benefits: Bilingual[];
}[] = [
  {
    title: { zh: "供应协同平台", en: "Supply collaboration platform" },
    description: {
      zh: "一站式供应协同解决方案，打通供需双方数据与流程",
      en: "One-stop collaboration across demand and supply data and flows.",
    },
    tag: { zh: "核心产品", en: "Core" },
    tagKind: "core",
    features: [
      { zh: "供应商自助门户", en: "Supplier self-service" },
      { zh: "在线协同采购", en: "Online collaborative buying" },
      { zh: "需求自动匹配", en: "Demand auto-matching" },
    ],
    benefits: [
      { zh: "采购周期缩短 40-60%", en: "40–60% shorter cycles" },
      { zh: "供应商响应速度提升 50%", en: "~50% faster response" },
    ],
  },
  {
    title: { zh: "智能寻源引擎", en: "Intelligent sourcing engine" },
    description: { zh: "AI 驱动的供应商智能匹配与推荐", en: "AI-driven supplier matching." },
    tag: { zh: "AI 功能", en: "AI" },
    tagKind: "ai",
    features: [
      { zh: "智能供应商匹配", en: "Smart matching" },
      { zh: "价格趋势预测", en: "Price trends" },
      { zh: "风险智能预警", en: "Risk alerts" },
    ],
    benefits: [
      { zh: "寻源效率提升 70%", en: "~70% faster sourcing" },
      { zh: "供应商匹配准确率 95%+", en: "95%+ match accuracy" },
    ],
  },
  {
    title: { zh: "供应计划 AI", en: "Supply planning AI" },
    description: { zh: "AI 算法优化供应计划，降低库存成本", en: "AI-optimized plans and inventory." },
    tag: { zh: "AI 功能", en: "AI" },
    tagKind: "ai",
    features: [
      { zh: "需求智能预测", en: "Demand forecasting" },
      { zh: "自动补货建议", en: "Replenishment suggestions" },
      { zh: "多仓库存优化", en: "Multi-warehouse optimization" },
    ],
    benefits: [
      { zh: "库存周转提升 40%", en: "~40% better turns" },
      { zh: "缺货率降低 60%", en: "~60% fewer stockouts" },
    ],
  },
  {
    title: { zh: "供应商绩效平台", en: "Supplier performance" },
    description: { zh: "供应商全生命周期管理与绩效评估", en: "Lifecycle KPIs and reviews." },
    tag: { zh: "管理工具", en: "Management" },
    tagKind: "mgmt",
    features: [
      { zh: "绩效指标体系", en: "KPI frameworks" },
      { zh: "自动数据收集", en: "Automated data capture" },
      { zh: "实时绩效看板", en: "Live dashboards" },
    ],
    benefits: [
      { zh: "供应商管理效率 +50%", en: "~+50% efficiency" },
      { zh: "绩效评估时间 -70%", en: "~−70% evaluation time" },
    ],
  },
  {
    title: { zh: "供应成本优化", en: "Spend optimization" },
    description: { zh: "智能分析采购成本构成，识别降本机会", en: "Spend analytics and savings ideas." },
    tag: { zh: "优化工具", en: "Optimization" },
    tagKind: "tool",
    features: [
      { zh: "成本结构分析", en: "Cost structure analysis" },
      { zh: "价格对标分析", en: "Benchmark pricing" },
      { zh: "降本机会推荐", en: "Savings recommendations" },
    ],
    benefits: [
      { zh: "成本结构更清晰", en: "Clearer spend visibility" },
      { zh: "支出可视、可对账", en: "Reconcilable spend views" },
    ],
  },
  {
    title: { zh: "供应数据中台", en: "Supply data hub" },
    description: { zh: "统一供应数据，打通信息孤岛", en: "Unified supply data backbone." },
    tag: { zh: "数据能力", en: "Data" },
    tagKind: "data",
    features: [
      { zh: "多系统集成", en: "Multi-system integration" },
      { zh: "数据标准统一", en: "Standardized data" },
      { zh: "实时数据同步", en: "Real-time sync" },
    ],
    benefits: [
      { zh: "数据准确性 99%+", en: "99%+ accuracy" },
      { zh: "系统集成时间 -60%", en: "~−60% integration time" },
    ],
  },
];

const footerNote: Bilingual = {
  zh: "合作模式与报价随企业场景而定，不做「一刀切」的数字承诺；欢迎预约沟通，明确范围与里程碑。",
  en: "Commercial models vary by context—no one-size-fits-all metrics. Let’s align scope and milestones.",
};
const footerBtn: Bilingual = { zh: "预约沟通", en: "Book a conversation" };

export function softwareStrings(locale: SiteLocale) {
  const d = (b: Bilingual) => T(locale, b);
  return {
    pageTitle: d(pageTitle),
    pageDescription: d(pageDescription),
    principlesTitle: d(principlesTitle),
    matrixTitle: d(matrixTitle),
    featuresH: d(featuresH),
    effectsH: d(effectsH),
    footerNote: d(footerNote),
    footerBtn: d(footerBtn),
    principles: principles.map((p) => ({ title: d(p.title), body: d(p.body) })),
    products: products.map((p) => ({
      title: d(p.title),
      description: d(p.description),
      tag: d(p.tag),
      tagKind: p.tagKind,
      features: p.features.map((f) => d(f)),
      benefits: p.benefits.map((b) => d(b)),
    })),
  };
}
