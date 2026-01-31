import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/i18n/I18nProvider";

export default function Experiences() {
  const { content, t } = useI18n();
  const page = content.experiences;

  return (
    <PageShell>
      <header className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl text-museum">{t(page.title!)}</h1>
        <p className="mt-6 text-sm md:text-base leading-relaxed opacity-75">{t(page.intro!)}</p>
      </header>

      <section className="mt-12 max-w-3xl">
        <div className="space-y-12">
          {page.sections?.map((s, idx) => (
            <article key={idx} className="border-t border-border pt-8">
              <h2 className="text-lg md:text-xl text-museum-tight">{t(s.heading)}</h2>
              <div className="mt-5 space-y-6 text-sm md:text-base leading-relaxed opacity-80">
                {s.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{t(p)}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
