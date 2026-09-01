import { Award, Banknote, Bell, CalendarDays, Check, ChevronRight, Clock3, HeartHandshake, MapPin, ShieldCheck, Siren, Star, ToggleLeft, ToggleRight, TrendingUp, X } from "lucide-react";
import { useState } from "react";
import "./_group.css";
import { ActionButton, MiniStat, PageFrame, Shell, Toast, WorkerAvatar, useToast } from "./_shared/Saha";

export function WorkerDashboard() {
  const [online, setOnline] = useState(true);
  const [job, setJob] = useState<"pending" | "accepted" | "declined">("pending");
  const { message, show, close } = useToast();
  return (
    <Shell>
      <div className="saha-root bg-[#f7f5ee]">
        <div className="border-b border-[#123c43]/10 bg-[#fffdf8]">
          <PageFrame className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <LogoMark />
              <div>
                <div className="font-black">Worker console</div>
                <div className="text-xs text-[#607b7a]">Pune Labour Cooperative</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                aria-label="Toggle availability"
                onClick={() => { setOnline(!online); show(online ? "You are offline" : "You are online and visible for jobs"); }}
                className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-black ${online ? "bg-[#d9f1eb] text-[#075e61]" : "bg-[#e8e5f4] text-[#655c9e]"}`}
              >
                {
                  online ? <ToggleRight size={21} /> : <ToggleLeft size={21} />
                }
                {online ? "Online" : "Offline"}
              </button>
              <button
                aria-label="View notifications"
                className="rounded-xl p-2 text-[#075e61]"
              >
                <Bell size={19} />
              </button>
              <WorkerAvatar initials="SK" />
            </div>
          </PageFrame>
        </div>
        <PageFrame>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-black uppercase tracking-[.18em] text-[#ed7d3a]">Tuesday · 26 August 2025</div>
              <h1 className="saha-display mt-2 text-4xl font-bold">Good morning, Sunita.</h1>
              <p className="mt-2 text-sm text-[#607b7a]">You have a full day of meaningful work ahead.</p>
            </div>
            <div className="rounded-2xl bg-[#123c43] px-5 py-4 text-[#fffdf8]">
              <div className="text-xs text-[#b8d1cd]">Earned today</div>
              <div className="mt-1 text-2xl font-black">₹1,425</div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <MiniStat
              label="Today's jobs"
              value="3"
              note="1 in progress"
              icon={CalendarDays}
            />
            <MiniStat
              label="This month"
              value="₹19,500"
              note="+₹4,500 vs private platforms"
              icon={Banknote}
              tone="orange"
            />
            <MiniStat
              label="Your rating"
              value="4.8"
              note="142 reviews"
              icon={Star}
              tone="lilac"
            />
            <MiniStat
              label="Insurance"
              value="Active"
              note="PMSBY + PMJJBY"
              icon={ShieldCheck}
            />
          </div>
          <div className="mt-7 grid gap-7 lg:grid-cols-[1.2fr_.8fr]">
            <section className="space-y-7">
              {
                job === "pending" ? <div className="saha-card relative overflow-hidden border-2 border-[#ed7d3a]/50 p-5 sm:p-7">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#fff0e5] blur-2xl" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <span className="rounded-full bg-[#fff0e5] px-3 py-1 text-xs font-black text-[#c45e25]">New job request</span>
                      <h2 className="mt-4 text-2xl font-black">Plumbing · Pipe leak repair</h2>
                      <p className="mt-2 text-sm text-[#607b7a]">Priya S. · 4.9 rating · 2.1 km away</p>
                    </div>
                    <Clock3 className="saha-pulse text-[#ed7d3a]" size={27} />
                  </div>
                  <div className="mt-6 grid gap-3 rounded-2xl bg-[#e4f1ec] p-4 text-sm sm:grid-cols-2">
                    <div className="flex gap-2">
                      <MapPin size={16} className="text-[#0d9488]" />
                      <span>
                        <b>Kothrud, Pune</b>
                        <small className="block text-xs text-[#607b7a]">Tomorrow · 10:00 AM</small>
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-[#607b7a]">Estimated earning</span>
                      <b className="mt-1 block text-lg text-[#075e61]">₹617.50 <small className="text-xs font-bold">(95% of ₹650)</small></b>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-3">
                    <ActionButton
                      className="flex-1"
                      onClick={() => { setJob("accepted"); show("Job accepted — added to your schedule"); }}
                    >
                      <Check size={17} /> Accept
                    </ActionButton>
                    <ActionButton
                      variant="quiet"
                      className="flex-1"
                      onClick={() => { setJob("declined"); show("No penalty for declining"); }}
                    >
                      <X size={17} /> Decline
                    </ActionButton>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-[#607b7a]">
                    <span>No penalty for declining. You're a co-owner.</span>
                    <span className="saha-mono">00:45</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e4f1ec]">
                    <div className="h-full w-2/3 rounded-full bg-[#ed7d3a]" />
                  </div>
                </div> : <div className={`saha-card p-7 ${job === "accepted" ? "bg-[#d9f1eb]" : "bg-[#e8e5f4]"}`}>
                  <div className="flex items-center gap-3">
                    {
                      job === "accepted" ? <Check className="text-[#0d9488]" /> : <X className="text-[#655c9e]" />
                    }
                    <h2 className="text-xl font-black">
                      {job === "accepted" ? "Job accepted and scheduled." : "Request declined."}
                    </h2>
                  </div>
                  <p className="mt-2 text-sm text-[#607b7a]">
                    {job === "accepted" ? "The customer has been notified. Your cooperative calendar is up to date." : "Another co-owner will get the opportunity. Your standing is unchanged."}
                  </p>
                </div>
              }
              <div className="saha-card p-5 sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-xl font-black">My schedule</h2>
                  <button
                    onClick={() => show("Full calendar opened")}
                    className="text-xs font-black text-[#075e61]"
                  >
                    View calendar <ChevronRight className="inline" size={14} />
                  </button>
                </div>
                {
                  [["09:00", "AC servicing", "Priya S.", "₹475", "upcoming"], ["13:30", "Deep cleaning", "Maya Joshi", "₹760", "upcoming"], ["17:00", "Switch repair", "Arun K.", "₹285", "completed"]].map(([time, service, customer, earning, state]) => <div key={time} className="flex gap-4 border-t border-[#123c43]/10 py-4">
                    <div className="saha-mono w-14 pt-1 text-xs text-[#607b7a]">{time}</div>
                    <div className={`mt-1 h-10 w-1 rounded-full ${state === "completed" ? "bg-[#0d9488]" : "bg-[#ed7d3a]"}`} />
                    <div className="flex-1">
                      <div className="font-black">{service}</div>
                      <div className="mt-1 flex flex-wrap gap-2 text-xs text-[#607b7a]">
                        <span>{customer}</span>
                        <span>·</span>
                        <span>Kothrud</span>
                      </div>
                    </div>
                    <div className="text-right text-sm font-black text-[#075e61]">
                      {earning}
                    </div>
                  </div>)
                }
              </div>
            </section>
            <aside className="space-y-4">
              <div className="saha-card p-5">
                <div className="flex items-center justify-between">
                  <h2 className="font-black">Earnings pulse</h2>
                  <TrendingUp className="text-[#0d9488]" size={18} />
                </div>
                <div className="mt-5 flex h-32 items-end gap-2">
                  {
                    [35, 52, 40, 70, 58, 84, 68, 94, 76, 88, 70, 100].map((height, i) => <div
                      key={i}
                      className="flex-1 rounded-t-md bg-[#0d9488]"
                      style={{ height: `${height}%`, opacity: .35 + i / 20 }}
                    />)
                  }
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#607b7a]">Net received</span>
                    <b className="mt-1 block text-lg">₹19,500</b>
                  </div>
                  <div>
                    <span className="text-[#607b7a]">Jobs completed</span>
                    <b className="mt-1 block text-lg">47</b>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-[#e8e5f4] p-5">
                <div className="flex items-center gap-2 font-black"><Award className="text-[#655c9e]" size={19} /> SAKSHAM training</div>
                <p className="mt-2 text-sm text-[#607b7a]">Complete 3 certifications to become Premium.</p>
                <div className="mt-4 h-2 rounded-full bg-[#fffdf8]">
                  <div className="h-full w-2/3 rounded-full bg-[#655c9e]" />
                </div>
                <div className="mt-2 text-xs font-bold text-[#655c9e]">2 of 3 complete</div>
              </div>
              <div className="rounded-2xl bg-[#d9f1eb] p-5">
                <div className="flex items-center gap-2 font-black"><HeartHandshake className="text-[#075e61]" size={19} /> Welfare & benefits</div>
                <p className="mt-2 text-sm text-[#607b7a]">₹4,200 mutual benefit balance · cover active.</p>
                <button
                  onClick={() => show("Welfare details opened")}
                  className="mt-3 text-xs font-black text-[#075e61]"
                >
                  View benefits <ChevronRight className="inline" size={14} />
                </button>
              </div>
              <button
                onClick={() => window.location.hash = "/sos"}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#ed7d3a]/40 py-3 text-sm font-black text-[#c45e25]"
              >
                <Siren size={16} /> Worker SOS
              </button>
            </aside>
          </div>
        </PageFrame>
        <Toast message={message} onClose={close} />
      </div>
    </Shell>
  );
}
function LogoMark() {
  return (
    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#ed7d3a] text-white">
      <HeartHandshake size={20} />
    </div>
  );
}
