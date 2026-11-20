"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Clock,
  Copy,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Content model                                                       */
/* ------------------------------------------------------------------ */

type Lang = "en" | "es";
type Step = "signin" | "prefs" | "calendar";

type Category = { id: string; en: string; es: string; color: string };
type Community = { id: string; en: string; es: string };

const CATEGORIES: Category[] = [
  { id: "losamigos", en: "Los Amigos events & fundraisers", es: "Eventos y recaudaciones de Los Amigos", color: "#253E80" },
  { id: "community", en: "Community gatherings", es: "Reuniones de la comunidad", color: "#7A9B33" },
  { id: "food", en: "Restaurants & live entertainment", es: "Restaurantes y música en vivo", color: "#F46A6A" },
  { id: "sports", en: "Sports & recreation", es: "Deportes y recreación", color: "#6D63C7" },
  { id: "fishing", en: "Fishing & boating", es: "Pesca y navegación", color: "#0E7490" },
  { id: "news", en: "Local announcements", es: "Avisos locales", color: "#B45309" },
];

const COMMUNITIES: Community[] = [
  { id: "centro", en: "Centro Mulegé", es: "Centro Mulegé" },
  { id: "los-naranjos", en: "Los Naranjos", es: "Los Naranjos" },
  { id: "oasis", en: "Oasis", es: "Oasis" },
  { id: "orchard", en: "Orchard", es: "Orchard" },
  { id: "nuevo-mulege", en: "Nuevo Mulegé", es: "Nuevo Mulegé" },
  { id: "santispac", en: "Santispac", es: "Santispac" },
  { id: "posada", en: "Posada Concepción", es: "Posada Concepción" },
  { id: "coyote", en: "Coyote", es: "Coyote" },
  { id: "burro", en: "Burro", es: "Burro" },
  { id: "cocos", en: "Cocos", es: "Cocos" },
];

type Event = {
  id: string;
  titleEn: string;
  titleEs: string;
  dayOffset: number;
  time: string;
  placeEn: string;
  placeEs: string;
  category: string;
  community: string;
};

const SAMPLE_EVENTS: Event[] = [
  { id: "e1", titleEn: "50th Anniversary Golf Scramble", titleEs: "Torneo de Golf 50 Aniversario", dayOffset: 2, time: "8:00 AM", placeEn: "Mulegé Golf Course", placeEs: "Campo de Golf Mulegé", category: "losamigos", community: "centro" },
  { id: "e2", titleEn: "Taco Tuesday + live guitar", titleEs: "Martes de Tacos + guitarra en vivo", dayOffset: 1, time: "5:30 PM", placeEn: "Restaurante El Candil", placeEs: "Restaurante El Candil", category: "food", community: "centro" },
  { id: "e3", titleEn: "Sunset potluck on the beach", titleEs: "Convivencia al atardecer en la playa", dayOffset: 3, time: "4:00 PM", placeEn: "Santispac palapa area", placeEs: "Área de palapas, Santispac", category: "community", community: "santispac" },
  { id: "e4", titleEn: "Live band: Los Dorados", titleEs: "Banda en vivo: Los Dorados", dayOffset: 4, time: "8:00 PM", placeEn: "Posada Concepción", placeEs: "Posada Concepción", category: "food", community: "posada" },
  { id: "e5", titleEn: "Kayak & paddle meetup", titleEs: "Encuentro de kayak y paddle", dayOffset: 5, time: "7:30 AM", placeEn: "Coyote beach", placeEs: "Playa Coyote", category: "sports", community: "coyote" },
  { id: "e6", titleEn: "Dorado fishing tournament briefing", titleEs: "Junta del torneo de dorado", dayOffset: 6, time: "6:00 PM", placeEn: "Cocos beach", placeEs: "Playa Cocos", category: "fishing", community: "cocos" },
  { id: "e7", titleEn: "Scholarship student presentation", titleEs: "Presentación de estudiantes becados", dayOffset: 8, time: "6:30 PM", placeEn: "Centro Mulegé", placeEs: "Centro Mulegé", category: "losamigos", community: "centro" },
  { id: "e8", titleEn: "Farmers market & craft fair", titleEs: "Mercado de agricultores y artesanías", dayOffset: 9, time: "9:00 AM", placeEn: "Los Naranjos", placeEs: "Los Naranjos", category: "community", community: "los-naranjos" },
  { id: "e9", titleEn: "Wine tasting night", titleEs: "Noche de degustación de vinos", dayOffset: 11, time: "7:00 PM", placeEn: "Orchard", placeEs: "Orchard", category: "food", community: "orchard" },
  { id: "e10", titleEn: "Community clean-up morning", titleEs: "Mañana de limpieza comunitaria", dayOffset: 12, time: "8:00 AM", placeEn: "Nuevo Mulegé", placeEs: "Nuevo Mulegé", category: "community", community: "nuevo-mulege" },
  { id: "e11", titleEn: "Water aerobics + coffee", titleEs: "Acuaerobics + café", dayOffset: 13, time: "9:00 AM", placeEn: "Oasis", placeEs: "Oasis", category: "sports", community: "oasis" },
  { id: "e13", titleEn: "Beach bonfire & music at Burro", titleEs: "Fogata y música en Burro", dayOffset: 7, time: "6:00 PM", placeEn: "Burro beach", placeEs: "Playa Burro", category: "community", community: "burro" },
  { id: "e12", titleEn: "Road work notice: highway access", titleEs: "Aviso vial: acceso a la carretera", dayOffset: 3, time: "All day", placeEn: "Mulegé / Highway 1", placeEs: "Mulegé / Carretera 1", category: "news", community: "centro" },
];

const COPY = {
  en: {
    back: "Back to Los Amigos",
    brand: "Los Amigos Connect",
    tagline: "Education is the opportunity of a lifetime.",
    poc: "Proof of concept — demo only, no real sign-in",
    signinTitle: "Members log on",
    signinLead:
      "Sign in to choose what you want to hear about in Mulegé. One set of preferences, and the events you care about show up in the calendar you already use.",
    fbButton: "Continue with Facebook",
    or: "or",
    emailLabel: "Email address",
    emailButton: "Email me a sign-in link",
    emailNote: "We’ll send a link — no password to remember.",
    demoNote: "Demo: this button does not contact Facebook and no email is sent.",
    prefsTitle: "What do you want to hear about?",
    prefsLead: "Pick the kinds of events you care about, then where you spend your time.",
    catsLabel: "Event types",
    communitiesLabel: "Your communities",
    communitiesHint: "Choose every place you might be — beach, town, or both.",
    save: "Save my preferences",
    needOne: "Choose at least one event type",
    calTitle: "Your calendar",
    calLead: "These are the events that match your choices. In the real version this list is a live feed into Apple, Google, or Outlook calendar.",
    calendarEmpty: "No events match your choices yet. Try adding a community or an event type.",
    editPrefs: "Change preferences",
    subscribe: "Subscribe in your calendar",
    apple: "Apple Calendar",
    google: "Google Calendar",
    outlook: "Outlook / Hotmail",
    copyFeed: "Copy feed link",
    copied: "Copied",
    feedNote: "Your private feed updates automatically when an event changes or is cancelled.",
    greeting: "Welcome",
    selected: "selected",
    demoBanner: "Wireframe demo — sample data, nothing is saved to a server",
  },
  es: {
    back: "Volver a Los Amigos",
    brand: "Los Amigos Connect",
    tagline: "La educación es la oportunidad de una vida.",
    poc: "Prueba de concepto — solo demostración, sin inicio de sesión real",
    signinTitle: "Acceso para socios",
    signinLead:
      "Inicia sesión para elegir qué quieres saber de Mulegé. Con una sola configuración, los eventos que te interesan aparecen en el calendario que ya usas.",
    fbButton: "Continuar con Facebook",
    or: "o",
    emailLabel: "Correo electrónico",
    emailButton: "Enviarme un enlace de acceso",
    emailNote: "Te enviamos un enlace — sin contraseña que recordar.",
    demoNote: "Demostración: este botón no contacta a Facebook y no se envía ningún correo.",
    prefsTitle: "¿Qué quieres saber?",
    prefsLead: "Elige los tipos de eventos que te interesan y los lugares donde pasas tu tiempo.",
    catsLabel: "Tipos de evento",
    communitiesLabel: "Tus comunidades",
    communitiesHint: "Elige todos los lugares donde podrías estar — playa, centro, o ambos.",
    save: "Guardar mis preferencias",
    needOne: "Elige al menos un tipo de evento",
    calTitle: "Tu calendario",
    calLead: "Estos son los eventos que coinciden con tus elecciones. En la versión real, esta lista es un feed en vivo hacia Apple, Google u Outlook.",
    calendarEmpty: "Todavía no hay eventos que coincidan. Prueba agregar una comunidad o un tipo de evento.",
    editPrefs: "Cambiar preferencias",
    subscribe: "Suscribirse en tu calendario",
    apple: "Calendario de Apple",
    google: "Google Calendar",
    outlook: "Outlook / Hotmail",
    copyFeed: "Copiar enlace del feed",
    copied: "Copiado",
    feedNote: "Tu feed privado se actualiza solo cuando un evento cambia o se cancela.",
    greeting: "Bienvenido",
    selected: "seleccionados",
    demoBanner: "Demostración — datos de ejemplo, nada se guarda en un servidor",
  },
} as const;

const STORAGE_KEY = "losamigos-connect-demo";

type Saved = {
  name: string;
  method: "facebook" | "email";
  categories: string[];
  communities: string[];
  feedToken: string;
};

function fmtDate(offset: number, lang: Lang) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toLocaleDateString(lang === "es" ? "es-MX" : "en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function FbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.45-4.92 8.45-9.94Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ConnectPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [step, setStep] = useState<Step>("signin");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cats, setCats] = useState<string[]>(["losamigos", "community"]);
  const [places, setPlaces] = useState<string[]>(["centro"]);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState<Saved | null>(null);

  const t = COPY[lang];

  // restore demo state
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const s = JSON.parse(raw) as Saved;
      setSaved(s);
      setCats(s.categories ?? []);
      setPlaces(s.communities ?? []);
      setStep("calendar");
    } catch {}
  }, []);

  const toggle = (list: string[], id: string) =>
    list.includes(id) ? list.filter((x) => x !== id) : [...list, id];

  const visibleEvents = useMemo(
    () =>
      SAMPLE_EVENTS.filter(
        (e) => cats.includes(e.category) && places.includes(e.community)
      ).sort((a, b) => a.dayOffset - b.dayOffset),
    [cats, places]
  );

  function signIn(method: "facebook" | "email") {
    const who =
      method === "facebook"
        ? "Facebook member"
        : email.trim() || "member@example.com";
    setName(who);
    setStep("prefs");
  }

  function savePrefs() {
    const payload: Saved = {
      name: name || "member",
      method: email ? "email" : "facebook",
      categories: cats,
      communities: places,
      feedToken: saved?.feedToken || Math.random().toString(36).slice(2, 14),
    };
    setSaved(payload);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {}
    setStep("calendar");
  }

  async function copyFeed() {
    const url = `https://losamigosmulege.org/api/calendar/${saved?.feedToken ?? "demo"}.ics`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Demo ribbon */}
      <div className="bg-[#F6C945] text-[#1a2e61] text-center text-xs md:text-sm font-bold py-2 px-4">
        {t.demoBanner}
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-stone-500 hover:text-[#253E80]">
            <ArrowLeft size={18} />
            <Image src="/logo.png" alt="Los Amigos de Los Niños, Mulegé" width={34} height={34} />
          </Link>
          <div className="leading-tight">
            <div className="font-bold text-sm" style={{ color: "#253E80" }}>
              {t.brand}
            </div>
            <div className="text-[11px] text-stone-500 hidden sm:block">{t.back}</div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="text-xs font-bold px-3 py-1.5 rounded-full border border-stone-300 text-stone-600 hover:border-[#253E80] hover:text-[#253E80]"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        {/* Tagline */}
        <p className="text-center text-sm md:text-base font-semibold" style={{ color: "#7A9B33" }}>
          {t.tagline}
        </p>

        {step === "signin" && (
          <section className="mt-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center" style={{ color: "#253E80" }}>
              {t.signinTitle}
            </h1>
            <p className="mt-3 text-center text-stone-600 max-w-xl mx-auto">{t.signinLead}</p>

            <div className="mt-8 bg-white rounded-2xl shadow-sm border border-stone-200 p-6 md:p-8">
              <button
                onClick={() => signIn("facebook")}
                className="w-full flex items-center justify-center gap-3 rounded-xl text-white font-bold py-3.5 hover:opacity-90 transition"
                style={{ backgroundColor: "#1877F2" }}
              >
                <FbIcon /> {t.fbButton}
              </button>

              <div className="flex items-center gap-3 my-5">
                <div className="h-px flex-1 bg-stone-200" />
                <span className="text-xs uppercase tracking-wide text-stone-400">{t.or}</span>
                <div className="h-px flex-1 bg-stone-200" />
              </div>

              <label className="block text-sm font-semibold text-stone-700 mb-1.5">{t.emailLabel}</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-stone-300 pl-9 pr-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#253E80]/30"
                  />
                </div>
                <button
                  onClick={() => signIn("email")}
                  className="rounded-xl font-bold text-white px-5 py-3 text-sm hover:opacity-90"
                  style={{ backgroundColor: "#253E80" }}
                >
                  {t.emailButton}
                </button>
              </div>
              <p className="mt-2 text-xs text-stone-500">{t.emailNote}</p>

              <p className="mt-6 text-[11px] leading-relaxed text-stone-400 border-t border-stone-100 pt-4">
                {t.poc} · {t.demoNote}
              </p>
            </div>
          </section>
        )}

        {step === "prefs" && (
          <section className="mt-6">
            <h1 className="text-2xl md:text-3xl font-extrabold text-center" style={{ color: "#253E80" }}>
              {t.prefsTitle}
            </h1>
            <p className="mt-2 text-center text-stone-600">{t.prefsLead}</p>

            <div className="mt-6 bg-white rounded-2xl shadow-sm border border-stone-200 p-5 md:p-7">
              <h2 className="text-sm font-bold uppercase tracking-wide text-stone-500">{t.catsLabel}</h2>
              <div className="mt-3 grid sm:grid-cols-2 gap-2">
                {CATEGORIES.map((c) => {
                  const on = cats.includes(c.id);
                  return (
                    <button
                      key={c.id}
                      onClick={() => setCats(toggle(cats, c.id))}
                      className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition ${
                        on ? "border-transparent text-white shadow-sm" : "border-stone-200 bg-white text-stone-700 hover:border-stone-300"
                      }`}
                      style={on ? { backgroundColor: c.color } : undefined}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          on ? "bg-white/25" : "border border-stone-300"
                        }`}
                      >
                        {on && <Check size={13} />}
                      </span>
                      {c[lang]}
                    </button>
                  );
                })}
              </div>

              <h2 className="mt-7 text-sm font-bold uppercase tracking-wide text-stone-500">
                {t.communitiesLabel}
              </h2>
              <p className="text-xs text-stone-500 mt-1">{t.communitiesHint}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {COMMUNITIES.map((p) => {
                  const on = places.includes(p.id);
                  return (
                    <button
                      key={p.id}
                      onClick={() => setPlaces(toggle(places, p.id))}
                      className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                        on
                          ? "border-[#253E80] bg-[#253E80] text-white"
                          : "border-stone-300 bg-white text-stone-600 hover:border-stone-400"
                      }`}
                    >
                      <MapPin size={12} className="inline -mt-0.5 mr-1" />
                      {p[lang]}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={savePrefs}
                disabled={cats.length === 0 || places.length === 0}
                className="mt-8 w-full rounded-xl font-bold text-white py-3.5 disabled:opacity-40 hover:opacity-90"
                style={{ backgroundColor: "#F46A6A" }}
              >
                {cats.length === 0 || places.length === 0 ? t.needOne : t.save}
              </button>
            </div>
          </section>
        )}

        {step === "calendar" && (
          <section className="mt-6">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h1 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#253E80" }}>
                {t.calTitle}
              </h1>
              <span className="text-sm text-stone-500">
                {t.greeting}, {saved?.name ?? name}
              </span>
            </div>
            <p className="mt-2 text-sm text-stone-600">{t.calLead}</p>

            {/* Chosen filters */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {cats.map((id) => {
                const c = CATEGORIES.find((x) => x.id === id);
                if (!c) return null;
                return (
                  <span
                    key={id}
                    className="rounded-full px-2.5 py-1 text-[11px] font-bold text-white"
                    style={{ backgroundColor: c.color }}
                  >
                    {c[lang]}
                  </span>
                );
              })}
              {places.map((id) => {
                const p = COMMUNITIES.find((x) => x.id === id);
                if (!p) return null;
                return (
                  <span
                    key={id}
                    className="rounded-full px-2.5 py-1 text-[11px] font-semibold border"
                    style={{ borderColor: "#253E80", color: "#253E80" }}
                  >
                    {p[lang]}
                  </span>
                );
              })}
            </div>

            {/* Events */}
            <div className="mt-5 space-y-2.5">
              {visibleEvents.length === 0 && (
                <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-8 text-center text-sm text-stone-500">
                  {t.calendarEmpty}
                </div>
              )}
              {visibleEvents.map((e) => {
                const c = CATEGORIES.find((x) => x.id === e.category)!;
                return (
                  <article
                    key={e.id}
                    className="flex gap-3 rounded-xl border border-stone-200 bg-white p-3.5 shadow-sm"
                  >
                    <div
                      className="w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: c.color }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <h3 className="font-bold text-sm text-stone-800">{e[lang === "es" ? "titleEs" : "titleEn"]}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: c.color }}>
                          {c[lang]}
                        </span>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-stone-500">
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays size={12} /> {fmtDate(e.dayOffset, lang)}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock size={12} /> {e.time}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={12} /> {e[lang === "es" ? "placeEs" : "placeEn"]}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Subscribe */}
            <div className="mt-7 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <h2 className="flex items-center gap-2 text-sm font-bold" style={{ color: "#253E80" }}>
                <Sparkles size={15} /> {t.subscribe}
              </h2>
              <div className="mt-3 grid sm:grid-cols-3 gap-2">
                {[t.apple, t.google, t.outlook].map((label) => (
                  <button
                    key={label}
                    className="rounded-xl border border-stone-300 px-3 py-2.5 text-xs font-bold text-stone-700 hover:border-[#253E80] hover:text-[#253E80]"
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex flex-col sm:flex-row gap-2">
                <code className="flex-1 truncate rounded-lg bg-stone-100 px-3 py-2 text-[11px] text-stone-500">
                  https://losamigosmulege.org/api/calendar/{saved?.feedToken ?? "demo"}.ics
                </code>
                <button
                  onClick={copyFeed}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold text-white"
                  style={{ backgroundColor: "#253E80" }}
                >
                  <Copy size={13} /> {copied ? t.copied : t.copyFeed}
                </button>
              </div>
              <p className="mt-2 text-[11px] text-stone-500">{t.feedNote}</p>
            </div>

            <button
              onClick={() => setStep("prefs")}
              className="mt-5 text-sm font-bold underline decoration-2 underline-offset-4"
              style={{ color: "#253E80", textDecorationColor: "#F6C945" }}
            >
              {t.editPrefs}
            </button>
          </section>
        )}
      </main>

      <footer className="mt-10 border-t border-stone-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-xs text-stone-500">
          Los Amigos de los Niños, Mulegé · 501(c)(3) ·{" "}
          <span className="font-semibold" style={{ color: "#7A9B33" }}>
            {t.tagline}
          </span>
        </div>
      </footer>
    </div>
  );
}
