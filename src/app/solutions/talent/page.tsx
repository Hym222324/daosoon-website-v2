"use client";

import Link from "next/link";
import SolutionTemplate from "@/components/solutions/SolutionTemplate";
import {
  Briefcase,
  GraduationCap,
  UserSearch,
  Users,
  type LucideIcon,
} from "lucide-react";

export default function TalentPage() {
  const services: {
    title: string;
    icon: LucideIcon;
    description: string;
    offerings: string[];
    benefits: string[];
  }[] = [
    {
      title: "供应人才培训",
      icon: GraduationCap,
      description: "系统化培训体系，提升团队专业能力",
      offerings: [
        "供应管理基础课程",
        "SRM 系统应用培训",
        "AI 应用实战课程",
        "供应链管理认证",
        "定制企业内训",
      ],
      benefits: [
        "培训满意度 95%+",
        "能力提升周期缩短 40%",
        "培训后实操合格率 90%",
        "行业讲师占比 80%",
      ],
    },
    {
      title: "供应人才招聘",
      icon: UserSearch,
      description: "精准匹配供应专业人才，快速组建团队",
      offerings: [
        "供应总监招聘",
        "SRM 项目经理",
        "供应分析师",
        "供应链 IT 专家",
        "供应商管理专员",
      ],
      benefits: [
        "平均匹配周期 2 周",
        "人才留存率 90%+",
        "岗位匹配度 95%",
        "猎头费用节省 30%",
      ],
    },
    {
      title: "人才灵活用工",
      icon: Users,
      description: "按需调配供应专业人才，支持项目交付",
      offerings: [
        "项目顾问服务",
        "专家临时支持",
        "共享供应团队",
        "远程协作专家",
        "行业专家库",
      ],
      benefits: [
        "灵活用工成本 -40%",
        "项目响应时间 -60%",
        "专家资源池 1000+",
        "7x24 小时支持",
      ],
    },
    {
      title: "数字人才转型",
      icon: Briefcase,
      description: "帮助企业培养数字化供应人才",
      offerings: [
        "数字化能力评估",
        "人才转型规划",
        "技能升级培训",
        "数字化团队建设",
        "人才梯队培养",
      ],
      benefits: [
        "转型周期缩短 50%",
        "人才留存率 +25%",
        "数字化能力 +50%",
        "团队效率提升 40%",
      ],
    },
  ];

  const trainingPaths = [
    {
      level: "入门",
      role: "供应专员",
      duration: "2 周",
      topics: ["供应基础知识", "采购流程", "供应商管理基础"],
    },
    {
      level: "进阶",
      role: "供应经理",
      duration: "4 周",
      topics: ["战略采购", "供应优化", "团队管理"],
    },
    {
      level: "高阶",
      role: "供应总监",
      duration: "6 周",
      topics: ["供应战略", "数字化转型", "组织变革"],
    },
    {
      level: "专家",
      role: "供应专家",
      duration: "8 周",
      topics: ["AI 应用", "全球化供应", "创新实践"],
    },
  ];

  const stats = [
    { value: "5000+", label: "累计培训人次" },
    { value: "200+", label: "合作企业" },
    { value: "50+", label: "行业讲师" },
    { value: "95%", label: "学员满意度" },
  ];

  const testimonials = [
    {
      name: "张先生",
      role: "某上市制造企业 供应总监",
      content: "道生数智的培训非常实用，不仅理论扎实，还有很多实战案例，团队能力提升明显。",
    },
    {
      name: "李女士",
      role: "某集团企业 HRD",
      content: "通过道生数智招聘的供应专业人才，匹配度高，留存率也稳定，合作非常愉快。",
    },
  ];

  return (
    <SolutionTemplate
      pageTitle="专业人才库（个人 / 2C）"
      pageDescription="面向供应链从业者的学习、认证、职位与灵活用工入口"
      mainIcon={<Users className="size-14" strokeWidth={1.65} aria-hidden />}
      badge="专业服务"
    >
      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
          个人视角的「成长—认证—职位—社群」矩阵：先看清自身在计划、采购、物流、数字化等方向的位置，
          再选择学习与职业下一步。企业服务与合作仍可通过商务通道单独洽谈。
        </p>
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          2C 人才服务矩阵
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const SvcIcon = service.icon;
            return (
            <div key={index} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#1E88E5] rounded-lg flex items-center justify-center text-white">
                  <SvcIcon className="h-7 w-7" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>

              <h4 className="font-semibold text-gray-700 mb-2">服务方向</h4>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {service.offerings.slice(0, 3).map((offering, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {offering}
                  </div>
                ))}
              </div>

              <h4 className="font-semibold text-gray-700 mb-2">核心优势</h4>
              <div className="space-y-1">
                {service.benefits.slice(0, 2).map((benefit, idx) => (
                  <div key={idx} className="text-sm text-gray-600">• {benefit}</div>
                ))}
              </div>
            </div>
            );
          })}
        </div>

        {/* Training Paths */}
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          培训晋升路径
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {trainingPaths.map((path, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-xl p-6 text-white">
              <div className="text-sm opacity-80 mb-2">
                {path.duration}
              </div>
              <h3 className="text-xl font-bold mb-4">{path.level}</h3>
              <div className="text-lg font-semibold mb-4">{path.role}</div>
              <div className="text-sm opacity-90">
                {path.topics.join("、")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-[#1E88E5] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          客户反馈
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.content}"</p>
              <div className="text-sm text-gray-500">
                <div className="font-medium text-[#1A1A1A]">{testimonial.name}</div>
                <div>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1E88E5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-4xl font-bold mb-4">95%</div>
          <div className="text-xl mb-8">学员满意度</div>
          <Link
            href="/connect"
            className="inline-flex items-center bg-white text-[#1E88E5] px-8 py-3.5 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            了解培训课程
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </SolutionTemplate>
  );
}
