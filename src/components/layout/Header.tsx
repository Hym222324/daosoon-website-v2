"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import DaosoonWordmark from "@/components/brand/DaosoonWordmark";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { T } from "@/i18n/core";
import { nav } from "@/i18n/nav";

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function LangMenu({
  open,
  onClose,
  align = "right",
}: {
  open: boolean;
  onClose: () => void;
  align?: "right" | "left";
}) {
  const { locale, setLocale } = useSiteLocale();
  if (!open) return null;
  const pos = align === "right" ? "right-0" : "left-0";
  return (
    <div
      className={`absolute ${pos} top-full z-[80] mt-2 min-w-[7rem] rounded-lg border border-gray-200 bg-white py-1 shadow-lg`}
      role="menu"
    >
      <button
        type="button"
        role="menuitem"
        className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${locale === "zh" ? "font-semibold text-[#1E88E5]" : "text-[#1A1A1A]"}`}
        onClick={() => {
          setLocale("zh");
          onClose();
        }}
      >
        {T(locale, nav.menuCn)}
      </button>
      <button
        type="button"
        role="menuitem"
        className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${locale === "en" ? "font-semibold text-[#1E88E5]" : "text-[#1A1A1A]"}`}
        onClick={() => {
          setLocale("en");
          onClose();
        }}
      >
        {T(locale, nav.menuEn)}
      </button>
    </div>
  );
}

export default function Header() {
  const { locale } = useSiteLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langOpenDesktop, setLangOpenDesktop] = useState(false);
  const [langOpenMobile, setLangOpenMobile] = useState(false);
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  const navItems = useMemo(
    () => [
      { name: T(locale, nav.solutions), href: "/solutions" },
      { name: T(locale, nav.insights), href: "/insights" },
      { name: T(locale, nav.cases), href: "/cases" },
      { name: T(locale, nav.resources), href: "/resources" },
      { name: T(locale, nav.forum), href: "/forum" },
      { name: T(locale, nav.connect), href: "/connect" },
    ],
    [locale],
  );

  useEffect(() => {
    if (!langOpenDesktop && !langOpenMobile) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        !desktopLangRef.current?.contains(t) &&
        !mobileLangRef.current?.contains(t)
      ) {
        setLangOpenDesktop(false);
        setLangOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [langOpenDesktop, langOpenMobile]);

  return (
    <header className="w-full border-b border-gray-200/90 bg-white backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <DaosoonWordmark showTagline />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="cursor-pointer text-[#1B2A8D] transition-colors hover:text-[#283DB8]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block relative" ref={desktopLangRef}>
            <button
              type="button"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-[#666666] transition-colors hover:bg-gray-100 hover:text-[#1E88E5]"
              aria-label={T(locale, nav.langAria)}
              aria-expanded={langOpenDesktop}
              aria-haspopup="menu"
              onClick={() => setLangOpenDesktop((v) => !v)}
            >
              <GlobeIcon className="h-6 w-6" />
            </button>
            <LangMenu
              open={langOpenDesktop}
              onClose={() => setLangOpenDesktop(false)}
              align="right"
            />
          </div>

          <button
            className="lg:hidden p-2 cursor-pointer"
            type="button"
            aria-label={locale === "zh" ? "打开菜单" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="cursor-pointer font-medium text-[#1B2A8D] transition-colors hover:text-[#283DB8]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative pt-2" ref={mobileLangRef}>
                <button
                  type="button"
                  className="flex w-full items-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-left text-[#1A1A1A] font-medium hover:bg-gray-50"
                  aria-expanded={langOpenMobile}
                  aria-haspopup="menu"
                  onClick={() => setLangOpenMobile((v) => !v)}
                >
                  <GlobeIcon className="h-5 w-5 shrink-0 text-[#666666]" />
                  <span>{T(locale, nav.langAria)}</span>
                </button>
                <LangMenu
                  open={langOpenMobile}
                  onClose={() => {
                    setLangOpenMobile(false);
                    setIsMenuOpen(false);
                  }}
                  align="left"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
