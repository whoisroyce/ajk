import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/i18n/I18nProvider";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const reservationSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(40),
  date: z.string().trim().min(1).max(20),
  time: z.string().trim().min(1).max(20),
  guests: z.coerce.number().int().min(1).max(12),
  notes: z.string().trim().max(600).optional(),
});

type ReservationValues = z.infer<typeof reservationSchema>;

export default function Reservations() {
  const { content, t } = useI18n();
  const copy = content.reservations;

  const form = useForm<ReservationValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: 2,
      notes: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (values: ReservationValues) => {
    // Frontend-only placeholder: send to backend/email later.
    void values;
    toast({
      title: t(copy.form.success),
    });
    form.reset({ ...form.getValues(), notes: "" });
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <PageShell>
      <header className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl text-museum">{t(copy.title)}</h1>
        <p className="mt-6 text-sm md:text-base leading-relaxed opacity-75">{t(copy.lead)}</p>
      </header>

      <section className="mt-12 max-w-3xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-xs text-museum opacity-70" htmlFor="name">
                {t(copy.form.name)}
              </Label>
              <Input id="name" {...register("name")} />
              {errors.name ? <p className="text-xs text-brand-red">{errors.name.message}</p> : null}
            </div>

            <div className="space-y-2">
              <Label className="text-xs text-museum opacity-70" htmlFor="email">
                {t(copy.form.email)}
              </Label>
              <Input id="email" type="email" autoComplete="email" {...register("email")} />
              {errors.email ? <p className="text-xs text-brand-red">{errors.email.message}</p> : null}
            </div>

            <div className="space-y-2">
              <Label className="text-xs text-museum opacity-70" htmlFor="phone">
                {t(copy.form.phone)}
              </Label>
              <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
              {errors.phone ? <p className="text-xs text-brand-red">{errors.phone.message}</p> : null}
            </div>

            <div className="space-y-2">
              <Label className="text-xs text-museum opacity-70" htmlFor="guests">
                {t(copy.form.guests)}
              </Label>
              <Input id="guests" type="number" inputMode="numeric" min={1} max={12} {...register("guests")} />
              {errors.guests ? <p className="text-xs text-brand-red">{errors.guests.message}</p> : null}
            </div>

            <div className="space-y-2">
              <Label className="text-xs text-museum opacity-70" htmlFor="date">
                {t(copy.form.date)}
              </Label>
              <Input id="date" type="date" {...register("date")} />
              {errors.date ? <p className="text-xs text-brand-red">{errors.date.message}</p> : null}
            </div>

            <div className="space-y-2">
              <Label className="text-xs text-museum opacity-70" htmlFor="time">
                {t(copy.form.time)}
              </Label>
              <Input id="time" type="time" {...register("time")} />
              {errors.time ? <p className="text-xs text-brand-red">{errors.time.message}</p> : null}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs text-museum opacity-70" htmlFor="notes">
              {t(copy.form.notes)}
            </Label>
            <Textarea id="notes" rows={5} {...register("notes")} />
            {errors.notes ? <p className="text-xs text-brand-red">{errors.notes.message}</p> : null}
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              variant="text"
              disabled={isSubmitting}
              className="px-0 text-museum-tight"
            >
              {t(copy.form.submit)}
            </Button>
          </div>
        </form>
      </section>
    </PageShell>
  );
}
