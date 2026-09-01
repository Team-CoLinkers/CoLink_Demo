import { ArrowLeft, ArrowRight, Check, FileCheck2, Upload, UserRound } from "lucide-react";
import { useState } from "react";
import "./_group.css";
import { ActionButton, Logo, ProgressSteps, Toast, TrustBadge, useToast } from "./_shared/Saha";

const steps = ["Personal details", "Verify identity", "Skills & services", "Bank & welfare"];
export function WorkerRegister() {
  const [step, setStep] = useState(0);
  const [verified, setVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { message, show, close } = useToast();
  const next = () => { if (step === 1 && !verified) { setVerified(true); show("Aadhaar eKYC verified successfully"); return; } if (step < 3) { setStep(step + 1); show(`Step ${step + 2} saved`); } else setSubmitted(true); };
  return (
    <div className="saha-root min-h-[100dvh] bg-[#e4f1ec]">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-8 sm:py-10">
        <div className="mb-8 flex items-center justify-between">
          <Logo />
          <span className="text-xs font-bold text-[#607b7a]">Worker co-owner registration</span>
        </div>
        <div className="saha-card p-5 sm:p-10">
          <div className="mb-8 max-w-xl">
            <div className="mb-2 text-xs font-black uppercase tracking-[.18em] text-[#ed7d3a]">Welcome to the collective</div>
            <h1 className="saha-display text-4xl font-bold">Your skill. Your share. Your say.</h1>
            <p className="mt-2 text-sm leading-relaxed text-[#607b7a]">Register once through your cooperative. We take care of verification, cover and fair work discovery.</p>
          </div>
          <ProgressSteps current={submitted ? 3 : step} labels={steps} />
          {
            submitted ? <div className="saha-reveal mx-auto max-w-md py-12 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#0d9488] text-white">
                <Check size={30} />
              </div>
              <h2 className="mt-5 text-2xl font-black">Application received</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#607b7a]">Pune Labour Cooperative will review your membership ID. You can expect a response within two working days.</p>
              <TrustBadge name="Co-owner application · SK-2048" />
              <ActionButton
                className="mt-7 w-full"
                onClick={() => window.location.hash = "/worker"}
              >
                View worker dashboard <ArrowRight size={16} />
              </ActionButton>
            </div> : <div className="grid gap-10 lg:grid-cols-[1fr_240px]">
              <div className="space-y-5">
                {
                  step === 0 && <>
                    <Field label="Full name" placeholder="Sunita Kamble" />
                    <Field label="Mobile number" placeholder="+91 98765 43210" />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Aadhaar number" placeholder="XXXX XXXX 8421" />
                      <Field label="District" placeholder="Pune" />
                    </div>
                    <Field
                      label="Cooperative society"
                      placeholder="Search your registered society"
                    />
                  </>
                }
                {
                  step === 1 && <>
                    <div className="rounded-2xl bg-[#e4f1ec] p-5">
                      <div className="flex items-start gap-4">
                        <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#fffdf8] text-[#075e61]">
                          <FileCheck2 />
                        </div>
                        <div>
                          <h3 className="font-black">Verify via Aadhaar eKYC</h3>
                          <p className="mt-1 text-sm leading-relaxed text-[#607b7a]">Your identity is checked securely through DigiLocker. We never store the full number.</p>
                        </div>
                      </div>
                      {
                        verified ? <div className="mt-5 flex items-center gap-2 rounded-xl bg-[#0d9488] px-4 py-3 text-sm font-black text-white"><Check size={18} /> Verified identity · last four 8421</div> : <ActionButton className="mt-5" onClick={next}><FileCheck2 size={16} /> Verify with DigiLocker</ActionButton>
                      }
                    </div>
                    <UploadBox label="Cooperative membership ID" />
                    <div className="text-xs text-[#607b7a]">Documents are visible only to your cooperative verification team.</div>
                  </>
                }
                {
                  step === 2 && <>
                    <div className="text-sm font-black">What work do you do?</div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {
                        ["Electrician", "Plumber", "Domestic helper", "Caregiver", "Driver", "Cleaner"].map((x, i) => <label
                          key={x}
                          className="flex cursor-pointer items-center gap-2 rounded-xl border border-[#123c43]/12 p-3 text-sm font-bold has-[:checked]:border-[#0d9488] has-[:checked]:bg-[#d9f1eb]"
                        >
                          <input
                            type="checkbox"
                            defaultChecked={i < 2}
                            className="accent-[#0d9488]"
                          />
                          {x}
                        </label>)
                      }
                    </div>
                    <label className="block text-sm font-bold">
                      Years of experience <input type="range" min="1" max="30" defaultValue="8" className="mt-4 w-full accent-[#0d9488]" />
                      <div className="flex justify-between text-xs text-[#607b7a]">
                        <span>1 year</span>
                        <span>8 years</span>
                        <span>30 years</span>
                      </div>
                    </label>
                    <UploadBox label="NSDC or other certificates" />
                  </>
                }
                {
                  step === 3 && <>
                    <Field label="UPI ID or bank account" placeholder="sunitak@upi" />
                    <div className="space-y-3 rounded-2xl bg-[#e4f1ec] p-5">
                      <div className="text-sm font-black">Welfare cover</div>
                      {
                        ["PMSBY accident cover · ₹20/year", "PMJJBY life cover · ₹436/year"].map(x => <label
                          key={x}
                          className="flex items-center gap-3 text-sm font-semibold"
                        >
                          <input
                            type="checkbox"
                            defaultChecked 
                            className="h-4 w-4 accent-[#0d9488]"
                          />
                          {x}
                        </label>)
                      }
                      <p className="pt-2 text-xs leading-relaxed text-[#607b7a]">Your cooperative makes these enrolments simple and visible. You can opt out anytime.</p>
                    </div>
                  </>
                }
              </div>
              <aside className="hidden rounded-2xl bg-[#123c43] p-5 text-sm text-[#d9f1eb] lg:block">
                <UserRound className="text-[#edb08d]" />
                <div className="mt-5 font-black text-white">A little at a time</div>
                <p className="mt-2 leading-relaxed">Save your progress and return whenever you're ready.</p>
                <div className="mt-8 border-t border-white/15 pt-4 text-xs leading-relaxed">Need help? Ask your cooperative coordinator.</div>
              </aside>
            </div>
          }
          <div className="mt-10 flex justify-between border-t border-[#123c43]/10 pt-5">
            <ActionButton
              variant="quiet"
              disabled={step === 0}
              onClick={() => setStep(Math.max(0, step - 1))}
            >
              <ArrowLeft size={16} /> Back
            </ActionButton>
            <ActionButton onClick={next}>{step === 3 ? "Submit application" : "Save & continue"} <ArrowRight size={16} /></ActionButton>
          </div>
        </div>
      </div>
      <Toast message={message} onClose={close} />
    </div>
  );
}
function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block text-sm font-bold">
      {label}
      <input className="saha-input mt-2" placeholder={placeholder} />
    </label>
  );
}
function UploadBox({ label }: { label: string }) {
  return (
    <button
      aria-label={`Upload ${label}`}
      className="flex min-h-24 w-full items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-[#0d9488]/30 bg-[#d9f1eb]/35 p-5 text-sm font-bold text-[#075e61]"
    >
      <Upload size={19} /> Upload {label}
    </button>
  );
}
