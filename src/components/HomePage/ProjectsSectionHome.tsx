import ProjectsCard from "@/components/Projects/ProjectsCard";
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

const MAX_HOME_PROJECTS = 9;

const ProjectsSectionHome = () => {
  const projects: Project[] = projectsData.slice(0, MAX_HOME_PROJECTS);

  return (
    <section className="section-bg px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-337.5">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/50">
          Projects
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSectionHome;
