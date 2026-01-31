import * as React from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nProvider";

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { lang } = useI18n();

  return (
    <main
      key={lang}
      className={cn(
        "mx-auto max-w-6xl px-6 pb-20 pt-12 animate-fade-in",
        "[animation-duration:700ms]",
        className,
      )}
    >
      {children}
    </main>
  );
}
