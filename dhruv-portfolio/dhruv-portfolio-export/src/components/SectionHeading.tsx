type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ index, eyebrow, title, description }: Props) {
  return (
    <div className="grid gap-6 border-b border-border pb-8 md:grid-cols-[auto_minmax(0,1fr)] md:gap-10">
      <div className="flex items-baseline gap-3 md:flex-col md:gap-1">
        <span className="font-mono text-4xl font-bold leading-none text-signal md:text-6xl">{index}</span>
        <span className="rule-label">{eyebrow}</span>
      </div>
      <div className="min-w-0">
        <h2 className="font-display text-3xl font-extrabold leading-[0.95] tracking-tight md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
