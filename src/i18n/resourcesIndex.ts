import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";
import { resourceHome, resourcesSection } from "./home";

const home: Bilingual = { zh: "首页", en: "Home" };
const crumb: Bilingual = { zh: "资源", en: "Resources" };
const subtitle: Bilingual = {
  zh: "列表数据来自 content/resources.json，可在 /admin 后台或 GitHub 上编辑；发布后开始构建部署。",
  en: "List data comes from content/resources.json—edit in /admin or GitHub; deploy after publish.",
};
const filterAll: Bilingual = { zh: "筛选：全部", en: "Filter: All" };
const filterHint: Bilingual = {
  zh: "报告 · 趋势 · 公开课 · 论坛",
  en: "Reports · Trends · Webinars · Forum",
};

export function resourcesIndexStrings(locale: SiteLocale) {
  return {
    title: T(locale, resourcesSection.title),
    subtitle: T(locale, subtitle),
    breadcrumb: [
      { label: T(locale, home), href: "/" },
      { label: T(locale, crumb), href: "/resources" },
    ],
    filterAll: T(locale, filterAll),
    filterHint: T(locale, filterHint),
    download: T(locale, resourcesSection.download),
    subscribe: T(locale, resourcesSection.subscribe),
  };
}

/** Bilingual overlay for known resource hrefs; otherwise null (use JSON zh). */
export function resourceListOverlay(locale: SiteLocale, href: string) {
  const o = resourceHome[href];
  if (!o) return null;
  return {
    type: T(locale, o.type),
    title: T(locale, o.title),
    action: T(locale, o.action),
  };
}
