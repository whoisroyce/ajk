import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/i18n/I18nProvider";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";

import hero01 from "@/assets/home/hero-01.jpeg";
import hero02 from "@/assets/home/hero-02.jpeg";
import hero03 from "@/assets/home/hero-03.jpeg";

const Index = () => {
  const { content, t } = useI18n();

  const heroImages = [
    { src: hero01, alt: "Dining table scene at Trattoria Vecchia Roma" },
    { src: hero02, alt: "Plates and wine at Trattoria Vecchia Roma" },
    { src: hero03, alt: "Roman trattoria table setting" },
  ];

  return (
    <PageShell className="pt-10">
      <header>
        <HeroSlideshow images={heroImages} intervalMs={15000} className="min-h-[70vh]">
          <div className="min-h-[70vh] flex items-center">
            <div className="mx-auto w-full max-w-4xl px-6 text-center">
              {/* Editorial cover frame */}
              <div className="mx-auto max-w-3xl text-hero-shadow">
                <div className="mx-auto w-20 border-t border-border/60" />

                <h1 className="mt-6 text-3xl md:text-5xl leading-tight text-museum">
                  {t(content.brand.name)}
                </h1>

                <p className="mt-6 text-xs md:text-sm text-museum opacity-80">
                  {t(content.home.heroLine1)}
                </p>

                <p className="mt-5 text-sm md:text-base leading-relaxed opacity-75">
                  {t(content.home.heroLine2)}
                </p>

                <div className="mt-10 mx-auto w-28 border-t border-border/60" />
              </div>
            </div>
          </div>
        </HeroSlideshow>
      </header>
    </PageShell>
  );
};

export default Index;
