import { Check, ChevronRight, FileText, MessageCircle, Phone, ShieldCheck, Siren, Star } from "lucide-react";
import { useState } from "react";
import "./_group.css";
import { ActionButton, BackButton, MapPreview, PageFrame, Shell, Toast, TrustBadge, WorkerAvatar, useToast } from "./_shared/Saha";

export function Tracking() {
  const [status, setStatus] = useState(1);
  const { message, show, close } = useToast();
  const stages = ["Accepted", "En route", "Arrived", "Working", "Completed"];
  return (
    <Shell onNavigate={(p) => window.location.hash = p}>
      <PageFrame className="max-w-[1280px]">
        <BackButton className="mb-5" onClick={() => (window.location.hash = "/")}>
          Back to bookings
        </BackButton>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-black uppercase tracking-[.18em] text-[#ed7d3a]">Live service · #CLK-2025-0042</div>
            <h1 className="saha-display mt-2 text-4xl font-bold">Raju is on the way.</h1>
            <p className="mt-2 text-sm text-[#607b7a]">AC servicing · Today, 10:00 AM · Kothrud, Pune</p>
          </div>
          <div className="rounded-full bg-[#d9f1eb] px-4 py-2 text-sm font-black text-[#075e61]">Arriving in ~12 min</div>
        </div>
        <div className="grid overflow-hidden rounded-[28px] bg-[#fffdf8] shadow-xl lg:grid-cols-[1.3fr_.7fr]">
          <div className="relative min-h-[500px]">
            <MapPreview
              label="Live location · Kothrud"
              className="h-full min-h-[500px] rounded-none"
            />
            <div className="absolute left-[49%] top-[44%] grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-[#075e61] text-white shadow-[0_0_0_15px_rgba(13,148,136,.18)]">
              <WorkerAvatar initials="RM" color="bg-[#ed7d3a]" />
            </div>
            <div className="absolute left-[22%] top-[69%] grid h-10 w-10 place-items-center rounded-full border-4 border-white bg-[#ed7d3a] text-xs font-black text-white">You</div>
          </div>
          <aside className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <WorkerAvatar initials="RM" />
              <div>
                <div className="font-black">Raju M.</div>
                <div className="mt-1 text-xs text-[#607b7a]"><Star className="mr-1 inline text-[#ed7d3a]" fill="currentColor" size={12} /> 4.8 · 142 reviews</div>
              </div>
            </div>
            <TrustBadge />
            <div className="mt-6 grid grid-cols-2 gap-3">
              <ActionButton
                variant="outline"
                onClick={() => show("Calling Raju on masked number")}
              >
                <Phone size={16} /> Call
              </ActionButton>
              <ActionButton variant="quiet" onClick={() => show("Chat opened with Raju")}><MessageCircle size={16} /> Chat</ActionButton>
            </div>
            <div className="mt-8 space-y-5">
              {
                stages.map((x, i) => <div key={x} className="flex items-center gap-3 text-sm">
                  <div className={`grid h-7 w-7 place-items-center rounded-full ${i <= status ? "bg-[#0d9488] text-white" : "bg-[#e4f1ec] text-[#607b7a]"}`}>
                    {
                      i <= status ? <Check size={14} /> : i + 1
                    }
                  </div>
                  <span className={i <= status ? "font-black" : "text-[#607b7a]"}>{x}</span>
                  {
                    i === status && <span className="ml-auto text-xs font-bold text-[#ed7d3a]">now</span>
                  }
                </div>)
              }
            </div>
            {
              status < 4 ? (
                <ActionButton
                  variant="orange"
                  className="mt-8 w-full"
                  onClick={() => { setStatus(Math.min(4, status + 1)); show(status === 3 ? "Service completed" : "Worker En Route"); }}
                >
                  <ChevronRight size={17} /> Update service status
                </ActionButton>
              ) : (
                <div className="mt-8 grid gap-3">
                  <ActionButton
                    variant="orange"
                    className="w-full"
                    onClick={() => (window.location.hash = "/rating")}
                  >
                    <Star size={17} /> Rate this service
                  </ActionButton>
                  <ActionButton
                    variant="outline"
                    className="w-full"
                    onClick={() => (window.location.hash = "/invoice")}
                  >
                    <FileText size={17} /> View invoice
                  </ActionButton>
                </div>
              )
            }
            <button
              onClick={() => window.location.hash = "/sos"}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[#ed7d3a]/30 py-3 text-sm font-black text-[#c45e25]"
            >
              <Siren size={16} /> Emergency SOS
            </button>
            <div className="mt-5 flex items-center gap-2 text-xs leading-relaxed text-[#607b7a]"><ShieldCheck size={15} className="shrink-0 text-[#0d9488]" /> Worker identity and insurance verified by cooperative.</div>
          </aside>
        </div>
      </PageFrame>
      <Toast message={message} onClose={close} />
    </Shell>
  );
}
