import { Outlet } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ScrollToTop } from "./ScrollToTop";

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-roman-surface">
      <SiteHeader />
      <ScrollToTop />
      <Outlet />
      <SiteFooter />
    </div>
  );
}
