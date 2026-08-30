import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp" | "ghost" | "light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  ariaLabel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40",
  secondary:
    "bg-surface-900 text-white hover:bg-surface-800 shadow-lg shadow-black/10",
  outline:
    "border-2 border-brand-600 text-brand-700 hover:bg-brand-50 bg-white",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/25",
  ghost: "text-surface-800 hover:bg-surface-100",
  light:
    "bg-white text-brand-700 hover:bg-brand-50 shadow-xl shadow-black/10 hover:shadow-black/15",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm font-semibold",
  lg: "px-8 py-4 text-base font-semibold",
};

export function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
