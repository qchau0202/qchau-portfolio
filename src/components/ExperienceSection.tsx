import { motion } from "framer-motion";

const revealVariant = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

interface TimelineItem {
  period: string;
  title: string;
  org: string;
  details: string[];
}

const experience: TimelineItem[] = [
  {
    period: "08/2023 — 08/2024",
    title: "English Demo Teacher",
    org: "Kyna English",
    details: [
      "Taught English to children and adults years old.",
      "Prepared lesson plans and materials for each class.",
      "Maintained a positive and engaging learning environment.",
    ],
  },
  {
    period: "08/2024 — 09/2024",
    title: "R&D Intern",
    org: "MindX Technology School",
    details: [
      "Conducted research on new topics, made reports to the team mentor.",
      "Contributed to Frontend development of MindX Community website.",
      "Delivered fully functional Lecturer view interface.",
    ],
  },
  {
    period: "08/2023 — Now",
    title: "English Tutor",
    org: "Self-employed",
    details: [
      "Taught Pre-IELTS, TOEIC, and Communication English to children and adults years old.",
      "Prepared lesson plans and materials for each class.",
      "Maintained a positive and engaging learning environment.",
    ],
  },
  {
    period: "07/2025 — Now",
    title: "Coding & Robotic Teaching Assistant",
    org: "MindX Technology School",
    details: [
      "Assisted teachers in teaching coding and robotics to students.",
      "Helped students with their coding and robotics projects.",
      "Provided feedback and guidance to students.",
    ],
  },
];

const awards = [
  { year: "2025", title: "Top 16, HSU Vibe Coding Challenge" },
  { year: "2025", title: "Top-scorers, TalentGetGo Coding Challenge 2" },
  { year: "2025", title: "Runners-Up, Innostart Startup Challenge" },
  { year: "2025", title: "4th, UTE Junior Startup Challenge" },
  { year: "2024–2025", title: "Faculty-level Student Scientific Research — led and recognized by faculty" },
  { year: "2024", title: "Runners-Up, Coding Challenge, IT-Zone Club Competition" },
  { year: "2024", title: "Frontend Developer Intern, MindX R&D Department (1 month)" },
  { year: "2023–2024", title: "4th — Consolation Prize, Vuon Uom Startup Competition" },
];

const certifications = [
  { title: "TOEIC 930/990", date: "02/2026" },
  { title: "JLPT N5", date: "01/2026" },
  { title: "IELTS 6.5", date: "03/2023 — 03/2025" },
  { title: "Vocational Basic-level Training Certificate", date: "2025" },
  { title: "Multiple Web Development Certificates — MindX", date: "2020 — 2025" },
];

const languages = [
  { lang: "Vietnamese", level: "Native" },
  { lang: "English", level: "C1" },
  { lang: "Japanese", level: "A1" },
  { lang: "Chinese", level: "Beginner" },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="border-b border-foreground scroll-mt-32">
      <div className="container px-6 md:px-8 py-16 md:py-24">
        {/* Work Experience */}
        <div className="mb-20">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold mb-12">
            Experience
          </h2>
          {experience.map((item) => (
            <motion.div
              key={item.title}
              variants={revealVariant}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-12 gap-4 border-t border-foreground py-8"
            >
              <div className="md:col-span-3">
                <span className="text-xs text-muted-foreground uppercase tracking-[0.15em]">
                  {item.period}
                </span>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-xl md:text-2xl font-bold tracking-[-0.02em] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-[0.1em] mb-4">
                  {item.org}
                </p>
                <ul className="space-y-2">
                  {item.details.map((d, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-foreground mt-0.5">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards & Activities */}
        <section id="awards" className="mb-20 scroll-mt-32">
          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold mb-12">
            Awards & Activities
          </h2>
          <div className="border-t border-foreground">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                variants={revealVariant}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-12 gap-4 py-4 border-b border-foreground/10"
              >
                <span className="col-span-3 md:col-span-2 text-xs text-muted-foreground uppercase tracking-[0.15em] tabular-nums">
                  {award.year}
                </span>
                <span className="col-span-9 md:col-span-10 text-sm font-medium">
                  {award.title}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="grid grid-cols-1 md:grid-cols-2 gap-16 scroll-mt-32">
          <div className="md:col-span-1">
            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold mb-12">
              Certifications
            </h2>
            <div className="border-t border-foreground">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={revealVariant}
                  initial="hidden"
                  animate="visible"
                  className="flex justify-between py-4 border-b border-foreground/10"
                >
                  <span className="text-sm font-medium">{cert.title}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-[0.15em] tabular-nums">
                    {cert.date}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="md:col-span-1">
            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold mb-12">
              Languages
            </h2>
            <div className="border-t border-foreground">
              {languages.map((lang, i) => (
                <motion.div
                  key={i}
                  variants={revealVariant}
                  initial="hidden"
                  animate="visible"
                  className="flex justify-between py-4 border-b border-foreground/10"
                >
                  <span className="text-sm font-medium">{lang.lang}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-[0.15em]">
                    {lang.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ExperienceSection;
