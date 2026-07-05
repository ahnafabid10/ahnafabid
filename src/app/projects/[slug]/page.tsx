'use client';

import { useParams } from "next/navigation";
import Project from "@/components/Projects/Project";

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug as string;

  if (!slug) {
    return (
      <section className="section-bg min-h-screen px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-white/50">Loading...</p>
        </div>
      </section>
    );
  }

  return <Project slug={slug} />;
}
