import languages from "./languages";
import { Schema } from "./schema";

const DEFAULT_LOCALE: keyof typeof languages = "en";

export function getDictionary(locale?: string): Schema {
  if (!locale || !(locale in languages)) locale = DEFAULT_LOCALE;
  return languages[locale as keyof typeof languages];
}
