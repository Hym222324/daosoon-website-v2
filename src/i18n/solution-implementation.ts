import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";
import { solutionsHub } from "./solutionsHub";

const pageTitle: Bilingual = {
  zh: "供应链端到端实施服务",
  en: "End-to-end supply chain implementation",
};
const pageDescription: Bilingual = {
  zh: "APS / ERP / SRM / MOM、WMS / TMS 等系统的选型、集成与项目管理",
  en: "Selection, integration, and program management for APS, ERP, SRM, MOM, WMS, TMS, and more.",
};

const processTitle: Bilingual = { zh: "标准实施流程", en: "Standard delivery process" };
const coreTitle: Bilingual = { zh: "核心实施服务", en: "Core implementation services" };
const benefitsHeading: Bilingual = { zh: "核心优势", en: "Key benefits" };

const processSteps: { title: Bilingual; desc: Bilingual }[] = [
  { title: { zh: "需求分析", en: "Discovery" }, desc: { zh: "深入调研业务需求", en: "Deep-dive on requirements" } },
  { title: { zh: "方案设计", en: "Design" }, desc: { zh: "定制化解决方案", en: "Tailored solution design" } },
  { title: { zh: "系统配置", en: "Configure" }, desc: { zh: "系统搭建与集成", en: "Build and integrate" } },
  { title: { zh: "数据迁移", en: "Migrate" }, desc: { zh: "历史数据导入", en: "Historical data load" } },
  { title: { zh: "测试验证", en: "Test" }, desc: { zh: "UAT 测试与优化", en: "UAT and tuning" } },
  { title: { zh: "培训上线", en: "Launch" }, desc: { zh: "用户培训与交付", en: "Training and go-live" } },
  { title: { zh: "持续支持", en: "Support" }, desc: { zh: "运维优化服务", en: "Ongoing optimization" } },
];

type ImplBlock = {
  title: Bilingual;
  description: Bilingual;
  benefits: Bilingual[];
  features: Bilingual[];
};

const implementations: ImplBlock[] = [
  {
    title: { zh: "APS 高级计划排产", en: "APS advanced planning" },
    description: {
      zh: "基于约束理论的智能排产系统，优化生产计划和物料供应",
      en: "Constraint-based intelligent scheduling for plans and material supply.",
    },
    benefits: [
      { zh: "缩短生产周期 20-40%", en: "20–40% shorter production cycles" },
      { zh: "提高设备利用率 15-30%", en: "15–30% higher asset utilization" },
      { zh: "降低在制品库存 30-50%", en: "30–50% lower WIP inventory" },
    ],
    features: [
      { zh: "有限产能排产", en: "Finite-capacity scheduling" },
      { zh: "多约束优化", en: "Multi-constraint optimization" },
      { zh: "智能调度算法", en: "Smart scheduling algorithms" },
      { zh: "可视化排产界面", en: "Visual planning UI" },
    ],
  },
  {
    title: { zh: "SRM 供应商关系管理", en: "SRM" },
    description: {
      zh: "全流程供应商协同平台，提升供应链响应速度",
      en: "End-to-end supplier collaboration for faster response.",
    },
    benefits: [
      { zh: "采购成本降低 15-25%", en: "15–25% lower procurement cost" },
      { zh: "供应商响应速度提升 50%", en: "~50% faster supplier response" },
      { zh: "采购周期缩短 40-60%", en: "40–60% shorter procurement cycles" },
    ],
    features: [
      { zh: "供应商自助门户", en: "Supplier self-service portal" },
      { zh: "在线寻源招标", en: "Online sourcing & bidding" },
      { zh: "绩效考核管理", en: "Performance management" },
      { zh: "协同采购执行", en: "Collaborative execution" },
    ],
  },
  {
    title: { zh: "WMS 仓储管理系统", en: "WMS" },
    description: {
      zh: "智能仓储解决方案，优化库存管理和物流效率",
      en: "Smart warehousing for inventory and logistics efficiency.",
    },
    benefits: [
      { zh: "库存准确率 99%+", en: "99%+ inventory accuracy" },
      { zh: "拣货效率提升 50%", en: "~50% faster picking" },
      { zh: "仓储空间利用提升 30%", en: "~30% better space use" },
    ],
    features: [
      { zh: "入库管理", en: "Inbound" },
      { zh: "库存管理", en: "Inventory control" },
      { zh: "出库管理", en: "Outbound" },
      { zh: "智能拣选", en: "Smart picking" },
    ],
  },
  {
    title: { zh: "TMS 运输管理系统", en: "TMS" },
    description: {
      zh: "智能运输调度与跟踪，优化物流配送",
      en: "Transport scheduling and tracking for better logistics.",
    },
    benefits: [
      { zh: "运输成本降低 10-20%", en: "10–20% lower transport cost" },
      { zh: "车辆利用率提升 25%", en: "~25% better fleet utilization" },
      { zh: "配送准时率 95%+", en: "95%+ on-time delivery" },
    ],
    features: [
      { zh: "智能路径规划", en: "Route optimization" },
      { zh: "运输调度优化", en: "Dispatch optimization" },
      { zh: "车辆实时跟踪", en: "Live vehicle tracking" },
      { zh: "运费结算管理", en: "Freight settlement" },
    ],
  },
  {
    title: { zh: "MOM 制造运营管理系统", en: "MOM / manufacturing operations" },
    description: {
      zh: "生产全流程数字化管理，提升制造执行力",
      en: "Digital manufacturing execution end-to-end.",
    },
    benefits: [
      { zh: "生产效率提升 15-25%", en: "15–25% higher productivity" },
      { zh: "质量追溯时间缩短 70%", en: "~70% faster traceability" },
      { zh: "设备 OEE 提升 20%", en: "~20% higher OEE" },
    ],
    features: [
      { zh: "生产计划管理", en: "Production planning" },
      { zh: "质量管理", en: "Quality management" },
      { zh: "设备管理", en: "Equipment management" },
      { zh: "数据采集", en: "Data acquisition" },
    ],
  },
  {
    title: { zh: "ERP 系统实施", en: "ERP implementation" },
    description: {
      zh: "企业资源计划系统集成和优化",
      en: "ERP integration and optimization.",
    },
    benefits: [
      { zh: "业务流程一体化", en: "Integrated business processes" },
      { zh: "数据准确性提升", en: "Higher data accuracy" },
      { zh: "决策效率提高", en: "Faster decisions" },
    ],
    features: [
      { zh: "财务集成", en: "Finance integration" },
      { zh: "供应链集成", en: "Supply chain integration" },
      { zh: "生产制造集成", en: "Manufacturing integration" },
      { zh: "报表分析", en: "Reporting & analytics" },
    ],
  },
];

const statLabels: Bilingual[] = [
  { zh: "成功实施项目", en: "Delivered programs" },
  { zh: "项目按时交付率", en: "On-time delivery rate" },
  { zh: "实施经验", en: "Years of delivery" },
  { zh: "客户满意度", en: "Client satisfaction" },
];

const statValues = ["100+", "98%", "10 年 +", "100%"] as const;
const statValuesEn = ["100+", "98%", "10+ yrs", "100%"] as const;

export function implementationStrings(locale: SiteLocale) {
  const d = (b: Bilingual) => T(locale, b);
  const vals = locale === "en" ? statValuesEn : statValues;
  return {
    pageTitle: d(pageTitle),
    pageDescription: d(pageDescription),
    processTitle: d(processTitle),
    coreTitle: d(coreTitle),
    learnMore: d(solutionsHub.learnMore),
    benefitsHeading: d(benefitsHeading),
    process: processSteps.map((p, i) => ({
      step: String(i + 1),
      title: d(p.title),
      desc: d(p.desc),
    })),
    implementations: implementations.map((impl) => ({
      title: d(impl.title),
      description: d(impl.description),
      benefits: impl.benefits.map((b) => d(b)),
      features: impl.features.map((f) => d(f)),
    })),
    stats: statLabels.map((label, i) => ({
      value: vals[i]!,
      label: d(label),
    })),
  };
}
