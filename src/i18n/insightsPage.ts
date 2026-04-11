import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

const title: Bilingual = { zh: "行业洞察", en: "Industry insights" };
const subtitle: Bilingual = {
  zh: "以行业深度分析建立信任——用洞察替代空泛口号，用可落地的路径替代泛泛而谈。",
  en: "Depth over slogans—actionable paths over generic claims.",
};
const home: Bilingual = { zh: "首页", en: "Home" };
const intro: Bilingual = {
  zh: "行业洞察与首页「我们懂您的行业」模块呼应。以下三个领域为重点深耕方向，正文按 PRD 建议扩展至约 1500–2000 字，并可持续接入 CMS。",
  en: "These three sectors mirror our homepage focus. Long-form content can expand to 1.5k–2k words and connect to a CMS later.",
};
const readMore: Bilingual = { zh: "阅读全文 →", en: "Read more →" };
const foot: Bilingual = {
  zh: "后续可对接 CMS，按「行业 / 主题 / 时间」筛选并扩展更多长文与白皮书摘要。",
  en: "Later: CMS filters by industry, topic, and time—plus whitepaper digests.",
};

const industries: { title: Bilingual; desc: Bilingual; href: string }[] = [
  {
    title: { zh: "离散制造", en: "Discrete manufacturing" },
    desc: {
      zh: "多品种小批量、BOM 复杂、变更频繁下的协同与计划挑战。",
      en: "High mix, complex BOMs, frequent changes—planning and collaboration challenges.",
    },
    href: "/discrete-manufacturing",
  },
  {
    title: { zh: "流程制造", en: "Process manufacturing" },
    desc: {
      zh: "连续生产、配方与批次追溯、设备效率与原料波动。",
      en: "Continuous production, batch traceability, OEE, and raw material variability.",
    },
    href: "/process-manufacturing",
  },
  {
    title: { zh: "农业与产地供应链", en: "Agriculture & origin supply chains" },
    desc: {
      zh: "季节性、产地分散与质量标准化，产销协同与冷链。",
      en: "Seasonality, distributed origins, quality standards, and cold chain alignment.",
    },
    href: "/agriculture",
  },
];

export function insightsStrings(locale: SiteLocale) {
  return {
    title: T(locale, title),
    subtitle: T(locale, subtitle),
    breadcrumb: [
      { label: T(locale, home), href: "/" },
      { label: T(locale, title), href: "/insights" },
    ],
    intro: T(locale, intro),
    readMore: T(locale, readMore),
    foot: T(locale, foot),
    industries: industries.map((x) => ({
      title: T(locale, x.title),
      desc: T(locale, x.desc),
      href: x.href,
    })),
  };
}
