"use client";
import { Lang, translations } from "@/lib/i18n";
import { ExternalLink, Mail } from "lucide-react";

export default function Footer({ lang }: { lang: Lang }) {
  const t = translations[lang].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-terracotta flex items-center justify-center text-white font-bold text-sm">
                LA
              </div>
              <div className="font-bold text-white text-sm leading-tight">
                Los Amigos de Los Niños<br />
                <span className="text-stone-400 font-normal text-xs">Mulegé, BCS, México</span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">{t.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold text-white text-sm uppercase tracking-wider mb-3">
              {t.contact}
            </div>
            <a
              href="mailto:losamigosmulege@gmail.com"
              className="flex items-center gap-2 text-stone-400 hover:text-terracotta transition-colors text-sm"
            >
              <Mail size={14} />
              losamigosmulege@gmail.com
            </a>
          </div>

          {/* Social */}
          <div>
            <div className="font-semibold text-white text-sm uppercase tracking-wider mb-3">
              {t.follow}
            </div>
            <a
              href="https://www.facebook.com/ladlnmulege"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-400 hover:text-terracotta transition-colors text-sm"
            >
              <ExternalLink size={14} />
              facebook.com/ladlnmulege
            </a>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-stone-500">
          <span>© {year} Los Amigos de Los Niños, Inc. {t.rights}</span>
          <span>501(c)(3) Nonprofit · EIN on file</span>
        </div>
      </div>
    </footer>
  );
}
