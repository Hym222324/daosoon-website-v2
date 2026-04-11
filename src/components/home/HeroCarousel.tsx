"use client";

import { useEffect, useState } from "react";
import {
  Boxes,
  Cpu,
  Lightbulb,
  Share2,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { withBasePath } from "@/lib/public-path";

const SLIDE_MS = 6500;

export type HeroSlide = {
  id: string;
  /** `public/hero-carousel/` 下的文件名 */
  image: string;
  titleEn: string;
  titleZh: string;
  caption: string;
  captionEn: string;
  /** 叠在照片上的色罩（保持品牌感与对比度） */
  gradient: string;
  accent: string;
  Icon: LucideIcon;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "connected-customer",
    image: "connected-customer.jpg",
    titleEn: "Connected Customer",
    titleZh: "链接客户",
    caption: "以客户为中心的协同服务与可信体验，贯穿销售、交付与服务全旅程。",
    captionEn:
      "Customer-centric collaboration and trusted experiences across sales, delivery, and service.",
    gradient: "from-[#0c1929]/42 via-[#132f4c]/16 to-transparent",
    accent: "#3d9eff",
    Icon: Users,
  },
  {
    id: "product-development",
    image: "product-development.png",
    titleEn: "Product Development",
    titleZh: "产品研发",
    caption: "以产品结构的数据为核心的制造业数字孪生基础。",
    captionEn: "Product-structure data as the foundation for manufacturing digital twins.",
    gradient: "from-[#0d2137]/42 via-[#153250]/16 to-transparent",
    accent: "#5dcee6",
    Icon: Lightbulb,
  },
  {
    id: "synchronized-planning",
    image: "synchronized-planning.jpg",
    titleEn: "Synchronized Planning",
    titleZh: "同步计划",
    caption: "产销协同、排程与供应链控制塔视角下的计划一体化与节拍对齐。",
    captionEn:
      "S&OP, scheduling, and control-tower visibility—aligned cadence from plan to execution.",
    gradient: "from-[#0a1f24]/42 via-[#0f3d3e]/16 to-transparent",
    accent: "#4dd9b4",
    Icon: Share2,
  },
  {
    id: "intelligent-supply",
    image: "intelligent-supply.jpg",
    titleEn: "Intelligent Supply",
    titleZh: "智慧供应",
    caption: "战略寻源与执行闭环一致，供应网络透明、可编排、可度量。",
    captionEn:
      "Strategic sourcing and execution in one loop—transparent, orchestratable, measurable supply networks.",
    gradient: "from-[#1a0f08]/45 via-[#3d2410]/18 to-transparent",
    accent: "#f0a050",
    Icon: Boxes,
  },
  {
    id: "smart-operations",
    image: "smart-operations.png",
    titleEn: "Smart Operations",
    titleZh: "智能制造",
    caption: "更大场面的工厂自动化车间全景，展示产线协同、设备互联与实时可视化运营。",
    captionEn:
      "Shop-floor scale automation—line coordination, connected equipment, and real-time operational visibility.",
    gradient: "from-[#0f1419]/45 via-[#1c2832]/18 to-transparent",
    accent: "#8ab4dc",
    Icon: Cpu,
  },
  {
    id: "dynamic-fulfillment",
    image: "dynamic-fulfillment.png",
    titleEn: "Dynamic Fulfillment",
    titleZh: "动态履约",
    caption: "动态履约以轮船运输为核心场景，联动港口、仓储与在途可视化，保障交付时效与稳定性。",
    captionEn:
      "Dynamic fulfillment with ocean freight—ports, warehouses, and in-transit visibility for reliable delivery.",
    gradient: "from-[#071a12]/45 via-[#0f3d28]/18 to-transparent",
    accent: "#6dcea0",
    Icon: Truck,
  },
];

function slideImageSrc(filename: string) {
  return withBasePath(`/hero-carousel/${filename}`);
}

export default function HeroCarousel() {
  const { locale } = useSiteLocale();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, SLIDE_MS);
    return () => clearInterval(t);
  }, []);

  const progressPct = ((index + 1) / heroSlides.length) * 100;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#070b10]">
      {heroSlides.map((s, i) => {
        const Icon = s.Icon;
        const active = i === index;
        const slideTitle = locale === "en" ? s.titleEn : s.titleZh;
        const slideCaption = locale === "en" ? s.captionEn : s.caption;
        return (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-[1000ms] ease-out ${
              active ? "z-[1] opacity-100" : "z-0 opacity-0 pointer-events-none"
            }`}
            aria-hidden={!active}
          >
            <div
              className={`absolute inset-0 overflow-hidden ${active ? "hero-slide-bg-active" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- static export hero; prefer explicit img for LCP */}
              <img
                src={slideImageSrc(s.image)}
                alt=""
                width={1920}
                height={1080}
                className="hero-slide-img absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover brightness-[1.08] contrast-[1.04]"
                decoding="async"
                fetchPriority={active ? "high" : "low"}
              />
            </div>

            <div
              className={`absolute inset-0 bg-gradient-to-br ${s.gradient}`}
              aria-hidden
            />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#050810]/52 via-[#050810]/10 to-transparent"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#050810]/38 via-transparent to-transparent"
              aria-hidden
            />

            <div className="absolute bottom-24 left-0 right-0 z-[2] px-6 md:px-12 lg:px-16">
              <div className="mx-auto max-w-4xl rounded-xl border border-white/15 bg-black/22 px-6 py-5 shadow-2xl backdrop-blur-md lg:max-w-5xl">
                <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-center md:gap-8">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg md:h-14 md:w-14"
                    style={{ backgroundColor: `${s.accent}22`, color: s.accent }}
                  >
                    <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} aria-hidden />
                  </div>
                  <div className="text-center md:text-left md:pt-0.5">
                    <p
                      className="hero-carousel-eyebrow text-[11px] font-semibold uppercase tracking-[0.28em]"
                      style={{ color: s.accent }}
                    >
                      {s.titleEn}
                    </p>
                    <h2 className="hero-font-highlight mt-1 text-xl font-bold tracking-tight md:text-2xl">
                      {slideTitle}
                    </h2>
                    <p className="hero-font-highlight-soft mt-2 max-w-2xl text-sm leading-relaxed md:text-base">
                      {slideCaption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-10 left-0 right-0 z-[3] px-4 md:px-8">
        <div className="mx-auto h-0.5 max-w-7xl overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#3d9eff] to-[#64b5f6] transition-[width] duration-700 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-[3] flex justify-center gap-1.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-10 bg-white" : "w-1.5 bg-white/35 hover:bg-white/60"
            }`}
            aria-label={
              locale === "zh"
                ? `切换到第 ${i + 1} 张：${heroSlides[i].titleZh}`
                : `Go to slide ${i + 1}: ${heroSlides[i].titleEn}`
            }
          />
        ))}
      </div>
    </div>
  );
}
