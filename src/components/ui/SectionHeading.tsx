import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-wider",
            dark ? "text-brand-400" : "text-brand-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight",
          dark ? "text-white" : "text-surface-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-zinc-300" : "text-zinc-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
