"use client";

type DaosoonWordmarkProps = {
  theme?: "light" | "dark";
  className?: string;
};

export default function DaosoonWordmark({ theme = "light", className = "" }: DaosoonWordmarkProps) {
  const wrapperClass =
    theme === "dark"
      ? "inline-flex items-center rounded-md bg-white/95 px-2 py-1"
      : "inline-flex items-center";

  const logoClass =
    theme === "dark"
      ? "h-12 w-auto max-w-[260px] object-contain"
      : "h-11 w-auto max-w-[230px] object-contain";

  return (
    <div className={`${wrapperClass} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand-logo.png" alt="Daosoon" className={logoClass} />
    </div>
  );
}
