import Image from "next/image";
import abid from "../../../public/Abid Nirob.jpg"
import { ArrowDown } from "lucide-react";

const Banner = () => {
  return (
    <section className="home-banner relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07090a] px-4 text-center text-white">
      <Image
        src={abid}
        alt="Ahnaf Abid Nirob"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[54%_center]"
      />

      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),rgba(0,0,0,0.54)_52%,rgba(0,0,0,0.82)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-[#050607] to-transparent" />

      <a
        href="#explore"
        className="absolute top-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.32em] text-white/70 shadow-[0_14px_45px_rgba(0,0,0,0.32)] backdrop-blur-sm transition hover:border-white/30 hover:text-white"
        aria-label="Scroll to explore"
      >
        <ArrowDown className="h-3.5 w-3.5 text-[#b1c2b4]" strokeWidth={2.5} />
        Scroll to explore
      </a>

      <div className="relative z-10 mx-auto mt-10 w-full max-w-6xl">
        <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-extrabold leading-none tracking-normal text-[#b1c2b4] drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)]">
          Ahnaf Abid Nirob
        </h1>
        <p className="mt-5 text-[clamp(1.1rem,2vw,1.65rem)] font-medium leading-tight tracking-normal text-white/50">
          Full Stack Developer | Programmer | Problem Solver
        </p>
      </div>
    </section>
  );
};

export default Banner;
