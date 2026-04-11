import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

const title: Bilingual = { zh: "论坛", en: "Forum" };
const subtitle: Bilingual = {
  zh: "发帖需登录（PRD：手机号注册）· 帖子详情页可按需配置 noindex",
  en: "Posting requires sign-in (phone per PRD). Thread pages can be set to noindex.",
};
const home: Bilingual = { zh: "首页", en: "Home" };
const community: Bilingual = { zh: "社区", en: "Community" };
const bodyBefore: Bilingual = { zh: "论坛与 ", en: "The forum sits alongside the " };
const bodyAfter: Bilingual = {
  zh: " 同属社区模块。当前静态站不提供真实登录；对接系统后可在此展示分版列表与最新主题。",
  en: " in the same community module. This static preview has no real login yet; once integrated, boards and latest topics will appear here.",
};
const communityLink: Bilingual = { zh: "社区首页", en: "Community home" };
const cta: Bilingual = { zh: "申请内测 / 企业入驻", en: "Request beta / enterprise access" };

export function forumStrings(locale: SiteLocale) {
  return {
    title: T(locale, title),
    subtitle: T(locale, subtitle),
    breadcrumb: [
      { label: T(locale, home), href: "/" },
      { label: T(locale, community), href: "/community" },
      { label: T(locale, title), href: "/forum" },
    ],
    bodyBefore: T(locale, bodyBefore),
    bodyAfter: T(locale, bodyAfter),
    communityLink: T(locale, communityLink),
    cta: T(locale, cta),
  };
}
