import type { Metadata } from "next";
import AboutMe from "@/components/HomePage/AboutMe";
import Banner from "@/components/HomePage/Banner";
import Projects from "@/components/HomePage/ProjectsSectionHome";
import TechStacks from "@/components/HomePage/TechStacks";
import SmoothScroll from "@/components/Shared/LenisSmoothScroll/SmoothScroll";
import { Navbar } from "@/components/Shared/NavBar/NavBar";

export const metadata: Metadata = {
  title: "Ahnaf Abid Nirob — Full Stack Developer",
  description:
    "Hi, I'm Ahnaf Abid Nirob — a Full Stack Developer building fast, accessible, and scalable web apps with React, Next.js, Node.js, and TypeScript.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <SmoothScroll>
      <Banner/>
      <AboutMe/>
      <TechStacks/>
      <Projects/>
    </SmoothScroll>
  );
}
