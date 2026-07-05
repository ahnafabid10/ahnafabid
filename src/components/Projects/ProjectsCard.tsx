'use client';

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

interface Project {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  topStacks: string[];
}

interface ProjectsCardProps {
  project: Project;
}

const ProjectsCard = ({ project }: ProjectsCardProps) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
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
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/70 backdrop-blur-sm transition hover:border-white/40 hover:text-white"
            aria-label="Live site"
            onClick={(e) => e.stopPropagation()}
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

        {/* Tech tags */}
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
    </Link>
  );
};

export default ProjectsCard;
