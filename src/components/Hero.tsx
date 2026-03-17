import { motion } from "framer-motion";

const revealVariant = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-end border-b border-foreground pt-20">
      <div className="container px-6 md:px-8 pb-16 md:pb-24">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-12 gap-x-4">
          {/* Status indicator */}
          <motion.div
            variants={revealVariant}
            className="col-span-12 mb-8 flex items-center gap-2"
          >
            <span className="inline-block w-2 h-2 bg-accent" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main content: headline + subheadline + photo */}
          <motion.div
            variants={revealVariant}
            className="col-span-12 lg:col-span-12 flex flex-col-reverse md:flex-row gap-10 md:gap-14 items-start md:items-evenly"
          >
            {/* Left column: headline + subheadline */}
            <div className="w-full md:w-3/5 space-y-6">
              <h1 className="text-balance font-black text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] leading-[0.9] tracking-[-0.05em]">
                LY HUNG QUOC CHAU
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-medium tracking-[-0.02em]">
                Software Engineering student specializing in full-stack development with the MERN stack and scalable web
                architectures. Currently looking for internship opportunities.
              </p>
            </div>

            {/* Right column: photo */}
            <div className="w-full md:w-2/5 flex justify-center md:justify-center">
              <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 border border-foreground/30 rounded-full overflow-hidden">
                <img src="/qchau-avatar.jpeg" alt="Ly Hung Quoc Chau" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
          {/* Meta info */}
          <motion.div
            variants={revealVariant}
            className="col-span-12 mt-16 md:mt-24 flex flex-wrap gap-8 md:gap-16 text-xs uppercase tracking-[0.15em] text-muted-foreground"
          >
            <div>
              <span className="block text-foreground font-semibold mb-1">Location</span>
              District 8, Ho Chi Minh City, Vietnam
            </div>
            <div>
              <span className="block text-foreground font-semibold mb-1">Focus</span>
              Full-Stack & MERN
            </div>
            <div>
              <span className="block text-foreground font-semibold mb-1">Education</span>
              Ton Duc Thang University (2023 - Present)
            </div>
            <div>
              <span className="block text-foreground font-semibold mb-1">Degree</span>
              Software Engineering Undergraduate
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;