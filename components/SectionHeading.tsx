import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${
          light ? "text-brand-400" : "text-brand-600"
        }`}
      >
        <span className="h-px w-6 bg-brand-500" />
        {eyebrow}
      </span>
      <h2
        className={`mt-3 font-display text-3xl font-extrabold sm:text-4xl ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-ink-200" : "text-ink-500"
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}
