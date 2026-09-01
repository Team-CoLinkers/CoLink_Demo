import { ArrowRight, Compass } from "lucide-react";
import "./_group.css";
import { ActionButton, Logo } from "./_shared/Saha";

export function NotFound() {
  return (
    <div className="saha-root saha-noise flex min-h-[100dvh] flex-col items-center justify-center bg-[#e4f1ec] px-6 text-center"><Logo />
      <div className="mt-10 grid h-16 w-16 place-items-center rounded-2xl bg-[#123c43] text-[#edb08d]">
        <Compass size={30} />
      </div>
      <div className="mt-6 text-xs font-black uppercase tracking-[.2em] text-[#ed7d3a]">
        Error 404
      </div>
      <h1 className="saha-display mt-3 text-5xl font-bold text-[#123c43]">
        This path isn&apos;t on the map.
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-[#607b7a]">
        The page you were looking for has moved or never existed. Let&apos;s get
        you back to your neighbourhood network.
      </p>
      <ActionButton
        className="mt-8"
        variant="orange"
        onClick={() => (window.location.hash = "/")}
      >
        Back to home <ArrowRight size={16} />
      </ActionButton></div>
  );
}
