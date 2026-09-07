import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, profile } from "@/data/portfolio";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center border border-signal/60 bg-signal/10 font-mono text-sm font-bold text-signal">
            MD
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-extrabold tracking-tight">
              {profile.name}
            </span>
            <span className="rule-label block truncate">AI · Data Science · Systems</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-foreground bg-secondary" }}
              className="px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="ml-3 border border-signal bg-signal px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-transparent hover:text-signal"
          >
            Hire me ↗
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="grid h-10 w-10 shrink-0 place-items-center border border-border text-foreground md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border md:hidden" aria-label="Mobile">
          {navigation.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 border-b border-border px-5 py-4 font-display text-lg font-bold tracking-tight"
            >
              <span className="rule-label">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
