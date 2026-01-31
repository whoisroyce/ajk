import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nProvider";
import { toast } from "@/hooks/use-toast";

export default function GiftADinner() {
  const { content, t } = useI18n();
  const gift = content.gift;

  return (
    <PageShell>
      <header className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl text-museum">{t(gift.title)}</h1>
        <p className="mt-6 text-sm md:text-base leading-relaxed opacity-75">{t(gift.lead)}</p>
      </header>

      <section className="mt-10 max-w-3xl space-y-7 text-sm md:text-base leading-relaxed opacity-80">
        {gift.body.map((p, idx) => (
          <p key={idx}>{t(p)}</p>
        ))}

        <div className="pt-6">
          <Button
            type="button"
            variant="textAccent"
            className="px-0 text-museum-tight"
            onClick={() =>
              toast({
                title: t(gift.cta),
              })
            }
          >
            {t(gift.cta)}
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
