import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/HomeHero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Resources from "@/components/Resources";
import Banner from "@/components/Banner";

export const metadata = {
  title: "道生数智 - 供应 AI 协同平台 | 供应协同 SaaS 与 SRM 实施服务",
  description: "为各类制造企业提供 AI 协同平台、SRM 实施服务，降低采购成本，提升协同效率，实现供应链敏捷。专注离散制造、流程制造、农业数字化。",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HomeHero />
        <HowItWorks />
        <Services />
        <Industries />
        <Resources />
        <Banner />
      </main>
      <Footer />
    </div>
  );
}
