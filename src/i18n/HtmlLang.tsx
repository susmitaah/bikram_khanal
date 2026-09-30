"use client";

import { useEffect } from "react";
import { useLang } from "./useLang";

/** Keeps <html lang> in sync with the active language, for a11y/SEO. */
export function HtmlLang() {
  const { lang } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang === "np" ? "ne" : "en";
  }, [lang]);

  return null;
}
