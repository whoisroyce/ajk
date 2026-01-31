import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/i18n/I18nProvider";

export default function Philosophy() {
  const { content, t } = useI18n();
  const page = content.philosophy;

  return (
    <PageShell>
      <header className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl text-museum">{t(page.title!)}</h1>
        <p className="mt-6 text-sm md:text-base leading-relaxed opacity-75">{t(page.intro!)}</p>
      </header>

      <section className="mt-10 max-w-3xl space-y-7 text-sm md:text-base leading-relaxed opacity-80">
        {page.body?.map((p, idx) => (
          <p key={idx}>{t(p)}</p>
        ))}
      </section>
    </PageShell>
  );
}
