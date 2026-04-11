import Link from "next/link";
import Footer from "@/components/layout/Footer";

type Crumb = { label: string; href: string };

export default function ArticleLayout({
  title,
  subtitle,
  breadcrumb,
  children,
  darkHero = true,
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: Crumb[];
  children: React.ReactNode;
  darkHero?: boolean;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section
          className={
            darkHero
              ? "bg-[#1A1A1A] text-white py-14 px-6"
              : "bg-[#F0F4F8] text-[#1A1A1A] py-14 px-6"
          }
        >
          <div className="max-w-3xl mx-auto">
            {breadcrumb?.length ? (
              <nav
                className={
                  darkHero
                    ? "text-sm text-gray-400 mb-4 flex flex-wrap gap-1"
                    : "text-sm text-gray-600 mb-4 flex flex-wrap gap-1"
                }
              >
                {breadcrumb.map((b, i) => (
                  <span key={`${b.href}-${i}`} className="inline-flex items-center gap-1">
                    {i > 0 && <span className="opacity-50">/</span>}
                    <Link
                      href={b.href}
                      className={
                        darkHero ? "hover:text-white" : "hover:text-[#1E88E5]"
                      }
                    >
                      {b.label}
                    </Link>
                  </span>
                ))}
              </nav>
            ) : null}
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
            {subtitle ? (
              <p
                className={
                  darkHero
                    ? "mt-4 text-lg text-gray-300"
                    : "mt-4 text-lg text-gray-700"
                }
              >
                {subtitle}
              </p>
            ) : null}
          </div>
        </section>
        <div className="max-w-3xl mx-auto px-6 py-12 space-y-6 text-[#444] leading-relaxed">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
