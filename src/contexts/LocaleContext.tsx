"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type SiteLocale = "zh" | "en";

const STORAGE_KEY = "daosoon-site-locale";

function readStored(): SiteLocale {
  if (typeof window === "undefined") return "zh";
  const v = localStorage.getItem(STORAGE_KEY);
  if (v === "en" || v === "zh") return v;
  return "zh";
}

type Value = { locale: SiteLocale; setLocale: (next: SiteLocale) => void };

const Ctx = createContext<Value | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SiteLocale>("zh");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- post-hydration restore
    setLocaleState(readStored());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  const setLocale = useCallback((next: SiteLocale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSiteLocale(): Value {
  const v = useContext(Ctx);
  if (!v) throw new Error("useSiteLocale must be used within LocaleProvider");
  return v;
}
