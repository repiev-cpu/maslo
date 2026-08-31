"use client";

import { useEffect } from "react";

const METRIKA_ID = 112114667;
const METRIKA_SCRIPT = `https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}`;

type MetrikaFunction = ((counterId: number, method: string, ...args: unknown[]) => void) & {
  a?: unknown[][];
  l?: number;
};

declare global {
  interface Window {
    ym?: MetrikaFunction;
    __avtomaslofMetrikaInitialized?: boolean;
  }
}

function createMetrikaQueue(): MetrikaFunction {
  const queue = ((...args: unknown[]) => {
    (queue.a = queue.a || []).push(args);
  }) as MetrikaFunction;

  queue.l = Date.now();
  return queue;
}

function reachGoal(goal: string, params?: Record<string, string>) {
  window.ym?.(METRIKA_ID, "reachGoal", goal, params);
}

export default function YandexMetrika() {
  useEffect(() => {
    window.ym = window.ym || createMetrikaQueue();

    if (!document.querySelector(`script[src="${METRIKA_SCRIPT}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = METRIKA_SCRIPT;
      document.head.appendChild(script);
    }

    if (!window.__avtomaslofMetrikaInitialized) {
      window.ym(METRIKA_ID, "init", {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        referrer: document.referrer,
        url: window.location.href,
        accurateTrackBounce: true,
        trackLinks: true,
      });
      window.__avtomaslofMetrikaInitialized = true;
    }

    const handleTrackedClick = (event: MouseEvent) => {
      const source = event.target;
      if (!(source instanceof Element)) return;

      const trackedElement = source.closest<HTMLElement>("[data-metrika-goal]");
      const goal = trackedElement?.dataset.metrikaGoal;
      if (!trackedElement || !goal) return;

      const params: Record<string, string> = {};
      const placement = trackedElement.dataset.metrikaPlacement;
      const href = trackedElement instanceof HTMLAnchorElement ? trackedElement.href : undefined;

      if (placement) params.placement = placement;
      if (href) params.target_url = href;

      reachGoal(goal, params);
    };

    document.addEventListener("click", handleTrackedClick);
    const engagedTimer = window.setTimeout(() => {
      reachGoal("engaged_30s", { page: window.location.pathname });
    }, 30_000);

    return () => {
      document.removeEventListener("click", handleTrackedClick);
      window.clearTimeout(engagedTimer);
    };
  }, []);

  return null;
}
