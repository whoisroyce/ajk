import { NavLink } from "@/components/NavLink";
import { useI18n } from "@/i18n/I18nProvider";

export function SiteFooter() {
  const { content, t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-4 text-xs text-museum opacity-75 md:flex-row md:items-center md:justify-between">
          <div>
            © {year} {t(content.brand.name)}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <NavLink to="/" className="hover:opacity-80 underline-offset-4 hover:underline">
              {t(content.contact.privacy)}
            </NavLink>
            <NavLink to="/" className="hover:opacity-80 underline-offset-4 hover:underline">
              {t(content.contact.cookies)}
            </NavLink>
            <a
              href="https://docs.lovable.dev/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 underline-offset-4 hover:underline"
            >
              {t(content.contact.credit)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
