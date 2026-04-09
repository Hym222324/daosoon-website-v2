import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "供应链数智化转型挑战 | 道生数智",
  description:
    "从端到端供应链视角归纳企业数智化常见挑战：协同、系统落地、数据治理与组织机制，并提供定性建设重点。",
};

export default function ChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
