import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

const h1Main: Bilingual = {
  zh: "企业数智化目标确认",
  en: "Align digital transformation goals",
};
const h1Accent: Bilingual = { zh: "方法论", en: "— framework" };
const heroP1: Bilingual = {
  zh: "借鉴「战略屋」思路：先锁定愿景与战略意图，再落到若干支柱能力，分解为可执行的战术课题与组织、流程、技术底座，避免脱离业务的工具堆砌。",
  en: "Inspired by a “strategy house”: anchor vision and intent, land on pillar capabilities, then break into executable tactics plus org, process, and technology foundations—avoid tools without business grounding.",
};
const heroP2: Bilingual = {
  zh: "本页以定性描述为主，便于管理层对齐语言；不承诺固定比例的提升数字。",
  en: "Qualitative by design for executive alignment; no fixed-percent uplift claims.",
};

const labelTop: Bilingual = { zh: "顶层", en: "Top" };
const labelPillars: Bilingual = { zh: "战略支柱", en: "Strategic pillars" };
const labelFoundation: Bilingual = {
  zh: "底座（组织 · 流程 · 技术）",
  en: "Foundation (org · process · tech)",
};
const tacticsTitle: Bilingual = {
  zh: "从战略到战术的分解",
  en: "From strategy to tactics",
};

const roof = {
  title: {
    zh: "愿景与战略意图",
    en: "Vision & strategic intent",
  },
  desc: {
    zh: "企业为何要做数智化：客户价值、产业位置与增长假设。",
    en: "Why digitize: customer value, industry position, and growth assumptions.",
  },
} as const satisfies { title: Bilingual; desc: Bilingual };

const pillars = [
  {
    title: { zh: "客户与产品", en: "Customers & products" },
    desc: {
      zh: "产品组合、交付承诺与客户体验如何被供应链兑现。",
      en: "How portfolio, delivery promises, and CX are fulfilled by the supply chain.",
    },
  },
  {
    title: { zh: "计划与履约", en: "Planning & fulfillment" },
    desc: {
      zh: "从需求刻画、S&OP 到排产、采购与物流的节奏一致。",
      en: "Rhythm from demand characterization and S&OP through scheduling, procurement, and logistics.",
    },
  },
  {
    title: { zh: "供应网络", en: "Supply network" },
    desc: {
      zh: "供应商、外协、仓储与运力如何组成可依赖的网络。",
      en: "Suppliers, subcontractors, warehousing, and capacity as a dependable network.",
    },
  },
  {
    title: { zh: "数据与合规", en: "Data & compliance" },
    desc: {
      zh: "可信数据、追溯与风险边界，支撑决策而不是报表堆砌。",
      en: "Trusted data, traceability, and risk boundaries that drive decisions—not report sprawl.",
    },
  },
] as const satisfies readonly { title: Bilingual; desc: Bilingual }[];

const foundation = [
  {
    title: { zh: "组织能力", en: "Organizational capability" },
    desc: {
      zh: "跨职能协同、岗位技能与变革节奏。",
      en: "Cross-functional collaboration, skills, and change cadence.",
    },
  },
  {
    title: { zh: "流程与制度", en: "Process & policy" },
    desc: {
      zh: "标准流程、例外升级与授权匹配。",
      en: "Standard flows, exception escalation, and aligned authority.",
    },
  },
  {
    title: { zh: "技术架构", en: "Technology architecture" },
    desc: {
      zh: "系统分层、集成边界与可持续演进。",
      en: "Layering, integration boundaries, and sustainable evolution.",
    },
  },
] as const satisfies readonly { title: Bilingual; desc: Bilingual }[];

const tactics = [
  {
    zh: "把战略语言翻译成可执行的跨部门课题清单",
    en: "Turn strategy language into an actionable cross-functional backlog.",
  },
  {
    zh: "明确每条课题的责任主体、节奏与验收口径",
    en: "Assign owners, cadence, and acceptance criteria for each item.",
  },
  {
    zh: "先对齐主流程与主数据，再扩展自动化与智能分析",
    en: "Align core processes and master data before scaling automation and analytics.",
  },
  {
    zh: "用试点闭环验证机制，再横向推广",
    en: "Prove mechanisms in pilots, then scale horizontally.",
  },
] as const satisfies readonly Bilingual[];

const ctaLine: Bilingual = {
  zh: "需要结合贵司现场，把「战略屋」落成一份可沟通的路线图？",
  en: "Want a communicable roadmap tailored to your context?",
};
const ctaBtn: Bilingual = { zh: "预约沟通", en: "Book a conversation" };
const ctaRoadmap: Bilingual = {
  zh: "查看阶段推进框架 →",
  en: "See phased rollout framework →",
};

export function valueMapStrings(locale: SiteLocale) {
  return {
    h1Main: T(locale, h1Main),
    h1Accent: T(locale, h1Accent),
    heroP1: T(locale, heroP1),
    heroP2: T(locale, heroP2),
    labelTop: T(locale, labelTop),
    labelPillars: T(locale, labelPillars),
    labelFoundation: T(locale, labelFoundation),
    tacticsTitle: T(locale, tacticsTitle),
    roofTitle: T(locale, roof.title),
    roofDesc: T(locale, roof.desc),
    pillars: pillars.map((p) => ({
      title: T(locale, p.title),
      desc: T(locale, p.desc),
    })),
    foundation: foundation.map((f) => ({
      title: T(locale, f.title),
      desc: T(locale, f.desc),
    })),
    tactics: tactics.map((t) => T(locale, t)),
    ctaLine: T(locale, ctaLine),
    ctaBtn: T(locale, ctaBtn),
    ctaRoadmap: T(locale, ctaRoadmap),
  };
}
