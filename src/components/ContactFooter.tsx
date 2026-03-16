import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const ContactFooter = () => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const springConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance < 150) {
      x.set(distX * 0.3);
      y.set(distY * 0.3);
      setIsHovering(true);
    } else {
      x.set(0);
      y.set(0);
      setIsHovering(false);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  };

  const handleClick = () => {
    navigator.clipboard.writeText("hello@engineer.dev");
  };

  return (
    <>
      <footer
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="min-h-[70vh] flex flex-col items-center justify-center relative border-b border-foreground"
      >
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
            Let's build something
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-balance">
            GET IN TOUCH
          </h2>
        </div>

        <motion.div
          ref={buttonRef}
          style={{ x, y }}
          onClick={handleClick}
          className={`w-40 h-40 md:w-48 md:h-48 border border-foreground flex items-center justify-center cursor-pointer transition-colors duration-200 ${
            isHovering ? "bg-foreground text-primary-foreground" : "bg-background text-foreground"
          }`}
        >
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.15em] font-semibold block">
              Copy Email
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground mt-1 block"
              style={isHovering ? { color: "hsl(0 0% 70%)" } : {}}
            >
              ↗ Click
            </span>
          </div>
        </motion.div>

        {/* Footer bottom */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-foreground">
          <div className="container px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">
            <span>© 2026 Ly Hung Quoc Chau</span>
            <div className="flex gap-8">
              <a
                href="https://github.com/qchau0202"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/quốc-châu-jo-b71879269"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <button
                onClick={() => setResumeOpen(true)}
                className="hover:text-foreground transition-colors uppercase"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Resume Dialog */}
      <Dialog open={resumeOpen} onOpenChange={setResumeOpen}>
        <DialogContent className="max-w-3xl h-[80vh]">
          <DialogHeader>
            <DialogTitle className="text-sm uppercase tracking-[0.2em] font-semibold">
              Resume — Ly Hung Quoc Chau
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              PDF resume preview
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 flex items-center justify-center border border-foreground/10 h-full">
            {/* Replace the src below with your actual PDF URL */}
            <p className="text-sm text-muted-foreground uppercase tracking-[0.15em]">
              PDF placeholder — replace with your resume file
            </p>
            {/* When you have a PDF, replace the <p> above with:
            <iframe
              src="/your-resume.pdf"
              className="w-full h-full"
              title="Resume"
            /> */}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactFooter;
