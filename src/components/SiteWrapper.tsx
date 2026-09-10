"use client";

import { useState } from "react";
import { Lang } from "@/lib/i18n";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Students from "./Students";
import FacebookFeed from "./FacebookFeed";
import Donate from "./Donate";
import Footer from "./Footer";

export default function SiteWrapper() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <>
      <div
        className="w-full text-center py-3 px-4"
        style={{ backgroundColor: "#F6C945", color: "#1a2e61" }}
      >
        <span className="font-extrabold uppercase tracking-wider text-sm md:text-lg">
          {lang === "en"
            ? "🎉 Celebrating our 50th year"
            : "🎉 Celebrando nuestro 50.º aniversario"}
        </span>
      </div>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <FacebookFeed lang={lang} />
        <About lang={lang} />
        <Students lang={lang} />
        <Donate lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
