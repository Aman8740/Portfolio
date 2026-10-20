import { useEffect, useState } from "react";

export type AppRoute = "portfolio" | "resume" | "rirekisho";

function readRoute(): AppRoute {
  const hash = window.location.hash.replace(/^#\/?/, "").split("?")[0];
  return hash === "resume" || hash === "rirekisho" ? hash : "portfolio";
}

/**
 * Tracks the current hash route so document pages work on static hosting.
 * @returns The active route: "portfolio", "resume" or "rirekisho"
 */
export function useHashRoute(): AppRoute {
  const [route, setRoute] = useState<AppRoute>(readRoute);

  useEffect(() => {
    const onChange = () => setRoute(readRoute());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}
