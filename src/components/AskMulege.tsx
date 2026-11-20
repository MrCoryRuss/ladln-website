"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Mic, Send, Volume2, VolumeX, X } from "lucide-react";

type Lang = "en" | "es";
type Msg = { role: "user" | "bot"; text: string; source?: string };

const COPY = {
  en: {
    open: "Ask Mulegé",
    title: "Ask Mulegé",
    sub: "Demo answers from the sample calendar and directory",
    placeholder: "Ask about tonight, games, clinics…",
    send: "Send",
    listening: "Listening…",
    voiceOff: "Voice replies off",
    voiceOn: "Voice replies on",
    disclaimer:
      "Demo only: answers come from the sample data in this wireframe, not from live sources. For anything urgent, call 911.",
    chips: [
      "What's going on tonight in town?",
      "Any games I can go watch?",
      "Where do I go for a stingray sting?",
      "Is Taco Tuesday at Hidden Bar this Tuesday?",
    ],
  },
  es: {
    open: "Pregunta a Mulegé",
    title: "Pregunta a Mulegé",
    sub: "Respuestas de demostración con datos de ejemplo",
    placeholder: "Pregunta por esta noche, partidos, clínicas…",
    send: "Enviar",
    listening: "Escuchando…",
    voiceOff: "Respuestas de voz apagadas",
    voiceOn: "Respuestas de voz encendidas",
    disclaimer:
      "Solo demostración: las respuestas salen de datos de ejemplo, no de fuentes en vivo. Para emergencias, llama al 911.",
    chips: [
      "¿Qué hay esta noche en el pueblo?",
      "¿Hay partidos que pueda ir a ver?",
      "¿A dónde voy por una picadura de raya?",
      "¿Hay Taco Tuesday en Hidden Bar este martes?",
    ],
  },
} as const;

/* ------------------------------------------------------------------ */
/* Tiny rule-based responder over the demo data                        */
/* ------------------------------------------------------------------ */

function answer(qRaw: string, lang: Lang): Msg {
  const q = qRaw.toLowerCase();
  const has = (...w: string[]) => w.some((x) => q.includes(x));

  // 1. stingray / medical urgency
  if (has("stingray", "raya", "mantarraya", "sting", "picadura")) {
    return lang === "es"
      ? {
          role: "bot",
          text:
            "Para una picadura de raya, ve a un centro médico hoy mismo: Centro de Salud Mulegé (lun–vie 8:00–15:00) o Cruz Roja Mulegé (24 h). Si hay hinchazón en la cara, dificultad para respirar o dolor intenso, llama al 911.\n\nEl primer auxilio que suele recomendarse es sumergir la zona en agua caliente (no quemante) mientras llegas, pero confírmalo con el personal médico.",
          source: "Directorio médico de la demo · números de ejemplo",
        }
      : {
          role: "bot",
          text:
            "For a stingray sting, get seen today: Centro de Salud Mulegé (Mon–Fri 8:00–15:00) or Cruz Roja Mulegé (24 h). If there's facial swelling, trouble breathing, or severe pain, call 911.\n\nThe first aid commonly recommended is soaking the area in hot (not scalding) water while you get there — but confirm that with the medical staff.",
          source: "Demo medical directory · placeholder numbers",
        };
  }

  // 2. games / sports
  if (has("game", "partido", "deport", "sport", "fútbol", "futbol", "baseball", "béisbol")) {
    return lang === "es"
      ? {
          role: "bot",
          text:
            "En los datos de ejemplo hay actividad deportiva esta semana: encuentro de kayak y paddle en Playa Coyote (7:30 AM) y acuaerobics en Oasis (9:00 AM). No hay partidos oficiales en el calendario de muestra — si me dices qué deporte buscas, lo filtro.",
          source: "Calendario de ejemplo",
        }
      : {
          role: "bot",
          text:
            "In the sample data there's sports activity this week: kayak & paddle meetup at Coyote beach (7:30 AM) and water aerobics at Oasis (9:00 AM). There are no official matches in the demo calendar yet — tell me which sport and I'll filter for it.",
          source: "Sample calendar",
        };
  }

  // 3. taco tuesday / specific venue
  if (has("taco", "hidden bar", "martes")) {
    return lang === "es"
      ? {
          role: "bot",
          text:
            "No tengo confirmado el Taco Tuesday de Hidden Bar: ese lugar todavía no está en los datos de eventos. Lo que sí aparece es \"Martes de Tacos + guitarra en vivo\" en Restaurante El Candil, 5:30 PM, en el centro.\n\nCuando el calendario esté en vivo, cada evento mostrará quién lo publicó y cuándo se actualizó.",
          source: "Calendario de ejemplo — Hidden Bar no está registrado",
        }
      : {
          role: "bot",
          text:
            "I don't have Hidden Bar's Taco Tuesday confirmed — that venue isn't in the event data yet. What is listed: \"Taco Tuesday + live guitar\" at Restaurante El Candil, 5:30 PM, in Centro.\n\nOnce the calendar is live, every event will show who published it and when it last changed.",
          source: "Sample calendar — Hidden Bar not registered",
        };
  }

  // 4. tonight / what's on
  if (has("tonight", "today", "esta noche", "hoy", "what's on", "que hay", "qué hay")) {
    return lang === "es"
      ? {
          role: "bot",
          text:
            "Esta noche en el calendario de ejemplo: Martes de Tacos + guitarra en vivo, Restaurante El Candil, 5:30 PM (Centro).\n\nMañana: Convivencia al atardecer en las palapas de Santispac, 4:00 PM.",
          source: "Calendario de ejemplo",
        }
      : {
          role: "bot",
          text:
            "Tonight in the sample calendar: Taco Tuesday + live guitar, Restaurante El Candil, 5:30 PM (Centro).\n\nTomorrow: sunset potluck at the Santispac palapas, 4:00 PM.",
          source: "Sample calendar",
        };
  }

  // 5. fallback
  return lang === "es"
    ? {
        role: "bot",
        text:
          "Puedo responder sobre eventos de hoy, partidos y deportes, restaurantes y música en vivo, y servicios médicos. Prueba: \"¿qué hay esta noche?\" o \"¿dónde voy por una picadura de raya?\".",
      }
    : {
        role: "bot",
        text:
          "I can answer about tonight's events, games and sports, restaurants and live music, and medical services. Try: \"what's on tonight?\" or \"where do I go for a stingray sting?\".",
      };
}

/* ------------------------------------------------------------------ */

export default function AskMulege({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [draft, setDraft] = useState("");
  const [speak, setSpeak] = useState(false);
  const [listening, setListening] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const t = COPY[lang];

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    const reply = answer(q, lang);
    setMsgs((m) => [...m, { role: "user", text: q }, reply]);
    setDraft("");
    if (speak && typeof window !== "undefined" && window.speechSynthesis) {
      const u = new SpeechSynthesisUtterance(reply.text);
      u.lang = lang === "es" ? "es-MX" : "en-US";
      window.speechSynthesis.speak(u);
    }
  }

  function listen() {
    const SR =
      typeof window !== "undefined" &&
      ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);
    if (!SR) {
      setMsgs((m) => [
        ...m,
        {
          role: "bot",
          text:
            lang === "es"
              ? "Este navegador no permite dictado por voz. Escribe tu pregunta."
              : "This browser doesn't support voice input. Type your question instead.",
        },
      ]);
      return;
    }
    const rec = new SR();
    rec.lang = lang === "es" ? "es-MX" : "en-US";
    rec.interimResults = false;
    setListening(true);
    rec.onresult = (e: any) => {
      const said = e.results[0][0].transcript;
      setListening(false);
      send(said);
    };
    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    rec.start();
  }

  return (
    <>
      {/* Launcher */}
      {!open && (
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-white shadow-lg hover:opacity-90"
        style={{ backgroundColor: "#253E80" }}
        aria-label={t.open}
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">{t.open}</span>
      </button>
      )}

      {open && (
        <div className="fixed bottom-20 right-4 z-50 flex w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl">
          <div className="flex items-start gap-2 px-4 py-3" style={{ backgroundColor: "#253E80" }}>
            <div className="flex-1">
              <div className="text-sm font-bold text-white">{t.title}</div>
              <div className="text-[11px] text-white/70">{t.sub}</div>
            </div>
            <button
              onClick={() => setSpeak((v) => !v)}
              title={speak ? t.voiceOn : t.voiceOff}
              className="rounded-full p-1.5 text-white/80 hover:bg-white/10"
            >
              {speak ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
            <button onClick={() => setOpen(false)} className="rounded-full p-1.5 text-white/80 hover:bg-white/10">
              <X size={16} />
            </button>
          </div>

          <div ref={listRef} className="max-h-[46vh] space-y-2 overflow-y-auto bg-stone-50 px-3 py-3">
            {msgs.length === 0 && (
              <div className="space-y-1.5">
                {t.chips.map((c) => (
                  <button
                    key={c}
                    onClick={() => send(c)}
                    className="block w-full rounded-xl border border-stone-200 bg-white px-3 py-2 text-left text-xs text-stone-600 hover:border-[#253E80] hover:text-[#253E80]"
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
            {msgs.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                    m.role === "user" ? "text-white" : "border border-stone-200 bg-white text-stone-700"
                  }`}
                  style={m.role === "user" ? { backgroundColor: "#253E80" } : undefined}
                >
                  {m.text}
                  {m.source && (
                    <div className="mt-1.5 border-t border-stone-100 pt-1 text-[10px] font-medium text-stone-500">
                      {m.source}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1.5 border-t border-stone-200 bg-white px-2 py-2">
            <button
              onClick={listen}
              className={`rounded-full p-2 ${listening ? "bg-red-50 text-red-600" : "text-stone-500 hover:bg-stone-100"}`}
              title={listening ? t.listening : "Voice"}
            >
              <Mic size={16} />
            </button>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(draft)}
              placeholder={t.placeholder}
              className="min-w-0 flex-1 rounded-full border border-stone-300 px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#253E80]/25"
            />
            <button
              onClick={() => send(draft)}
              className="rounded-full p-2 text-white"
              style={{ backgroundColor: "#253E80" }}
              aria-label={t.send}
            >
              <Send size={15} />
            </button>
          </div>

          <p className="bg-white px-3 pb-2 text-[10px] leading-snug text-stone-500">{t.disclaimer}</p>
        </div>
      )}
    </>
  );
}
