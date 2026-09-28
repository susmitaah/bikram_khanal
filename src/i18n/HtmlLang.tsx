"use client";

import { useEffect } from "react";
import { useLang } from "./useLang";

/** Keeps <html lang> in step with the chosen language (screen readers, hyphenation, CSS). */
export function HtmlLang() {
  const { lang } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang === "np" ? "ne" : "en";
  }, [lang]);

  return null;
}
