import type { SiteLocale } from "@/contexts/LocaleContext";
import { T, type Bilingual } from "./core";

const pageTitle: Bilingual = {
  zh: "专业人才库（个人 / 2C）",
  en: "Talent hub (individuals / 2C)",
};
const pageDescription: Bilingual = {
  zh: "面向供应链从业者的学习、认证、职位与灵活用工入口",
  en: "Learning, certification, roles, and flexible work for supply chain professionals.",
};

const intro: Bilingual = {
  zh: "个人视角的「成长—认证—职位—社群」矩阵：先看清自身在计划、采购、物流、数字化等方向的位置，再选择学习与职业下一步。企业服务与合作仍可通过商务通道单独洽谈。",
  en: "A grow–certify–role–community path across planning, procurement, logistics, and digital. Enterprise programs are handled via commercial channels.",
};

const matrixTitle: Bilingual = { zh: "2C 人才服务矩阵", en: "2C talent services" };
const pathsTitle: Bilingual = { zh: "培训晋升路径", en: "Career paths" };
const feedbackTitle: Bilingual = { zh: "客户反馈", en: "Testimonials" };
const offeringsH: Bilingual = { zh: "服务方向", en: "Offerings" };
const benefitsH: Bilingual = { zh: "核心优势", en: "Key benefits" };

const ctaBig: Bilingual = { zh: "95%", en: "95%" };
const ctaSub: Bilingual = { zh: "学员满意度", en: "Learner satisfaction" };
const ctaBtn: Bilingual = { zh: "了解培训课程", en: "Explore training" };

const services: {
  title: Bilingual;
  description: Bilingual;
  offerings: Bilingual[];
  benefits: Bilingual[];
}[] = [
  {
    title: { zh: "供应人才培训", en: "Supply talent training" },
    description: { zh: "系统化培训体系，提升团队专业能力", en: "Structured programs to grow capability." },
    offerings: [
      { zh: "供应管理基础课程", en: "Supply management basics" },
      { zh: "SRM 系统应用培训", en: "SRM application training" },
      { zh: "AI 应用实战课程", en: "Hands-on AI courses" },
    ],
    benefits: [
      { zh: "培训满意度 95%+", en: "95%+ satisfaction" },
      { zh: "能力提升周期缩短 40%", en: "~40% faster upskilling" },
    ],
  },
  {
    title: { zh: "供应人才招聘", en: "Supply recruiting" },
    description: { zh: "精准匹配供应专业人才，快速组建团队", en: "Match specialists and build teams quickly." },
    offerings: [
      { zh: "供应总监招聘", en: "Head of supply search" },
      { zh: "SRM 项目经理", en: "SRM program managers" },
      { zh: "供应分析师", en: "Supply analysts" },
    ],
    benefits: [
      { zh: "平均匹配周期 2 周", en: "~2-week match cycle" },
      { zh: "人才留存率 90%+", en: "90%+ retention" },
    ],
  },
  {
    title: { zh: "人才灵活用工", en: "Flexible workforce" },
    description: { zh: "按需调配供应专业人才，支持项目交付", en: "On-demand experts for programs." },
    offerings: [
      { zh: "项目顾问服务", en: "Project advisors" },
      { zh: "专家临时支持", en: "Short-term experts" },
      { zh: "共享供应团队", en: "Shared supply teams" },
    ],
    benefits: [
      { zh: "灵活用工成本 -40%", en: "~40% lower flexible cost" },
      { zh: "项目响应时间 -60%", en: "~60% faster response" },
    ],
  },
  {
    title: { zh: "数字人才转型", en: "Digital talent transformation" },
    description: { zh: "帮助企业培养数字化供应人才", en: "Build digital supply talent." },
    offerings: [
      { zh: "数字化能力评估", en: "Capability assessment" },
      { zh: "人才转型规划", en: "Transformation roadmap" },
      { zh: "技能升级培训", en: "Upskilling programs" },
    ],
    benefits: [
      { zh: "转型周期缩短 50%", en: "~50% shorter transformation" },
      { zh: "人才留存率 +25%", en: "~+25% retention" },
    ],
  },
];

const trainingPaths: { level: Bilingual; role: Bilingual; duration: Bilingual; topics: Bilingual[] }[] = [
  {
    level: { zh: "入门", en: "Foundation" },
    role: { zh: "供应专员", en: "Supply specialist" },
    duration: { zh: "2 周", en: "2 weeks" },
    topics: [
      { zh: "供应基础知识", en: "Supply basics" },
      { zh: "采购流程", en: "Procurement flow" },
      { zh: "供应商管理基础", en: "Supplier management 101" },
    ],
  },
  {
    level: { zh: "进阶", en: "Intermediate" },
    role: { zh: "供应经理", en: "Supply manager" },
    duration: { zh: "4 周", en: "4 weeks" },
    topics: [
      { zh: "战略采购", en: "Strategic sourcing" },
      { zh: "供应优化", en: "Supply optimization" },
      { zh: "团队管理", en: "Team leadership" },
    ],
  },
  {
    level: { zh: "高阶", en: "Advanced" },
    role: { zh: "供应总监", en: "Supply director" },
    duration: { zh: "6 周", en: "6 weeks" },
    topics: [
      { zh: "供应战略", en: "Supply strategy" },
      { zh: "数字化转型", en: "Digital transformation" },
      { zh: "组织变革", en: "Org change" },
    ],
  },
  {
    level: { zh: "专家", en: "Expert" },
    role: { zh: "供应专家", en: "Supply expert" },
    duration: { zh: "8 周", en: "8 weeks" },
    topics: [
      { zh: "AI 应用", en: "AI in supply chain" },
      { zh: "全球化供应", en: "Global supply" },
      { zh: "创新实践", en: "Innovation practice" },
    ],
  },
];

const stats: { value: string; label: Bilingual }[] = [
  { value: "5000+", label: { zh: "累计培训人次", en: "Learners trained" } },
  { value: "200+", label: { zh: "合作企业", en: "Partner enterprises" } },
  { value: "50+", label: { zh: "行业讲师", en: "Industry instructors" } },
  { value: "95%", label: { zh: "学员满意度", en: "Satisfaction" } },
];

const testimonials: { name: Bilingual; role: Bilingual; content: Bilingual }[] = [
  {
    name: { zh: "张先生", en: "Mr. Zhang" },
    role: { zh: "某上市制造企业 供应总监", en: "Supply director, listed manufacturer" },
    content: {
      zh: "道生数智的培训非常实用，不仅理论扎实，还有很多实战案例，团队能力提升明显。",
      en: "Practical training with strong theory and real cases—clear team uplift.",
    },
  },
  {
    name: { zh: "李女士", en: "Ms. Li" },
    role: { zh: "某集团企业 HRD", en: "CHRO, enterprise group" },
    content: {
      zh: "通过道生数智招聘的供应专业人才，匹配度高，留存率也稳定，合作非常愉快。",
      en: "Strong matches and stable retention for supply hires—great partnership.",
    },
  },
];

export function talentStrings(locale: SiteLocale) {
  const joinTopics = (topics: string[]) => topics.join(locale === "zh" ? "、" : ", ");
  return {
    pageTitle: T(locale, pageTitle),
    pageDescription: T(locale, pageDescription),
    intro: T(locale, intro),
    matrixTitle: T(locale, matrixTitle),
    pathsTitle: T(locale, pathsTitle),
    feedbackTitle: T(locale, feedbackTitle),
    offeringsH: T(locale, offeringsH),
    benefitsH: T(locale, benefitsH),
    ctaBig: T(locale, ctaBig),
    ctaSub: T(locale, ctaSub),
    ctaBtn: T(locale, ctaBtn),
    services: services.map((sv) => ({
      title: T(locale, sv.title),
      description: T(locale, sv.description),
      offerings: sv.offerings.map((o) => T(locale, o)),
      benefits: sv.benefits.map((b) => T(locale, b)),
    })),
    trainingPaths: trainingPaths.map((p) => ({
      level: T(locale, p.level),
      role: T(locale, p.role),
      duration: T(locale, p.duration),
      topicsLine: joinTopics(p.topics.map((t) => T(locale, t))),
    })),
    stats: stats.map((st) => ({ value: st.value, label: T(locale, st.label) })),
    testimonials: testimonials.map((t) => ({
      name: T(locale, t.name),
      role: T(locale, t.role),
      content: T(locale, t.content),
    })),
  };
}
