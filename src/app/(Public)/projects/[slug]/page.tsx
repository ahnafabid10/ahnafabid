import type { Metadata } from "next";
import ProjectWrapper from "@/components/Projects/ProjectWrapper";
import projectsData from "../../../../../public/projects.json";

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
  techStack: { name: string; purpose: string }[];
  challenge: string;
  impact: string;
  links: {
    live: string;
    github: string;
    caseStudy: string;
  };
}

function getProject(slug: string): Project | null {
  const projects: Project[] = projectsData;
  return projects.find((p) => p.slug === slug) || null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found — Ahnaf Abid Nirob",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.name} — Ahnaf Abid Nirob`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "website",
      url: `/projects/${project.slug}`,
      siteName: "Ahnaf Abid Nirob",
      title: `${project.name} — Ahnaf Abid Nirob`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Ahnaf Abid Nirob`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  return <ProjectWrapper project={project} />;
}
