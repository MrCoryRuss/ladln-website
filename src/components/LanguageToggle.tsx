"use client";
import { Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function LanguageToggle({ lang, setLang }: Props) {
  return (
    <div className="flex items-center gap-1 bg-stone-100 rounded-full px-1 py-1">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
          lang === "en"
            ? "bg-terracotta text-white shadow"
            : "text-stone-500 hover:text-stone-800"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("es")}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
          lang === "es"
            ? "bg-terracotta text-white shadow"
            : "text-stone-500 hover:text-stone-800"
        }`}
      >
        ES
      </button>
    </div>
  );
}
