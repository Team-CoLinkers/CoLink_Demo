import { AlertTriangle, Check, MapPin, Phone, ShieldAlert, Users } from "lucide-react";
import { useState } from "react";
import "./_group.css";
import { ActionButton, BackButton, MapPreview, Toast, useToast } from "./_shared/Saha";

export function EmergencySOS() {
  const [sent, setSent] = useState(false);
  const { message, show, close } = useToast();
  return (
    <div className={`saha-root min-h-[100dvh] ${sent ? "bg-[#123c43]" : "bg-[#9e3b2c]"}`}>
      <div className="saha-grid absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-5xl px-5 py-6 sm:px-10 sm:py-10">
        <BackButton inverse onClick={() => (window.location.hash = "/")}>
          Back to safety
        </BackButton>
        <div className="grid min-h-[80dvh] items-center gap-10 py-12 lg:grid-cols-[1fr_.8fr]">
          <section className="text-center text-[#fffdf8] lg:text-left">
            <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#edb08d] text-[#7f2d25] lg:mx-0">
              <ShieldAlert size={27} />
            </div>
            <div className="text-xs font-black uppercase tracking-[.2em] text-[#ffd0b4]">CoLink safety line</div>
            <h1 className="saha-display mt-4 text-6xl font-bold leading-none sm:text-8xl">
              {sent ? "Help is on its way." : "SOS"}
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-[#ffe2d0] lg:mx-0">
              {sent ? "Your cooperative coordinator and emergency contacts have been notified with your live location." : "Tap once to alert your cooperative and local emergency contacts."}
            </p>
            {
              !sent ? <button
                aria-label="Send emergency SOS alert"
                onClick={() => { setSent(true); show("Alert sent to your cooperative coordinator"); }}
                className="saha-pulse mx-auto mt-10 grid h-48 w-48 place-items-center rounded-full border-[14px] border-[#edb08d]/40 bg-[#ed7d3a] text-4xl font-black text-white shadow-[0_0_0_22px_rgba(237,125,58,.18)] lg:mx-0"
              >
                SOS
              </button> : <div className="mt-10 flex items-center justify-center gap-3 rounded-2xl bg-[#0d9488] p-4 text-sm font-black lg:max-w-md lg:justify-start"><Check size={20} /> Alert sent · coordinator notified</div>
            }
            <p className="mt-8 flex items-center justify-center gap-2 text-xs font-bold text-[#ffd0b4] lg:justify-start"><Users size={15} /> Especially for women workers in private homes</p>
          </section>
          <section className="space-y-4">
            <MapPreview
              label="Your location · Kothrud, Pune"
              className="h-60 border-4 border-white/20"
            />
            <div className="rounded-3xl bg-[#fffdf8] p-5 text-[#123c43]">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#ed7d3a]" size={20} />
                <div>
                  <div className="text-xs font-bold text-[#607b7a]">Nearest support</div>
                  <div className="font-black">Kothrud Police Station · 1.4 km</div>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <ActionButton
                  variant="orange"
                  className="flex-1"
                  onClick={() => show("Calling emergency services on 112")}
                >
                  <Phone size={16} /> Call 112
                </ActionButton>
                <ActionButton
                  variant="secondary"
                  className="flex-1 text-xs"
                  onClick={() => show("Coordinator: +91 20 4123 8800")}
                >
                  Coordinator number
                </ActionButton>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-white/20 p-4 text-xs leading-relaxed text-[#ffe2d0]"><AlertTriangle size={18} className="shrink-0 text-[#edb08d]" /> If you can, move to a public or well-lit place while help is being arranged.</div>
          </section>
        </div>
      </div>
      <Toast message={message} onClose={close} />
    </div>
  );
}
