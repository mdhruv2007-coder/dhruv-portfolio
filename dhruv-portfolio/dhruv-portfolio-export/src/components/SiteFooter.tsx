import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-5 py-8 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built as a systems record · {profile.location}</span>
        <Link to="/" className="text-foreground transition-colors hover:text-signal">
          Return to origin ↗
        </Link>
      </div>
    </footer>
  );
}
