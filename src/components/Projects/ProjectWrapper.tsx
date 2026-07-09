"use client"
import { useParams } from "next/navigation";
import Project from "./Project";
import SmoothScroll from "@/components/Shared/LenisSmoothScroll/SmoothScroll";

interface ProjectWrapperProps {
  project: {
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
    techStack: { name: string; purpose: string }[];
    challenge: string;
    impact: string;
    links: { live: string; github: string; caseStudy: string };
  } | null;
}

export default function ProjectWrapper({ project }: ProjectWrapperProps) {
  const params = useParams();
  const slug = params?.slug as string;

  if (!slug) {
    return (
      <SmoothScroll>
        <section className="section-bg min-h-screen px-4 py-12 text-white sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <p className="text-white/50">Loading...</p>
          </div>
        </section>
      </SmoothScroll>
    );
  }

  return (
    <SmoothScroll>
      <Project project={project} />
    </SmoothScroll>
  );
}
