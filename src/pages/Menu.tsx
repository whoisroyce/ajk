import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/i18n/I18nProvider";

export default function Menu() {
  const { content, t } = useI18n();
  const menu = content.menu;

  return (
    <PageShell>
      <header className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl text-museum">{t(menu.title)}</h1>
        <p className="mt-6 text-sm md:text-base leading-relaxed opacity-75">{t(menu.lead)}</p>
      </header>

      <section className="mt-12 max-w-3xl">
        <div className="space-y-7 text-sm md:text-base leading-relaxed opacity-80">
          <p className="text-museum-tight">{t(menu.courseCount)}</p>
          <p>{t(menu.winePairing)}</p>
          <p>{t(menu.dietary)}</p>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <div className="flex flex-col gap-3 text-sm md:text-base">
            <div className="flex items-baseline justify-between gap-6">
              <span className="text-museum-tight opacity-90">{t(menu.pricing.tasting)}</span>
              <span className="text-museum opacity-60">{t(menu.pricing.note)}</span>
            </div>
            <div className="flex items-baseline justify-between gap-6">
              <span className="text-museum-tight opacity-90">{t(menu.pricing.pairing)}</span>
              <span className="text-museum opacity-60">&nbsp;</span>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
