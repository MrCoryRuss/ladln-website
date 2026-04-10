"use client";
import { Lang, translations } from "@/lib/i18n";
import { CreditCard, Smartphone, Mail } from "lucide-react";

export default function Donate({ lang }: { lang: Lang }) {
  const t = translations[lang].donate;

  return (
    <section id="donate" className="py-20 bg-terracotta text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{t.heading}</h2>
          <p className="text-white/80 max-w-xl mx-auto">{t.intro}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Zeffy */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 flex flex-col">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <CreditCard size={20} className="text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">{t.zeffy_heading}</h3>
            <p className="text-white/80 text-sm flex-1 mb-5">{t.zeffy_body}</p>
            <a
              href="https://www.zeffy.com/donation-form/los-amigos-de-los-ninos"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-white text-terracotta font-bold py-3 rounded-full hover:bg-stone-50 transition-colors shadow"
            >
              {t.zeffy_btn}
            </a>
          </div>

          {/* Zelle */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 flex flex-col">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Smartphone size={20} className="text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">{t.zelle_heading}</h3>
            <p className="text-white/80 text-sm flex-1">{t.zelle_body}</p>
            <div className="mt-5 bg-white/20 rounded-xl p-3 text-center">
              <div className="text-xs text-white/70 mb-1">Mobile #</div>
              <div className="font-bold text-lg tracking-wide">208-315-0029</div>
            </div>
          </div>

          {/* Check */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 flex flex-col">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Mail size={20} className="text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">{t.check_heading}</h3>
            <div className="flex-1 space-y-3 text-sm">
              <div>
                <div className="text-white/60 text-xs uppercase tracking-wider mb-1">
                  {t.check_payable}
                </div>
                <div className="font-semibold">{t.check_name}</div>
              </div>
              <div>
                <div className="text-white/60 text-xs uppercase tracking-wider mb-1">
                  {t.check_mail}
                </div>
                <div className="whitespace-pre-line text-white/90 text-sm">
                  {t.check_address}
                </div>
              </div>
            </div>
            <div className="mt-4 text-xs text-white/60">
              {t.questions}{" "}
              <a href="mailto:losamigosmulege@gmail.com" className="underline text-white/80">
                losamigosmulege@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
