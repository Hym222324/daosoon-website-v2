import type { Metadata } from "next";
import { Noto_Sans_SC, Inter } from "next/font/google";
import TopChromeProvider from "@/components/layout/TopChromeProvider";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "道生数智 Daosoon | 端到端供应链 AI 应用服务商",
    template: "%s | 道生数智",
  },
  description: "道生数智为制造及供应链企业提供 AI 驱动的协同平台与 SRM 实施服务。降低采购成本，提升协同效率，规避供应链风险。",
  keywords: ["供应链 AI 应用", "SRM 系统", "供应链数智化咨询", "离散制造", "流程制造"],
  authors: [{ name: "苏州道生数智科技有限公司" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {/* GitHub Pages / 浏览器易缓存根 HTML；提示客户端每次拉取最新文档 */}
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate, max-age=0"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
      </head>
      <body
        className={`${notoSansSC.variable} ${inter.variable} min-h-full flex flex-col`}
      >
        <AppProviders>
          <TopChromeProvider>{children}</TopChromeProvider>
        </AppProviders>
      </body>
    </html>
  );
}
