import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ContactFooter = () => {
  const emailAddress = "quocchau4729@gmail.com";
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1400);
    return () => window.clearTimeout(t);
  }, [copied]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formValues;
    if (!name || !email || !subject || !message) {
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <>
      <footer
        className="min-h-[70vh] flex flex-col items-center justify-center py-16"
      >
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
            Contact me
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-balance">
            GET IN TOUCH
          </h2>
        </div>

        {/* Quick contact: click email to copy */}
        <TooltipProvider>
          <div className="w-full max-w-xl mx-auto mb-4">
            <Tooltip delayDuration={150}>
              <TooltipTrigger asChild>
                <motion.button
                  type="button"
                  onClick={handleCopyEmail}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full border border-foreground/30 bg-background px-4 py-3 text-left hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                  aria-label="Copy email to clipboard"
                >
                  <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">
                    Email
                  </div>
                  <div className="font-semibold tracking-[-0.01em] break-all">
                    {emailAddress}
                  </div>
                </motion.button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs uppercase tracking-[0.15em] font-semibold">
                  {copied ? "Copied!" : "Click to copy"}
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl mx-auto mb-12 grid grid-cols-1 gap-4 text-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1 text-left">
              <label className="uppercase tracking-[0.15em] text-xs text-muted-foreground">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formValues.name}
                onChange={handleChange}
                className="border border-foreground/30 bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              />
            </div>
            <div className="flex flex-col gap-1 text-left">
              <label className="uppercase tracking-[0.15em] text-xs text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formValues.email}
                onChange={handleChange}
                className="border border-foreground/30 bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 text-left">
            <label className="uppercase tracking-[0.15em] text-xs text-muted-foreground">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              required
              value={formValues.subject}
              onChange={handleChange}
              className="border border-foreground/30 bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            />
          </div>
          <div className="flex flex-col gap-1 text-left">
            <label className="uppercase tracking-[0.15em] text-xs text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              required
              value={formValues.message}
              onChange={handleChange}
              rows={5}
              className="border border-foreground/30 bg-background px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-foreground resize-none"
            />
          </div>
          <div className="flex items-center justify-between flex-col sm:flex-row gap-4 pt-2">
            <button
              type="submit"
              className="px-6 py-2 border border-foreground bg-foreground text-background uppercase tracking-[0.15em] text-xs font-semibold hover:bg-background hover:text-foreground transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>


        {/* Footer bottom */}
        <div className="border-t border-foreground">
          <div className="container px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">
            <span>© 2026 Ly Hung Quoc Chau</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
