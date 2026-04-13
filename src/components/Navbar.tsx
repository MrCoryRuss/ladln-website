"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Lang, translations } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

interface Props {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function Navbar({ lang, setLang }: Props) {
  const [open, setOpen] = useState(false);
  const t = translations[lang].nav;

  const links = [
    { href: "#about", label: t.about },
    { href: "#students", label: t.students },
    { href: "#news", label: t.news },
    { href: "#membership", label: t.membership },
    { href: "#volunteer", label: t.volunteer },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3 group">
          <Image
            src="/logo.jpg"
            alt="Los Amigos de Los Niños, Mulegé"
            width={48}
            height={48}
            className="rounded-full shrink-0"
            priority
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-bold text-sm leading-none" style={{ color: "#253E80" }}>
              Los Amigos de Los Niños, Mulegé
            </div>
            <div className="text-xs text-stone-500">Baja California Sur, México</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-stone-600 hover:text-[#253E80] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LanguageToggle lang={lang} setLang={setLang} />
          <a
            href="#donate"
            className="hidden md:inline-flex items-center text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-sm"
            style={{ backgroundColor: "#253E80" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1a2e61")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#253E80")}
          >
            {translations[lang].nav.donate}
          </a>
          <button
            className="md:hidden text-stone-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-medium py-1"
              style={{ color: "#253E80" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#donate"
            className="mt-2 text-center text-white font-semibold py-2 rounded-full"
            style={{ backgroundColor: "#253E80" }}
            onClick={() => setOpen(false)}
          >
            {translations[lang].nav.donate}
          </a>
        </div>
      )}
    </nav>
  );
}
