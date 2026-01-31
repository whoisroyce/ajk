import * as React from "react";
import { useI18n } from "@/i18n/I18nProvider";
import type { Language } from "@/i18n/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LANGS: Array<{ key: Language; label: string }> = [
  { key: "en", label: "EN" },
  { key: "it", label: "IT" },
  { key: "es", label: "ES" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();

  return (
    <div className={cn("flex items-center gap-2", className)} aria-label="Language">
      {LANGS.map((l, idx) => (
        <React.Fragment key={l.key}>
          <Button
            type="button"
            variant="text"
            size="sm"
            onClick={() => setLang(l.key)}
            className={cn(
              "px-0 text-xs font-medium text-museum",
              lang === l.key ? "opacity-100" : "opacity-60",
            )}
            aria-current={lang === l.key ? "true" : undefined}
          >
            {l.label}
          </Button>
          {idx < LANGS.length - 1 ? <span className="text-xs opacity-40">/</span> : null}
        </React.Fragment>
      ))}
    </div>
  );
}
