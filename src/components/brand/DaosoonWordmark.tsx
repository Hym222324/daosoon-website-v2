"use client";

import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import { footer as footerI18n } from "@/i18n/footer";
import { SITE_LOGO_PATH } from "@/lib/site-logo";
import { withBasePath } from "@/lib/public-path";

type DaosoonWordmarkProps = {
  theme?: "light" | "dark";
  className?: string;
  /** Logo 右侧公司名称（`footer.brandBesideLogo`）；页脚等场景可关 */
  showTagline?: boolean;
};

export default function DaosoonWordmark({
  theme = "light",
  className = "",
  showTagline = true,
}: DaosoonWordmarkProps) {
  const { locale } = useSiteLocale();
  const wrapperClass =
    theme === "dark"
      ? "inline-flex items-center gap-2 rounded-md bg-white px-2 py-1"
      : "inline-flex items-center gap-2";

  const logoClass =
    theme === "dark"
      ? "h-10 w-auto max-w-[min(100%,280px)] object-contain object-left sm:h-11"
      : "h-9 w-auto max-w-[min(100%,280px)] object-contain object-left sm:h-10";

  /** 与品牌 logo 字标深蓝一致 */
  const taglineClass =
    "shrink-0 text-sm font-semibold tracking-tight text-[#1B2A8D] sm:text-base";

  return (
    <div className={`${wrapperClass} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={withBasePath(SITE_LOGO_PATH)} alt="DAOSOON" className={logoClass} />
      {showTagline ? (
        <span className={taglineClass}>{T(locale, footerI18n.brandBesideLogo)}</span>
      ) : null}
    </div>
  );
}
