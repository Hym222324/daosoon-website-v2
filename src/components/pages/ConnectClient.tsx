"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { useSiteLocale } from "@/contexts/LocaleContext";
import { connectPage } from "@/i18n/connect";
import { T } from "@/i18n/core";

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

export default function ConnectClient() {
  const { locale } = useSiteLocale();

  const onDemo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(T(locale, connectPage.alertDemoOk));
  };

  const onGeneric = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(T(locale, connectPage.alertGeneric));
  };

  const navItems: [keyof typeof connectPage, string][] = [
    ["navBiz", "#biz"],
    ["navCareers", "#careers"],
    ["navPartner", "#partner"],
    ["navCommunity", "#community"],
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-[#F5F5F5]">
        <div className="bg-[#1A1A1A] text-white py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold">
              {T(locale, connectPage.heroTitle)}
            </h1>
            <p className="mt-4 text-gray-300">{T(locale, connectPage.heroSub)}</p>
            <nav className="mt-8 flex flex-wrap gap-2 text-sm">
              {navItems.map(([key, hash]) => (
                <a
                  key={hash}
                  href={hash}
                  className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20"
                >
                  {T(locale, connectPage[key])}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
          <FormCard title={T(locale, connectPage.bizTitle)} id="biz">
            <p className="text-gray-600 mb-6">{T(locale, connectPage.bizIntro)}</p>
            <form onSubmit={onDemo} className="grid gap-4">
              <input
                required
                name="name"
                placeholder={T(locale, connectPage.phName)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                required
                name="company"
                placeholder={T(locale, connectPage.phCompany)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                required
                name="phone"
                placeholder={T(locale, connectPage.phPhone)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                required
                name="email"
                type="email"
                placeholder={T(locale, connectPage.phEmail)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <textarea
                name="note"
                placeholder={T(locale, connectPage.phNote)}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="bg-[#FF9800] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#F57C00]"
                >
                  {T(locale, connectPage.btnDemo)}
                </button>
                <button
                  type="button"
                  className="border border-gray-300 px-6 py-2.5 rounded-lg font-medium"
                  onClick={() =>
                    alert(T(locale, connectPage.alertDownload))
                  }
                >
                  {T(locale, connectPage.btnDownload)}
                </button>
              </div>
            </form>
          </FormCard>

          <FormCard title={T(locale, connectPage.careersTitle)} id="careers">
            <p className="text-gray-600 mb-4">{T(locale, connectPage.careersIntro)}</p>
            <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
              <li>{T(locale, connectPage.job1)}</li>
              <li>{T(locale, connectPage.job2)}</li>
              <li>{T(locale, connectPage.job3)}</li>
            </ul>
            <form onSubmit={onGeneric} className="grid gap-4">
              <input
                required
                name="name"
                placeholder={T(locale, connectPage.phName)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                required
                name="email"
                type="email"
                placeholder={T(locale, connectPage.phEmail)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                name="position"
                placeholder={T(locale, connectPage.phPosition)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <button
                type="submit"
                className="bg-[#1E88E5] text-white px-6 py-2.5 rounded-lg font-medium w-fit"
              >
                {T(locale, connectPage.btnResume)}
              </button>
            </form>
          </FormCard>

          <FormCard title={T(locale, connectPage.partnerTitle)} id="partner">
            <p className="text-gray-600 mb-6">{T(locale, connectPage.partnerIntro)}</p>
            <form onSubmit={onGeneric} className="grid gap-4">
              <input
                required
                name="org"
                placeholder={T(locale, connectPage.phOrg)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                required
                name="contact"
                placeholder={T(locale, connectPage.phContact)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                required
                name="email"
                type="email"
                placeholder={T(locale, connectPage.phEmail)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <textarea
                name="coop"
                placeholder={T(locale, connectPage.phCoop)}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="bg-[#9C27B0] text-white px-6 py-2.5 rounded-lg font-medium"
                >
                  {T(locale, connectPage.btnPartner)}
                </button>
                <button
                  type="button"
                  className="border border-gray-300 px-6 py-2.5 rounded-lg font-medium"
                  onClick={() => alert(T(locale, connectPage.alertApi))}
                >
                  {T(locale, connectPage.btnApi)}
                </button>
              </div>
            </form>
          </FormCard>

          <FormCard title={T(locale, connectPage.communityTitle)} id="community">
            <p className="text-gray-600 mb-4">{T(locale, connectPage.communityIntro)}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/forum"
                className="inline-flex bg-[#1E88E5] text-white px-6 py-2.5 rounded-lg font-medium"
              >
                {T(locale, connectPage.btnForum)}
              </Link>
              <Link
                href="/resources"
                className="inline-flex border border-gray-300 px-6 py-2.5 rounded-lg font-medium"
              >
                {T(locale, connectPage.btnResources)}
              </Link>
            </div>
          </FormCard>
        </div>
      </main>
      <Footer />
    </div>
  );
}
