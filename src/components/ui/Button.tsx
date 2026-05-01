import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size    = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?:    Size;
  arrow?:   boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ink text-background border border-ink hover:bg-accent hover:border-accent",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink",
  ghost:
    "bg-transparent text-ink border-none hover:text-accent",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", arrow = false, children, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          "inline-flex items-center gap-3 rounded-full font-semibold uppercase tracking-widest",
          "transition-all duration-200 cursor-pointer",
          variantClasses[variant],
          sizeClasses[size],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
        {arrow && (
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
