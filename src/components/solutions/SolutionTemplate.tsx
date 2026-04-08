"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface SolutionTemplateProps {
  pageTitle: string;
  pageDescription: string;
  mainIcon: ReactNode;
  badge?: string;
}

export default function SolutionTemplate({
  pageTitle,
  pageDescription,
  mainIcon,
  badge = "热门",
  children,
}: SolutionTemplateProps & { children: React.ReactNode }) {
  const navItems = [
    { name: "咨询", href: "/solutions/consulting" },
    { name: "实施", href: "/solutions/implementation" },
    { name: "产品", href: "/solutions/software" },
    { name: "服务", href: "/solutions/tech-services" },
    { name: "AI", href: "/solutions/ai-services" },
    { name: "采购", href: "/solutions/procurement-services" },
    { name: "人才", href: "/solutions/talent" },
    { name: "平台", href: "/solutions/platform" },
  ];

  const commonLinks = [
    { name: "预约演示", href: "/connect" },
    { name: "服务介绍", href: "/solutions" },
    { name: "成功案例", href: "/cases" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="bg-gradient-to-br from-[#F0F4F8] to-[#FFFFFF]">
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#FF9800] text-white text-sm font-medium rounded-full">
                {badge}
              </span>
              <Link
                href="/solutions"
                className="text-[#1E88E5] text-sm font-medium hover:underline"
              >
                返回服务列表
              </Link>
            </div>

            <div className="flex items-center gap-5 mb-6">
              <div className="flex h-[5.25rem] w-[5.25rem] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E88E5]/12 to-[#9C27B0]/12 text-[#1E88E5] [&_svg]:size-14">
                {mainIcon}
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
                  {pageTitle}
                </h1>
                <p className="text-xl text-gray-600 mt-2 max-w-2xl">
                  {pageDescription}
                </p>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
              {commonLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 bg-[#1E88E5] rounded-full flex items-center justify-center text-white text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Content */}
        <section className="py-16 bg-white">
          {children}
        </section>

        {/* Common CTA Section */}
        <section className="py-16 bg-[#F0F4F8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
              需要进一步了解？
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              预约专家咨询，获取详细的产品资料和案例分享
            </p>
            <Link
              href="/connect"
              className="inline-flex items-center bg-[#FF9800] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#F57C00] transition-all duration-300 transform hover:scale-105"
            >
              预约演示
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
