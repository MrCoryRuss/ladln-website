"use client";

import { useEffect } from "react";
import { Lang, translations } from "@/lib/i18n";

const FB_PAGE = "https://www.facebook.com/ladlnmulege";

declare global {
  interface Window {
    FB?: { XFBML: { parse: (element?: HTMLElement) => void } };
  }
}

export default function FacebookFeed({ lang }: { lang: Lang }) {
  const t = translations[lang].facebook;

  // Load the Facebook SDK once and render the official Page Plugin timeline.
  // Switched off the third-party SociableKIT widget on 2026-10-05: its image
  // CDN started returning 404 for every post photo, so the feed showed text
  // with broken images. Facebook's own plugin serves the photos itself.
  useEffect(() => {
    const parse = () => {
      window.FB?.XFBML?.parse();
    };

    if (window.FB?.XFBML) {
      parse();
      return;
    }

    const existing = document.getElementById(
      "facebook-jssdk",
    ) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", parse);
      return () => existing.removeEventListener("load", parse);
    }

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.addEventListener("load", parse);
    document.body.appendChild(script);

    return () => script.removeEventListener("load", parse);
  }, []);

  return (
    <section id="facebook" className="py-20 bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-terracotta mb-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-terracotta" />
          </span>
          {lang === "en" ? "Live from Mulegé" : "En Vivo desde Mulegé"}
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 mb-2">
          {t.heading}
        </h2>
        <p className="text-stone-600 max-w-xl mx-auto mb-8">{t.intro}</p>

        <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-white max-w-4xl mx-auto">
          <div id="fb-root" />
          <div
            className="fb-page"
            data-href={FB_PAGE}
            data-tabs="timeline"
            data-width=""
            data-height="900"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="false"
          >
            <blockquote cite={FB_PAGE} className="fb-xfbml-parse-ignore">
              <a href={FB_PAGE}>
                {lang === "en"
                  ? "Los Amigos de Los Niños, Inc. of Mulegé"
                  : "Los Amigos de Los Niños, Inc. de Mulegé"}
              </a>
            </blockquote>
          </div>
        </div>

        <div className="mt-6">
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
