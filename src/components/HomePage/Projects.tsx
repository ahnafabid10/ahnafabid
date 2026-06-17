import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import careerpilot from "../../../public/projects/careerpilot.jpg";
import lifeLesson from "../../../public/projects/life-lessons.png";
import travelease from "../../../public/projects/travelease.png";
import greennest from "../../../public/projects/greennest.png";
import hero from "../../../public/projects/hero.png";

interface Project {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  liveLink: string;
  githubLink: string;
  topStacks: string[];
}

const projects: Project[] = [
  {
    id: 1,
    name: "CareerPilot",
    description:
      "An AI-powered career roadmap generator that provides personalized, step-by-step learning paths based on a user's career goals and experience level.",
    image: careerpilot,
    liveLink: "https://eg-careerpilot-asyncawait.vercel.app",
    githubLink: "https://github.com/alvy00/eg-careerpilot-asyncawait",
    topStacks: ["Next.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "TypeScript", "JWT", "Ten Stack Query"],
  },
  {
    id: 2,
    name: "Digital Life Lessons",
    description:
      "A platform for creating, storing, and sharing meaningful life lessons and personal growth insights, featuring public/private visibility and a premium subscription model.",
    image: lifeLesson,
    liveLink: "https://digital-life-lesson11.netlify.app/",
    githubLink: "https://github.com/ahnafabid10/digital-life-lessons-client-side",
    topStacks: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Stripe", "Swagger", "React Query"],
  },
  {
    id: 3,
    name: "TravelEase",
    description:
      "A full-stack vehicle rental and trip management platform where users can list, book, and manage vehicles with a modern, responsive interface.",
    image: travelease,
    liveLink: "https://traveleaseb12a10.netlify.app/",
    githubLink: "https://github.com/ahnafabid10/TravelEase-client-side",
    topStacks: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS", "React Router", "Axios"],
  },
  {
    id: 4,
    name: "GreenNest",
    description:
      "A single-page web application built for plant lovers who want to nurture and decorate their homes with beautiful indoor plants.",
    image: greennest,
    liveLink: "https://greennesta9.netlify.app/",
    githubLink: "https://github.com/ahnafabid10/GreenNest",
    topStacks: ["React.js", "React Router", "Firebase", "Tailwind CSS", "DaisyUI", "Framer Motion", "Swiper.js", "React Hot Toast"],
  },
  {
    id: 5,
    name: "Hero IO",
    description:
      "A production-ready, responsive web application that simulates a real-world app store experience. Users can browse applications, view detailed analytics, and manage their installations.",
    image: hero,
    liveLink: "https://hero-apps12a8.netlify.app/",
    githubLink: "https://github.com/ahnafabid10/hero-apps",
    topStacks: ["React 19", "React Router", "Tailwind CSS", "DaisyUI", "Recharts", "Axios", "React Toastify", "Vite"],
  },
];

const Projects = () => {
  return (
    <section className="section-bg px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1350px]">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/50">
          Projects
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/8 bg-white/4 backdrop-blur-sm transition hover:border-white/15"
            >
              {/* Image with icons on top-right */}
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* Top-right icon links */}
                <div className="absolute right-3 top-3 flex gap-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/70 backdrop-blur-sm transition hover:border-white/40 hover:text-white"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/70 backdrop-blur-sm transition hover:border-white/40 hover:text-white"
                    aria-label="Live site"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-white/85">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-white/45">
                  {project.description}
                </p>

                {/* Tech tags — all 8 */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.topStacks.map((stack) => (
                    <span
                      key={stack}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/55"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
