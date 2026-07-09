import Image from "next/image";
import ahnaf from "../../../public/Ahnaf Abid.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="section-bg px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-337.5 flex-col-reverse items-center gap-12 lg:flex-row ">
        <div className="flex-1">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/50">
            About Me
          </p>

          <div className="mt-7 space-y-5 text-base leading-8 text-white/50 sm:text-lg w-full">
            <p>
              I&apos;m <span className="font-semibold text-white/80">
                Ahnaf Abid Nirob
              </span>, a Full Stack Developer focused on building
              modern web applications that balance performance, scalability,
              and user experience. Over the years, I&apos;ve worked across both
              frontend and backend technologies, turning ideas into
              production-ready solutions.
            </p>
            <p>
              Outside of work, I enjoy building side
              projects, exploring new technologies, and deepening my
              understanding of software engineering.
            </p>
            <p>
              I believe that clean code is more than readability, it&apos;s
              about creating systems that stand the test of time. For me, great
              software emerges when thoughtful design meets solid engineering.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm flex-1 lg:max-w-md">
          <div className="glass card-shadow relative aspect-5/6 overflow-hidden rounded-lg">
            <Image
              src={ahnaf}
              alt="Ahnaf Abid"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              placeholder="blur"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
