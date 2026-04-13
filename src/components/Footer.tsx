"use client";
import Image from "next/image";
import { Lang, translations } from "@/lib/i18n";
import { ExternalLink, Mail } from "lucide-react";

export default function Footer({ lang }: { lang: Lang }) {
  const t = translations[lang].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="py-12" style={{ backgroundColor: "#1a2e61", color: "#c8d3ea" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image src="/logo.jpg" alt="LADLN Logo" width={40} height={40} className="rounded-full shrink-0" />
              <div className="font-bold text-white text-sm leading-tight">
                Los Amigos de Los Niños, Mulegé
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#9aaac8" }}>{t.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold text-white text-sm uppercase tracking-wider mb-3">
              {t.contact}
            </div>
            <a
              href="mailto:losamigosmulege@gmail.com"
              className="flex items-center gap-2 text-sm transition-colors hover:text-white"
              style={{ color: "#9aaac8" }}
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
              className="flex items-center gap-2 text-sm transition-colors hover:text-white"
              style={{ color: "#9aaac8" }}
            >
              <ExternalLink size={14} />
              facebook.com/ladlnmulege
            </a>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs"
          style={{ borderColor: "rgba(255,255,255,0.1)", color: "#6a7fa8" }}
        >
          <span>© {year} Los Amigos de Los Niños, Inc. {t.rights}</span>
          <span>501(c)(3) Nonprofit · EIN on file</span>
        </div>
      </div>
    </footer>
  );
}
