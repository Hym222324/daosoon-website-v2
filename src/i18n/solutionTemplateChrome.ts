import type { Bilingual } from "./core";

export const solutionTemplateChrome = {
  backToList: { zh: "返回服务列表", en: "Back to solutions" },
  linkDemo: { zh: "预约演示", en: "Book a demo" },
  linkOverview: { zh: "服务介绍", en: "Overview" },
  linkCases: { zh: "成功案例", en: "Case studies" },
  badgeHot: { zh: "热门", en: "Hot" },
  ctaTitle: { zh: "需要进一步了解？", en: "Want to learn more?" },
  ctaSub: {
    zh: "预约专家咨询，获取详细的产品资料和案例分享",
    en: "Book experts for detailed materials and case walkthroughs.",
  },
  ctaBtn: { zh: "预约演示", en: "Book a demo" },
} as const satisfies Record<string, Bilingual>;
