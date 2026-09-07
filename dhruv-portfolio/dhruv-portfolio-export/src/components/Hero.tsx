import { Link } from "@tanstack/react-router";
import { Activity, ArrowRight, Github, Linkedin, MapPin, ShieldCheck, Timer, Zap } from "lucide-react";
import { profile } from "@/data/portfolio";

const readings = [
  { label: "Inference latency (p99)", value: "~2.3 ms", icon: Timer },
  { label: "Thermal runaway FN rate", value: "0.0% (0/90)", icon: ShieldCheck },
  { label: "State-of-health RMSE", value: "1.158%", icon: Activity },
  { label: "Model binaries", value: "2.3–5.4 MB", icon: Zap },
  { label: "Base location", value: profile.location, icon: MapPin },
];

export default function Hero() {
  return (
    <section className="grid-field relative border-b border-border" aria-labelledby="hero-title">
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.85fr)] lg:gap-16">
        <div className="min-w-0">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-data">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-data" />
            {profile.status}
          </p>
          <p className="mt-6 font-mono text-xs text-muted-foreground">[ {profile.coordinate} ]</p>

          <h1
            id="hero-title"
            className="mt-3 font-display text-[clamp(2.75rem,9vw,7rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.03em]"
          >
            Train for
            <br />
            the model.
            <br />
            <span className="text-signal">Ship for the</span>
            <br />
            <span className="text-signal">millisecond.</span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            I&apos;m <strong className="font-semibold text-foreground">{profile.name}</strong>, a
            third-semester {profile.role} at REVA University. {profile.intro}
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {profile.focus.map((f) => (
              <li key={f} className="border border-border px-2.5 py-1 font-mono text-[11px] text-foreground/80">
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/work"
              className="flex items-center justify-center gap-2 border border-signal bg-signal px-6 py-3.5 font-mono text-sm uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-transparent hover:text-signal"
            >
              Inspect project records <ArrowRight size={16} />
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-border px-5 py-3.5 font-mono text-sm text-foreground transition-colors hover:border-foreground"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-border px-5 py-3.5 font-mono text-sm text-foreground transition-colors hover:border-foreground"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>

        <aside className="plate self-start" aria-label="Current engineering telemetry">
          <div className="flex items-center justify-between border-b border-border px-4 py-3 font-mono text-xs text-muted-foreground">
            <span className="flex gap-1.5" aria-hidden="true">
              <i className="h-2.5 w-2.5 rounded-full bg-signal" />
              <i className="h-2.5 w-2.5 rounded-full bg-muted-foreground/50" />
              <i className="h-2.5 w-2.5 rounded-full bg-data" />
            </span>
            <span>inference_daemon.py</span>
            <span className="flex items-center gap-2 text-data">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-data" /> online
            </span>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between">
              <span className="rule-label">system telemetry</span>
              <span className="font-mono text-xs text-muted-foreground">v1.0.0</span>
            </div>

            <dl className="mt-5 divide-y divide-border border-y border-border">
              {readings.map(({ label, value, icon: Icon }) => (
                <div key={label} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 py-3">
                  <Icon size={14} className="shrink-0 text-signal" aria-hidden="true" />
                  <dt className="min-w-0 truncate text-xs text-muted-foreground">{label}</dt>
                  <dd className="font-mono text-xs font-semibold text-foreground">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 space-y-1.5 font-mono text-xs text-muted-foreground">
              <p>
                <span className="text-signal">$</span> system.check --all
              </p>
              <p>
                <span className="text-data">✓</span> FastAPI server responding
              </p>
              <p>
                <span className="text-data">✓</span> CAN ingestion active
              </p>
              <p>
                <span className="text-data">✓</span> Secure remote route available
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
