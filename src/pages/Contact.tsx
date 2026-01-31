import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/i18n/I18nProvider";

export default function Contact() {
  const { content, t } = useI18n();
  const c = content.contact;

  const address = "Trattoria Vecchia Roma, Valencia, Spain";
  const mapSrc =
    "https://www.google.com/maps?q=" + encodeURIComponent(address) + "&output=embed";

  return (
    <PageShell>
      <header className="max-w-4xl">
        <h1 className="text-2xl md:text-3xl text-museum">{t(c.title)}</h1>
        <p className="mt-6 text-sm md:text-base leading-relaxed opacity-75">{t(c.lead)}</p>
      </header>

      <section className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-10">
          <div>
            <h2 className="text-xs text-museum opacity-65">{t(c.addressLabel)}</h2>
            <p className="mt-3 text-sm md:text-base leading-relaxed opacity-85">
              Trattoria Vecchia Roma
              <br />
              Valencia, Spain
            </p>
          </div>

          <div>
            <h2 className="text-xs text-museum opacity-65">{t(c.hoursLabel)}</h2>
            <p className="mt-3 text-sm md:text-base leading-relaxed opacity-85">{t(c.hours)}</p>
          </div>

          <div>
            <h2 className="text-xs text-museum opacity-65">{t(c.phoneLabel)}</h2>
            <p className="mt-3 text-sm md:text-base leading-relaxed opacity-85">
              <a className="hover:underline underline-offset-4" href="tel:+39064467143">
                +39 064467143
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xs text-museum opacity-65">{t(c.emailLabel)}</h2>
            <p className="mt-3 text-sm md:text-base leading-relaxed opacity-85">info@trattoriavecchiaroma.es</p>
          </div>
        </div>

        <div className="border border-border">
          <iframe
            title="Map"
            src={mapSrc}
            loading="lazy"
            className="h-[420px] w-full"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </PageShell>
  );
}
