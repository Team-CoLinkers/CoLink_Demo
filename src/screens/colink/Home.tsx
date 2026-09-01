import { ArrowRight, BrainCircuit, Check, ChevronRight, CircleDollarSign, HeartHandshake, MapPin, Search, ShieldCheck, Sparkles, Users, Zap } from "lucide-react";
import { useState } from "react";
import "./_group.css";
import { ActionButton, Logo, PageFrame, SectionTitle, Shell, Toast, TrustBadge, useToast } from "./_shared/Saha";

export function Home() {
  const [language, setLanguage] = useState("English");
  const [dark, setDark] = useState(false);
  const { message, show, close } = useToast();
  const t = language === "हिंदी";
  const go = (path: string) => { window.location.hash = path; show(path === "/book" ? (t ? "बुकिंग शुरू हुई" : "Booking flow opened") : "You're on the right path"); };
  const categories = [["Electrician", "Wiring, repairs & installs", Zap], ["Plumber", "Leaks, pipes & fittings", HeartHandshake], ["Carpenter", "Furniture & woodwork", Sparkles], ["Painter", "Interior & exterior", CircleDollarSign], ["Domestic helper", "Care, cooking & cleaning", Users], ["Caregiver", "Elder care & nursing", HeartHandshake], ["Driver", "Local & outstation", ArrowRight], ["Gardener", "Plants & maintenance", Sparkles], ["Cleaner", "Deep & office clean", Check], ["Technician", "AC, RO & appliance", Zap]] as Array<[string, string, typeof Zap]>;
  // The preview intentionally mixes lucide components in compact data tuples.
  // @ts-expect-error compact tuple inference widens the icon slot in the generated JSX line below.
  return (
    <Shell
      dark={dark}
      setDark={setDark}
      language={language}
      setLanguage={setLanguage}
      onNavigate={(p) => { window.location.hash = p; }}
    >
      <section className={`relative overflow-hidden ${dark ? "bg-[#102f35]" : "bg-[#123c43]"}`}>
        <div className="saha-grid absolute inset-0 opacity-25" />
        <PageFrame className="relative grid min-h-[610px] items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
          <div className="saha-reveal max-w-3xl text-[#fffdf8]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#9bd5c9]/40 bg-[#d9f1eb]/10 px-3 py-1.5 text-xs font-bold text-[#b8e7dc]"><HeartHandshake size={14} /> The worker-owned alternative</div>
            <h1 className="saha-display text-5xl font-bold leading-[.98] tracking-tight sm:text-7xl">
              {t ? "सेवा जो समुदाय को साथ लाए" : "Home services, held by the people who make them happen."}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#c5ddda] sm:text-lg">
              {t ? "सत्यापित कामगार। उचित कमाई। पड़ोस का भरोसा।" : "Verified workers. Fair earnings. Neighbourhood trust. Book help from cooperatives where every worker owns a share."}
            </p>
            <p className="mt-4 font-semibold text-[#edb08d]">सहकारिता से सेवा, समुदाय से विश्वास</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton onClick={() => go("/book")} variant="orange">{t ? "सेवा बुक करें" : "Book a service"} <ArrowRight size={17} /></ActionButton>
              <ActionButton
                onClick={() => go("/worker-register")}
                variant="outline"
                className="border-[#b8e7dc] text-[#d9f1eb]"
              >
                {t ? "कामगार बनें" : "Join as a worker"}
              </ActionButton>
            </div>
            <div className="mt-10 flex max-w-xl items-center gap-2 rounded-2xl bg-[#fffdf8] p-2 text-[#123c43] shadow-xl">
              <Search className="ml-3 text-[#0d9488]" size={20} />
              <input
                className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm outline-none"
                placeholder={t ? "आपको किस सेवा की ज़रूरत है?" : "What service do you need?"}
              />
              <span className="hidden items-center gap-1 border-l border-[#123c43]/10 px-3 text-xs font-bold text-[#607b7a] sm:flex"><MapPin size={14} /> Pune, MH</span>
              <button
                onClick={() => go("/book")}
                aria-label="Search services"
                className="rounded-xl bg-[#075e61] p-3 text-white"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="saha-reveal saha-delay-2 relative mx-auto w-full max-w-md">
            <div className="absolute -right-4 -top-6 rounded-2xl bg-[#ed7d3a] p-4 text-white shadow-xl">
              <div className="text-2xl font-black">95%</div>
              <div className="text-xs font-bold">goes to workers</div>
            </div>
            <div className="rounded-[32px] border border-[#b8e7dc]/20 bg-[#d9f1eb]/10 p-4 backdrop-blur">
              <div className="saha-map h-[390px] rounded-[24px]">
                <div className="absolute left-[30%] top-[36%] rounded-full border-4 border-white bg-[#ed7d3a] p-3 text-white shadow-[0_0_0_12px_rgba(237,125,58,.18)]">
                  <Users size={19} />
                </div>
                <div className="absolute bottom-8 right-8 w-52 rounded-2xl bg-[#fffdf8] p-4 text-[#123c43] shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-[#0d9488] font-black text-white">SK</div>
                    <div>
                      <div className="font-black">Your cooperative network</div>
                      <div className="text-xs text-[#607b7a]">37 verified workers nearby</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-xs font-bold text-[#b8e7dc]">
              <span>Neighbourhood-first matching</span>
              <span>Live in Pune</span>
            </div>
          </div>
        </PageFrame>
        <div className="relative border-t border-white/10">
          <PageFrame className="grid grid-cols-2 gap-6 py-5 text-[#d9f1eb] sm:grid-cols-4">
            <div>
              <b className="block text-xl text-white">44,859+</b>
              <span className="text-xs">cooperatives</span>
            </div>
            <div>
              <b className="block text-xl text-white">31.91 Cr</b>
              <span className="text-xs">workers registered</span>
            </div>
            <div>
              <b className="block text-xl text-white">5%</b>
              <span className="text-xs">platform fee only</span>
            </div>
            <div>
              <b className="block text-xl text-white">100%</b>
              <span className="text-xs">insured workers</span>
            </div>
          </PageFrame>
        </div>
      </section>
      <PageFrame>
        <SectionTitle
          eyebrow="01 — Start close to home"
          title={t ? "अपने पड़ोस की सेवा चुनें" : "Choose help that feels close to home"}
          body="From a fan that stopped turning to a parent who needs a little extra care — every booking strengthens the cooperative around you."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {
            categories.map(([name, desc, Icon], i) => { const ServiceIcon = Icon as typeof Zap; return <div
              key={name}
              className={`saha-card saha-reveal saha-delay-${(i % 3) + 1} group p-4`}
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-[#e8e5f4] text-[#655c9e] transition group-hover:bg-[#d9f1eb] group-hover:text-[#075e61]">
                <ServiceIcon size={20} />
              </div>
              <div className="font-black capitalize">{name}</div>
              <div className="mt-1 min-h-10 text-xs leading-relaxed text-[#607b7a]">
                {desc}
              </div>
              <button
                onClick={() => go("/book")}
                className="mt-4 flex items-center gap-1 text-xs font-black text-[#075e61]"
              >
                Book now <ChevronRight size={14} />
              </button>
            </div>})
          }
        </div>
      </PageFrame>
      <section className="bg-[#e4f1ec]">
        <PageFrame>
          <SectionTitle
            eyebrow="02 — A fairer loop"
            title="Three steps. One stronger neighbourhood."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {
              [["01", Search, "Choose a service", "Tell us what needs attention. No jargon, no pressure."], ["02", BrainCircuit, "Meet the right worker", "Cooperative-verified people, matched for skill and distance."], ["03", ShieldCheck, "Pay fair, feel secure", "Clear pricing, insurance cover, and 95% to the worker."]].map(([num, Icon, title, text], i) => <div key={num as string} className="relative rounded-3xl bg-[#fffdf8] p-6">
                <div className="mb-8 flex items-center justify-between">
                  <span className="saha-mono text-sm text-[#ed7d3a]">{num}</span>
                  <DynamicIcon icon={Icon} />
                </div>
                <h3 className="text-xl font-black">{title as string}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#607b7a]">
                  {text as string}
                </p>
                {
                  i < 2 && <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden text-[#ed7d3a] md:block" />
                }
              </div>)
            }
          </div>
        </PageFrame>
      </section>
      <PageFrame>
        <SectionTitle
          eyebrow="03 — Why it matters"
          title="A marketplace with a conscience built in."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {
            [["5% only", "Workers keep 95% of every earning. No hidden cuts.", CircleDollarSign], ["Cooperative verified", "Society membership and Aadhaar eKYC, checked together.", ShieldCheck], ["Always insured", "PMSBY accident cover and PMJJBY life cover, auto-enrolled.", HeartHandshake], ["Fair matching", "Jobs are shared equitably — not routed to maximise profit.", BrainCircuit]].map(([title, text, Icon]) => { const FeatureIcon = Icon as typeof Zap; return <div
              key={title as string}
              className="rounded-3xl border border-[#0d9488]/15 bg-[#fffdf8] p-6"
            >
              <FeatureIcon className="mb-8 text-[#ed7d3a]" size={25} />
              <h3 className="font-black">{title as string}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#607b7a]">
                {text as string}
              </p>
            </div>})
          }
        </div>
      </PageFrame>
      <section className="bg-[#123c43] text-[#fffdf8]">
        <PageFrame>
          <SectionTitle
            eyebrow="04 — Measurable change"
            title="When workers own the platform, outcomes change."
          />
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
            {
              [["20–30%", "higher earnings"], ["100%", "social security"], ["40%", "better retention"], [">95%", "satisfaction"], ["5,000+", "upskilled year one"], ["60%+", "women empowered"]].map(([v, l]) => <div key={l} className="bg-[#123c43] p-5">
                <div className="saha-display text-3xl font-bold text-[#edb08d]">{v}</div>
                <div className="mt-2 text-xs text-[#b8d1cd]">{l}</div>
              </div>)
            }
          </div>
        </PageFrame>
      </section>
      <PageFrame className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <div className="mb-4 text-xs font-black uppercase tracking-[.18em] text-[#ed7d3a]">A worker's story</div>
          <h2 className="saha-display text-4xl font-bold">“I am not a gig worker. I am a co-owner.”</h2>
          <p className="mt-5 leading-relaxed text-[#607b7a]">Sunita, 40, domestic helper from Pune, moved from ₹15,000 a month to ₹19,500 — with cover, a voice in policy, and a community that knows her name.</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[#ed7d3a] font-black text-white">SK</div>
            <div>
              <div className="font-black">Sunita K.</div>
              <TrustBadge name="Pune Domestic Workers Coop" />
            </div>
          </div>
        </div>
        <div className="saha-card grid items-center gap-4 p-6 sm:grid-cols-[1fr_auto_1fr]">
          <div>
            <div className="text-xs font-bold text-[#607b7a]">Before</div>
            <div className="mt-2 text-3xl font-black text-[#607b7a]">₹15,000</div>
            <div className="text-xs text-[#607b7a]">after platform cuts</div>
          </div>
          <ArrowRight className="hidden text-[#ed7d3a] sm:block" />
          <div>
            <div className="text-xs font-bold text-[#0d9488]">With CoLink</div>
            <div className="mt-2 text-3xl font-black text-[#075e61]">₹19,500</div>
            <div className="text-xs text-[#0d9488]">co-owner earnings</div>
          </div>
        </div>
      </PageFrame>
      <footer className="bg-[#e4f1ec]">
        <PageFrame className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#607b7a]">Cooperative-powered services, community-driven trust.</p>
          </div>
          {
            [["Platform", "About", "How it works", "Pricing", "FAQ"], ["For workers", "Join a cooperative", "Training", "Welfare", "Dashboard"], ["Legal", "Privacy", "Terms", "DPDP compliance", "Contact"]].map(([heading, ...links]) => <div key={heading}>
              <div className="mb-3 text-xs font-black uppercase tracking-wider text-[#075e61]">
                {heading}
              </div>
              {
                links.map(link => <button
                  key={link}
                  onClick={() => show(`${link} is part of the prototype`)}
                  className="mb-2 block text-left text-sm text-[#607b7a] hover:text-[#ed7d3a]"
                >
                  {link}
                </button>)
              }
            </div>)
          }
        </PageFrame>
        <div className="border-t border-[#123c43]/10 px-5 py-4 text-center text-xs font-semibold text-[#607b7a]">Made for India's cooperatives · © 2026 CoLink</div>
      </footer>
      <Toast message={message} onClose={close} />
    </Shell>
  );
}
function DynamicIcon({ icon }: { icon: unknown }) {
  const Icon = icon as typeof Search;
  return (
    <Icon size={25} className="text-[#0d9488]" />
  );
}
