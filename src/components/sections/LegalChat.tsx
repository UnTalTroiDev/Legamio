import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Building,
  Download,
  FileText,
  Plus,
  Send,
  Settings,
  Shield,
  Users,
} from 'lucide-react';

import LegamioMark from '@/assets/logo/LegamioMark';
import { Chip } from '@/components/ui';
import { cn } from '@/lib/utils';

interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: string;
  /** Bloque de descarga inline opcional */
  attachment?: { label: string; meta?: string };
}

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'user',
    content:
      'Quiero contratar un desarrollador freelance por 3 meses. ¿Qué tipo de contrato me recomiendas?',
    timestamp: '10:24',
  },
  {
    id: '2',
    role: 'ai',
    content:
      'Para contratar un desarrollador freelance en Colombia te recomiendo un **Contrato de Prestación de Servicios**. Este contrato es ideal porque:\n\n• No genera relación laboral (sin prestaciones sociales).\n• Permite acordar entregables y plazos claros.\n• Es flexible en duración y forma de pago.\n\n¿Quieres que genere el contrato ahora?',
    timestamp: '10:24',
  },
  {
    id: '3',
    role: 'user',
    content: 'Sí, por favor genera el contrato.',
    timestamp: '10:25',
  },
];

const suggestions = [
  'Contrato laboral',
  'Protección de marca',
  'Constitución empresa',
  'Despido empleado',
];

const recent = [
  { icon: FileText, label: 'Contrato de servicios', active: true },
  { icon: Users, label: 'Vinculación empleado' },
  { icon: Shield, label: 'Protección de datos' },
  { icon: Building, label: 'Constitución SAS' },
];

function formatMessage(text: string) {
  // Negritas con **texto** y saltos de línea
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-[#1A1A1A] font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return (
      <span key={i}>
        {part.split('\n').map((line, j, arr) => (
          <span key={j}>
            {line}
            {j < arr.length - 1 && <br />}
          </span>
        ))}
      </span>
    );
  });
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="legamio-typing-dot size-1.5 rounded-full bg-[#21C2FF]"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

function TypewriterText({ text }: { text: string }) {
  return <TypewriterInner key={text} text={text} />;
}

function TypewriterInner({ text }: { text: string }) {
  const [shown, setShown] = useState('');
  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i += 3;
      setShown(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, 12);
    return () => window.clearInterval(id);
  }, [text]);
  return <>{formatMessage(shown)}</>;
}

export function LegalChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [pending, setPending] = useState(false);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const didMount = useRef(false);

  useEffect(() => {
    // Evita arrastrar toda la página al montar: solo desplaza el contenedor
    // interno del chat, y nunca en el primer render (mensajes iniciales).
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, pending]);

  // Simula la respuesta inicial de la IA cuando el último mensaje es del usuario
  useEffect(() => {
    const last = messages[messages.length - 1];
    if (last?.role !== 'user') return;
    if (messages.some((m) => m.id === 'ai-generated')) return;

    const showTypingId = window.setTimeout(() => setPending(true), 0);
    const id = window.setTimeout(() => {
      setPending(false);
      setMessages((prev) => [
        ...prev,
        {
          id: 'ai-generated',
          role: 'ai',
          content:
            'Perfecto. He generado tu **Contrato de Prestación de Servicios** con las cláusulas estándar para Colombia. Recuerda revisar las cláusulas de confidencialidad y propiedad intelectual antes de firmar.',
          timestamp: '10:25',
          attachment: {
            label: 'Descargar contrato.pdf',
            meta: 'PDF · 4 páginas',
          },
        },
      ]);
    }, 1500);
    return () => {
      window.clearTimeout(showTypingId);
      window.clearTimeout(id);
    };
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      {
        id: `u-${Date.now()}`,
        role: 'user',
        content: text,
        timestamp: 'ahora',
      },
    ]);
    setInput('');
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: 'ai',
          content:
            'Buena pregunta. Para responderte con precisión necesito conocer un par de detalles más. ¿Es para una persona natural o jurídica?',
          timestamp: 'ahora',
        },
      ]);
    }, 1500);
  };

  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
      <div className="rounded-3xl overflow-hidden border border-[#E8E8E8] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.14)] grid grid-cols-1 md:grid-cols-[280px_1fr] h-[640px] md:h-[720px]">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col bg-[#F8F8F8] border-r border-[#E8E8E8]">
          <div className="flex items-center gap-2 px-5 py-5 border-b border-[#E8E8E8]">
            <LegamioMark size={28} />
            <span className="font-bold text-[#1A1A1A]">Legamio IA</span>
          </div>

          <div className="px-4 pt-4">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#21C2FF] text-white py-2.5 text-sm font-bold shadow-[0_4px_12px_rgba(33,194,255,0.25)] hover:brightness-110 transition"
            >
              <Plus className="size-4" /> Nueva consulta
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 pt-5">
            <p className="px-3 mb-2 text-[11px] uppercase tracking-[1px] text-[#757575] font-bold">
              Recientes
            </p>
            <ul className="flex flex-col gap-1">
              {recent.map(({ icon: Icon, label, active }) => (
                <li key={label}>
                  <button
                    type="button"
                    className={cn(
                      'w-full flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm transition-colors',
                      active
                        ? 'bg-[#F0FBFF] text-[#21C2FF] font-bold'
                        : 'text-[#616161] hover:bg-[#F0FBFF] hover:text-[#21C2FF]',
                    )}
                  >
                    <Icon className="size-4" />
                    <span className="truncate">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-between gap-2 border-t border-[#E8E8E8] px-4 py-4">
            <div className="flex items-center gap-2.5">
              <span
                className="grid size-9 place-items-center rounded-full text-white text-xs font-bold"
                style={{ backgroundColor: '#FF6BFF' }}
                aria-hidden
              >
                MB
              </span>
              <div className="text-xs leading-tight">
                <p className="font-bold text-[#1A1A1A]">Mío Búho</p>
                <p className="text-[#757575]">Plan Pro</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Configuración"
              className="grid size-9 place-items-center rounded-full text-[#616161] hover:bg-white hover:text-[#21C2FF] transition"
            >
              <Settings className="size-4" />
            </button>
          </div>
        </aside>

        {/* Main chat */}
        <div className="flex flex-col min-h-0">
          <div className="flex items-center justify-between gap-3 border-b border-[#E8E8E8] px-5 py-4">
            <div className="flex items-center gap-3 min-w-0">
              <h3 className="text-[15px] font-bold text-[#1A1A1A] truncate">
                Contrato de servicios — Freelance
              </h3>
              <Chip color="cyan">Contrato</Chip>
            </div>
            <span className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-bold">
              <span className="relative inline-flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-block size-2 rounded-full bg-emerald-500" />
              </span>
              IA Activa
            </span>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 md:px-7 py-6 space-y-5 bg-white">
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={cn(
                    'flex',
                    m.role === 'user' ? 'justify-end' : 'justify-start',
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[82%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed',
                      m.role === 'user'
                        ? 'bg-[#21C2FF] text-white rounded-br-[6px] shadow-[0_4px_12px_rgba(33,194,255,0.20)]'
                        : 'bg-[#F8F8F8] text-[#1A1A1A] border border-[#E8F8FF] rounded-bl-[6px]',
                    )}
                  >
                    {m.role === 'ai' && (
                      <div className="flex items-center gap-2 mb-2 text-[12px] text-[#616161]">
                        <LegamioMark size={18} />
                        <span className="font-bold">Legamio IA</span>
                        <span>· {m.timestamp}</span>
                      </div>
                    )}
                    <div>
                      {m.role === 'ai' && m.id === 'ai-generated' ? (
                        <TypewriterText text={m.content} />
                      ) : (
                        formatMessage(m.content)
                      )}
                    </div>

                    {m.attachment && (
                      <button
                        type="button"
                        className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#21C2FF] text-white px-3.5 py-2 text-[13px] font-bold hover:brightness-110 transition shadow-[0_4px_12px_rgba(33,194,255,0.25)]"
                      >
                        <Download className="size-4" />
                        {m.attachment.label}
                        {m.attachment.meta && (
                          <span className="text-[11px] font-normal text-white/85">
                            · {m.attachment.meta}
                          </span>
                        )}
                      </button>
                    )}

                    {m.role === 'user' && (
                      <p className="mt-1 text-[10px] text-white/80 text-right">
                        {m.timestamp}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              {pending && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#F8F8F8] border border-[#E8F8FF] rounded-2xl rounded-bl-[6px] px-4 py-3">
                    <div className="flex items-center gap-2 text-[12px] text-[#616161] mb-1.5">
                      <LegamioMark size={18} />
                      <span className="font-bold">Legamio IA</span>
                    </div>
                    <TypingDots />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="border-t border-[#E8E8E8] bg-white px-4 md:px-6 pt-3 pb-4">
            <div className="flex flex-wrap items-center gap-2 pb-3">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setInput(s)}
                  className="rounded-full border border-[#E8E8E8] bg-white px-3 py-1.5 text-[12px] text-[#616161] hover:border-[#21C2FF] hover:text-[#21C2FF] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="flex items-end gap-2 rounded-2xl border border-[#E8E8E8] bg-[#F8F8F8] focus-within:border-[#21C2FF] focus-within:bg-white transition-colors px-3 py-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Describe tu situación legal…"
                rows={1}
                className="flex-1 max-h-32 resize-none bg-transparent text-sm text-[#1A1A1A] placeholder:text-[#9A9A9A] outline-none py-1.5"
              />
              <button
                type="button"
                onClick={handleSend}
                aria-label="Enviar"
                className="grid size-10 place-items-center rounded-full bg-[#21C2FF] text-white shadow-[0_4px_12px_rgba(33,194,255,0.30)] hover:brightness-110 transition disabled:opacity-50"
                disabled={!input.trim()}
              >
                <Send className="size-4" />
              </button>
            </div>

            <p className="mt-2.5 text-[11px] font-light text-[#757575] text-center">
              Legamio es una herramienta de inteligencia legal que no constituye
              una asesoría legal formal de un abogado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalChat;
