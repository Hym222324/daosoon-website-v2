import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/pages/ArticleLayout";

export const metadata: Metadata = {
  title: "公司介绍",
  description:
    "道生数智科技（苏州）有限公司——端到端供应链 AI 应用服务商，专注制造与供应链数智化咨询、实施与自研产品。",
};

export default function AboutPage() {
  return (
    <ArticleLayout
      title="关于道生数智"
      subtitle="端到端供应链 AI 应用服务商 · 用行业洞察与落地能力，陪伴制造企业走通数智化路径。"
      breadcrumb={[{ label: "首页", href: "/" }, { label: "公司介绍", href: "/about" }]}
    >
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">我们是谁</h2>
        <p>
          道生数智科技（苏州）有限公司（英文简称{" "}
          <strong className="text-[#1A1A1A]">Daosoon</strong>
          ）聚焦制造与供应链领域，提供{" "}
          <strong>AI 驱动的协同平台</strong> 与{" "}
          <strong>SRM 实施与运营服务</strong>
          ，帮助客户降低采购与履约成本、提升协同效率、增强供应链韧性。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">核心团队与方法论</h2>
        <p>
          核心成员长期深耕制造业信息化与供应链数字化，熟悉工程机械、汽车零部件、农业装备等细分场景。我们不堆砌概念，而是以价值地图、路线图、成熟度测评与避坑指南等工具，把「战略—流程—数据—系统—组织」串成一条可执行路径。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#1A1A1A]">我们提供什么</h2>
        <p>
          从 <Link href="/solutions/consulting" className="text-[#1E88E5] font-medium">端到端咨询</Link>、
          <Link href="/solutions/implementation" className="text-[#1E88E5] font-medium">系统实施</Link>、
          <Link href="/solutions/software" className="text-[#1E88E5] font-medium">自研产品</Link>，到
          <Link href="/solutions/tech-services" className="text-[#1E88E5] font-medium">技术服务</Link>、
          <Link href="/solutions/ai-services" className="text-[#1E88E5] font-medium">AI 应用</Link>、
          <Link href="/solutions/procurement-services" className="text-[#1E88E5] font-medium">采购业务服务</Link>、
          <Link href="/solutions/talent" className="text-[#1E88E5] font-medium">专业人才库</Link> 与{" "}
          <Link href="/solutions/platform" className="text-[#1E88E5] font-medium">商业网络平台</Link>，
          覆盖企业从顶层设计到系统落地、持续运营的全周期需求（详见
          <Link href="/solutions" className="text-[#1E88E5]">解决方案总览</Link>）。
        </p>
      </section>

      <div className="pt-4">
        <Link
          href="/connect"
          className="inline-flex items-center justify-center bg-[#FF9800] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#F57C00] transition-colors"
        >
          预约演示 / 业务咨询
        </Link>
      </div>
    </ArticleLayout>
  );
}
