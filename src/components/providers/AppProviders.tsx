"use client";

import type { ReactNode } from "react";
import { LocaleProvider } from "@/contexts/LocaleContext";

export function AppProviders({ children }: { children: ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
