import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/i18n/I18nProvider";

import dish01 from "@/assets/dishes/dish-01.jpeg";
import dish02 from "@/assets/dishes/dish-02.jpeg";
import dish03 from "@/assets/dishes/dish-03.jpeg";
import dish04 from "@/assets/dishes/dish-04.jpeg";
import dish05 from "@/assets/dishes/dish-05.jpeg";
import dish06 from "@/assets/dishes/dish-06.jpeg";

export default function RomanKitchen() {
  const { content, t } = useI18n();
  const page = content.romanKitchen;

  const images = [dish01, dish02, dish03, dish04];

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

      {page.gallery?.length ? (
        <section
          className="mt-16 max-w-4xl"
          aria-label={t({ en: "Dishes", it: "Piatti", es: "Platos" })}
        >
          <div className="space-y-16">
            {page.gallery.slice(0, 4).map((item, idx) => {
              const src = images[idx % images.length];
              const offset = idx % 2 === 0 ? "md:ml-auto" : "";

              return (
                <figure key={idx} className={`max-w-xl ${offset}`}>
                  <img
                    src={src}
                    alt={t(item.alt)}
                    loading="lazy"
                    className="w-full h-auto border border-border/50 animate-fade-in transition-opacity duration-300 hover:opacity-90"
                  />
                  <figcaption className="mt-4 text-xs md:text-sm tracking-wide opacity-70">
                    {t(item.caption)}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </section>
      ) : null}
    </PageShell>
  );
}
