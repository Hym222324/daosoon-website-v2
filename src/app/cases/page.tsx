import type { Metadata } from "next";
import CasesClient from "@/components/pages/CasesClient";

export const metadata: Metadata = {
  title: "客户案例",
  description:
    "中联重科、蔚来汽车、农业装备研发机构等供应链数智化实践案例，附关键成果数据与方法论摘要。",
};

export default function CasesPage() {
  return <CasesClient />;
}
