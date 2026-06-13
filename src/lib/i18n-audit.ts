import {
  SUPPORTED_LOCALES,
  translations,
  type Locale,
  type Translations,
} from "@/lib/i18n";

function collectLeafPaths(value: unknown, prefix = ""): string[] {
  if (value === null || typeof value !== "object") {
    return prefix ? [prefix] : [];
  }

  if (Array.isArray(value)) {
    return prefix ? [prefix] : [];
  }

  return Object.entries(value).flatMap(([key, nested]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (nested !== null && typeof nested === "object" && !Array.isArray(nested)) {
      return collectLeafPaths(nested, path);
    }
    return [path];
  });
}

function collectEmptyStrings(value: unknown, prefix = "", errors: string[] = []): string[] {
  if (typeof value === "string") {
    if (
      value.trim() === "" &&
      prefix &&
      !prefix.endsWith("operatingMode.highlight") &&
      !prefix.endsWith("operatingMode.textAfter")
    ) {
      errors.push(`empty string at ${prefix}`);
    }
    return errors;
  }

  if (value === null || value === undefined) {
    if (prefix) errors.push(`null/undefined at ${prefix}`);
    return errors;
  }

  if (Array.isArray(value)) {
    value.forEach((entry, index) => {
      collectEmptyStrings(entry, `${prefix}[${index}]`, errors);
    });
    return errors;
  }

  if (typeof value === "object") {
    Object.entries(value).forEach(([key, nested]) => {
      const path = prefix ? `${prefix}.${key}` : key;
      collectEmptyStrings(nested, path, errors);
    });
  }

  return errors;
}

const arrayChecks: {
  label: string;
  getLength: (t: Translations) => number;
}[] = [
  {
    label: "floatingTestimonials.items",
    getLength: (t) => t.floatingTestimonials.items.length,
  },
  { label: "terminal.lines", getLength: (t) => t.terminal.lines.length },
  { label: "operatingMode.highlights", getLength: (t) => t.operatingMode.highlights.length },
  { label: "evolution.items", getLength: (t) => t.evolution.items.length },
  { label: "techniques.items", getLength: (t) => t.techniques.items.length },
  { label: "labNotes.items", getLength: (t) => t.labNotes.items.length },
];

const idArrayChecks: {
  label: string;
  getIds: (t: Translations) => string[];
}[] = [
  {
    label: "evolution.items.stage",
    getIds: (t) => t.evolution.items.map((item) => item.stage),
  },
  {
    label: "floatingTestimonials.items.initials",
    getIds: (t) => t.floatingTestimonials.items.map((item) => item.initials),
  },
];

function compareIdSets(referenceLocale: Locale, errors: string[]): void {
  for (const check of idArrayChecks) {
    const referenceIds = check.getIds(translations[referenceLocale]);

    for (const locale of SUPPORTED_LOCALES) {
      const ids = check.getIds(translations[locale]);
      if (ids.length !== referenceIds.length) continue;

      ids.forEach((id, index) => {
        if (id !== referenceIds[index]) {
          errors.push(
            `[${check.label}] id mismatch at index ${index}: ${referenceLocale}=${referenceIds[index]} vs ${locale}=${id}`,
          );
        }
      });
    }
  }
}

export function runI18nAudit(): string[] {
  const errors: string[] = [];
  const referenceLocale = SUPPORTED_LOCALES[0];
  const referencePaths = collectLeafPaths(translations[referenceLocale]).sort();

  for (const locale of SUPPORTED_LOCALES) {
    const currentPaths = new Set(collectLeafPaths(translations[locale]));

    if (locale === referenceLocale) continue;

    for (const path of referencePaths) {
      if (!currentPaths.has(path)) {
        errors.push(`[${locale}] missing key: ${path}`);
      }
    }

    for (const path of collectLeafPaths(translations[locale])) {
      if (!referencePaths.includes(path)) {
        errors.push(`[${locale}] extra key: ${path}`);
      }
    }

    collectEmptyStrings(translations[locale], locale, errors);
  }

  for (const check of arrayChecks) {
    const lengths = SUPPORTED_LOCALES.map((locale) => ({
      locale,
      length: check.getLength(translations[locale]),
    }));
    const expected = lengths[0]?.length;
    const mismatch = lengths.some(({ length }) => length !== expected);

    if (mismatch) {
      errors.push(
        `[${check.label}] length mismatch: ${lengths
          .map(({ locale, length }) => `${locale}=${length}`)
          .join(", ")}`,
      );
    }
  }

  for (const locale of SUPPORTED_LOCALES) {
    for (const item of translations[locale].evolution.items) {
      if (item.items.length !== 4) {
        errors.push(
          `[${locale}] evolution stage ${item.stage} expected 4 items, got ${item.items.length}`,
        );
      }
    }
  }

  compareIdSets(referenceLocale, errors);

  return errors;
}

export function assertI18nAudit(): void {
  const errors = runI18nAudit();
  if (errors.length > 0) {
    console.error("i18n audit failed:\n");
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log("i18n audit passed for locales:", SUPPORTED_LOCALES.join(", "));
}
