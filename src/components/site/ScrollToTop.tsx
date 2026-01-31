import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * BrowserRouter-compatible scroll restoration.
 * (React Router's <ScrollRestoration /> requires a data router.)
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}