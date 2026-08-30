import Image from "next/image";
import { IMAGES, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src={IMAGES.logo}
      alt={SITE.name}
      width={160}
      height={64}
      priority={priority}
      className={cn("h-10 w-auto object-contain lg:h-12", className)}
    />
  );
}
