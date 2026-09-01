import { ArrowRight, Check, LockKeyhole, Phone, ShieldCheck } from "lucide-react";
import { useState } from "react";
import "./_group.css";
import { ActionButton, Logo, Toast, useToast } from "./_shared/Saha";

export function Auth() {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [otp, setOtp] = useState(false);
  const [done, setDone] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { message, show, close } = useToast();
  const submit = () => { if (tab === "login" && !otp) { setOtp(true); show("One-time code sent to your phone"); } else { setDone(true); show(tab === "login" ? "Welcome back, Priya" : "Account created — welcome to CoLink"); } };
  return (
    <div className="saha-root flex min-h-[100dvh] items-center justify-center bg-[#e4f1ec] p-4 sm:p-8">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[30px] bg-[#fffdf8] shadow-2xl lg:grid-cols-[.85fr_1.15fr]">
        <aside className="relative hidden overflow-hidden bg-[#123c43] p-10 text-[#fffdf8] lg:flex lg:flex-col">
          <div className="saha-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative flex min-h-[30rem] flex-1 flex-col">
            <Logo inverse />
            <div className="mt-auto max-w-sm">
              <div className="mb-4 text-xs font-black uppercase tracking-[.2em] text-[#edb08d]">A better way to book</div>
              <h1 className="saha-display text-4xl font-bold leading-[1.1] xl:text-5xl">Good help should feel human.</h1>
              <p className="mt-5 leading-relaxed text-[#b8d1cd]">Find cooperative-verified workers with transparent pricing and a fairer share for the people doing the work.</p>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm font-bold text-[#b8d1cd]"><ShieldCheck size={19} className="text-[#edb08d]" /> 100% insured cooperative workers</div>
          </div>
        </aside>
        <section className="p-6 sm:p-10 lg:p-14">
          <div className="mb-8 flex items-center justify-between lg:hidden">
            <Logo />
            <span className="text-xs font-bold text-[#607b7a]">Pune, MH</span>
          </div>
          <div className="mx-auto max-w-md">
            <div className="mb-8">
              <div className="mb-2 text-xs font-black uppercase tracking-[.2em] text-[#ed7d3a]">Your neighbourhood network</div>
              <h2 className="saha-display text-4xl font-bold">Welcome to CoLink</h2>
              <p className="mt-2 text-sm text-[#607b7a]">Book help, or create your account in under a minute.</p>
            </div>
            <div className="mb-7 grid grid-cols-2 rounded-xl bg-[#e4f1ec] p-1">
              <button
                onClick={() => { setTab("login"); setOtp(false); setDone(false); }}
                className={`rounded-lg py-2.5 text-sm font-black ${tab === "login" ? "bg-[#fffdf8] text-[#075e61] shadow-sm" : "text-[#607b7a]"}`}
              >
                Log in
              </button>
              <button
                onClick={() => { setTab("signup"); setOtp(false); setDone(false); }}
                className={`rounded-lg py-2.5 text-sm font-black ${tab === "signup" ? "bg-[#fffdf8] text-[#075e61] shadow-sm" : "text-[#607b7a]"}`}
              >
                Sign up
              </button>
            </div>
            {
              done ? <div className="saha-reveal rounded-2xl bg-[#d9f1eb] p-7 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#0d9488] text-white">
                  <Check />
                </div>
                <h3 className="mt-4 text-xl font-black">You're all set.</h3>
                <p className="mt-2 text-sm text-[#607b7a]">Your cooperative-first service journey starts here.</p>
                <ActionButton
                  className="mt-6 w-full"
                  onClick={() => window.location.hash = "/"}
                >
                  Explore services <ArrowRight size={16} />
                </ActionButton>
              </div> : <div className="space-y-4">
                {
                  tab === "signup" && <>
                    <label className="block text-sm font-bold">
                      Full name
                      <input className="saha-input mt-2" placeholder="Priya Shah" />
                    </label>
                    <label className="block text-sm font-bold">
                      Email <span className="font-normal text-[#607b7a]">(optional)</span>
                      <input
                        className="saha-input mt-2"
                        type="email"
                        placeholder="priya@example.com"
                      />
                    </label>
                  </>
                }
                {
                  <label className="block text-sm font-bold">
                    Mobile number
                    <div className="mt-2 flex gap-2">
                      <div className="grid min-h-[46px] place-items-center rounded-xl border border-[#123c43]/15 bg-[#e4f1ec] px-3 text-sm font-bold">+91</div>
                      <div className="relative flex-1">
                        <Phone
                          className="absolute left-3 top-3.5 text-[#607b7a]"
                          size={17}
                        />
                        <input className="saha-input pl-10" placeholder="98765 43210" />
                      </div>
                    </div>
                  </label>
                }
                {
                  tab === "signup" && <label className="block text-sm font-bold">
                    Location
                    <input className="saha-input mt-2" placeholder="Pune, Maharashtra" />
                  </label>
                }
                {
                  otp && tab === "login" && <div className="saha-reveal">
                    <label className="block text-sm font-bold">
                      Enter 6-digit code
                      <input
                        className="saha-input mt-2 text-center text-xl tracking-[.5em]"
                        inputMode="numeric"
                        maxLength={6}
                        placeholder="••••••"
                      />
                    </label>
                    <button
                      className="mt-2 text-xs font-bold text-[#0d9488]"
                      onClick={() => show("A fresh code is on its way")}
                    >
                      Resend code
                    </button>
                  </div>
                }
                {
                  tab === "signup" && <label className="flex items-start gap-2 text-xs leading-relaxed text-[#607b7a]"><input type="checkbox" defaultChecked className="mt-0.5 accent-[#0d9488]" /> I agree to the cooperative terms and privacy policy.</label>
                }
                <ActionButton onClick={submit} className="w-full">{tab === "login" && !otp ? "Send one-time code" : tab === "login" ? "Verify & log in" : "Create my account"} <ArrowRight size={16} /></ActionButton>
                <div className="relative py-2 text-center text-xs text-[#607b7a]">
                  <span className="bg-[#fffdf8] px-3">or continue with</span>
                  <div className="absolute left-0 right-0 top-1/2 -z-0 border-t border-[#123c43]/10" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => show("Google sign-in is mocked for this prototype")}
                    className="saha-button border border-[#123c43]/15 bg-white text-sm text-[#123c43] hover:bg-[#f7f5ee]"
                  >
                    G Google
                  </button>
                  <button
                    onClick={() => show("Phone sign-in selected")}
                    className="saha-button border border-[#123c43]/15 bg-white text-sm text-[#123c43] hover:bg-[#f7f5ee]"
                  >
                    <LockKeyhole size={15} /> Passkey
                  </button>
                </div>
              </div>
            }
            <div className="mt-8 border-t border-[#123c43]/10 pt-5 text-center text-sm text-[#607b7a]">Are you a worker? <button onClick={() => window.location.hash = "/worker-register"} className="font-black text-[#075e61]">Register through your cooperative <ArrowRight className="inline" size={14} /></button></div>
          </div>
        </section>
      </div>
      <Toast message={message} onClose={close} />
    </div>
  );
}
