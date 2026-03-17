import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, FileText, Sun, Moon, Menu, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });
  const [resumeOpen, setResumeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const sectionIds = ["hero", "skills", "projects", "experience", "awards", "certifications", "contact"];
      let current = "hero";

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const offsetTop = el.offsetTop;
        if (scrollY >= offsetTop - 200) {
          current = id;
        }
      });

      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    const id = href.replace("#", "");
    setActiveSection(id);
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center gap-2 px-4">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center gap-1 px-2 py-1.5 rounded-full border border-foreground/20 transition-all duration-300 ${
            scrolled
              ? "bg-background/80 backdrop-blur-xl shadow-lg"
              : "bg-background/60 backdrop-blur-md"
          }`}
        >

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5 ml-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 text-xs uppercase tracking-[0.12em] font-medium rounded-full transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-foreground/15 mx-1" />

          {/* Icons */}
          <div className="flex items-center gap-0.5">
            <a
              href="https://github.com/qchau0202"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/quốc-châu-jo-b71879269"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <button
              onClick={() => setResumeOpen(true)}
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Resume"
            >
              <FileText size={15} />
            </button>

            {/* Divider */}
            <div className="w-px h-5 bg-foreground/15 mx-0.5" />

            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl border border-foreground/20 bg-background/95 backdrop-blur-xl p-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left px-4 py-3 text-sm uppercase tracking-[0.12em] font-medium transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-background bg-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Dialog */}
      <Dialog open={resumeOpen} onOpenChange={setResumeOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-sm uppercase tracking-[0.2em] font-semibold">
              Resume — Ly Hung Quoc Chau
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Choose how you want to view the resume.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="/qchau-cv.pdf"
              download
              className="w-full px-4 py-2 border border-foreground bg-foreground text-background text-xs uppercase tracking-[0.15em] font-semibold text-center"
            >
              Download PDF
            </a>
            <a
              href="/qchau-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2 border border-foreground text-xs uppercase tracking-[0.15em] font-semibold text-center"
            >
              Preview in New Tab
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;