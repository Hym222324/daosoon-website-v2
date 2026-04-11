import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

const pageTitle: Bilingual = { zh: "技术服务", en: "Technical services" };
const pageDescription: Bilingual = {
  zh: "定制开发 · 云迁移 · 运维保障，让供应链数字系统真正跑稳、跑久。",
  en: "Custom build, cloud migration, and ops—systems that stay reliable.",
};

const pillars: { title: Bilingual; description: Bilingual; items: Bilingual[] }[] = [
  {
    title: { zh: "定制开发", en: "Custom development" },
    description: {
      zh: "围绕 SRM、协同门户、集成中间件等场景，提供贴合业务的定制化开发与迭代。",
      en: "Tailored builds for SRM, collaboration portals, and integration middleware.",
    },
    items: [
      { zh: "需求分析与原型设计", en: "Requirements & prototypes" },
      { zh: "前后端开发与联调", en: "Full-stack build & integration" },
      { zh: "与 ERP/MES 等系统集成", en: "ERP/MES integration" },
      { zh: "上线灰度与版本管理", en: "Gradual rollout & versioning" },
    ],
  },
  {
    title: { zh: "云迁移", en: "Cloud migration" },
    description: {
      zh: "将本地或异构云上的关键应用迁移至目标云环境，保障业务连续性与安全合规。",
      en: "Move critical apps with continuity, security, and compliance.",
    },
    items: [
      { zh: "架构评估与迁移路径", en: "Architecture assessment & path" },
      { zh: "数据迁移与双活验证", en: "Data migration & active-active tests" },
      { zh: "性能与安全基线", en: "Performance & security baselines" },
      { zh: "割接与回退预案", en: "Cutover & rollback plans" },
    ],
  },
  {
    title: { zh: "运维与优化", en: "Operations & optimization" },
    description: {
      zh: "7×24 运维值守、容量与监控、补丁与季度健康检查，持续优化系统可用性。",
      en: "24/7 ops, capacity, monitoring, patches, and quarterly health checks.",
    },
    items: [
      { zh: "监控告警与值班响应", en: "Monitoring & on-call" },
      { zh: "备份容灾与演练", en: "Backup, DR, and drills" },
      { zh: "性能调优与成本治理", en: "Tuning & cost governance" },
      { zh: "运维文档与知识转移", en: "Runbooks & knowledge transfer" },
    ],
  },
];

const boxTitle: Bilingual = {
  zh: "与咨询、实施、AI 应用如何协同？",
  en: "How we work with consulting, implementation, and AI",
};
const boxP1: Bilingual = {
  zh: "技术团队与供应链顾问、实施顾问同一套方法论对齐：先澄清业务目标与数据边界，再确定接口与 SLA，最后以可观测性与运维移交闭环，避免「上线即失联」。",
  en: "Engineers align with supply chain and implementation consultants: clarify goals and data boundaries, define interfaces and SLAs, then close with observability and handover—no “launch and vanish.”",
};
const boxP2: Bilingual = {
  zh: "相关案例与交付细节可在预约演示时索取《技术服务说明书》模板（脱敏版）。",
  en: "Ask for a redacted technical services brief during a demo.",
};

export function techServicesStrings(locale: SiteLocale) {
  return {
    pageTitle: T(locale, pageTitle),
    pageDescription: T(locale, pageDescription),
    pillars: pillars.map((p) => ({
      title: T(locale, p.title),
      description: T(locale, p.description),
      items: p.items.map((x) => T(locale, x)),
    })),
    boxTitle: T(locale, boxTitle),
    boxP1: T(locale, boxP1),
    boxP2: T(locale, boxP2),
  };
}
