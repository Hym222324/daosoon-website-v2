"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { metadata } from "./metadata";

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResult, setShowResult] = useState(false);

  const dimensions = [
    { id: "strategy", name: "战略", icon: "🎯" },
    { id: "process", name: "流程", icon: "🔄" },
    { id: "supplier", name: "供应商", icon: "🤝" },
    { id: "technology", name: "技术", icon: "💻" },
    { id: "organization", name: "组织", icon: "👥" },
  ];

  const questions = [
    {
      dimension: "strategy",
      text: "您的供应协同战略是否明确并得到有效执行？",
      options: [
        { value: 1, label: "完全没有，还在摸索中" },
        { value: 2, label: "有初步想法但缺乏系统性" },
        { value: 3, label: "有明确战略并部分落地" },
        { value: 4, label: "战略清晰，执行良好" },
        { value: 5, label: "行业领先，持续优化" },
      ],
    },
    {
      dimension: "strategy",
      text: "您的 AI 或自动化在供应链中的投入占比？",
      options: [
        { value: 1, label: "几乎为零" },
        { value: 2, label: "1-5%" },
        { value: 3, label: "5-10%" },
        { value: 4, label: "10-20%" },
        { value: 5, label: "20% 以上" },
      ],
    },
    {
      dimension: "process",
      text: "您的采购流程标准化程度如何？",
      options: [
        { value: 1, label: "完全依赖人工，无标准化" },
        { value: 2, label: "部分流程标准化" },
        { value: 3, label: "主要流程已标准化" },
        { value: 4, label: "全流程标准化" },
        { value: 5, label: "全流程优化并自动化" },
      ],
    },
    {
      dimension: "process",
      text: "供应商协作的实时性和透明度如何？",
      options: [
        { value: 1, label: "主要通过邮件/电话，无透明度" },
        { value: 2, label: "部分在线协作" },
        { value: 3, label: "有供应商门户，实时性一般" },
        { value: 4, label: "实时协作，信息透明" },
        { value: 5, label: "完全自动化，智能协同" },
      ],
    },
    {
      dimension: "supplier",
      text: "您的供应商管理覆盖哪些维度？",
      options: [
        { value: 1, label: "仅价格管理" },
        { value: 2, label: "价格 + 质量" },
        { value: 3, label: "价格 + 质量 + 交付" },
        { value: 4, label: "多维度综合评估" },
        { value: 5, label: "全生命周期智能管理" },
      ],
    },
    {
      dimension: "supplier",
      text: "供应商准入和绩效评估的频率？",
      options: [
        { value: 1, label: "不定期，临时评估" },
        { value: 2, label: "每年一次" },
        { value: 3, label: "每季度一次" },
        { value: 4, label: "每月跟踪" },
        { value: 5, label: "实时监控，持续评估" },
      ],
    },
    {
      dimension: "technology",
      text: "您使用的供应管理系统类型？",
      options: [
        { value: 1, label: "Excel/手工管理" },
        { value: 2, label: "传统 ERP 基础模块" },
        { value: 3, label: "专业 SRM 系统" },
        { value: 4, label: "SRM+AI 增强" },
        { value: 5, label: "AI 原生平台" },
      ],
    },
    {
      dimension: "technology",
      text: "数据分析和决策支持的智能化程度？",
      options: [
        { value: 1, label: "无数据分析" },
        { value: 2, label: "基础报表" },
        { value: 3, label: "BI 分析工具" },
        { value: 4, label: "预测分析" },
        { value: 5, label: "AI 智能决策" },
      ],
    },
    {
      dimension: "organization",
      text: "您的供应协同团队配置？",
      options: [
        { value: 1, label: "无人负责，兼职管理" },
        { value: 2, label: "小团队管理" },
        { value: 3, label: "专业部门" },
        { value: 4, label: "专业团队 + 专家支持" },
        { value: 5, label: "跨部门虚拟组织 +AI 辅助" },
      ],
    },
    {
      dimension: "organization",
      text: "员工的数字化能力和 AI 接受度？",
      options: [
        { value: 1, label: "数字化能力弱，抵触新技术" },
        { value: 2, label: "部分员工有基础" },
        { value: 3, label: "大多数员工能适应" },
        { value: 4, label: "数字化能力强" },
        { value: 5, label: "全员数字精英，主动创新" },
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
      <Header />

      <main className="bg-gradient-to-br from-[#F0F4F8] to-[#FFFFFF]">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
                供应协同健康度<span className="text-[#1E88E5]">测评</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                您的供应协同能力目前处于什么水平？
                <br />
                <strong>5 分钟测评，10 分钟获取专属诊断报告和改善建议</strong>
              </p>

              {!showResult && (
                <div className="mt-8 inline-flex items-center bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#1E88E5] mb-1">5 大维度</div>
                    <div className="text-sm text-gray-500">战略 / 流程 / 供应商 / 技术 / 组织</div>
                  </div>
                  <div className="mx-6 text-gray-300">|</div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#1E88E5] mb-1">15 道题</div>
                    <div className="text-sm text-gray-500">专业测评 +AI 分析</div>
                  </div>
                  <div className="mx-6 text-gray-300">|</div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#1E88E5] mb-1">10 分钟</div>
                    <div className="text-sm text-gray-500">获取专属报告</div>
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
                      return (
                        <div key={dim.id}>
                          <div className="flex justify-between mb-1">
                            <div className="flex items-center">
                              <span className="text-xl mr-2">{dim.icon}</span>
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
                  <div className="text-lg text-[#1E88E5] mb-2">
                    {dimensions.find(
                      (d) => d.id === questions[currentStep].dimension
                    )?.icon}
                    {questions[currentStep].dimension}维度
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
