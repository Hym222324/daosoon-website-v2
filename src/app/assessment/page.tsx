"use client";

import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import {
  Handshake,
  Laptop,
  RefreshCw,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResult, setShowResult] = useState(false);

  const dimensions: { id: string; name: string; icon: LucideIcon }[] = [
    { id: "strategy", name: "战略与目标", icon: Target },
    { id: "process", name: "流程与协同", icon: RefreshCw },
    { id: "supplier", name: "供应与履约网络", icon: Handshake },
    { id: "technology", name: "数据与系统", icon: Laptop },
    { id: "organization", name: "组织与变革", icon: Users },
  ];

  /** 能力自测清单（持续迭代，内部别名「Merry」版） */
  const questions = [
    {
      dimension: "strategy",
      text: "从需求到履约，端到端数智化目标是否在管理层形成共识？",
      options: [
        { value: 1, label: "无共识，各部各说各话" },
        { value: 2, label: "有口号，缺少可执行定义" },
        { value: 3, label: "有关键课题清单，推进不均衡" },
        { value: 4, label: "目标—指标—Owner 基本闭环" },
        { value: 5, label: "定期复盘，目标随业务动态校准" },
      ],
    },
    {
      dimension: "strategy",
      text: "投资与项目优先级是否服从\"端到端总体最优\"而不是局部 KPI？",
      options: [
        { value: 1, label: "明显各自为政" },
        { value: 2, label: "偶尔争论，缺少裁决机制" },
        { value: 3, label: "有联席决策但不稳定" },
        { value: 4, label: "多数冲突能上升到正确层级解决" },
        { value: 5, label: "已形成稳态的权衡与仲裁机制" },
      ],
    },
    {
      dimension: "process",
      text: "S&OP / MPS 与采购、生产、配送的主干流程衔接是否顺畅？",
      options: [
        { value: 1, label: "大量人工传递与突击" },
        { value: 2, label: "主干有流程，断点多" },
        { value: 3, label: "主要断点可列举并在修补" },
        { value: 4, label: "主干流程基本数字化可追溯" },
        { value: 5, label: "节拍稳定，例外可度量、可复盘" },
      ],
    },
    {
      dimension: "process",
      text: "跨部门、跨企业的异常升级是否在 SLA 内有明确 owner？",
      options: [
        { value: 1, label: "无 SLA，靠个人刷脸" },
        { value: 2, label: "有零散约定" },
        { value: 3, label: "关键场景有升级路径" },
        { value: 4, label: "多数异常可走标准升级" },
        { value: 5, label: "升级—复盘—流程固化闭环" },
      ],
    },
    {
      dimension: "supplier",
      text: "供应商、外协与物流资源是否纳入统一的协同与绩效视图？",
      options: [
        { value: 1, label: "分散管理，难以全景查看" },
        { value: 2, label: "部分环节在线" },
        { value: 3, label: "关键伙伴有协同，但不完整" },
        { value: 4, label: "主要伙伴实现计划与执行协同" },
        { value: 5, label: "网络级可见、可调优" },
      ],
    },
    {
      dimension: "supplier",
      text: "从寻源、合同到交付、对账的供应侧规则是否可执行、可审计？",
      options: [
        { value: 1, label: "大量灰度与口头约定" },
        { value: 2, label: "规则有文档，执行偏差大" },
        { value: 3, label: "主要规则已系统化" },
        { value: 4, label: "例外可追踪，审计压力可控" },
        { value: 5, label: "持续优化条款与执行一致性" },
      ],
    },
    {
      dimension: "technology",
      text: "主数据（物料、BOM、工艺、供应商等）质量是否支撑端到端应用？",
      options: [
        { value: 1, label: "混乱，频繁救火" },
        { value: 2, label: "局部可信，全局不敢用" },
        { value: 3, label: "治理项目在推进" },
        { value: 4, label: "主干数据基本可信" },
        { value: 5, label: "有责任矩阵与持续监测" },
      ],
    },
    {
      dimension: "technology",
      text: "计划层、执行层系统与现场 OT 数据是否能拼成关键链条？",
      options: [
        { value: 1, label: "系统孤岛，拼装困难" },
        { value: 2, label: "有接口但脆弱" },
        { value: 3, label: "关键链路已拉通" },
        { value: 4, label: "多数场景可端到端追溯" },
        { value: 5, label: "架构可持续演进" },
      ],
    },
    {
      dimension: "organization",
      text: "是否存在端到端链路牵头角色（而不仅是职能经理）？",
      options: [
        { value: 1, label: "无，完全职能切分" },
        { value: 2, label: "有临时项目组" },
        { value: 3, label: "关键链路有兼职 Owner" },
        { value: 4, label: "制度化牵头 + 授权清晰" },
        { value: 5, label: "与激励绑定，可持续" },
      ],
    },
    {
      dimension: "organization",
      text: "变革沟通、培训与运营托管是否跟得上系统上线节奏？",
      options: [
        { value: 1, label: "上线即失控" },
        { value: 2, label: "突击培训，效果不稳" },
        { value: 3, label: "有基础培训与 FAQ" },
        { value: 4, label: "分层赋能 + 现场辅导" },
        { value: 5, label: "内化运营能力，减少外部依赖" },
      ],
    },
  ];

  const handleAnswer = (questionIndex: number, value: number) => {
    setAnswers({ ...answers, [questionIndex]: value });
    if (questionIndex < questions.length - 1) {
      setCurrentStep(questionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    const max = questions.length * 5;
    return Math.round((total / max) * 100);
  };

  const getLevel = (score: number) => {
    if (score >= 85) return { level: "卓越", color: "text-green-600", bg: "bg-green-100" };
    if (score >= 70) return { level: "优秀", color: "text-blue-600", bg: "bg-blue-100" };
    if (score >= 55) return { level: "良好", color: "text-yellow-600", bg: "bg-yellow-100" };
    if (score >= 40) return { level: "待改进", color: "text-orange-600", bg: "bg-orange-100" };
    return { level: "需提升", color: "text-red-600", bg: "bg-red-100" };
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen">
      <main className="bg-gradient-to-br from-[#F0F4F8] to-[#FFFFFF]">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
                端到端供应链能力<span className="text-[#1E88E5]">自测</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                从战略、流程、供应网络、数据与技术到组织变革，快速对照贵司成熟度高。
                <br />
                <strong>清单式自测（Merry 版），结果仅供参考，欢迎结合现场诊断</strong>
              </p>

              {!showResult && (
                <div className="mt-8 inline-flex flex-col sm:flex-row items-center bg-white rounded-xl p-6 shadow-lg gap-4 sm:gap-0">
                  <div className="text-center px-4">
                    <div className="text-4xl font-bold text-[#1E88E5] mb-1">5</div>
                    <div className="text-sm text-gray-500">大维度</div>
                  </div>
                  <div className="hidden sm:block mx-6 text-gray-300">|</div>
                  <div className="text-center px-4">
                    <div className="text-4xl font-bold text-[#1E88E5] mb-1">10</div>
                    <div className="text-sm text-gray-500">道情境题</div>
                  </div>
                  <div className="hidden sm:block mx-6 text-gray-300">|</div>
                  <div className="text-center px-4">
                    <div className="text-4xl font-bold text-[#1E88E5] mb-1">≈5 分钟</div>
                    <div className="text-sm text-gray-500">完成填写</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Assessment or Result */}
        {showResult ? (
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                {/* Score */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-8 border-[#1E88E5] mb-4">
                    <div className="text-4xl font-bold text-[#1E88E5]">
                      {calculateScore()}
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${getLevel(calculateScore()).color}`}>
                    {getLevel(calculateScore()).level}
                  </div>
                </div>

                {/* Dimensions Score */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 text-center">
                    各维度得分
                  </h3>
                  <div className="space-y-4">
                    {dimensions.map((dim) => {
                      const dimAnswers = questions
                        .filter((q) => q.dimension === dim.id)
                        .map((q) => answers[questions.indexOf(q)] || 0);
                      const dimScore = Math.round(
                        (dimAnswers.reduce((a, b) => a + b, 0) / (dimAnswers.length * 5)) * 100
                      );
                      const DimIcon = dim.icon;
                      return (
                        <div key={dim.id}>
                          <div className="flex justify-between mb-1">
                            <div className="flex items-center">
                              <DimIcon className="mr-2 h-5 w-5 text-[#1E88E5]" strokeWidth={2} aria-hidden />
                              <span className="font-medium">{dim.name}</span>
                            </div>
                            <span className="font-bold">{dimScore}分</span>
                          </div>
                          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#1E88E5] rounded-full transition-all duration-500"
                              style={{ width: `${dimScore}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">改善建议</h3>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <p className="text-gray-700">
                      根据您的测评结果，建议重点关注以下方面：
                      <br />
                      - 优先提升最低分维度
                      <br />
                      - 参考行业最佳实践
                      <br />
                      - 制定详细的改进计划
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <p className="text-gray-600 mb-6">
                    获取完整诊断报告和专业咨询建议？
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/connect"
                      className="inline-flex items-center justify-center bg-[#FF9800] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#F57C00] transition-all duration-300 transform hover:scale-105"
                    >
                      预约专家咨询
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
                    <button
                      onClick={() => {
                        setCurrentStep(0);
                        setShowResult(false);
                        setAnswers({});
                      }}
                      className="inline-flex items-center justify-center bg-white text-[#1A1A1A] px-8 py-3.5 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 border border-gray-300"
                    >
                      重新测评
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>进度</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1E88E5] rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Current Question */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <div className="text-sm text-gray-500 mb-2">
                    问题 {currentStep + 1} / {questions.length}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-lg text-[#1E88E5] mb-2">
                    {(() => {
                      const d = dimensions.find(
                        (x) => x.id === questions[currentStep].dimension
                      );
                      if (!d) return null;
                      const StepIcon = d.icon;
                      return (
                        <>
                          <StepIcon className="h-6 w-6 shrink-0" strokeWidth={2} aria-hidden />
                          <span>{d.name}维度</span>
                        </>
                      );
                    })()}
                  </div>
                  <div className="text-2xl font-bold text-[#1A1A1A]">
                    {questions[currentStep].text}
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  {questions[currentStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(currentStep, option.value)}
                      className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-[#1E88E5] hover:bg-blue-50 transition-all duration-200"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-100 text-[#1A1A1A] flex items-center justify-center mr-3 font-semibold">
                          {String.fromCharCode(65 + index)}
                        </div>
                        {option.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
