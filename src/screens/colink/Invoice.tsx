import { Check, Download, FileText, Handshake, Mail, Share2, ShieldCheck } from "lucide-react";
import { useState } from "react";
import "./_group.css";
import { ActionButton, BackButton, Logo, Toast, useToast } from "./_shared/Saha";

export function Invoice() {
  const { message, show, close } = useToast();
  const [paid, setPaid] = useState(true);
  return (
    <div className="saha-root min-h-[100dvh] bg-[#e4f1ec] p-4 sm:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-5 flex items-center justify-between">
          <BackButton onClick={() => (window.location.hash = "/")}>Back to CoLink</BackButton>
          <button
            onClick={() => show("Invoice emailed to priya@example.com")}
            className="rounded-lg p-2 text-[#075e61]"
            aria-label="Email invoice"
          >
            <Mail size={18} />
          </button>
        </div>
        <div className="saha-card overflow-hidden">
          <div className="flex flex-wrap items-start justify-between gap-5 bg-[#123c43] p-6 text-[#fffdf8] sm:p-10">
            <div>
              <Logo inverse  />
              <div className="mt-8 text-xs font-black uppercase tracking-[.2em] text-[#edb08d]">Tax invoice</div>
              <h1 className="saha-display mt-2 text-4xl font-bold">A transparent receipt.</h1>
            </div>
            <div className="text-right text-sm">
              <div className="text-[#b8d1cd]">Invoice number</div>
              <div className="saha-mono mt-1 font-bold">CLK-INV-2025-0042</div>
              <div className="mt-4 text-[#b8d1cd]">Issued 26 Aug 2025</div>
            </div>
          </div>
          <div className="p-6 sm:p-10">
            <div className="grid gap-6 border-b border-[#123c43]/10 pb-7 sm:grid-cols-2">
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-[#607b7a]">Billed to</div>
                <div className="mt-2 font-black">Priya Shah</div>
                <div className="text-sm text-[#607b7a]">
                  Flat 4B, Riverstone Society
                  <br />
                  Kothrud, Pune · 411038
                </div>
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-[#607b7a]">Service partner</div>
                <div className="mt-2 font-black">Raju M. · Electrician</div>
                <div className="mt-1 text-sm text-[#607b7a]">Pune District Labour Cooperative</div>
              </div>
            </div>
            <div className="grid gap-7 py-7 lg:grid-cols-[1fr_300px]">
              <div>
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#e8e5f4] text-[#655c9e]">
                    <FileText size={20} />
                  </div>
                  <div>
                    <div className="font-black">AC servicing</div>
                    <div className="text-sm text-[#607b7a]">Standard visit · 26 Aug 2025</div>
                  </div>
                </div>
                <div className="mt-7 rounded-2xl bg-[#d9f1eb] p-5">
                  <div className="flex items-center gap-2 text-sm font-black text-[#075e61]"><Handshake size={17} /> Your payment strengthens the cooperative</div>
                  <p className="mt-2 text-xs leading-relaxed text-[#607b7a]">95% of the service price goes directly to Raju. CoLink retains only a 5% platform fee.</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <Line label="Base price" value="₹500" />
                <Line label="Platform fee (5%)" value="₹25" />
                <Line label="GST (18%)" value="₹90" />
                <div className="flex justify-between border-t border-[#123c43]/12 pt-4 text-lg">
                  <b>Total</b>
                  <b>₹590</b>
                </div>
                <div className="flex justify-between rounded-xl bg-[#d9f1eb] p-3 text-[#075e61]">
                  <b>Worker receives</b>
                  <b>₹475</b>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#123c43]/10 pt-6">
              <div className="flex items-center gap-2 text-sm font-black text-[#0d9488]">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0d9488] text-white">
                  <Check size={15} />
                </span>
                {paid ? "Payment successful · UPI" : "Payment pending"}
              </div>
              <div className="flex gap-2">
                <ActionButton variant="quiet" onClick={() => show("Invoice PDF prepared")}><Download size={16} /> Download PDF</ActionButton>
                <ActionButton variant="outline" onClick={() => show("Share sheet opened")}><Share2 size={16} /> Share</ActionButton>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-[#607b7a]"><ShieldCheck size={15} className="text-[#0d9488]" /> Digital invoice · pricing verified by Pune Labour Cooperative</div>
          </div>
        </div>
      </div>
      <Toast message={message} onClose={close} />
    </div>
  );
}
function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-[#607b7a]">
      <span>{label}</span>
      <b className="text-[#123c43]">{value}</b>
    </div>
  );
}
