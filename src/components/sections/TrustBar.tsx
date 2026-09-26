import Image from "next/image";
import { CERTIFICATIONS } from "@/lib/constants";

export function TrustBar() {
  return (
    <section className="border-b border-zinc-100/50 bg-white py-6 lg:py-8">
      <div className="section-container">
        <div className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 md:grid-cols-4 md:gap-x-10 lg:gap-x-16">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="flex h-20 w-full max-w-[280px] items-center justify-center px-2 sm:h-24 lg:h-28"
              title={cert.name}
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                width={cert.maxWidth}
                height={cert.height}
                className="h-full w-full object-contain"
                style={{
                  maxHeight: cert.height,
                  maxWidth: cert.maxWidth,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
