"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function FormCard({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 max-w-3xl mx-auto border border-gray-200 rounded-2xl p-8 bg-white shadow-sm"
    >
      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">{title}</h2>
      {children}
    </section>
  );
}

export default function ConnectPage() {
  const onDemo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("感谢提交预约演示信息。正式环境将对接 CRM / 邮件与短信。");
  };

  const onGeneric = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("感谢提交。我们的同事将在工作日与您联系。");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#F5F5F5]">
        <div className="bg-[#1A1A1A] text-white py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold">连接道生，共创数智供应链</h1>
            <p className="mt-4 text-gray-300">
              按 PRD：企业决策者、求职者、生态伙伴与社区用户可分别通过下方入口留资或跳转。
            </p>
            <nav className="mt-8 flex flex-wrap gap-2 text-sm">
              {[
                ["业务咨询", "#biz"],
                ["加入团队", "#careers"],
                ["生态合作", "#partner"],
                ["参与社区", "#community"],
              ].map(([label, hash]) => (
                <a
                  key={hash}
                  href={hash}
                  className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
          <FormCard title="业务咨询" id="biz">
            <p className="text-gray-600 mb-6">
              预约演示或下载解决方案手册。表单字段对齐 PRD：姓名、公司、手机、邮箱（可扩展需求简述）。
            </p>
            <form onSubmit={onDemo} className="grid gap-4">
              <input
                required
                name="name"
                placeholder="姓名"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                required
                name="company"
                placeholder="公司"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                required
                name="phone"
                placeholder="手机"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="邮箱"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <textarea
                name="note"
                placeholder="需求简述（可选）"
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="bg-[#FF9800] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#F57C00]"
                >
                  预约演示
                </button>
                <button
                  type="button"
                  className="border border-gray-300 px-6 py-2.5 rounded-lg font-medium"
                  onClick={() =>
                    alert("解决方案手册下载将在对接内容分发后开放，可先留资预约。")
                  }
                >
                  下载解决方案手册
                </button>
              </div>
            </form>
          </FormCard>

          <FormCard title="加入团队" id="careers">
            <p className="text-gray-600 mb-4">
              热招职位示例：后端开发、供应链顾问、实施顾问、产品经理（具体以实际招聘为准）。
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
              <li>供应链数字化实施顾问</li>
              <li>后端开发工程师（Java / Go）</li>
              <li>产品经理（B 端 SaaS）</li>
            </ul>
            <form onSubmit={onGeneric} className="grid gap-4">
              <input
                required
                name="name"
                placeholder="姓名"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="邮箱"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                name="position"
                placeholder="意向职位"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <button
                type="submit"
                className="bg-[#1E88E5] text-white px-6 py-2.5 rounded-lg font-medium w-fit"
              >
                提交简历
              </button>
            </form>
          </FormCard>

          <FormCard title="生态合作" id="partner">
            <p className="text-gray-600 mb-6">
              软件厂商、集成商、行业协会与产业伙伴的合作申请与 API 接入意向收集。
            </p>
            <form onSubmit={onGeneric} className="grid gap-4">
              <input
                required
                name="org"
                placeholder="机构 / 公司名称"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                required
                name="contact"
                placeholder="联系人"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="邮箱"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <textarea
                name="coop"
                placeholder="合作诉求 / API 场景"
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="bg-[#9C27B0] text-white px-6 py-2.5 rounded-lg font-medium"
                >
                  申请合作
                </button>
                <button
                  type="button"
                  className="border border-gray-300 px-6 py-2.5 rounded-lg font-medium"
                  onClick={() => alert("API 文档将在开放平台就绪后提供链接。")}
                >
                  API 接入说明
                </button>
              </div>
            </form>
          </FormCard>

          <FormCard title="参与社区" id="community">
            <p className="text-gray-600 mb-4">
              预约下次公开课、加入论坛讨论。正式排期与报名将在社区后台配置。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/forum"
                className="inline-flex bg-[#1E88E5] text-white px-6 py-2.5 rounded-lg font-medium"
              >
                前往论坛
              </Link>
              <Link
                href="/resources"
                className="inline-flex border border-gray-300 px-6 py-2.5 rounded-lg font-medium"
              >
                资源与公开课
              </Link>
            </div>
          </FormCard>
        </div>
      </main>
      <Footer />
    </div>
  );
}
