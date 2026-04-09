"use client";

type DaosoonWordmarkProps = {
  theme?: "light" | "dark";
  className?: string;
};

export default function DaosoonWordmark({ theme = "light", className = "" }: DaosoonWordmarkProps) {
  const logoClass =
    theme === "dark"
      ? "h-12 w-auto rounded-md bg-white px-2 py-1"
      : "h-12 w-auto";

  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand-logo.png" alt="Daosoon" className={logoClass} />
    </div>
  );
}
