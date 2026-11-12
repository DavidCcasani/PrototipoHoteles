import React from "react";
import { CirqaHeader } from "@/components/CirqaHeader";
import { CirqaFooter } from "@/components/CirqaFooter";

export default function CirqaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-hotel="cirqa"
      className="min-h-screen bg-white text-[#333333] font-cirqa-carlito"
    >
      <CirqaHeader />
      <main>{children}</main>
      <CirqaFooter />
    </div>
  );
}
