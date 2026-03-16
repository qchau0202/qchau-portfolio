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
    <section className="min-h-screen flex flex-col justify-end border-b border-foreground">
      <div className="container px-6 md:px-8 pb-16 md:pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-12 gap-x-4"
        >
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

          {/* Main headline */}
          <motion.h1
            variants={revealVariant}
            className="col-span-12 lg:col-span-10 text-balance font-black text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] leading-[0.9] tracking-[-0.05em]"
          >
            LY HUNG
            <br />
            QUOC CHAU.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={revealVariant}
            className="col-span-12 md:col-span-7 lg:col-span-5 mt-8 md:mt-12 text-lg md:text-xl leading-relaxed text-muted-foreground font-medium tracking-[-0.02em]"
          >
            Software Engineer student at the intersection of AI research
            and scalable full-stack architecture.
          </motion.p>

          {/* Meta info */}
          <motion.div
            variants={revealVariant}
            className="col-span-12 mt-16 md:mt-24 flex flex-wrap gap-8 md:gap-16 text-xs uppercase tracking-[0.15em] text-muted-foreground"
          >
            <div>
              <span className="block text-foreground font-semibold mb-1">Location</span>
              HCM City, Vietnam
            </div>
            <div>
              <span className="block text-foreground font-semibold mb-1">Focus</span>
              Full-Stack & MERN
            </div>
            <div>
              <span className="block text-foreground font-semibold mb-1">Education</span>
              SE Undergraduate
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
