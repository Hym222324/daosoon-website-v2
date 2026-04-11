import type { Bilingual } from "./core";

export const nav = {
  solutions: { zh: "解决方案", en: "Solutions" },
  insights: { zh: "行业洞察", en: "Insights" },
  cases: { zh: "案例", en: "Cases" },
  resources: { zh: "资源", en: "Resources" },
  forum: { zh: "论坛", en: "Forum" },
  connect: { zh: "联系我们", en: "Contact" },
  langAria: { zh: "语言", en: "Language" },
  menuCn: { zh: "CN", en: "CN" },
  menuEn: { zh: "EN", en: "EN" },
} as const satisfies Record<string, Bilingual>;
