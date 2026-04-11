import type { SiteLocale } from "@/contexts/LocaleContext";

export type Bilingual = { zh: string; en: string };

export function T(locale: SiteLocale, b: Bilingual): string {
  return b[locale];
}
