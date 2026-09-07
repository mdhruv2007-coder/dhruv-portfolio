import { Copy, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/portfolio";

export default function TerminalContact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="plate">
      <div className="flex items-center justify-between border-b border-border px-4 py-3 font-mono text-xs text-muted-foreground">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-signal" />
          <i className="h-2.5 w-2.5 rounded-full bg-muted-foreground/50" />
          <i className="h-2.5 w-2.5 rounded-full bg-data" />
        </span>
        <span>contact_console.sh</span>
        <span className="text-data">ready</span>
      </div>

      <div className="p-6 md:p-10">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-data">dhruv@systems:~$</span> whoami
        </p>
        <h2 className="mt-4 font-display text-3xl font-extrabold leading-[0.95] tracking-tight md:text-5xl">
          Building systems where
          <br />
          <span className="text-signal">milliseconds matter.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Open to machine learning, data science and engineering opportunities that need thoughtful
          modeling, production-minded inference and a measurable outcome.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center justify-center gap-2 border border-signal bg-signal px-5 py-3 font-mono text-sm text-primary-foreground transition-colors hover:bg-transparent hover:text-signal"
          >
            <Mail size={16} /> {profile.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-live="polite"
            className="flex items-center justify-center gap-2 border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-foreground"
          >
            <Copy size={15} /> {copied ? "Copied" : "Copy address"}
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-5 font-mono text-sm">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
