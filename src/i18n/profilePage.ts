import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

const home: Bilingual = { zh: "首页", en: "Home" };
const community: Bilingual = { zh: "社区", en: "Community" };
const title: Bilingual = { zh: "个人中心", en: "Profile" };
const subtitle: Bilingual = {
  zh: "登录后查看：我的帖子 · 我的收藏 · 积分记录",
  en: "After sign-in: my posts · favorites · points",
};
const bodyBefore: Bilingual = {
  zh: "依 PRD，个人中心在社区账号体系就绪后启用。您可先通过 ",
  en: "Per PRD, profile opens when community accounts are ready. You can ",
};
const connectLink: Bilingual = { zh: "连接道生", en: "contact Daosoon" };
const bodyAfter: Bilingual = {
  zh: " 留下联系方式，获取社区内测或企业批量开通方案。",
  en: " to leave your details for community beta or enterprise rollout.",
};

export function profileStrings(locale: SiteLocale) {
  return {
    title: T(locale, title),
    subtitle: T(locale, subtitle),
    breadcrumb: [
      { label: T(locale, home), href: "/" },
      { label: T(locale, community), href: "/community" },
      { label: T(locale, title), href: "/profile" },
    ],
    bodyBefore: T(locale, bodyBefore),
    connectLink: T(locale, connectLink),
    bodyAfter: T(locale, bodyAfter),
  };
}
