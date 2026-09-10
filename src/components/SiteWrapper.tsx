"use client";

import { useState } from "react";
import { Lang } from "@/lib/i18n";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Students from "./Students";
import FacebookFeed from "./FacebookFeed";
import Donate from "./Donate";
import Membership from "./Membership";
import Footer from "./Footer";

export default function SiteWrapper() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <FacebookFeed lang={lang} />
        <About lang={lang} />
        <Students lang={lang} />
        <Donate lang={lang} />
        <Membership lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
