import en from "./en.json";
import es from "./es.json";

export type Locale = "en" | "es";
export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "es"];

const translations: Record<Locale, Record<string, any>> = { en, es };


function getNested(obj: Record<string, any>, path: string): unknown {
  return path.split(".").reduce((acc, key) => acc?.[key], obj) as unknown ?? path;
}

export function t(locale: Locale, key: string): string {
  return getNested(translations[locale], key) as string;
}

export type TFunction = (key: string) => string;

export function useTranslations(locale: Locale): TFunction {
  return (key: string) => t(locale, key);
}

export function detectLocale(pathname: string): Locale {
  const match = pathname.match(/^\/(en|es)(\/|$)/);
  if (match && locales.includes(match[1] as Locale)) {
    return match[1] as Locale;
  }
  return defaultLocale;
}

export function localizePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const pattern = new RegExp(`^\\/(${locales.join("|")})(\\/|$)`);
  const stripped = pathname.replace(pattern, "/");
  const path = stripped === "/" ? "" : stripped;
  return `/${target}${path}`;
}
