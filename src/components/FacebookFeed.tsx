"use client";

import { Lang, translations } from "@/lib/i18n";

const FB_PAGE = "https://www.facebook.com/ladlnmulege";
const PLUGIN_URL =
  "https://www.facebook.com/plugins/page.php?href=" +
  encodeURIComponent(FB_PAGE) +
  "&tabs=timeline&width=340&height=500&small_header=false" +
  "&adapt_container_width=true&hide_cover=false&show_facepile=true";

export default function FacebookFeed({ lang }: { lang: Lang }) {
  const t = translations[lang].facebook;

  return (
    <section id="facebook" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="text-terracotta font-semibold text-sm uppercase tracking-wider mb-2">
            {lang === "en" ? "Live from Mulegé" : "En Vivo desde Mulegé"}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-3">
            {t.heading}
          </h2>
          <p className="text-stone-600 max-w-xl mx-auto">{t.intro}</p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-stone-50">
          <iframe
            src={PLUGIN_URL}
            title="Los Amigos de Los Niños Facebook page"
            className="w-full"
            style={{ height: 500, border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
            loading="lazy"
          />
        </div>

        <div className="text-center mt-6">
          <a
            href={FB_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full shadow-sm border border-stone-200 bg-white transition-all hover:shadow-md"
            style={{ color: "#1877F2" }}
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
