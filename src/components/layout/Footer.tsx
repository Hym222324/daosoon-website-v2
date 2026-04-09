import Link from "next/link";
import DaosoonWordmark from "@/components/brand/DaosoonWordmark";

export default function Footer() {
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
          {/* Brand */}
          <div>
            <div className="mb-4">
              <DaosoonWordmark theme="dark" />
            </div>
            <p className="text-sm">道生数智科技（苏州）有限公司</p>
            <p className="text-sm mt-2">端到端供应链 AI 应用服务商</p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-4">解决方案</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions" className="hover:text-white transition-colors cursor-pointer">供应链咨询</Link></li>
              <li><Link href="/solutions/implementation" className="hover:text-white transition-colors cursor-pointer">系统实施</Link></li>
              <li><Link href="/solutions/software" className="hover:text-white transition-colors cursor-pointer">自研产品</Link></li>
              <li><Link href="/solutions/ai-services" className="hover:text-white transition-colors cursor-pointer">AI 应用</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-white mb-4">关于我们</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">公司介绍</Link></li>
              <li><Link href="/cases" className="hover:text-white transition-colors cursor-pointer">客户案例</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors cursor-pointer">行业洞察</Link></li>
              <li><Link href="/connect" className="hover:text-white transition-colors cursor-pointer">加入我们</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">联系方式</h4>
            <ul className="space-y-2 text-sm">
              <li>邮箱：contact@daosoon.com</li>
              <li>电话：400-XXX-XXXX</li>
              <li>地址：苏州市工业园区</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">&copy; 2026 道生数智科技（苏州）有限公司。All rights reserved.</p>
          <p className="text-sm mt-2 md:mt-0">苏 ICP 备 XXxxxxxx 号</p>
        </div>
      </div>
    </footer>
  );
}
