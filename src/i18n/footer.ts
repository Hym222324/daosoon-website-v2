import type { Bilingual } from "./core";

export const footer = {
  /** Logo 右侧短名（与全名 company 区分） */
  brandBesideLogo: { zh: "道生数智", en: "Daosoon Intelligence" },
  company: { zh: "道生数智科技（苏州）有限公司", en: "Daosoon Digital Technology (Suzhou) Co., Ltd." },
  tagline: { zh: "端到端供应链 AI 应用服务商", en: "End-to-end supply chain AI services" },
  colSolutions: { zh: "解决方案", en: "Solutions" },
  colAbout: { zh: "关于我们", en: "About" },
  colContact: { zh: "联系方式", en: "Contact" },
  linkConsulting: { zh: "供应链咨询", en: "Supply chain consulting" },
  linkImplementation: { zh: "系统实施", en: "Implementation" },
  linkSoftware: { zh: "自研产品", en: "Software products" },
  linkAi: { zh: "AI 应用", en: "AI services" },
  linkAbout: { zh: "公司介绍", en: "About us" },
  linkCases: { zh: "客户案例", en: "Customer stories" },
  linkInsights: { zh: "行业洞察", en: "Insights" },
  linkCareers: { zh: "加入我们", en: "Careers" },
  emailLabel: { zh: "邮箱：contact@daosoon.com", en: "Email: contact@daosoon.com" },
  phoneLabel: { zh: "电话：400-XXX-XXXX", en: "Phone: 400-XXX-XXXX" },
  addressLabel: { zh: "地址：苏州市工业园区", en: "Address: Suzhou Industrial Park" },
  copyright: {
    zh: "© 2026 道生数智科技（苏州）有限公司。保留所有权利。",
    en: "© 2026 Daosoon Digital Technology (Suzhou) Co., Ltd. All rights reserved.",
  },
  icp: { zh: "苏 ICP 备 XXxxxxxx 号", en: "Su ICP XXxxxxxx" },
} as const satisfies Record<string, Bilingual>;
