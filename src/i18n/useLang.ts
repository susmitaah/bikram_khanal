"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Lang = "np" | "en";

/** A piece of copy in both languages. */
export type L = { np: string; en: string };

const STORAGE_KEY = "bk-lang";
const CHANGE_EVENT = "bk-lang-change";
const DEFAULT_LANG: Lang = "np";

const NP_DIGITS = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

function readLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "np" ? stored : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function toNepaliDigits(value: string) {
  return value.replace(/[0-9]/g, (d) => NP_DIGITS[Number(d)]);
}

export function useLang() {
  const lang = useSyncExternalStore(subscribe, readLang, () => DEFAULT_LANG);

  const setLang = useCallback((next: Lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage blocked — the toggle still works for this page view
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  const t = useCallback((copy: L) => copy[lang], [lang]);

  /** Formats a number or numeric string, switching to Devanagari digits in Nepali. */
  const num = useCallback(
    (value: number | string) => {
      const text = typeof value === "number" ? value.toLocaleString("en-IN") : value;
      return lang === "np" ? toNepaliDigits(text) : text;
    },
    [lang],
  );

  return { lang, setLang, t, num };
}
