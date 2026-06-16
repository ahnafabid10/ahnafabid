import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiSwagger,
  SiPrisma,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiFigma,
} from "react-icons/si";

interface Tech {
  name: string;
  icon: React.ElementType;
  color: string;
}

const frontend: Tech[] = [
  { name: "HTML5",       icon: SiHtml5,       color: "#E34F26" },
  { name: "CSS3",        icon: SiCss,         color: "#1572B6" },
  { name: "JavaScript",  icon: SiJavascript,  color: "#F7DF1E" },
  { name: "TypeScript",  icon: SiTypescript,  color: "#3178C6" },
  { name: "React.js",    icon: SiReact,       color: "#61DAFB" },
  { name: "React Router",icon: SiReactrouter, color: "#CA4245" },
  { name: "Next.js",     icon: SiNextdotjs,   color: "#ffffff" },
  { name: "Tailwind CSS",icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Redux",       icon: SiRedux,       color: "#764ABC" },
  { name: "Figma",       icon: SiFigma,       color: "#F24E1E" },
];

const backend: Tech[] = [
  { name: "Node.js",    icon: SiNodedotjs,     color: "#339933" },
  { name: "Express.js", icon: SiExpress,       color: "#ffffff" },
  { name: "MongoDB",    icon: SiMongodb,       color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql,    color: "#4169E1" },
  { name: "Prisma",     icon: SiPrisma,        color: "#2D3748" },
  { name: "Firebase",   icon: SiFirebase,      color: "#FFCA28" },
  { name: "JWT",        icon: SiJsonwebtokens, color: "#d63aff" },
  { name: "Swagger",    icon: SiSwagger,       color: "#85EA2D" },
  { name: "Git",        icon: SiGit,           color: "#F05032" },
  { name: "GitHub",     icon: SiGithub,        color: "#ffffff" },
  { name: "Vercel",     icon: SiVercel,        color: "#ffffff" },
  { name: "Netlify",    icon: SiNetlify,       color: "#00C7B7" },
];

interface TechGridProps {
  items: Tech[];
}

const TechGrid = ({ items }: TechGridProps) => (
  <div className="flex flex-wrap gap-3">
    {items.map(({ name, icon: Icon, color }) => (
      <div
        key={name}
        className="flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/4 px-4 py-3 transition hover:border-white/20"
      >
        <Icon className="h-4 w-4 shrink-0" style={{ color }} />
        <span className="text-xs font-medium text-white/60">{name}</span>
      </div>
    ))}
  </div>
);

const TechStacks = () => {
  return (
    <section className="section-bg px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1350px]">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/50">
          Tech Stack
        </p>

        <div className="mt-12">
          <TechGrid items={[...frontend, ...backend]} />
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
