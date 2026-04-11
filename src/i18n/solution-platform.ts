import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";
import { solutionTemplateChrome } from "./solutionTemplateChrome";
import { solutionsHub } from "./solutionsHub";

const pageTitle: Bilingual = { zh: "商业网络平台", en: "Business network platform" };
const pageDescription: Bilingual = {
  zh: "供需撮合、伙伴协同与 API 集成的一体化数字空间（能力与产品持续升级）",
  en: "A digital space for matching, partner collaboration, and APIs (continuously evolving).",
};

const coreServicesTitle: Bilingual = { zh: "核心平台服务", en: "Core platform services" };
const capabilitiesHeading: Bilingual = { zh: "服务能力", en: "Service capabilities" };
const effectsHeading: Bilingual = { zh: "应用效果", en: "Outcomes" };
const integrationTitle: Bilingual = { zh: "系统集成能力", en: "System integration" };
const integrationIntro: Bilingual = {
  zh: "支持主流企业系统无缝对接，打通数据孤岛",
  en: "Connect mainstream enterprise systems and break silos.",
};
const supported: Bilingual = { zh: "✔ 支持", en: "✔ Supported" };

const networkTitle: Bilingual = {
  zh: "平台能力方向（定性）",
  en: "Platform capabilities (qualitative)",
};

const processTitle: Bilingual = { zh: "项目实施流程", en: "Implementation process" };

const ctaTitle: Bilingual = { zh: "需要专属定制解决方案？", en: "Need a tailored platform?" };
const ctaSub: Bilingual = {
  zh: "预约专家咨询，获取定制化平台服务方案；也可直接打开在线演示体验交易汇（BN-MVP）。",
  en: "Book experts for a tailored plan—or open the live Exchange (BN-MVP) demo.",
};

const integrationTypes: Bilingual[] = [
  { zh: "ERP 系统", en: "ERP" },
  { zh: "MES 系统", en: "MES" },
  { zh: "WMS 系统", en: "WMS" },
  { zh: "TMS 系统", en: "TMS" },
  { zh: "SRM 系统", en: "SRM" },
  { zh: "OA 系统", en: "OA" },
  { zh: "财务系统", en: "Finance" },
  { zh: "CRM 系统", en: "CRM" },
];

const platformServices: {
  title: Bilingual;
  color: string;
  description: Bilingual;
  features: Bilingual[];
  benefits: Bilingual[];
}[] = [
  {
    title: { zh: "专属定制服务", en: "Custom build" },
    color: "from-[#9C27B0] to-[#7B1FA2]",
    description: { zh: "基于企业需求的定制化平台开发", en: "Platform development tailored to you." },
    features: [
      { zh: "业务需求深度分析", en: "Deep requirements analysis" },
      { zh: "定制化功能开发", en: "Custom features" },
      { zh: "界面个性化定制", en: "UI personalization" },
    ],
    benefits: [
      { zh: "完全贴合业务需求", en: "Fits the business" },
      { zh: "用户体验最优", en: "Strong UX" },
    ],
  },
  {
    title: { zh: "系统对接服务", en: "Integration" },
    color: "from-[#1E88E5] to-[#1565C0]",
    description: { zh: "与企业现有系统无缝集成", en: "Seamless integration with existing systems." },
    features: [
      { zh: "ERP 系统集成", en: "ERP integration" },
      { zh: "MES 系统对接", en: "MES connectivity" },
      { zh: "WMS 系统连接", en: "WMS connectivity" },
    ],
    benefits: [
      { zh: "数据实时同步", en: "Real-time data sync" },
      { zh: "流程自动化", en: "Process automation" },
    ],
  },
  {
    title: { zh: "协同网络搭建", en: "Collaboration network" },
    color: "from-[#FF9800] to-[#F57C00]",
    description: { zh: "构建端到端供应协同生态", en: "End-to-end supply collaboration ecosystem." },
    features: [
      { zh: "供应商网络接入", en: "Supplier onboarding" },
      { zh: "客户协同门户", en: "Customer portals" },
      { zh: "物流伙伴集成", en: "Logistics partners" },
    ],
    benefits: [
      { zh: "协同效率提升 60%", en: "~60% better collaboration" },
      { zh: "网络覆盖全面", en: "Broad network coverage" },
    ],
  },
  {
    title: { zh: "数据中台建设", en: "Data middle platform" },
    color: "from-[#FF6B6B] to-[#EE5A24]",
    description: { zh: "统一供应数据，赋能智能决策", en: "Unified supply data for decisions." },
    features: [
      { zh: "数据标准制定", en: "Data standards" },
      { zh: "数据集成平台", en: "Integration platform" },
      { zh: "数据质量管理", en: "Data quality" },
    ],
    benefits: [
      { zh: "数据准确性 99%+", en: "99%+ accuracy" },
      { zh: "数据决策效率 +80%", en: "~+80% decision speed" },
    ],
  },
];

const networkTypes: { type: Bilingual; headline: Bilingual; desc: Bilingual }[] = [
  {
    type: { zh: "可信供需", en: "Trusted supply & demand" },
    headline: { zh: "画像与匹配", en: "Profiles & matching" },
    desc: {
      zh: "把能力与交付记录结构化，减少信息不对称",
      en: "Structured capability and delivery signals reduce asymmetry.",
    },
  },
  {
    type: { zh: "伙伴协同", en: "Partner collaboration" },
    headline: { zh: "流程共治", en: "Joint processes" },
    desc: {
      zh: "订单、履约与异常在统一节奏下协同",
      en: "Orders, fulfillment, and exceptions on one rhythm.",
    },
  },
  {
    type: { zh: "服务封装", en: "Service packaging" },
    headline: { zh: "API / 集成", en: "API / integration" },
    desc: {
      zh: "与企业现有 ERP、SRM、WMS 等分层对接",
      en: "Layered integration with ERP, SRM, WMS, and more.",
    },
  },
  {
    type: { zh: "生态运营", en: "Ecosystem operations" },
    headline: { zh: "规则与治理", en: "Rules & governance" },
    desc: {
      zh: "准入、结算与信用机制可持续运营（能力建设中）",
      en: "Onboarding, settlement, and credit—capabilities in progress.",
    },
  },
];

const processSteps: { title: Bilingual; desc: Bilingual }[] = [
  { title: { zh: "需求分析", en: "Discovery" }, desc: { zh: "业务场景梳理", en: "Scenario mapping" } },
  { title: { zh: "方案设计", en: "Design" }, desc: { zh: "平台架构设计", en: "Architecture" } },
  { title: { zh: "定制开发", en: "Build" }, desc: { zh: "功能实现", en: "Feature delivery" } },
  { title: { zh: "系统对接", en: "Integrate" }, desc: { zh: "集成与测试", en: "Integration & test" } },
  { title: { zh: "部署上线", en: "Deploy" }, desc: { zh: "灰度发布", en: "Gradual rollout" } },
  { title: { zh: "持续优化", en: "Improve" }, desc: { zh: "迭代升级", en: "Iteration" } },
];

const successMetrics: { value: Bilingual; title: Bilingual }[] = [
  { value: { zh: "连接", en: "Connect" }, title: { zh: "供需与伙伴", en: "Supply & partners" } },
  { value: { zh: "透明", en: "Visible" }, title: { zh: "关键链路可视", en: "Critical path visibility" } },
  { value: { zh: "规则化", en: "Governed" }, title: { zh: "协同可治理", en: "Governable collaboration" } },
  { value: { zh: "演进", en: "Evolving" }, title: { zh: "架构可扩展", en: "Extensible architecture" } },
];

export function platformStrings(locale: SiteLocale) {
  const d = (b: Bilingual) => T(locale, b);
  return {
    pageTitle: d(pageTitle),
    pageDescription: d(pageDescription),
    coreServicesTitle: d(coreServicesTitle),
    capabilitiesHeading: d(capabilitiesHeading),
    effectsHeading: d(effectsHeading),
    integrationTitle: d(integrationTitle),
    integrationIntro: d(integrationIntro),
    supported: d(supported),
    networkTitle: d(networkTitle),
    processTitle: d(processTitle),
    ctaTitle: d(ctaTitle),
    ctaSub: d(ctaSub),
    bookDemo: d(solutionTemplateChrome.ctaBtn),
    openTradingDemo: d(solutionsHub.openTradingDemo),
    integrationTypes: integrationTypes.map((x) => d(x)),
    platformServices: platformServices.map((ps) => ({
      title: d(ps.title),
      color: ps.color,
      description: d(ps.description),
      features: ps.features.map((f) => d(f)),
      benefits: ps.benefits.map((b) => d(b)),
    })),
    networkTypes: networkTypes.map((n) => ({
      type: d(n.type),
      headline: d(n.headline),
      desc: d(n.desc),
    })),
    process: processSteps.map((p, i) => ({
      step: String(i + 1),
      title: d(p.title),
      desc: d(p.desc),
    })),
    successMetrics: successMetrics.map((m) => ({
      value: d(m.value),
      title: d(m.title),
    })),
  };
}
