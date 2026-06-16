import Image from "next/image";
import abid from "../../../public/Abid Nirob.jpg";
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

      <div className="relative z-10 mx-auto mt-10 w-full max-w-6xl">
        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-medium leading-none tracking-normal text-white/80 drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)]">
          Ahnaf Abid Nirob
        </h1>
        <p className="mt-5 text-[clamp(1rem,2vw,1.65rem)] font-normal leading-tight tracking-normal text-white/50">
          Full Stack Developer | Programmer | Problem Solver
        </p>
      </div>

      {/* Scroll indicator at bottom */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 transition hover:text-white/60"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={2} />
      </a>
    </section>
  );
};

export default Banner;
