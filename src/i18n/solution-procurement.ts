import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

const pageTitle: Bilingual = { zh: "采购外包服务", en: "Procurement services" };
const pageDescription: Bilingual = {
  zh: "寻源、执行与协同外包；预约演示或商务联系定制方案",
  en: "Sourcing, execution, and collaboration—book a demo or contact us.",
};

const sectionServices: Bilingual = { zh: "核心服务内容", en: "Core services" };
const sectionProcess: Bilingual = { zh: "服务流程", en: "Service journey" };
const serviceFunctionsH: Bilingual = { zh: "服务功能", en: "Service functions" };
const appEffectsH: Bilingual = { zh: "应用效果", en: "Outcomes" };
const vsTitle: Bilingual = {
  zh: "传统采购 vs 道生数智服务",
  en: "Traditional procurement vs Daosoon",
};
const daosoonColumn: Bilingual = { zh: "道生数智服务", en: "Daosoon services" };

const services: {
  title: Bilingual;
  description: Bilingual;
  features: Bilingual[];
  benefits: Bilingual[];
}[] = [
  {
    title: { zh: "供应寻源对接", en: "Sourcing alignment" },
    description: {
      zh: "智能匹配供需双方，快速找到合适的供应资源",
      en: "Match supply and demand to find the right resources faster.",
    },
    features: [
      { zh: "供应资源智能匹配", en: "Smart resource matching" },
      { zh: "在线招投标", en: "Online bidding" },
      { zh: "供应商资质审核", en: "Qualification review" },
    ],
    benefits: [
      { zh: "寻源效率提升 70%", en: "~70% faster sourcing" },
      { zh: "供应周期缩短 50%", en: "~50% shorter cycles" },
    ],
  },
  {
    title: { zh: "供应采购服务", en: "Procurement execution" },
    description: {
      zh: "专业的供应采购执行，优化采购成本与流程",
      en: "Professional execution to optimize cost and process.",
    },
    features: [
      { zh: "批量采购执行", en: "Batch buying execution" },
      { zh: "价格谈判支持", en: "Negotiation support" },
      { zh: "采购合同管理", en: "Contract management" },
    ],
    benefits: [
      { zh: "采购成本降低 15-25%", en: "~15–25% lower cost" },
      { zh: "采购效率提升 40%", en: "~40% higher efficiency" },
    ],
  },
  {
    title: { zh: "供应商协同执行", en: "Supplier collaboration" },
    description: {
      zh: "在线协同平台，实现与供应商的高效沟通",
      en: "Online collaboration for faster communication.",
    },
    features: [
      { zh: "供应商自助门户", en: "Supplier self-service portal" },
      { zh: "订单协同执行", en: "Order collaboration" },
      { zh: "在线对账结算", en: "Online reconciliation" },
    ],
    benefits: [
      { zh: "协同效率提升 60%", en: "~60% better collaboration" },
      { zh: "对账时间缩短 70%", en: "~70% faster reconciliation" },
    ],
  },
  {
    title: { zh: "供应绩效管理", en: "Supplier performance" },
    description: {
      zh: "供应商全生命周期管理与绩效评估",
      en: "Lifecycle management and performance evaluation.",
    },
    features: [
      { zh: "多维度绩效评估", en: "Multi-dimensional KPIs" },
      { zh: "自动数据采集", en: "Automated data capture" },
      { zh: "绩效可视化看板", en: "Performance dashboards" },
    ],
    benefits: [
      { zh: "管理效率 +50%", en: "~+50% management efficiency" },
      { zh: "评估时间 -70%", en: "~−70% evaluation time" },
    ],
  },
];

const traditional: { title: Bilingual; description: Bilingual; issues: Bilingual[] } = {
  title: { zh: "传统采购", en: "Traditional procurement" },
  description: {
    zh: "人工询价、电话沟通、Excel 管理",
    en: "Manual RFQs, phone calls, spreadsheets.",
  },
  issues: [
    { zh: "效率低", en: "Low efficiency" },
    { zh: "数据分散", en: "Fragmented data" },
    { zh: "透明度低", en: "Low transparency" },
  ],
};

const modern: { description: Bilingual; benefits: Bilingual[] } = {
  description: {
    zh: "智能匹配、在线协同、数据驱动",
    en: "Smart matching, online collaboration, data-driven.",
  },
  benefits: [
    { zh: "效率提升 70%", en: "~70% efficiency lift" },
    { zh: "数据实时透明", en: "Real-time visibility" },
    { zh: "成本降低 15-25%", en: "~15–25% lower cost" },
  ],
};

const process: { title: Bilingual; desc: Bilingual }[] = [
  { title: { zh: "需求对接", en: "Intake" }, desc: { zh: "了解供应需求", en: "Understand needs" } },
  { title: { zh: "资源匹配", en: "Matching" }, desc: { zh: "智能匹配供应商", en: "Smart supplier match" } },
  { title: { zh: "资质审核", en: "Qualification" }, desc: { zh: "供应商评估", en: "Supplier assessment" } },
  { title: { zh: "价格谈判", en: "Negotiation" }, desc: { zh: "商务条款协商", en: "Commercial terms" } },
  { title: { zh: "签约执行", en: "Execute" }, desc: { zh: "合同签署与执行", en: "Contract & delivery" } },
  { title: { zh: "持续优化", en: "Improve" }, desc: { zh: "绩效管理与改进", en: "Performance loop" } },
];

const bottomStats: { value: string; title: Bilingual }[] = [
  { value: "15-25%", title: { zh: "采购成本降低", en: "Lower procurement cost" } },
  { value: "70%", title: { zh: "寻源效率提升", en: "Sourcing efficiency" } },
  { value: "50%", title: { zh: "供应周期缩短", en: "Shorter supply cycles" } },
  { value: "95%+", title: { zh: "供应商匹配准确率", en: "Match accuracy" } },
];

export function procurementStrings(locale: SiteLocale) {
  return {
    pageTitle: T(locale, pageTitle),
    pageDescription: T(locale, pageDescription),
    sectionServices: T(locale, sectionServices),
    sectionProcess: T(locale, sectionProcess),
    serviceFunctionsH: T(locale, serviceFunctionsH),
    appEffectsH: T(locale, appEffectsH),
    vsTitle: T(locale, vsTitle),
    daosoonColumn: T(locale, daosoonColumn),
    traditionalTitle: T(locale, traditional.title),
    traditionalDesc: T(locale, traditional.description),
    traditionalIssues: traditional.issues.map((x) => T(locale, x)),
    modernDesc: T(locale, modern.description),
    modernBenefits: modern.benefits.map((x) => T(locale, x)),
    process: process.map((p, i) => ({
      step: String(i + 1),
      title: T(locale, p.title),
      desc: T(locale, p.desc),
    })),
    services: services.map((sv) => ({
      title: T(locale, sv.title),
      description: T(locale, sv.description),
      features: sv.features.map((f) => T(locale, f)),
      benefits: sv.benefits.map((b) => T(locale, b)),
    })),
    bottomStats: bottomStats.map((st) => ({
      value: st.value,
      title: T(locale, st.title),
    })),
  };
}
