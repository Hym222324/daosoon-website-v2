import type { Bilingual } from "./core";

export const homeHero = {
  kicker: {
    zh: "AI · Supply Chain · Digital Transformation",
    en: "AI · Supply Chain · Digital Transformation",
  },
  titleBefore: { zh: "供应链端到端", en: "End-to-end supply chain " },
  titleAfter: { zh: "数智化转型", en: "digital transformation" },
} as const satisfies Record<string, Bilingual>;

export const howItWorks = {
  sectionTitle: { zh: "如何构建供应链数智化能力？", en: "How do you build supply chain digital capabilities?" },
  sectionSub: { zh: "回答四个关键问题，找到您的数智化路径", en: "Answer four key questions to find your path." },
  card1Title: { zh: "如何确认目标？", en: "How do you define goals?" },
  card1Sub: { zh: "从战略到战术拆解，对齐数智化目标", en: "From strategy to tactics—align digital goals." },
  card2Title: { zh: "如何达成目标？", en: "How do you achieve them?" },
  card2Sub: { zh: "数据、流程、组织、制度、决策的分阶段推进", en: "Phased progress across data, process, org, policy, decisions." },
  card3Title: { zh: "80% 企业遇到这些挑战", en: "80% of firms face these challenges" },
  card3Sub: { zh: "端到端供应链共性难题（定性描述，详情持续修订）", en: "Common end-to-end supply chain issues (overview; details evolving)." },
  card4Title: { zh: "我们需要什么能力？", en: "What capabilities do we need?" },
  card4Sub: { zh: "能力成熟度自测清单（持续迭代中）", en: "Maturity self-assessment (iterating)." },
  viewDetails: { zh: "查看详情 →", en: "Learn more →" },
  topicsLead: { zh: "采购与供应链人都在关注：", en: "Hot topics for procurement & supply chain:" },
  topic1: { zh: "如何用 AI 快速筛选供应商资质？", en: "Using AI to screen supplier credentials" },
  topic2: { zh: "SRM 选型避坑指南", en: "SRM selection pitfalls guide" },
  topic3: { zh: "采购成本分析模板", en: "Procurement cost analysis templates" },
  forumBlurb: {
    zh: "供应链论坛（类 Reddit）：个人可通过 Gmail、GitHub、手机、邮箱、QQ 或微信注册；支持发帖、评论与转发；企业可发布通知与活动预告。论坛建设持续推进中。",
    en: "Supply chain forum: sign in with Gmail, GitHub, phone, email, QQ, or WeChat; posts, comments, and shares; companies can post notices. Forum is under active development.",
  },
  forumLink: { zh: "前往论坛 →", en: "Go to forum →" },
} as const satisfies Record<string, Bilingual>;

export const servicesSection = {
  title: { zh: "我们提供什么？", en: "What we offer" },
  subtitle: {
    zh: "供应链数智化转型服务 + 采购供应链业务外包服务",
    en: "Digital transformation services + procurement & supply chain outsourcing",
  },
  learnMore: { zh: "了解详情 →", en: "Learn more →" },
  openExchange: { zh: "打开交易汇演示", en: "Open Exchange demo" },
  core1Title: { zh: "供应协同咨询", en: "Supply collaboration consulting" },
  core1Sub: { zh: "供应链端到端咨询 · 体系建设与优化", en: "End-to-end consulting · systems & optimization" },
  core1Body: {
    zh: "覆盖产品、客户、物流、制造、采购、履约全链路，梳理目标、流程与能力缺口。",
    en: "Across product, customer, logistics, manufacturing, procurement, fulfillment—goals, processes, and gaps.",
  },
  core2Title: { zh: "端到端供应链实施 · SRM", en: "Implementation · SRM" },
  core2Sub: { zh: "供应链端到端实施服务", en: "End-to-end implementation services" },
  core2Body: {
    zh: "计划、采购、制造、仓储与物流系统的选型、集成与落地，重点包含 SRM 协同能力。",
    en: "Selection, integration, and rollout of planning, procurement, Mfg, WMS, logistics—with SRM collaboration.",
  },
  core3Title: { zh: "自研软件产品", en: "Proprietary software" },
  core3Sub: { zh: "可落地的供应链工具与产品化能力", en: "Shippable tools and productized capabilities" },
  core3Body: {
    zh: "将行业方法论沉淀为可配置的产品能力，支撑协同、可视化与运营闭环。",
    en: "Methodology turned into configurable product capabilities for collaboration, visibility, and closed-loop ops.",
  },
  tagProduct: { zh: "产品", en: "Product" },
  tagCustomer: { zh: "客户", en: "Customer" },
  tagLogistics: { zh: "物流", en: "Logistics" },
  tagMfg: { zh: "制造", en: "Manufacturing" },
  tagProcurement: { zh: "采购", en: "Procurement" },
  tagFulfillment: { zh: "履约", en: "Fulfillment" },
  tagAps: { zh: "APS", en: "APS" },
  tagErp: { zh: "ERP", en: "ERP" },
  tagSrm: { zh: "SRM", en: "SRM" },
  tagMom: { zh: "MOM/WMS", en: "MOM/WMS" },
  tagTms: { zh: "TMS", en: "TMS" },
  tagRd: { zh: "研发能力", en: "R&D" },
  tagBiz: { zh: "业务沉淀", en: "Domain depth" },
  tagTools: { zh: "工具专区", en: "Tools" },
  actionExpert: { zh: "预约专家", en: "Talk to an expert" },
  actionIntro: { zh: "服务介绍", en: "Service overview" },
  actionCases: { zh: "成功案例", en: "Success stories" },
  extTechTitle: { zh: "技术服务", en: "Technical services" },
  extTechDesc: { zh: "围绕供应链端到端场景的集成、架构与工程交付", en: "Integration, architecture, and engineering for end-to-end scenarios." },
  extAiTitle: { zh: "AI 应用服务", en: "AI application services" },
  extAiDesc: { zh: "计算机视觉 · 供应链优化算法 · 场景化落地", en: "CV · optimization algorithms · scenario rollout" },
  extProcTitle: { zh: "采购外包服务", en: "Procurement outsourcing" },
  extProcDesc: { zh: "采购与供应执行外包，预约演示与商务对接", en: "Execution outsourcing, demos, and commercial intake." },
  extTalentTitle: { zh: "专业人才库", en: "Talent programs" },
  extTalentDesc: { zh: "面向个人的学习、认证与职业服务（2C）", en: "Learning, certification, and career services (B2C)." },
  extPlatformTitle: { zh: "商业网络平台", en: "Business network platform" },
  extPlatformDesc: { zh: "供需撮合、伙伴协同与生态运营（方案升级中）", en: "Matching, partner collaboration, ecosystem (upgrading)." },
} as const satisfies Record<string, Bilingual>;

export const industriesSection = {
  title: { zh: "行业解决方案", en: "Industry solutions" },
  discreteTitle: { zh: "离散制造", en: "Discrete manufacturing" },
  discretePain: { zh: "多品种小批量、BOM 复杂、变更频繁", en: "High mix, complex BOMs, frequent changes" },
  discreteSol: { zh: "计划协同、供应商协同与履约一体的数智化方案", en: "Planning, supplier, and fulfillment in one digital approach" },
  processTitle: { zh: "流程制造", en: "Process manufacturing" },
  processPain: { zh: "连续生产、配方管理、副产物多", en: "Continuous production, recipes, by-products" },
  processSol: { zh: "制造执行与供应链风险联动的可视化运营", en: "MES-linked visibility with supply risk signals" },
  agTitle: { zh: "农业", en: "Agriculture" },
  agPain: { zh: "季节性、产地分散、质量标准多样", en: "Seasonality, distributed origins, varied quality standards" },
  agSol: { zh: "产地数字化与供需匹配的协同网络", en: "Origin digitization and demand-supply matching network" },
  otherTitle: { zh: "其他行业", en: "Other industries" },
  otherPain: { zh: "不同细分行业在计划、采购、制造与履约上的共性难题", en: "Shared challenges in planning, procurement, Mfg, fulfillment" },
  otherSol: { zh: "与我们联系，讨论定制化的行业解法与实施路径", en: "Contact us for tailored approaches and rollout paths" },
  caseLabel: { zh: "案例", en: "Cases" },
  contactLabel: { zh: "联系我们", en: "Contact us" },
  ctaExpert: { zh: "预约专家咨询", en: "Book expert consultation" },
} as const satisfies Record<string, Bilingual>;

export const resourcesSection = {
  title: { zh: "最新洞察与资源", en: "Latest insights & resources" },
  viewAll: { zh: "查看全部 →", en: "View all →" },
  viewContent: { zh: "查看内容 →", en: "Read →" },
  download: { zh: "资料下载", en: "Download" },
  subscribe: { zh: "订阅资讯", en: "Subscribe" },
} as const satisfies Record<string, Bilingual>;

/** 首页资源卡片：与 content/resources.json 顺序/href 对应 */
export const resourceHome: Record<
  string,
  { type: Bilingual; title: Bilingual; action: Bilingual }
> = {
  "/resources/whitepaper": {
    type: { zh: "白皮书", en: "Whitepaper" },
    title: { zh: "2026 供应链 AI 应用白皮书", en: "2026 Supply Chain AI Applications Whitepaper" },
    action: { zh: "免费下载（需留资）", en: "Free download (lead form)" },
  },
  "/resources/trend": {
    type: { zh: "趋势解读", en: "Trend brief" },
    title: { zh: "供应链数智化转型的四个关键阶段", en: "Four stages of supply chain digital transformation" },
    action: { zh: "阅读全文", en: "Read article" },
  },
  "/resources/webinar": {
    type: { zh: "公开课", en: "Webinar" },
    title: { zh: "AI 在供应商寻源中的应用实战", en: "AI in supplier sourcing—hands-on" },
    action: { zh: "观看回放（需注册）", en: "Watch replay (sign-in)" },
  },
  "/resources/forum": {
    type: { zh: "论坛精选", en: "Forum picks" },
    title: { zh: "采购成本分析模板分享", en: "Procurement cost analysis templates" },
    action: { zh: "查看帖子", en: "View post" },
  },
};

export const bannerSection = {
  title: { zh: "连接道生，共创数智供应链", en: "Connect with Daosoon, build a digital supply chain together" },
  card1Title: { zh: "业务咨询", en: "Business inquiry" },
  card1Sub: { zh: "让供应链更智能", en: "Make your supply chain smarter" },
  card1Primary: { zh: "预约演示", en: "Book a demo" },
  card1Secondary: { zh: "下载解决方案手册", en: "Download solution brief" },
  card2Title: { zh: "加入团队", en: "Join the team" },
  card2Sub: { zh: "加入道生，一起创造价值", en: "Build value with Daosoon" },
  card2Primary: { zh: "查看热招职位", en: "Open roles" },
  card2Secondary: { zh: "提交简历", en: "Submit resume" },
  card3Title: { zh: "生态合作", en: "Ecosystem" },
  card3Sub: { zh: "成为生态伙伴", en: "Become a partner" },
  card3Primary: { zh: "申请合作", en: "Apply to partner" },
  card3Secondary: { zh: "API 接入申请", en: "API access request" },
  card4Title: { zh: "参与社区", en: "Community" },
  card4Sub: { zh: "供应链人的聚集地", en: "Where supply chain pros meet" },
  card4Primary: { zh: "前往论坛", en: "Go to forum" },
  card4Secondary: { zh: "预约下次公开课", en: "Next webinar" },
} as const satisfies Record<string, Bilingual>;
