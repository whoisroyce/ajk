import * as React from "react";
import type { Language } from "./types";
import { DEFAULT_LANGUAGE, siteContent, t } from "./content";

type I18nContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  content: typeof siteContent;
  t: (value: Record<Language, string>) => string;
};

const I18nContext = React.createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "tvr_lang";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Language>(() => {
    const raw = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (raw === "en" || raw === "it" || raw === "es") return raw;
    return DEFAULT_LANGUAGE;
  });

  const setLang = React.useCallback((next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value = React.useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang,
      content: siteContent,
      t: (value) => t(value, lang),
    }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
