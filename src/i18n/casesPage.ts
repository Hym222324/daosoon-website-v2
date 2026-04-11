import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

const title: Bilingual = { zh: "成功实践", en: "Success stories" };
const subtitle: Bilingual = {
  zh: "精讲少量标杆案例，用可验证的业务结果呈现落地能力（数据为业务沟通口径，实施以合同约定为准）。",
  en: "A few flagship stories with verifiable outcomes (indicative metrics; subject to contracts).",
};
const home: Bilingual = { zh: "首页", en: "Home" };
const casesCrumb: Bilingual = { zh: "案例", en: "Cases" };
const intro: Bilingual = {
  zh: "PRD 强调以「深度案例」替代简单 Logo 墙。以下案例均可在详情页查看背景、挑战、方案要点与分阶段里程碑结构。",
  en: "Depth beats a logo wall—each story includes context, challenges, approach, and milestones.",
};
const viewCase: Bilingual = { zh: "查看案例详情 →", en: "View case →" };
const cta: Bilingual = { zh: "预约专家咨询", en: "Book experts" };

const cases: { name: Bilingual; tag: Bilingual; result: Bilingual; href: string }[] = [
  {
    name: { zh: "中联重科", en: "Zoomlion" },
    tag: { zh: "高端装备 / 工程机械", en: "High-end equipment" },
    result: {
      zh: "采购周期缩短约 25%，供应商响应速度提升约 40%",
      en: "~25% shorter procurement cycles; ~40% faster supplier response (indicative).",
    },
    href: "/case/zoomlion",
  },
  {
    name: { zh: "蔚来汽车", en: "NIO" },
    tag: { zh: "新能源汽车", en: "EV" },
    result: {
      zh: "寻源效率提升约 50%，库存周转率提高约 30%",
      en: "~50% sourcing efficiency; ~30% inventory turns (indicative).",
    },
    href: "/case/nio",
  },
  {
    name: { zh: "农业研究院中农机", en: "CAAS agricultural machinery" },
    tag: { zh: "农业装备研发", en: "Ag equipment R&D" },
    result: {
      zh: "采购成本降低约 18%，供应商准入周期缩短约 60%",
      en: "~18% lower procurement cost; ~60% shorter supplier onboarding (indicative).",
    },
    href: "/case/caas",
  },
];

export function casesStrings(locale: SiteLocale) {
  return {
    title: T(locale, title),
    subtitle: T(locale, subtitle),
    breadcrumb: [
      { label: T(locale, home), href: "/" },
      { label: T(locale, casesCrumb), href: "/cases" },
    ],
    intro: T(locale, intro),
    viewCase: T(locale, viewCase),
    cta: T(locale, cta),
    cases: cases.map((c) => ({
      name: T(locale, c.name),
      tag: T(locale, c.tag),
      result: T(locale, c.result),
      href: c.href,
    })),
  };
}
