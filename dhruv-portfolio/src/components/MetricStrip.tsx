import { metrics } from "@/data/portfolio";

export default function MetricStrip() {
  return (
    <section aria-label="Key engineering metrics" className="border-y border-border bg-surface/40">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <article
            key={metric.label}
            className="rise-in border-b border-border px-5 py-8 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 md:px-8 lg:border-b-0 lg:border-r lg:[&:nth-child(2n)]:border-r lg:last:border-r-0"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <p className="rule-label">{metric.label}</p>
            <p className="mt-4 flex items-baseline gap-1 font-mono font-bold tracking-tight">
              <span className="text-4xl text-foreground md:text-5xl">{metric.value}</span>
              {metric.unit && <span className="text-lg text-signal md:text-xl">{metric.unit}</span>}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">{metric.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
