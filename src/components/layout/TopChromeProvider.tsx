"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Header from "@/components/layout/Header";

type SiteTopChromeValue = {
  /** 顶栏展开（桌面悬停收起时为 false；触摸设备恒 true） */
  dockOpen: boolean;
  /** 首屏为固定顶栏预留的上内边距（如首页 Hero） */
  heroTopPaddingClass: string;
};

const SiteTopChromeContext = createContext<SiteTopChromeValue | null>(null);

const CLOSE_MS = 420;

function usePrefersHoverFinePointer(): boolean {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const fn = () => setOk(mq.matches);
    fn();
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return ok;
}

export default function TopChromeProvider({ children }: { children: ReactNode }) {
  const prefersHoverDock = usePrefersHoverFinePointer();
  const [dockOpen, setDockOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dockVisibleOpen = dockOpen || !prefersHoverDock;

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openDock = useCallback(() => {
    cancelClose();
    setDockOpen(true);
  }, [cancelClose]);

  const scheduleClose = useCallback(() => {
    if (!prefersHoverDock) return;
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setDockOpen(false);
      closeTimer.current = null;
    }, CLOSE_MS);
  }, [prefersHoverDock, cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  const value = useMemo<SiteTopChromeValue>(() => {
    return {
      dockOpen: dockVisibleOpen,
      heroTopPaddingClass: dockVisibleOpen ? "pt-20" : "pt-3",
    };
  }, [dockVisibleOpen]);

  return (
    <SiteTopChromeContext.Provider value={value}>
      {prefersHoverDock ? (
        <div
          className="fixed top-0 right-0 left-0 z-[60] h-3"
          aria-hidden
          onMouseEnter={openDock}
        />
      ) : null}

      <div
        className={[
          "fixed right-0 left-0 top-0 z-50 transition-transform duration-300 ease-out will-change-transform",
          prefersHoverDock && !dockVisibleOpen ? "-translate-y-full" : "translate-y-0",
        ].join(" ")}
        onMouseEnter={openDock}
        onMouseLeave={scheduleClose}
      >
        <Header />
      </div>

      {children}
    </SiteTopChromeContext.Provider>
  );
}

export function useSiteTopChrome(): SiteTopChromeValue {
  const ctx = useContext(SiteTopChromeContext);
  if (!ctx) {
    throw new Error("useSiteTopChrome must be used within TopChromeProvider");
  }
  return ctx;
}
