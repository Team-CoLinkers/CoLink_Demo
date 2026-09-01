import { ArrowLeft, Bell, Check, Handshake, Menu, Moon, Search, ShieldCheck, Sun, X } from "lucide-react";
import { useState, type ReactNode } from "react";

export const services = [
  ["Electrician", "Wiring, repairs, appliance installation", "Zap"],
  ["Plumber", "Pipe fixing, leaks, bathroom fitting", "Wrench"],
  ["Carpenter", "Furniture, doors, woodwork", "Hammer"],
  ["Painter", "Interior, exterior, waterproofing", "Paintbrush"],
  ["Domestic helper", "Cleaning, cooking, laundry", "Home"],
  ["Caregiver", "Elderly care, nursing, companionship", "HeartPulse"],
  ["Driver", "Personal driver, outstation", "CarFront"],
  ["Gardener", "Lawn, planting, garden maintenance", "Sprout"],
  ["Cleaner", "Deep cleaning, office, post-construction", "Sparkles"],
  ["Technician", "AC, RO, appliance repair", "Cable"],
] as const;

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`flex items-center gap-2 font-black tracking-tight ${inverse ? "text-[#fffdf8]" : "text-[#075e61]"}`}>
      <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-[#ed7d3a] text-white">
        <Handshake size={19} strokeWidth={2.4} />
      </span>
      <span className="text-xl">
        Co
        <span className="text-[#ed7d3a]">Link</span>
      </span>
    </div>
  );
}

export function Toast({ message, onClose }: { message: string | null; onClose: () => void }) {
  if (!message) return null;
  return (
    <div
      role="status"
      className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-[#075e61] px-4 py-3 text-sm font-bold text-white shadow-xl"
    >
      <Check size={16} />
      <span>{message}</span>
      <button aria-label="Dismiss notification" onClick={onClose}><X size={15} /></button>
    </div>
  );
}

export function useToast() {
  const [message, setMessage] = useState<string | null>(null);
  const show = (value: string) => { setMessage(value); window.setTimeout(() => setMessage(null), 2600); };
  return { message, show, close: () => setMessage(null) };
}

export function Shell({ children, title = "CoLink", onNavigate, dark = false, setDark, language, setLanguage }: { children: ReactNode; title?: string; onNavigate?: (path: string) => void; dark?: boolean; setDark?: (value: boolean) => void; language?: string; setLanguage?: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  const go = (path: string) => { onNavigate?.(path); if (!onNavigate) window.location.hash = path; setOpen(false); };
  return (
    <div className={`saha-root saha-noise ${dark ? "bg-[#102f35] text-[#fffdf8]" : ""}`}>
      <header className={`sticky top-0 z-20 border-b ${dark ? "border-white/10 bg-[#102f35]/90" : "border-[#123c43]/10 bg-[#f7f5ee]/90"} backdrop-blur-xl`}>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-3 lg:px-10">
          <button aria-label="Go to CoLink home" onClick={() => go("/")}>
            <Logo inverse={dark} />
          </button>
          <nav className="hidden items-center gap-6 text-sm font-bold lg:flex">
            <button onClick={() => go("/")} className="hover:text-[#ed7d3a]">Find a service</button>
            <button onClick={() => go("/worker-register")} className="hover:text-[#ed7d3a]">Join as worker</button>
            <button onClick={() => go("/admin")} className="hover:text-[#ed7d3a]">Cooperatives</button>
          </nav>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              aria-label="Change language"
              className={`rounded-lg px-2 py-2 text-xs font-bold ${dark ? "text-white/70" : "text-[#607b7a]"}`}
              onClick={() => setLanguage?.(language === "हिंदी" ? "English" : "हिंदी")}
            >
              {language || "English"}
            </button>
            <button
              aria-label="Toggle dark mode"
              onClick={() => setDark?.(!dark)}
              className={`rounded-lg p-2 ${dark ? "text-amber-200" : "text-[#075e61]"}`}
            >
              {
                dark ? <Sun size={18} /> : <Moon size={18} />
              }
            </button>
            <button aria-label="Open notifications" className="relative rounded-lg p-2">
              <Bell size={18} />
              <i className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-[#ed7d3a]" />
            </button>
            <button
              onClick={() => go("/auth")}
              className="saha-button bg-[#075e61] px-5 text-sm text-white shadow-[0_4px_12px_rgba(7,94,97,.22)] hover:bg-[#064d50]"
            >
              Sign in
            </button>
          </div>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 lg:hidden"
          >
            {
              open ? <X /> : <Menu />
            }
          </button>
        </div>
        {
          open && <div className="space-y-2 border-t border-[#123c43]/10 px-5 py-4 lg:hidden">
            <button
              onClick={() => go("/")}
              className="block w-full rounded-lg p-2 text-left font-bold"
            >
              Find a service
            </button>
            <button
              onClick={() => go("/worker-register")}
              className="block w-full rounded-lg p-2 text-left font-bold"
            >
              Join as worker
            </button>
            <button
              onClick={() => go("/auth")}
              className="saha-button w-full bg-[#075e61] text-white shadow-[0_4px_12px_rgba(7,94,97,.22)] hover:bg-[#064d50]"
            >
              Sign in
            </button>
          </div>
        }
      </header>
      {children}
    </div>
  );
}

export function SectionTitle({ eyebrow, title, body }: { eyebrow?: string; title: string; body?: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      <div className="mb-3 text-xs font-black uppercase tracking-[.18em] text-[#ed7d3a]">
        {eyebrow}
      </div>
      <h2 className="saha-display text-3xl font-bold leading-tight text-[#123c43] sm:text-4xl">
        {title}
      </h2>
      {
        body && <p className="mt-3 leading-relaxed text-[#607b7a]">{body}</p>
      }
    </div>
  );
}

export function TrustBadge({ name = "Pune Labour Cooperative" }: { name?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d9f1eb] px-2.5 py-1 text-[11px] font-bold text-[#075e61]"><ShieldCheck size={13} /> {name}</span>
  );
}

export function WorkerAvatar({ initials = "RM", color = "bg-[#ed7d3a]" }: { initials?: string; color?: string }) {
  return (
    <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${color} text-sm font-black text-white`}>
      {initials}
    </div>
  );
}

export function MapPreview({ label = "Pune service area", className = "h-40" }: { label?: string; className?: string }) {
  return (
    <div className={`saha-map relative overflow-hidden rounded-2xl ${className}`}>
      <div className="absolute left-[22%] top-[62%] h-3 w-3 rounded-full border-2 border-white bg-[#ed7d3a] shadow-[0_0_0_7px_rgba(237,125,58,.2)]" />
      <div className="absolute right-[22%] top-[30%] h-3 w-3 rounded-full border-2 border-white bg-[#075e61] shadow-[0_0_0_7px_rgba(7,94,97,.2)]" />
      <div className="absolute bottom-2 left-2 rounded-md bg-[#fffdf8]/85 px-2 py-1 text-[10px] font-bold text-[#075e61]">
        {label}
      </div>
    </div>
  );
}

export function ProgressSteps({ current, labels }: { current: number; labels: string[] }) {
  return (
    <div className="mb-8 flex items-start">
      {
        labels.map((label, index) => <div key={label} className="flex flex-1 items-start">
          {
            <div className="flex flex-col items-center gap-2">
              <div className={`grid h-8 w-8 place-items-center rounded-full text-xs font-black ${index <= current ? "bg-[#0d9488] text-white" : "bg-[#dfe9e4] text-[#607b7a]"}`}>
                {
                  index < current ? <Check size={15} /> : index + 1
                }
              </div>
              <span className="hidden max-w-20 text-center text-[10px] font-bold sm:block">
                {label}
              </span>
            </div>
          }
          {
            index < labels.length - 1 && <div className={`mt-4 h-0.5 flex-1 ${index < current ? "bg-[#0d9488]" : "bg-[#dfe9e4]"}`} />
          }
        </div>)
      }
    </div>
  );
}

export function MiniStat({ label, value, note, icon: Icon, tone = "teal" }: { label: string; value: string; note?: string; icon?: typeof Search; tone?: "teal" | "orange" | "lilac" }) {
  const color = tone === "orange" ? "bg-[#fff0e5] text-[#c45e25]" : tone === "lilac" ? "bg-[#e8e5f4] text-[#655c9e]" : "bg-[#d9f1eb] text-[#075e61]";
  return (
    <div className="saha-card p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-bold text-[#607b7a]">{label}</div>
          <div className="mt-1 text-2xl font-black tracking-tight">{value}</div>
        </div>
        {
          Icon && <div className={`rounded-xl p-2 ${color}`}><Icon size={18} /></div>
        }
      </div>
      {
        note && <div className="mt-3 text-xs font-semibold text-[#0d9488]">{note}</div>
      }
    </div>
  );
}

export function PageFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <main className={`mx-auto max-w-[1440px] px-5 py-8 lg:px-10 lg:py-12 ${className}`}>
      {children}
    </main>
  );
}
export function ActionButton({ children, onClick, variant = "primary", className = "", disabled = false }: { children: ReactNode; onClick?: () => void; variant?: "primary" | "outline" | "orange" | "quiet" | "secondary"; className?: string; disabled?: boolean }) {
  const styles = variant === "primary" ? "bg-[#075e61] text-white shadow-[0_6px_16px_rgba(7,94,97,.25)] hover:bg-[#064d50]" : variant === "orange" ? "bg-[#ed7d3a] text-white shadow-[0_6px_16px_rgba(237,125,58,.28)] hover:bg-[#e06a25]" : variant === "outline" ? "border-2 border-[#0d9488] bg-transparent text-[#075e61] hover:bg-[#d9f1eb]" : variant === "secondary" ? "border border-[#123c43]/15 bg-white text-[#123c43] hover:bg-[#f7f5ee]" : "bg-[#e6efeb] text-[#075e61] hover:bg-[#d9f1eb]";
  return (
    <button
      aria-label={typeof children === "string" ? children : "Continue"}
      disabled={disabled}
      onClick={onClick}
      className={`saha-button ${styles} ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className}`}
    >
      {children}
    </button>
  );
}

export function BackButton({ children, onClick, className = "", inverse = false }: { children: ReactNode; onClick?: () => void; className?: string; inverse?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`saha-back ${inverse ? "saha-back-inverse" : ""} ${className}`}
    >
      <ArrowLeft size={16} /> {children}
    </button>
  );
}
