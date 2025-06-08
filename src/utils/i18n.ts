import { translations, type TranslationKey } from "@/i18n/translations";
import type { SupportedLocale } from "@/config";

/**
 * Get translation for a given key and locale
 * @param key - Translation key
 * @param locale - Target locale
 * @returns Translated string
 */
export function t(key: TranslationKey, locale: SupportedLocale = "en"): string {
  return translations[locale][key] || translations.en[key] || key;
}

/**
 * Get locale from URL pathname
 * @param pathname - URL pathname
 * @returns Detected locale or default 'en'
 */
export function getLocaleFromPathname(pathname: string): SupportedLocale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === 'en' || firstSegment === 'zh') {
    return firstSegment as SupportedLocale;
  }
  
  return 'en'; // default locale
}

/**
 * Remove locale prefix from pathname
 * @param pathname - URL pathname with locale prefix
 * @returns Pathname without locale prefix
 */
export function removeLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length > 0 && (segments[0] === 'en' || segments[0] === 'zh')) {
    return '/' + segments.slice(1).join('/');
  }
  
  return pathname;
}

/**
 * Add locale prefix to pathname
 * @param pathname - Base pathname
 * @param locale - Target locale
 * @returns Pathname with locale prefix
 */
export function addLocaleToPathname(pathname: string, locale: SupportedLocale): string {
  const cleanPath = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  return `/${locale}${cleanPath ? '/' + cleanPath : ''}`;
}

/**
 * Get alternate language URL for the current page
 * @param currentPath - Current page path
 * @param targetLocale - Target locale
 * @returns URL for the same page in target locale
 */
export function getAlternateLanguageUrl(
  currentPath: string,
  targetLocale: SupportedLocale
): string {
  const basePath = removeLocaleFromPathname(currentPath);
  return addLocaleToPathname(basePath, targetLocale);
}

/**
 * Check if a locale is supported
 * @param locale - Locale to check
 * @returns True if locale is supported
 */
export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return locale === 'en' || locale === 'zh';
}

/**
 * Get the opposite locale
 * @param locale - Current locale
 * @returns Opposite locale
 */
export function getOppositeLocale(locale: SupportedLocale): SupportedLocale {
  return locale === 'en' ? 'zh' : 'en';
}

/**
 * Format date according to locale
 * @param date - Date to format
 * @param locale - Target locale
 * @returns Formatted date string
 */
export function formatDate(date: Date, locale: SupportedLocale): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  const localeCode = locale === 'zh' ? 'zh-CN' : 'en-US';
  return new Intl.DateTimeFormat(localeCode, options).format(date);
}

/**
 * Get reading time text in the appropriate language
 * @param minutes - Reading time in minutes
 * @param locale - Target locale
 * @returns Formatted reading time string
 */
export function getReadingTime(minutes: number, locale: SupportedLocale): string {
  if (locale === 'zh') {
    return `${minutes} 分钟阅读`;
  }
  return `${minutes} min read`;
}
