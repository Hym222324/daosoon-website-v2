import type { SiteLocale } from "@/contexts/LocaleContext";
import { T } from "./core";
import type { Bilingual } from "./core";

const pageTitle: Bilingual = {
  zh: "供应协同咨询",
  en: "Supply collaboration consulting",
};
const pageDescription: Bilingual = {
  zh: "业务梳理、体系建设、业务辅导，助力企业供应链数字化转型",
  en: "Process, systems, and coaching for supply chain digital transformation.",
};
const capTitle: Bilingual = { zh: "我们的咨询能力", en: "Our consulting capabilities" };
const capSub: Bilingual = {
  zh: "基于 100+ 企业实践，提供端到端的供应链咨询解决方案",
  en: "Built on 100+ engagements—end-to-end supply chain consulting.",
};
const coreTitle: Bilingual = { zh: "核心咨询服务", en: "Core consulting services" };
const useCaseTitle: Bilingual = { zh: "行业应用场景", en: "Industry use cases" };
const solutionLabel: Bilingual = { zh: "解决方案：", en: "Solution: " };
const testimonialTitle: Bilingual = { zh: "客户反馈", en: "Client feedback" };

const services: {
  title: Bilingual;
  description: Bilingual;
  features: Bilingual[];
}[] = [
  {
    title: { zh: "业务诊断与规划", en: "Diagnostics & planning" },
    description: {
      zh: "深入分析企业供应链现状，识别关键痛点，制定科学改进路线图",
      en: "Assess the current state, pinpoint gaps, and define a practical roadmap.",
    },
    features: [
      { zh: "供应链流程诊断与审计", en: "Process diagnostics & audits" },
      { zh: "行业对标分析", en: "Industry benchmarking" },
      { zh: "数字化转型规划", en: "Digital transformation planning" },
      { zh: "ROI 预测与价值评估", en: "ROI and value estimation" },
    ],
  },
  {
    title: { zh: "体系建设与优化", en: "Systems & optimization" },
    description: {
      zh: "建立标准化、规范化的供应链管理体系，提升运营效率",
      en: "Standardize governance and operating models to lift efficiency.",
    },
    features: [
      { zh: "供应商管理体系建设", en: "Supplier management system design" },
      { zh: "采购流程标准化", en: "Procurement process standardization" },
      { zh: "绩效考核体系设计", en: "Performance metrics design" },
      { zh: "风险控制机制建立", en: "Risk control mechanisms" },
    ],
  },
  {
    title: { zh: "实施辅导与落地", en: "Implementation coaching" },
    description: {
      zh: "全程陪伴式辅导，确保方案有效落地执行",
      en: "Hands-on coaching to land changes with measurable outcomes.",
    },
    features: [
      { zh: "项目管理和指导", en: "Program management" },
      { zh: "关键用户培训", en: "Key user training" },
      { zh: "变革管理支持", en: "Change management" },
      { zh: "持续优化建议", en: "Continuous improvement guidance" },
    ],
  },
  {
    title: { zh: "AI 应用咨询", en: "AI advisory" },
    description: {
      zh: "结合 AI 技术，提供智能化转型咨询与实施指导",
      en: "AI-enabled transformation consulting and implementation guidance.",
    },
    features: [
      { zh: "AI 应用场景规划", en: "AI use-case planning" },
      { zh: "技术选型建议", en: "Technology selection" },
      { zh: "数据治理方案", en: "Data governance" },
      { zh: "AI 模型应用指导", en: "Model rollout guidance" },
    ],
  },
];

const capabilities: { title: Bilingual; description: Bilingual }[] = [
  {
    title: { zh: "精准诊断", en: "Precise diagnostics" },
    description: { zh: "500+ 项指标评估，全面识别问题", en: "500+ indicators to surface issues." },
  },
  {
    title: { zh: "标准化框架", en: "Proven frameworks" },
    description: { zh: "成熟的咨询服务方法论", en: "Mature consulting methodologies." },
  },
  {
    title: { zh: "资深团队", en: "Senior team" },
    description: { zh: "平均 10 年 + 行业经验", en: "10+ years average domain experience." },
  },
  {
    title: { zh: "数据驱动", en: "Data-driven" },
    description: { zh: "基于数据的科学决策", en: "Decisions grounded in data." },
  },
];

const useCases: { industry: Bilingual; challenge: Bilingual; solution: Bilingual }[] = [
  {
    industry: { zh: "离散制造", en: "Discrete manufacturing" },
    challenge: {
      zh: "产品复杂、多 BOM 管理、供应商协同困难",
      en: "Complex products, multi-BOM, weak supplier collaboration.",
    },
    solution: {
      zh: "建立标准化供应协同体系，引入 AI 智能排产和 SRM 协同平台，实现供应效率提升 40%",
      en: "Standardized collaboration, AI planning, and SRM—up to ~40% efficiency lift (indicative).",
    },
  },
  {
    industry: { zh: "流程制造", en: "Process manufacturing" },
    challenge: {
      zh: "配方复杂、质量追溯要求高、供应波动大",
      en: "Complex recipes, traceability, volatile supply.",
    },
    solution: {
      zh: "优化供应流程，建立 MES+ 供应链预测体系，质量追溯时间缩短 70%",
      en: "MES-linked forecasting—trace time cut ~70% (indicative).",
    },
  },
  {
    industry: { zh: "农业", en: "Agriculture" },
    challenge: {
      zh: "周期长、地域分散、质量标准难统一",
      en: "Long cycles, distributed origins, uneven quality standards.",
    },
    solution: {
      zh: "物联网 + 供应链匹配平台，实现全链路可追溯，供应周期缩短 60%",
      en: "IoT + matching platform—full-chain traceability, ~60% cycle reduction (indicative).",
    },
  },
];

const testimonials: { company: Bilingual; content: Bilingual; role: Bilingual }[] = [
  {
    company: { zh: "某上市制造企业", en: "A listed manufacturer" },
    content: {
      zh: "道生数智的咨询团队专业度高，帮助我们梳理了复杂的供应流程，建立了标准化的管理体系，实施 SRM 系统后采购成本降低 20%",
      en: "Daosoon helped untangle our supply processes, built a standard management system, and SRM cut procurement costs ~20%.",
    },
    role: { zh: "供应链总监", en: "VP Supply Chain" },
  },
  {
    company: { zh: "某大型农业企业", en: "A large agribusiness" },
    content: {
      zh: "从业务诊断到 AI 应用规划，全程伴随式辅导，让我们成功实现了供应链数字化转型，效果超出预期",
      en: "From diagnostics to AI planning, embedded coaching delivered a transformation beyond expectations.",
    },
    role: { zh: "CEO", en: "CEO" },
  },
];

export function consultingStrings(locale: SiteLocale) {
  return {
    pageTitle: T(locale, pageTitle),
    pageDescription: T(locale, pageDescription),
    capTitle: T(locale, capTitle),
    capSub: T(locale, capSub),
    coreTitle: T(locale, coreTitle),
    useCaseTitle: T(locale, useCaseTitle),
    solutionLabel: T(locale, solutionLabel),
    testimonialTitle: T(locale, testimonialTitle),
    services: services.map((s) => ({
      title: T(locale, s.title),
      description: T(locale, s.description),
      features: s.features.map((f) => T(locale, f)),
    })),
    capabilities: capabilities.map((c) => ({
      title: T(locale, c.title),
      description: T(locale, c.description),
    })),
    useCases: useCases.map((u) => ({
      industry: T(locale, u.industry),
      challenge: T(locale, u.challenge),
      solution: T(locale, u.solution),
    })),
    testimonials: testimonials.map((t) => ({
      company: T(locale, t.company),
      content: T(locale, t.content),
      role: T(locale, t.role),
    })),
  };
}
