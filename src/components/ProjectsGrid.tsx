import { motion } from "framer-motion";

interface ProjectCard {
  title: string;
  description: string;
  tags: string[];
  colSpan: string;
  rowSpan: string;
  featured?: boolean;
  link: string;
}

const projects: ProjectCard[] = [
  {
    title: "Project One",
    description:
      "Placeholder description for your featured project. Replace with your actual project details.",
    tags: ["React", "Node.js", "MongoDB"],
    colSpan: "md:col-span-8",
    rowSpan: "md:row-span-2",
    featured: true,
    link: "https://github.com/qchau0202",
  },
  {
    title: "Project Two",
    description:
      "Placeholder description. Replace with your actual project details.",
    tags: ["Next.js", "Supabase"],
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-1",
    link: "https://github.com/qchau0202",
  },
  {
    title: "Project Three",
    description:
      "Placeholder description. Replace with your actual project details.",
    tags: ["Python", "FastAPI"],
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-1",
    link: "https://github.com/qchau0202",
  },
  {
    title: "Project Four",
    description:
      "Placeholder description. Replace with your actual project details.",
    tags: ["Java", "Spring Boot", "MySQL"],
    colSpan: "md:col-span-6",
    rowSpan: "md:row-span-1",
    link: "https://github.com/qchau0202",
  },
  {
    title: "Project Five",
    description:
      "Placeholder description. Replace with your actual project details.",
    tags: ["MERN", "Docker"],
    colSpan: "md:col-span-6",
    rowSpan: "md:row-span-1",
    link: "https://github.com/qchau0202",
  },
];

const cardVariant = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const ProjectsGrid = () => {
  return (
    <section className="border-b border-foreground">
      <div className="container px-6 md:px-8 py-16 md:py-24">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold">
            Selected Work
          </h2>
          <span className="text-xs text-muted-foreground tracking-[0.15em] uppercase">
            {projects.length} Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 border-t border-l border-foreground">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`${project.colSpan} ${project.rowSpan} col-span-1 border-r border-b border-foreground p-6 md:p-8 flex flex-col justify-between gap-8 bg-background hover:bg-foreground hover:text-primary-foreground transition-colors duration-200 group cursor-pointer`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-muted-foreground group-hover:text-primary-foreground/60 tracking-[0.15em] uppercase tabular-nums">
                    0{index + 1}
                  </span>
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground/60 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                <h3 className={`font-bold tracking-[-0.02em] mb-3 ${project.featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                  {project.title}
                </h3>
                <p className={`text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed ${project.featured ? "text-base max-w-[50ch]" : "text-sm max-w-[45ch]"}`}>
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.15em] border border-foreground/20 group-hover:border-primary-foreground/30 px-2 py-1 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
