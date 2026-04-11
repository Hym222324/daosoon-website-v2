"use client";

import Link from "next/link";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import { footer as f } from "@/i18n/footer";
import { SITE_LOGO_PATH } from "@/lib/site-logo";
import { withBasePath } from "@/lib/public-path";

export default function Footer() {
  const { locale } = useSiteLocale();
  const t = (b: (typeof f)[keyof typeof f]) => T(locale, b);

  return (
    <footer
      className="relative overflow-hidden text-gray-300 py-12 px-4 border-t border-white/10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0c1320]/52" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1320]/38 via-[#0c1320]/48 to-[#0c1320]/62" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Link
                href="/"
                className="inline-flex max-w-full flex-wrap items-center gap-3 hover:opacity-90 transition-opacity"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- brand wordmark PNG */}
                <img
                  src={withBasePath(SITE_LOGO_PATH)}
                  alt="DAOSOON"
                  width={640}
                  height={160}
                  className="h-10 w-auto max-w-[min(100%,220px)] shrink-0 object-contain object-left sm:h-11 sm:max-w-[min(100%,260px)]"
                />
                <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
                  {t(f.brandBesideLogo)}
                </span>
              </Link>
            </div>
            <p className="text-sm">{t(f.company)}</p>
            <p className="text-sm mt-2">{t(f.tagline)}</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t(f.colSolutions)}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors cursor-pointer">
                  {t(f.linkConsulting)}
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/implementation"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t(f.linkImplementation)}
                </Link>
              </li>
              <li>
                <Link href="/solutions/software" className="hover:text-white transition-colors cursor-pointer">
                  {t(f.linkSoftware)}
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-services" className="hover:text-white transition-colors cursor-pointer">
                  {t(f.linkAi)}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t(f.colAbout)}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors cursor-pointer">
                  {t(f.linkAbout)}
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-white transition-colors cursor-pointer">
                  {t(f.linkCases)}
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors cursor-pointer">
                  {t(f.linkInsights)}
                </Link>
              </li>
              <li>
                <Link href="/connect" className="hover:text-white transition-colors cursor-pointer">
                  {t(f.linkCareers)}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t(f.colContact)}</h4>
            <ul className="space-y-2 text-sm">
              <li>{t(f.emailLabel)}</li>
              <li>{t(f.phoneLabel)}</li>
              <li>{t(f.addressLabel)}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">{t(f.copyright)}</p>
          <p className="text-sm mt-2 md:mt-0">{t(f.icp)}</p>
        </div>
      </div>
    </footer>
  );
}
