import Link from "next/link";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type WhatsAppButtonSize = "sm" | "md" | "lg";

interface WhatsAppButtonProps {
  href: string;
  children?: React.ReactNode;
  size?: WhatsAppButtonSize;
  className?: string;
  fullWidth?: boolean;
  outline?: boolean;
}

const sizeStyles: Record<WhatsAppButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-6 py-3 text-sm font-semibold gap-2",
  lg: "px-8 py-4 text-base font-semibold gap-2.5",
};

export function WhatsAppButton({
  href,
  children = "WhatsApp",
  size = "md",
  className,
  fullWidth,
  outline = false,
}: WhatsAppButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-xl transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2",
        outline
          ? "border-2 border-[#25D366] bg-white text-[#128C7E] hover:bg-[#25D366]/5"
          : "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20BD5A] hover:shadow-[#25D366]/40",
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
    >
      <WhatsAppIcon className={size === "lg" ? "h-6 w-6" : "h-5 w-5"} />
      {children}
    </Link>
  );
}
