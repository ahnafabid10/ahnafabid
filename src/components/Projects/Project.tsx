import Image from "next/image";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

interface TechStackItem {
  name: string;
  purpose: string;
}

interface ProjectLinks {
  live: string;
  github: string;
  caseStudy: string;
}

interface Project {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  topStacks: string[];
  hook: string;
  screenshots: string[];
  solution: string;
  techStack: TechStackItem[];
  challenge: string;
  impact: string;
  links: ProjectLinks;
}

interface ProjectProps {
  project: Project | null;
}

const Project = ({ project }: ProjectProps) => {
  if (!project) {
    return (
      <section className="section-bg min-h-screen px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-white/50">Project not found.</p>
          <Link
            href="/projects"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="section-bg min-h-screen px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-white/50">Project not found.</p>
          <Link
            href="/projects"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-bg min-h-screen px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-337.5">
        
        {/* Header */}
        <div className="mb-8 mt-10 md:mt-15">
          <h1 className="text-3xl font-bold text-white/90 sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-3 text-base leading-7 text-white/50">
            {project.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-xl border border-white/10">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Action Buttons */}
        <div className="mb-12 flex flex-wrap gap-4">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20"
          >
            <ArrowUpRight className="h-4 w-4" />
            Live Demo
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/70 transition hover:border-white/30 hover:text-white"
          >
            <FaGithub className="h-4 w-4" />
            View Code
          </a>
        </div>

        {/* Details Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Hook / Problem */}
          <div className="rounded-xl border border-white/8 bg-white/4 p-6">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white/40">
              01 — Hook / Problem
            </h2>
            <p className="text-sm leading-7 text-white/60">{project.hook}</p>
          </div>

          {/* Solution */}
          <div className="rounded-xl border border-white/8 bg-white/4 p-6">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white/40">
              02 — Solution
            </h2>
            <p className="text-sm leading-7 text-white/60">{project.solution}</p>
          </div>

          {/* Challenge */}
          <div className="rounded-xl border border-white/8 bg-white/4 p-6">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white/40">
              03 — Challenge
            </h2>
            <p className="text-sm leading-7 text-white/60">{project.challenge}</p>
          </div>

          {/* Impact */}
          <div className="rounded-xl border border-white/8 bg-white/4 p-6">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white/40">
              04 — Impact
            </h2>
            <p className="text-sm leading-7 text-white/60">{project.impact}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 rounded-xl border border-white/8 bg-white/4 p-6">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/40">
            05 — Tech Stack
          </h2>
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

        {/* Back Link */}
        <Link
          href="/projects"
          className="pt-5 md:pt-12 mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>
    </section>
  );
};

export default Project;
