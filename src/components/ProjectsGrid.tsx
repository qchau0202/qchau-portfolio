import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ProjectCard {
  title: string;
  major: string;
  description: string;
  tags: string[];
  colSpan: string;
  rowSpan: string;
  featured?: boolean;
  repo: string;
  live?: string;
  images: string[];
}

const projects: ProjectCard[] = [
  {
    title: "KneeXpert – Artificial Intelligence System for Knee Joint Analysis and Diagnosis",
    major: "AI / Full-Stack",
    description:
      "Develop and make use of AI models capable of accurately classifying knee images, propose model improvements beyond existing research. Utilize Transfer Learning from strong models. Apply Data Augmentation to enhance dataset diversity. Experiment with Ensemble Learning (combining multiple models). Implement Explainable AI for model transparency, enhancing physician trust. Support doctors in faster and more accurate knee disease diagnosis. Reduce subjective diagnostic errors",
    tags: ["ReactJS", "FastAPI", "MongoDB"],
    colSpan: "md:col-span-8",
    rowSpan: "md:row-span-2",
    featured: true,
    repo: "https://github.com/qchau0202/knee-xpert-client",
    live: "https://github.com/qchau0202/knee-xpert-client",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Navflow",
    major: "AI / Web App",
    description:
      "A deep learning-based web application for real-time traffic prediction and route optimization. By using the YOLOv8 architecture for object detection, the system processes static image data from the city's District 3 camera network to identify and classify Cars and Motorbikes. The model was trained on a specialized dataset, consisting of 770 annotated images across key transit points like Dien Bien Phu and Nguyen Thi Minh Khai, providing a localized and data-driven solution to enhance urban mobility and reduce environmental impact.",
    tags: ["ReactJS", "FastAPI", "MongoDB"],
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-1",
    repo: "https://github.com/qchau0202/navflow-fe",
    live: "https://nav-flow-fe.vercel.app/",
    images: [
      "/navflow/navflow-landing.png",
      "/navflow/navflow-dashboard.png",
      "/navflow/navflow-map.png",
    ],
  },
  {
    title: "Budtrack",
    major: "Mobile App",
    description:
      "Budtrack is a mobile application designed to help users track their daily expenses and manage their budget effectively. The app allows users to easily add, edit, and delete their expenses, as well as view their spending history and create custom categories for better organization.",
    tags: ["Android", "Java", "Firebase"],
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-1",
    repo: "https://github.com/qchau0202/budtrack",
    live: "https://github.com/qchau0202/budtrack",
    images: ["/budtrack/budtrack-screens.png"],
  },
  {
    title: "Deezii - AI-Powered Visuals for Small Business (prototyping)",
    major: "AI / Web App",
    description:
      "Deezii is a go-to solution for small to medium businesses looking to create stunning, professional images in seconds, no design expertise required.",
    tags: ["ReactJS", "FastAPI", "MongoDB"],
    colSpan: "md:col-span-6",
    rowSpan: "md:row-span-1",
    repo: "https://github.com/qchau0202/deezii-fe",
    live: "https://deezii-fe.vercel.app/",
    images: ["/deezii/deezii-landing.jpg", "/deezii/deezii-chat.jpg"],
  },
  {
    title: "Notelit - Note Management Website",
    major: "Web App",
    description:
      "A simple note management website with some additional features like labels categorization, notes auto-save, notes locking, notes collaborations, e.g.",
    tags: ["Laravel", "PHP", "ReactJS"],
    colSpan: "md:col-span-6",
    rowSpan: "md:row-span-1",
    repo: "https://github.com/qchau0202/notelit",
    live: "https://web-final-project-bice.vercel.app/",
    images: ["/notelit/home_default.png", "/notelit/home_darkmode.png"],
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
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewProjectTitle, setPreviewProjectTitle] = useState<string>("");
  const [previewIndex, setPreviewIndex] = useState(0);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<string, boolean>>({});

  const previewImages = useMemo(() => {
    const p = projects.find((x) => x.title === previewProjectTitle);
    return p?.images ?? [];
  }, [previewProjectTitle]);

  const openPreview = (projectTitle: string, index: number) => {
    setPreviewProjectTitle(projectTitle);
    setPreviewIndex(index);
    setPreviewOpen(true);
  };

  const goPrev = () => {
    if (previewImages.length === 0) return;
    setPreviewIndex((i) => (i - 1 + previewImages.length) % previewImages.length);
  };

  const goNext = () => {
    if (previewImages.length === 0) return;
    setPreviewIndex((i) => (i + 1) % previewImages.length);
  };

  const isLongDescription = (description: string) => description.trim().length > 220;

  return (
    <section className="border-b border-foreground">
      <div className="container px-6 md:px-8 py-16 md:py-24">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold">
            Highlighted Projects
          </h2>
          <span className="text-xs text-muted-foreground tracking-[0.15em] uppercase">
            {projects.length} Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 border-t border-l border-foreground">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`${project.colSpan} ${project.rowSpan} col-span-1 border-r border-b border-foreground p-6 md:p-8 flex flex-col justify-between gap-8 bg-background hover:bg-foreground hover:text-primary-foreground transition-colors duration-200 group`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground group-hover:text-primary-foreground/60 tracking-[0.15em] uppercase tabular-nums">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.15em] border border-foreground/20 group-hover:border-primary-foreground/30 px-2 py-1 font-semibold text-muted-foreground group-hover:text-primary-foreground/70">
                      {project.major}
                    </span>
                  </div>
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
                {(() => {
                  const expanded = !!expandedDescriptions[project.title];
                  const long = isLongDescription(project.description);
                  return (
                    <div className={`text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed ${project.featured ? "text-base max-w-[70ch]" : "text-sm max-w-[45ch]"}`}>
                      <div className={`relative ${!expanded && long ? "max-h-24 overflow-hidden" : ""}`}>
                        <p>{project.description}</p>
                        {!expanded && long && (
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background group-hover:from-foreground to-transparent" />
                        )}
                      </div>
                      {long && (
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedDescriptions((prev) => ({
                              ...prev,
                              [project.title]: !expanded,
                            }))
                          }
                          className="mt-2 text-[10px] uppercase tracking-[0.15em] font-semibold underline underline-offset-4 opacity-80 hover:opacity-100"
                        >
                          {expanded ? "See less" : "See more"}
                        </button>
                      )}
                    </div>
                  );
                })()}

                {/* Image gallery */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {project.images.slice(0, 5).map((src, i) => (
                    <button
                      type="button"
                      key={`${project.title}-img-${i}`}
                      onClick={() => openPreview(project.title, i)}
                      className="overflow-hidden border border-foreground/15 group-hover:border-primary-foreground/25 bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                      aria-label={`Preview ${project.title} screenshot ${i + 1}`}
                    >
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
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

                <div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground group-hover:text-primary-foreground/60 font-semibold mb-2">
                    Links
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 border border-foreground text-[10px] uppercase tracking-[0.15em] font-semibold hover:bg-background hover:text-foreground group-hover:border-primary-foreground/30 transition-colors"
                      >
                        Live
                      </a>
                    )}
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 border border-foreground bg-foreground text-background text-[10px] uppercase tracking-[0.15em] font-semibold hover:bg-background hover:text-foreground group-hover:border-primary-foreground/30 transition-colors"
                    >
                      Repo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog
        open={previewOpen}
        onOpenChange={(open) => {
          setPreviewOpen(open);
          if (!open) {
            setPreviewProjectTitle("");
            setPreviewIndex(0);
          }
        }}
      >
        <DialogContent className="max-w-5xl p-0 overflow-hidden [&>button.absolute]:hidden">
          <div className="bg-background">
            <div className="px-4 py-3 border-b border-foreground/10 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-[0.2em] font-semibold truncate">
                  {previewProjectTitle || "Preview"}
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {previewImages.length > 0 ? `${previewIndex + 1} / ${previewImages.length}` : ""}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={previewImages.length <= 1}
                  className="px-3 py-2 border border-foreground text-[10px] uppercase tracking-[0.15em] font-semibold disabled:opacity-40 hover:bg-foreground hover:text-background transition-colors"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={previewImages.length <= 1}
                  className="px-3 py-2 border border-foreground bg-foreground text-background text-[10px] uppercase tracking-[0.15em] font-semibold disabled:opacity-40 hover:bg-background hover:text-foreground transition-colors"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="w-full bg-black/95 flex items-center justify-center">
              {previewImages[previewIndex] ? (
                <img
                  src={previewImages[previewIndex]}
                  alt={`${previewProjectTitle} screenshot ${previewIndex + 1}`}
                  className="max-h-[80vh] w-auto max-w-full object-contain"
                />
              ) : (
                <div className="h-[50vh] w-full flex items-center justify-center text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  No images
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsGrid;
