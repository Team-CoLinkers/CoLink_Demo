import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, CreditCard, MapPin, ShieldCheck, Siren, Star, WalletCards } from "lucide-react";
import { useState } from "react";
import "./_group.css";
import { ActionButton, MapPreview, PageFrame, ProgressSteps, Shell, Toast, TrustBadge, WorkerAvatar, useToast } from "./_shared/Saha";

const bookingSteps = ["Service", "Date & time", "Worker", "Confirm", "Success"];
const workers = [{ name: "Raju M.", initials: "RM", rating: "4.8", reviews: "142", skills: "AC repair · Wiring", distance: "2.3 km", price: "₹500", tier: "Premium worker" }, { name: "Mohan S.", initials: "MS", rating: "4.7", reviews: "98", skills: "Installation · Appliances", distance: "3.1 km", price: "₹520", tier: "Certified" }, { name: "Asha P.", initials: "AP", rating: "4.9", reviews: "76", skills: "AC repair · Maintenance", distance: "4.5 km", price: "₹560", tier: "Certified" }];
export function Booking() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("AC servicing");
  const [slot, setSlot] = useState("Tomorrow · 10:00 AM");
  const [worker, setWorker] = useState(0);
  const [emergency, setEmergency] = useState(false);
  const { message, show, close } = useToast();
  const next = () => { if (step < 4) { setStep(step + 1); if (step === 3) show("Booking confirmed"); } };
  return (
    <Shell onNavigate={(p) => window.location.hash = p}>
      <PageFrame>
        <div className="mx-auto max-w-5xl">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <div className="text-xs font-black uppercase tracking-[.18em] text-[#ed7d3a]">Book a service</div>
              <h1 className="saha-display mt-2 text-4xl font-bold">A good match is a few steps away.</h1>
            </div>
            <span className="saha-mono hidden text-xs text-[#607b7a] sm:block">SK / 0042</span>
          </div>
          <ProgressSteps current={step} labels={bookingSteps} />
          {
            step < 4 && <div className="grid gap-7 lg:grid-cols-[1fr_310px]">
              <section className="saha-card p-5 sm:p-8">
                {
                  step === 0 && <div className="saha-reveal">
                    <h2 className="text-xl font-black">What can we help with?</h2>
                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {
                        ["AC servicing", "Switch & socket", "Fan / light", "Wiring repair", "RO service", "Appliance install"].map((x, i) => <button
                          key={x}
                          onClick={() => setService(x)}
                          className={`rounded-2xl border p-4 text-left text-sm font-bold ${service === x ? "border-[#0d9488] bg-[#d9f1eb] text-[#075e61]" : "border-[#123c43]/12"}`}
                        >
                          <div className={`mb-5 h-2 w-2 rounded-full ${i % 2 ? "bg-[#ed7d3a]" : "bg-[#0d9488]"}`} />
                          {x}
                        </button>)
                      }
                    </div>
                    <label className="mt-6 block text-sm font-bold">
                      Describe the issue <span className="font-normal text-[#607b7a]">(optional)</span>
                      <textarea
                        className="saha-input mt-2 min-h-28 resize-none"
                        placeholder="Tell the worker what you have noticed..."
                      />
                    </label>
                  </div>
                }
                {
                  step === 1 && <div className="saha-reveal">
                    <h2 className="text-xl font-black">When should they come?</h2>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {
                        ["Today", "Tomorrow", "Wed, Aug 28"].map((x, i) => <button
                          key={x}
                          onClick={() => setSlot(`${x} · ${i === 1 ? "10:00 AM" : "2:00 PM"}`)}
                          className={`rounded-2xl border p-4 text-left ${slot.startsWith(x) ? "border-[#0d9488] bg-[#d9f1eb]" : "border-[#123c43]/12"}`}
                        >
                          <CalendarDays size={18} className="text-[#0d9488]" />
                          <div className="mt-3 text-sm font-black">{x}</div>
                          <div className="mt-1 text-xs text-[#607b7a]">5 slots open</div>
                        </button>)
                      }
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {
                        ["8–10 AM", "10–12 PM", "2–4 PM", "5–7 PM"].map(x => <button
                          key={x}
                          onClick={() => setSlot(`${slot.split(" · ")[0]} · ${x}`)}
                          className={`rounded-xl border p-3 text-sm font-bold ${slot.includes(x) ? "border-[#0d9488] bg-[#d9f1eb] text-[#075e61]" : "border-[#123c43]/12"}`}
                        >
                          <Clock3 className="mx-auto mb-2" size={16} />
                          {x}
                        </button>)
                      }
                    </div>
                    <button
                      onClick={() => setEmergency(!emergency)}
                      className={`mt-6 flex w-full items-center gap-3 rounded-2xl border p-4 text-left ${emergency ? "border-[#ed7d3a] bg-[#fff0e5]" : "border-[#123c43]/12"}`}
                    >
                      <Siren className={emergency ? "text-[#ed7d3a]" : "text-[#607b7a]"} />
                      <span>
                        <b className="block text-sm">Emergency service</b>
                        <small className="text-xs text-[#607b7a]">
                          {emergency ? "Nearest available worker in ~15 minutes" : "I need someone urgently"}
                        </small>
                      </span>
                    </button>
                  </div>
                }
                {
                  step === 2 && <div className="saha-reveal">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-black">Choose your worker</h2>
                      <button
                        onClick={() => show("Sort options opened")}
                        className="text-xs font-black text-[#075e61]"
                      >
                        Sort: Recommended
                      </button>
                    </div>
                    <div className="mt-5 space-y-3">
                      {
                        workers.map((w, i) => <button
                          key={w.name}
                          onClick={() => setWorker(i)}
                          className={`w-full rounded-2xl border p-4 text-left ${worker === i ? "border-[#0d9488] bg-[#d9f1eb]/60" : "border-[#123c43]/12"}`}
                        >
                          <div className="flex gap-3">
                            <WorkerAvatar
                              initials={w.initials}
                              color={i === 0 ? "bg-[#ed7d3a]" : "bg-[#655c9e]"}
                            />
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-black">{w.name}</span>
                                {
                                  i === 0 && <span className="rounded-full bg-[#ed7d3a] px-2 py-0.5 text-[10px] font-black text-white">AI recommended</span>
                                }
                              </div>
                              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                                <span className="font-bold text-[#ed7d3a]">
                                  <Star
                                    className="mr-1 inline"
                                    size={12}
                                    fill="currentColor"
                                  />
                                  {w.rating} (
                                  {w.reviews}
                                  )
                                </span>
                                <span className="text-[#607b7a]">{w.distance}</span>
                              </div>
                              <TrustBadge />
                              <div className="mt-2 text-xs text-[#607b7a]">{w.skills}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-black">{w.price}</div>
                              <div className="mt-1 text-[10px] font-bold text-[#0d9488]">worker receives 95%</div>
                            </div>
                          </div>
                        </button>)
                      }
                    </div>
                  </div>
                }
                {
                  step === 3 && <div className="saha-reveal">
                    <h2 className="text-xl font-black">Review and confirm</h2>
                    <div className="mt-5 space-y-4 rounded-2xl bg-[#e4f1ec] p-5">
                      <Row label="Service" value={service} />
                      <Row
                        label="Worker"
                        value={`${workers[worker].name} · Pune District Labour Cooperative`}
                      />
                      <Row label="Date & time" value={slot} />
                      <Row
                        label="Address"
                        value="Flat 4B, Riverstone Society, Kothrud"
                        icon={MapPin}
                      />
                    </div>
                    <div className="mt-5 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Service price</span>
                        <b>₹500</b>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Platform fee (5%)</span>
                        <b>₹25</b>
                      </div>
                      <div className="flex justify-between border-t border-[#123c43]/10 pt-3">
                        <span className="font-black">Worker receives</span>
                        <b className="text-[#0d9488]">₹475 (95%)</b>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#075e61]"><ShieldCheck size={16} /> PMSBY & PMJJBY insured worker</div>
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {
                        [["UPI", WalletCards], ["Card", CreditCard], ["Wallet", WalletCards]].map(([x, Icon]) => <button
                          key={x as string}
                          onClick={() => show(`${x} selected`)}
                          className="rounded-xl border border-[#0d9488] bg-[#d9f1eb] p-3 text-xs font-black"
                        >
                          <Icon size={15} className="mx-auto mb-1" />
                          {x as string}
                        </button>)
                      }
                    </div>
                  </div>
                }
              </section>
              <aside className="space-y-4">
                <MapPreview
                  label={emergency ? "15 min response radius" : "Kothrud, Pune"}
                  className="h-48"
                />
                <div className="saha-card p-5">
                  <div className="text-xs font-black uppercase tracking-wider text-[#ed7d3a]">Your booking</div>
                  <div className="mt-3 font-black">{service}</div>
                  <div className="mt-1 text-sm text-[#607b7a]">{slot}</div>
                  <div className="mt-5 border-t border-[#123c43]/10 pt-4 text-xs leading-relaxed text-[#607b7a]">No surge pricing. Ever. Transparent cooperative pricing.</div>
                </div>
              </aside>
            </div>
          }
          {
            step === 4 && <div className="saha-card saha-reveal mx-auto max-w-xl p-8 text-center sm:p-12">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#0d9488] text-white">
                <Check size={31} />
              </div>
              <h2 className="saha-display mt-5 text-4xl font-bold">Booking confirmed.</h2>
              <p className="mt-2 text-sm text-[#607b7a]">Raju has your request. We will keep you posted as he heads your way.</p>
              <div className="my-6 rounded-2xl bg-[#e4f1ec] p-4 text-left text-sm">
                <div className="flex justify-between">
                  <span className="text-[#607b7a]">Booking ID</span>
                  <b className="saha-mono">#CLK-2025-0042</b>
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-[#607b7a]">Worker</span>
                  <b>{workers[worker].name}</b>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <ActionButton onClick={() => window.location.hash = "/track/0042"}>Track worker <ArrowRight size={16} /></ActionButton>
                <ActionButton
                  variant="outline"
                  onClick={() => show("Calendar invite downloaded")}
                >
                  Add to calendar
                </ActionButton>
              </div>
            </div>
          }
          {
            step < 4 && <div className="mt-5 flex justify-between">
              <ActionButton
                variant="quiet"
                disabled={step === 0}
                onClick={() => setStep(step - 1)}
              >
                <ArrowLeft size={16} /> Back
              </ActionButton>
              <ActionButton onClick={next}>{step === 3 ? "Confirm booking" : "Continue"} <ArrowRight size={16} /></ActionButton>
            </div>
          }
        </div>
      </PageFrame>
      <Toast message={message} onClose={close} />
    </Shell>
  );
}
function Row({ label, value, icon: Icon }: { label: string; value: string; icon?: typeof MapPin }) {
  return (
    <div className="flex items-start justify-between gap-4 text-sm">
      <span className="text-[#607b7a]">{label}</span>
      <b className="text-right">
        {
          Icon && <Icon size={14} className="mr-1 inline text-[#0d9488]" />
        }
        {value}
      </b>
    </div>
  );
}
