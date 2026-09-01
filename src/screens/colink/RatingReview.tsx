import { ArrowRight, Check, FileText, Home, MessageCircleHeart, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";
import "./_group.css";
import { ActionButton, Toast, TrustBadge, WorkerAvatar, useToast } from "./_shared/Saha";

export function RatingReview() {
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState<string[]>(["On time"]);
  const [again, setAgain] = useState(true);
  const [tip, setTip] = useState("₹50");
  const [done, setDone] = useState(false);
  const { message, show, close } = useToast();
  const choices = ["On time", "Professional", "Skilled", "Friendly", "Clean work"];
  return (
    <div className="saha-root min-h-[100dvh] bg-[#e4f1ec] p-4 sm:p-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-5 flex items-center justify-between">
          <div className="text-xs font-black uppercase tracking-[.18em] text-[#ed7d3a]">Service completed · #0042</div>
          <span className="text-xs font-bold text-[#607b7a]">Your feedback matters</span>
        </div>
        {
          done ? <div className="saha-card saha-reveal p-8 text-center sm:p-12">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#0d9488] text-white">
              <Check size={30} />
            </div>
            <h1 className="saha-display mt-5 text-4xl font-bold">Thank you, Priya.</h1>
            <p className="mt-3 text-sm leading-relaxed text-[#607b7a]">Your review helps Raju grow — and helps the next neighbour choose with confidence.</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d9f1eb] px-4 py-2 text-sm font-black text-[#075e61]">
              <Star fill="currentColor" size={15} /> {rating}
              .0 shared with the cooperative
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <ActionButton
                variant="orange"
                onClick={() => (window.location.hash = "/invoice")}
              >
                <FileText size={16} /> View invoice
              </ActionButton>
              <ActionButton
                variant="outline"
                onClick={() => (window.location.hash = "/")}
              >
                <Home size={16} /> Back to home
              </ActionButton>
            </div>
          </div> : <div className="saha-card overflow-hidden">
            <div className="bg-[#123c43] p-7 text-[#fffdf8] sm:p-9">
              <div className="flex items-center gap-4">
                <WorkerAvatar initials="RM" />
                <div>
                  <h1 className="text-2xl font-black">How was Raju's service?</h1>
                  <div className="mt-1 text-sm text-[#b8d1cd]">AC servicing · 26 August 2025</div>
                </div>
              </div>
              <div className="mt-5"><TrustBadge /></div>
            </div>
            <div className="space-y-7 p-6 sm:p-9">
              <div className="text-center">
                <div className="text-sm font-bold">Rate your experience</div>
                <div className="mt-4 flex justify-center gap-2">
                  {
                    [1, 2, 3, 4, 5].map(x => <button
                      key={x}
                      aria-label={`Give ${x} stars`}
                      onClick={() => setRating(x)}
                      className={`transition-transform hover:scale-110 ${x <= rating ? "text-[#ed7d3a]" : "text-[#cbdad5]"}`}
                    >
                      <Star size={34} fill="currentColor" />
                    </button>)
                  }
                </div>
                <div className="mt-2 text-xs text-[#607b7a]">
                  {rating ? ["", "Needs improvement", "Getting there", "Good service", "Great service", "Made my day"][rating] : "Tap a star to rate"}
                </div>
              </div>
              <div>
                <div className="mb-3 text-sm font-black">What stood out?</div>
                <div className="flex flex-wrap gap-2">
                  {
                    choices.map(x => <button
                      key={x}
                      onClick={() => setTags(tags.includes(x) ? tags.filter(t => t !== x) : [...tags, x])}
                      className={`rounded-full border px-3 py-2 text-xs font-bold ${tags.includes(x) ? "border-[#0d9488] bg-[#d9f1eb] text-[#075e61]" : "border-[#123c43]/15 text-[#607b7a]"}`}
                    >
                      {
                        tags.includes(x) && <Check className="mr-1 inline" size={12} />
                      }
                      {x}
                    </button>)
                  }
                </div>
              </div>
              <textarea
                className="saha-input min-h-24 resize-none"
                placeholder="Add a note for Raju (optional)"
              />
              <div>
                <div className="mb-3 text-sm font-black">Would you book again?</div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setAgain(true)}
                    className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-black ${again ? "border-[#0d9488] bg-[#d9f1eb] text-[#075e61]" : "border-[#123c43]/15"}`}
                  >
                    <ThumbsUp size={17} /> Yes
                  </button>
                  <button
                    onClick={() => setAgain(false)}
                    className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-black ${!again ? "border-[#ed7d3a] bg-[#fff0e5] text-[#c45e25]" : "border-[#123c43]/15"}`}
                  >
                    <ThumbsDown size={17} /> Not this time
                  </button>
                </div>
              </div>
              <div className="rounded-2xl bg-[#e4f1ec] p-4">
                <div className="flex items-center gap-2 text-sm font-black"><MessageCircleHeart size={18} className="text-[#0d9488]" /> Add a tip for Raju?</div>
                <div className="mt-3 flex gap-2">
                  {
                    ["No tip", "₹50", "₹100", "Custom"].map(x => <button
                      key={x}
                      onClick={() => setTip(x)}
                      className={`rounded-lg px-3 py-2 text-xs font-bold ${tip === x ? "bg-[#075e61] text-white" : "bg-[#fffdf8] text-[#607b7a]"}`}
                    >
                      {x}
                    </button>)
                  }
                </div>
              </div>
              <ActionButton
                disabled={!rating}
                className="w-full"
                onClick={() => { setDone(true); show("Review submitted"); }}
              >
                Submit review {tip !== "No tip" && `· tip ${tip}`} <ArrowRight size={16} />
              </ActionButton>
            </div>
          </div>
        }
        <Toast message={message} onClose={close} />
      </div>
    </div>
  );
}
