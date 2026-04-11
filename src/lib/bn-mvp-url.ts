/**
 * BN-MVP（交易汇）独立应用入口。
 * 构建/启动前设置 NEXT_PUBLIC_BN_MVP_URL，例如 http://localhost:3000 或 https://bn.example.com
 */
export function getBnMvpProductUrl(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_BN_MVP_URL?.trim();
  if (!raw) return undefined;
  try {
    const u = new URL(raw);
    if (u.protocol !== "http:" && u.protocol !== "https:") return undefined;
    return u.href;
  } catch {
    return undefined;
  }
}

/** 与道生官网 `SiteLocale` 一致，供链接拼接（勿改值，交易汇侧按此读 query）。 */
export type BnMvpLinkLocale = "zh" | "en";

/**
 * 带 `locale` 查询参数的交易汇 URL，与官网语言一致；交易汇应用会优先读取该参数。
 */
export function getBnMvpProductUrlForLocale(locale: BnMvpLinkLocale): string | undefined {
  const base = getBnMvpProductUrl();
  if (!base) return undefined;
  try {
    const u = new URL(base);
    u.searchParams.set("locale", locale);
    return u.href;
  } catch {
    return undefined;
  }
}
