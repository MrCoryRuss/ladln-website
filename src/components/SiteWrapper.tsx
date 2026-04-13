"use client";
import { useState } from "react";
import { Lang } from "@/lib/i18n";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Donate from "./Donate";
import Membership from "./Membership";
import News from "./News";
import Volunteer from "./Volunteer";
import Footer from "./Footer";

export default function SiteWrapper() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <News lang={lang} />
        <About lang={lang} />
        <Donate lang={lang} />
        <Membership lang={lang} />
        <Volunteer lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
