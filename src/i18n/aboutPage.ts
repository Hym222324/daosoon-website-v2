import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

const title: Bilingual = { zh: "关于道生数智", en: "About Daosoon" };
const subtitle: Bilingual = {
  zh: "端到端供应链 AI 应用服务商 · 用行业洞察与落地能力，陪伴制造企业走通数智化路径。",
  en: "End-to-end supply chain AI services—insights and delivery to walk manufacturers through digital transformation.",
};
const home: Bilingual = { zh: "首页", en: "Home" };
const crumb: Bilingual = { zh: "公司介绍", en: "About" };
const h1: Bilingual = { zh: "我们是谁", en: "Who we are" };
const p1: Bilingual = {
  zh: "道生数智科技（苏州）有限公司（英文简称 Daosoon）聚焦制造与供应链领域，提供 AI 驱动的协同平台 与 SRM 实施与运营服务，帮助客户降低采购与履约成本、提升协同效率、增强供应链韧性。",
  en: "Daosoon Digital Technology (Suzhou) Co., Ltd. focuses on manufacturing and supply chains, offering AI-driven collaboration platforms and SRM implementation & operations to reduce cost, improve efficiency, and build resilience.",
};
const h2: Bilingual = { zh: "核心团队与方法论", en: "Team & methodology" };
const p2: Bilingual = {
  zh: "核心成员长期深耕制造业信息化与供应链数字化，熟悉工程机械、汽车零部件、农业装备等细分场景。我们不堆砌概念，而是以价值地图、路线图、成熟度测评与避坑指南等工具，把「战略—流程—数据—系统—组织」串成一条可执行路径。",
  en: "Our leaders have deep experience in industrial IT and supply chain digitization across machinery, auto parts, ag equipment, and more. We connect strategy, process, data, systems, and organization into an executable path.",
};
const h3: Bilingual = { zh: "我们提供什么", en: "What we offer" };
const cta: Bilingual = { zh: "预约演示 / 业务咨询", en: "Book a demo / contact us" };

const L = {
  consult: { zh: "端到端咨询", en: "Consulting" },
  impl: { zh: "系统实施", en: "Implementation" },
  soft: { zh: "自研产品", en: "Software" },
  tech: { zh: "技术服务", en: "Technical services" },
  ai: { zh: "AI 应用", en: "AI" },
  proc: { zh: "采购业务服务", en: "Procurement services" },
  talent: { zh: "专业人才库", en: "Talent" },
  plat: { zh: "商业网络平台", en: "Network platform" },
  sol: { zh: "解决方案总览", en: "Solutions overview" },
} as const;

export function aboutStrings(locale: SiteLocale) {
  const l = (b: Bilingual) => T(locale, b);
  return {
    title: l(title),
    subtitle: l(subtitle),
    breadcrumb: [
      { label: l(home), href: "/" },
      { label: l(crumb), href: "/about" },
    ],
    h1: l(h1),
    p1: l(p1),
    h2: l(h2),
    p2: l(p2),
    h3: l(h3),
    cta: l(cta),
    linkConsult: l(L.consult),
    linkImpl: l(L.impl),
    linkSoft: l(L.soft),
    linkTech: l(L.tech),
    linkAi: l(L.ai),
    linkProc: l(L.proc),
    linkTalent: l(L.talent),
    linkPlat: l(L.plat),
    linkSol: l(L.sol),
  };
}
