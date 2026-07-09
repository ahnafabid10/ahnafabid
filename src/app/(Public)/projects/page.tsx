import type { Metadata } from "next";
import Projects from "@/components/Projects/Projects";
import SmoothScroll from "@/components/Shared/LenisSmoothScroll/SmoothScroll";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a collection of full-stack web development projects built with React, Next.js, Node.js, MongoDB, and modern web technologies.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: "/projects",
    siteName: "Ahnaf Abid Nirob",
    title: "Projects — Ahnaf Abid Nirob",
    description:
      "Explore a collection of full-stack web development projects built with React, Next.js, Node.js, MongoDB, and modern web technologies.",
    images: [
      {
        url: "/Ahnaf Abid.jpg",
        width: 1200,
        height: 630,
        alt: "Ahnaf Abid Nirob Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Ahnaf Abid Nirob",
    description:
      "Explore a collection of full-stack web development projects built with modern technologies.",
    images: ["/Ahnaf Abid.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <SmoothScroll>
      <Projects />
    </SmoothScroll>
  );
}
