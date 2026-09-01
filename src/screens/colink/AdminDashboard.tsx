import { BarChart3, Bell, ChevronDown, CircleDollarSign, FileText, Filter, Handshake, LayoutDashboard, ListChecks, Menu, Settings, ShieldCheck, Users, Vote, WalletCards } from "lucide-react";
import { useState } from "react";
import "./_group.css";
import { MiniStat, PageFrame, Shell, Toast, TrustBadge, useToast } from "./_shared/Saha";

const people = [["Sunita K.", "Domestic helper", "4.9", "62", "₹19,500", "Premium"], ["Raju M.", "Electrician", "4.8", "45", "₹22,100", "Certified"], ["Lakshmi P.", "Caregiver", "4.7", "38", "₹16,800", "Standard"], ["Mohan S.", "Plumber", "4.6", "52", "₹20,400", "Certified"], ["Anita R.", "Cleaner", "4.5", "41", "₹15,200", "Standard"]];
export function AdminDashboard() {
  const [active, setActive] = useState("Dashboard");
  const [filter, setFilter] = useState("All services");
  const { message, show, close } = useToast();
  const nav = [["Dashboard", LayoutDashboard], ["Workers management", Users], ["Bookings & services", ListChecks], ["Demand analytics", BarChart3], ["Financial reports", WalletCards], ["Welfare & insurance", ShieldCheck], ["SAKSHAM training", FileText], ["Governance", Vote], ["Settings", Settings]] as const;
  return (
    <Shell>
      <div className="saha-root bg-[#f7f5ee]">
        <div className="flex min-h-[100dvh]">
          <aside className="hidden w-64 shrink-0 border-r border-[#123c43]/10 bg-[#123c43] p-5 text-[#d9f1eb] lg:block">
            <div className="mb-10 flex items-center gap-2 text-white">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#ed7d3a]">
                <Handshake size={18} />
              </span>
              <b className="text-lg">
                Co
                <span className="text-[#edb08d]">Link</span>
              </b>
            </div>
            <div className="mb-3 text-[10px] font-black uppercase tracking-[.18em] text-[#8db6b0]">Federation portal</div>
            <nav className="space-y-1">
              {
                nav.map(([label, Icon]) => <button
                  key={label}
                  onClick={() => { setActive(label); show(`${label} view selected`); }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-bold ${active === label ? "bg-[#0d9488] text-white" : "hover:bg-white/10"}`}
                >
                  <Icon size={16} />
                  {label}
                </button>)
              }
            </nav>
            <div className="mt-10 rounded-2xl bg-white/10 p-4 text-xs leading-relaxed">
              <div className="font-black text-white">The cooperative promise</div>
              <p className="mt-2 text-[#b8d1cd]">Every number is visible. Every worker has a voice.</p>
            </div>
          </aside>
          <div className="min-w-0 flex-1">
            <div className="border-b border-[#123c43]/10 bg-[#fffdf8]">
              <PageFrame className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <button className="lg:hidden" aria-label="Open admin navigation">
                    <Menu size={20} />
                  </button>
                  <div>
                    <div className="font-black">Federation overview</div>
                    <div className="text-xs text-[#607b7a]">Tuesday, 26 August 2025 · Pune cluster</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    aria-label="Filter dashboard"
                    onClick={() => show("Dashboard filters opened")}
                    className="rounded-xl p-2 text-[#075e61]"
                  >
                    <Filter size={18} />
                  </button>
                  <button
                    aria-label="Admin notifications"
                    className="relative rounded-xl p-2"
                  >
                    <Bell size={18} />
                    <i className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-[#ed7d3a]" />
                  </button>
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#655c9e] text-xs font-black text-white">AK</div>
                </div>
              </PageFrame>
            </div>
            <PageFrame>
              <div className="mb-7">
                <div className="text-xs font-black uppercase tracking-[.18em] text-[#ed7d3a]">Dashboard / {active}</div>
                <h1 className="saha-display mt-2 text-4xl font-bold">A clear view of shared progress.</h1>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <MiniStat
                  label="Total workers"
                  value="487"
                  note="+12 this month"
                  icon={Users}
                />
                <MiniStat
                  label="Active bookings today"
                  value="156"
                  note="91% fulfilled on time"
                  icon={ListChecks}
                  tone="orange"
                />
                <MiniStat
                  label="Monthly revenue"
                  value="₹8.4L"
                  note="5% fee collected"
                  icon={CircleDollarSign}
                  tone="lilac"
                />
                <MiniStat
                  label="Worker avg earning"
                  value="₹18,200"
                  note="+21% year on year"
                  icon={BarChart3}
                />
              </div>
              <div className="mt-7 grid gap-7 xl:grid-cols-[1fr_.7fr]">
                <section className="saha-card p-5 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-black">Demand across Pune</h2>
                      <p className="mt-1 text-xs text-[#607b7a]">Live service requests · last 7 days</p>
                    </div>
                    <button
                      onClick={() => show("Service filter opened")}
                      className="flex items-center gap-2 rounded-lg border border-[#123c43]/12 px-3 py-2 text-xs font-bold"
                    >
                      {filter}
                      <ChevronDown size={14} />
                    </button>
                  </div>
                  <div className="saha-map mt-6 grid h-64 grid-cols-8 grid-rows-5 gap-1 rounded-2xl p-4">
                    {
                      Array.from({ length: 40 }, (_, i) => <div
                        key={i}
                        className="rounded-sm"
                        style={{ background: `rgba(${i % 5 === 0 ? 237 : 13},${i % 5 === 0 ? 125 : 148},${i % 5 === 0 ? 58 : 136},${.18 + ((i * 17) % 70) / 100})` }}
                      />)
                    }
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-xs font-bold text-[#607b7a]">
                    <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-sm bg-[#b6d9e1]" /> Low</span>
                    <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-sm bg-[#efc66b]" /> Medium</span>
                    <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-sm bg-[#ed7d3a]" /> High</span>
                  </div>
                </section>
                <section className="saha-card p-5 sm:p-7">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-black">Financial transparency</h2>
                    <CircleDollarSign className="text-[#0d9488]" />
                  </div>
                  <div
                    className="mx-auto mt-7 grid h-44 w-44 place-items-center rounded-full"
                    style={{ background: "conic-gradient(#0d9488 0 70%, #ed7d3a 70% 85%, #655c9e 85% 95%, #edb08d 95% 100%)" }}
                  >
                    <div className="grid h-28 w-28 place-items-center rounded-full bg-[#fffdf8] text-center">
                      <b className="text-xl">₹8.4L</b>
                      <span className="text-[10px] text-[#607b7a]">this month</span>
                    </div>
                  </div>
                  <div className="mt-5 space-y-2 text-xs">
                    {
                      [["Transaction fees", "70%", "#0d9488"], ["Membership", "15%", "#ed7d3a"], ["Premium plans", "10%", "#655c9e"], ["B2B services", "5%", "#edb08d"]].map(([label, val, color]) => <div key={label} className="flex justify-between">
                        <span>
                          <i
                            className="mr-2 inline-block h-2 w-2 rounded-full"
                            style={{ background: color }}
                          />
                          {label}
                        </span>
                        <b>{val}</b>
                      </div>)
                    }
                  </div>
                </section>
              </div>
              <section className="saha-card mt-7 overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 p-5 sm:p-7">
                  <div>
                    <h2 className="text-xl font-black">Worker performance</h2>
                    <p className="mt-1 text-xs text-[#607b7a]">A fair view of the people behind the numbers</p>
                  </div>
                  <button
                    onClick={() => show("Worker export prepared")}
                    className="rounded-xl bg-[#e4f1ec] px-3 py-2 text-xs font-black text-[#075e61]"
                  >
                    Export report
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left text-sm">
                    <thead className="border-y border-[#123c43]/10 bg-[#e4f1ec] text-xs text-[#607b7a]">
                      <tr>
                        {
                          ["Name", "Service", "Rating", "Jobs / month", "Earnings", "Insurance", "Level"].map(x => <th key={x} className="px-5 py-3 font-black">{x}</th>)
                        }
                      </tr>
                    </thead>
                    <tbody>
                      {
                        people.map(([name, service, rating, jobs, earnings, level]) => <tr
                          key={name}
                          className="border-b border-[#123c43]/8 last:border-0"
                        >
                          <td className="px-5 py-4 font-black">
                            {name}
                            <div className="mt-1"><TrustBadge /></div>
                          </td>
                          <td className="px-5 py-4 text-[#607b7a]">{service}</td>
                          <td className="px-5 py-4 font-bold text-[#c45e25]">★ {rating}</td>
                          <td className="px-5 py-4">{jobs}</td>
                          <td className="px-5 py-4 font-black">{earnings}</td>
                          <td className="px-5 py-4 text-[#0d9488]">Active</td>
                          <td className="px-5 py-4">
                            <span className="rounded-full bg-[#e8e5f4] px-2 py-1 text-xs font-bold text-[#655c9e]">
                              {level}
                            </span>
                          </td>
                        </tr>)
                      }
                    </tbody>
                  </table>
                </div>
              </section>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <section className="rounded-3xl bg-[#d9f1eb] p-6">
                  <div className="flex items-center gap-2 font-black"><Vote className="text-[#075e61]" size={20} /> Governance in motion</div>
                  <h3 className="mt-4 font-black">Should we increase premium subscription to ₹249?</h3>
                  <p className="mt-2 text-xs text-[#607b7a]">234 votes so far · closes in 3 days</p>
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => show("Vote recorded: Yes")}
                      className="saha-button bg-[#075e61] px-4 py-2 text-xs text-white hover:bg-[#064d50]"
                    >
                      Vote yes
                    </button>
                    <button
                      onClick={() => show("Vote recorded: No")}
                      className="saha-button border border-[#075e61] bg-white px-4 py-2 text-xs text-[#075e61] hover:bg-[#eef7f4]"
                    >
                      Vote no
                    </button>
                  </div>
                </section>
                <section className="rounded-3xl bg-[#123c43] p-6 text-[#fffdf8]">
                  <div className="flex items-center gap-2 font-black"><Handshake className="text-[#edb08d]" size={20} /> Next monthly meeting</div>
                  <h3 className="mt-4 font-black">September 5, 2025</h3>
                  <p className="mt-2 text-xs text-[#b8d1cd]">Agenda: Q2 financial review · All members welcome.</p>
                  <button
                    onClick={() => show("Meeting details opened")}
                    className="mt-4 text-xs font-black text-[#edb08d]"
                  >
                    View agenda <ChevronDown className="inline" size={14} />
                  </button>
                </section>
              </div>
            </PageFrame>
          </div>
        </div>
        <Toast message={message} onClose={close} />
      </div>
    </Shell>
  );
}
