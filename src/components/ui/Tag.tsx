type TagVariant = "surface" | "accent" | "ink";

interface TagProps {
  label:    string;
  variant?: TagVariant;
}

const variantClasses: Record<TagVariant, string> = {
  surface: "bg-surface text-ink-light",
  accent:  "bg-accent/10 text-accent",
  ink:     "bg-ink text-background",
};

export default function Tag({ label, variant = "surface" }: TagProps) {
  return (
    <span
      className={[
        "inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm",
        variantClasses[variant],
      ].join(" ")}
    >
      {label}
    </span>
  );
}
