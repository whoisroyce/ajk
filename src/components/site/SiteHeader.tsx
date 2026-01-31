import { NavLink } from "@/components/NavLink";
import { useI18n } from "@/i18n/I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";

const navItems = [
  { to: "/", key: "home" as const },
  { to: "/philosophy", key: "philosophy" as const },
  { to: "/roman-kitchen", key: "romanKitchen" as const },
  { to: "/menu", key: "menu" as const },
  { to: "/experiences", key: "experiences" as const },
  { to: "/reservations", key: "reservations" as const },
  { to: "/gift-a-dinner", key: "gift" as const },
  { to: "/contact", key: "contact" as const },
];

export function SiteHeader({ className }: { className?: string }) {
  const { content, t } = useI18n();

  return (
    <header className={cn("sticky top-0 z-50", className)}>
      <div className="bg-roman-surface">
        <div className="mx-auto max-w-6xl px-6 pt-8 pb-6">
          <div className="flex items-baseline justify-between gap-6">
            <div className="min-w-0">
              <NavLink
                to="/"
                className="block text-sm text-museum-tight opacity-90 hover:opacity-70 transition-opacity"
              >
                <span className="block truncate text-base font-medium">{t(content.brand.name)}</span>
                <span className="block truncate text-xs opacity-60">{t(content.brand.localeLine)}</span>
              </NavLink>
            </div>

            <div className="shrink-0 text-right">
              <LanguageSwitcher className="justify-end" />
              <div className="mt-3 flex flex-wrap justify-end gap-x-5 gap-y-2 text-xs text-museum">
                <a
                  href="https://www.instagram.com/trattoria_vecchia_roma?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="opacity-65 hover:opacity-100 transition-opacity"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-museum">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.to}
                className="opacity-65 hover:opacity-100 transition-opacity"
                activeClassName="opacity-100 underline underline-offset-8"
              >
                {t(content.nav[item.key])}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
