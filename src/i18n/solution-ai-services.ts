import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

const pageTitle: Bilingual = { zh: "AI 应用服务", en: "AI application services" };
const pageDescription: Bilingual = {
  zh: "AI 咨询、智能分析、场景落地，赋能供应链数字化转型",
  en: "AI consulting, analytics, and rollout for digital supply chains.",
};

const capTitle: Bilingual = {
  zh: "AI 技术能力（计算机视觉 · 供应链优化算法等）",
  en: "AI capabilities (CV, optimization, and more)",
};
const servicesTitle: Bilingual = { zh: "核心 AI 服务", en: "Core AI services" };
const serviceContentH: Bilingual = { zh: "服务内容", en: "Deliverables" };
const effectsH: Bilingual = { zh: "应用效果", en: "Outcomes" };
const processTitle: Bilingual = { zh: "AI 项目实施流程", en: "AI delivery process" };

const aiCapabilities: { title: Bilingual; desc: Bilingual }[] = [
  {
    title: { zh: "计算机视觉", en: "Computer vision" },
    desc: {
      zh: "来料与在制品外观检测、仓储与装载识别等场景",
      en: "Inbound/WIP inspection, warehouse and loading recognition.",
    },
  },
  {
    title: { zh: "供应链优化算法", en: "Supply chain optimization" },
    desc: {
      zh: "需求预测、库存与网络优化、排程与资源配置",
      en: "Forecasting, inventory/network optimization, scheduling.",
    },
  },
  {
    title: { zh: "机器学习", en: "Machine learning" },
    desc: {
      zh: "表观规律挖掘、异常检测与质量预警",
      en: "Pattern mining, anomaly detection, quality alerts.",
    },
  },
  {
    title: { zh: "知识与语言技术", en: "Knowledge & language" },
    desc: {
      zh: "合同与条款解析、知识检索与对话式助手",
      en: "Contract parsing, retrieval, conversational assistants.",
    },
  },
];

const aiServices: {
  title: Bilingual;
  description: Bilingual;
  color: string;
  services: Bilingual[];
  benefits: Bilingual[];
}[] = [
  {
    title: { zh: "AI 供应咨询", en: "AI supply advisory" },
    description: { zh: "AI 驱动的供应链战略与场景规划", en: "AI-led strategy and use-case planning." },
    color: "from-[#9C27B0] to-[#7B1FA2]",
    services: [
      { zh: "供应 AI 应用场景评估", en: "Use-case assessment" },
      { zh: "AI 技术选型建议", en: "Technology selection" },
      { zh: "数字化转型规划", en: "Digital roadmap" },
    ],
    benefits: [
      { zh: "AI 场景识别准确率 95%+", en: "95%+ use-case fit" },
      { zh: "技术方案适配度提升 60%", en: "~60% better solution fit" },
    ],
  },
  {
    title: { zh: "智能分析引擎", en: "Analytics engine" },
    description: { zh: "基于 AI 的供应数据智能分析", en: "AI-powered supply analytics." },
    color: "from-[#1E88E5] to-[#1565C0]",
    services: [
      { zh: "需求智能预测", en: "Demand forecasting" },
      { zh: "价格趋势分析", en: "Price trends" },
      { zh: "供应商风险预警", en: "Supplier risk alerts" },
    ],
    benefits: [
      { zh: "预测精度提升 20-30%", en: "20–30% forecast lift" },
      { zh: "风险识别提前 2-4 周", en: "2–4 weeks earlier risk signals" },
    ],
  },
  {
    title: { zh: "智能寻源匹配", en: "Smart sourcing match" },
    description: { zh: "AI 驱动的供应商智能匹配与推荐", en: "AI matching and recommendations." },
    color: "from-[#FF9800] to-[#F57C00]",
    services: [
      { zh: "需求 - 供应商智能匹配", en: "Demand–supplier matching" },
      { zh: "历史数据学习", en: "Learning from history" },
      { zh: "多维度供应商评估", en: "Multi-criteria evaluation" },
    ],
    benefits: [
      { zh: "寻源效率提升 70%", en: "~70% faster sourcing" },
      { zh: "供应商匹配准确率 95%+", en: "95%+ match accuracy" },
    ],
  },
  {
    title: { zh: "智能计划排产", en: "Intelligent planning" },
    description: { zh: "AI 优化生产计划与物料供应", en: "AI for plans and material supply." },
    color: "from-[#FF6B6B] to-[#EE5A24]",
    services: [
      { zh: "智能排产优化", en: "Scheduling optimization" },
      { zh: "物料需求预测", en: "Material forecasting" },
      { zh: "产能智能调度", en: "Capacity dispatch" },
    ],
    benefits: [
      { zh: "计划编制时间 -80%", en: "~−80% planning time" },
      { zh: "生产周期缩短 20-40%", en: "20–40% shorter cycles" },
    ],
  },
  {
    title: { zh: "智能合同分析", en: "Contract intelligence" },
    description: { zh: "NLP 技术自动分析供应合同", en: "NLP for supply contracts." },
    color: "from-[#4CAF50] to-[#43A047]",
    services: [
      { zh: "合同条款智能识别", en: "Clause detection" },
      { zh: "风险点自动标注", en: "Risk highlights" },
      { zh: "合规性检查", en: "Compliance checks" },
    ],
    benefits: [
      { zh: "合同审核时间 -70%", en: "~−70% review time" },
      { zh: "风险识别率 98%+", en: "98%+ risk detection" },
    ],
  },
  {
    title: { zh: "智能客服助手", en: "Assistants" },
    description: { zh: "AI 驱动的供应协同智能客服", en: "AI copilots for collaboration." },
    color: "from-[#2196F3] to-[#1976D2]",
    services: [
      { zh: "7x24 小时在线服务", en: "24/7 assistance" },
      { zh: "供应商咨询自动应答", en: "Auto answers for suppliers" },
      { zh: "订单状态查询", en: "Order status Q&A" },
    ],
    benefits: [
      { zh: "咨询响应速度 +50 倍", en: "50× faster responses" },
      { zh: "客服人力节省 60%", en: "~60% agent time saved" },
    ],
  },
];

const processSteps: { title: Bilingual; desc: Bilingual }[] = [
  { title: { zh: "场景评估", en: "Assess" }, desc: { zh: "识别 AI 应用场景", en: "Identify use cases" } },
  { title: { zh: "数据准备", en: "Data" }, desc: { zh: "数据质量评估", en: "Data quality review" } },
  { title: { zh: "模型开发", en: "Model" }, desc: { zh: "AI 模型训练", en: "Model training" } },
  { title: { zh: "系统集成", en: "Integrate" }, desc: { zh: "与现有系统对接", en: "System integration" } },
  { title: { zh: "上线运行", en: "Launch" }, desc: { zh: "部署与验证", en: "Deploy & validate" } },
  { title: { zh: "持续优化", en: "Improve" }, desc: { zh: "迭代与改进", en: "Iterate" } },
];

const statLabels: Bilingual[] = [
  { zh: "AI 模型已部署", en: "Models in production" },
  { zh: "AI 实战经验", en: "Years of AI delivery" },
  { zh: "场景匹配准确率", en: "Scenario match rate" },
  { zh: "分析效率提升", en: "Analytics speed-up" },
];

const statValuesZh = ["50+", "3 年+", "95%", "10 倍+"] as const;
const statValuesEn = ["50+", "3+ yrs", "95%", "10×+"] as const;

export function aiServicesStrings(locale: SiteLocale) {
  const d = (b: Bilingual) => T(locale, b);
  const vals = locale === "en" ? statValuesEn : statValuesZh;
  return {
    pageTitle: d(pageTitle),
    pageDescription: d(pageDescription),
    capTitle: d(capTitle),
    servicesTitle: d(servicesTitle),
    serviceContentH: d(serviceContentH),
    effectsH: d(effectsH),
    processTitle: d(processTitle),
    capabilities: aiCapabilities.map((c) => ({ title: d(c.title), desc: d(c.desc) })),
    services: aiServices.map((s) => ({
      title: d(s.title),
      description: d(s.description),
      color: s.color,
      services: s.services.map((x) => d(x)),
      benefits: s.benefits.map((x) => d(x)),
    })),
    process: processSteps.map((p, i) => ({
      step: String(i + 1),
      title: d(p.title),
      desc: d(p.desc),
    })),
    stats: statLabels.map((l, i) => ({ value: vals[i]!, label: d(l) })),
  };
}
