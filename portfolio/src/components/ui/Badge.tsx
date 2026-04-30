type Status = "available" | "busy" | "away";

interface BadgeProps {
  status?: Status;
  label?:  string;
}

const statusConfig: Record<Status, { dot: string; label: string }> = {
  available: { dot: "bg-accent animate-pulse", label: "Available for new opportunities" },
  busy:      { dot: "bg-yellow-500",           label: "Currently unavailable" },
  away:      { dot: "bg-ink-light",            label: "Taking a break" },
};

export default function Badge({ status = "available", label }: BadgeProps) {
  const config = statusConfig[status];
  return (
    <p className="inline-flex items-center gap-3 uppercase tracking-widest text-xs font-semibold text-ink">
      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${config.dot}`} aria-hidden="true" />
      {label ?? config.label}
    </p>
  );
}
