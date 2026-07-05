'use client';

import ProjectsCard from "./ProjectsCard";
import Link from "next/link";

import projectsData from "../../../public/projects.json";

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

const Projects = () => {
  const projects: Project[] = projectsData;

  return (
    <section className="section-bg px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-337.5">
        <h2 className="mt-4 text-3xl font-bold text-white/90 sm:text-4xl">
          All Projects
        </h2>
        <p className="mt-3 text-base leading-7 text-white/45">
          A collection of my recent work. Click on any project to see the full
          details including the problem, solution, tech stack, and impact.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/70 transition hover:border-white/30 hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
