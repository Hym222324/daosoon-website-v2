import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface pt-20 pb-12">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="display-md font-bold text-on-surface block">Daosoon</span>
                <span className="text-on-surface/60 font-medium">道生数智</span>
              </div>
            </div>
            <p className="body-md text-on-surface/60 mb-4">
              道生数智科技（苏州）有限公司
            </p>
            <p className="body-sm text-on-surface/50">
              端到端供应链 AI 应用服务商
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="display-sm text-on-surface mb-6">解决方案</h4>
            <ul className="space-y-4">
              {[
                { name: "供应链咨询", href: "/solutions" },
                { name: "系统实施", href: "/solutions/implementation" },
                { name: "自研产品", href: "/solutions/software" },
                { name: "AI 应用", href: "/solutions/ai-services" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="body-md text-on-surface/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    {item.name}
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="display-sm text-on-surface mb-6">关于我们</h4>
            <ul className="space-y-4">
              {[
                { name: "公司介绍", href: "/about" },
                { name: "客户案例", href: "/cases" },
                { name: "行业洞察", href: "/insights" },
                { name: "加入我们", href: "/careers" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="body-md text-on-surface/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    {item.name}
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="display-sm text-on-surface mb-6">联系方式</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="mailto:contact@daosoon.com"
                  className="body-md text-on-surface/70 hover:text-primary transition-colors"
                >
                  contact@daosoon.com
                </Link>
              </li>
              <li>
                <Link
                  href="tel:400-XXX-XXXX"
                  className="body-md text-on-surface/70 hover:text-primary transition-colors"
                >
                  400-XXX-XXXX
                </Link>
              </li>
              <li className="body-md text-on-surface/70">
                苏州市工业园区
              </li>
            </ul>
            <div className="mt-8">
              <Link href="/connect" className="btn-primary w-full">
                预约咨询
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-surface-container-high pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="body-md text-on-surface/50">
            &copy; 2026 道生数智科技（苏州）有限公司。All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="body-sm text-on-surface/50 hover:text-primary transition-colors">
              隐私政策
            </Link>
            <Link href="/terms" className="body-sm text-on-surface/50 hover:text-primary transition-colors">
              服务条款
            </Link>
            <p className="body-sm text-on-surface/40">
              苏 ICP 备 XXxxxxxx 号
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
