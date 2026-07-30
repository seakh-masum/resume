import { ASTRO_PAGE_LOAD_EVENT } from "@/const";

const astroPageLoadCleanups = new WeakMap<
  () => void | Promise<void>,
  () => void
>();

export const runOnAstroPageLoad = (
  handler: () => void | Promise<void>,
): (() => void) => {
  const existingCleanup = astroPageLoadCleanups.get(handler);
  if (existingCleanup) {
    existingCleanup();
  }

  const run = () => {
    void handler();
  };

  run();
  document.addEventListener(ASTRO_PAGE_LOAD_EVENT, run);

  const cleanup = () => {
    document.removeEventListener(ASTRO_PAGE_LOAD_EVENT, run);
    astroPageLoadCleanups.delete(handler);
  };

  astroPageLoadCleanups.set(handler, cleanup);
  window.addEventListener("pagehide", cleanup, { once: true });
  return cleanup;
};

export const bindWindowEventWithPagehideCleanup = <
  K extends keyof WindowEventMap,
>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
): (() => void) => {
  window.addEventListener(eventName, handler as EventListener, options);

  const cleanup = () => {
    window.removeEventListener(eventName, handler as EventListener, options);
  };

  window.addEventListener("pagehide", cleanup, { once: true });
  return cleanup;
};
