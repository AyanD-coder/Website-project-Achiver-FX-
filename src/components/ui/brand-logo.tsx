import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  withBackplate?: boolean;
};

export default function BrandLogo({
  className,
  priority = false,
  withBackplate = false,
}: BrandLogoProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center",
        withBackplate &&
          "rounded-2xl border border-sky-100/70 bg-white px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.28)]",
      )}
    >
      <Image
        src="/achiever-logo-v2.png"
        alt="Achiever FX"
        width={456}
        height={84}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        sizes="(max-width: 380px) 148px, (max-width: 640px) 170px, (max-width: 1024px) 200px, 228px"
        className={cn(
          "h-auto w-[190px] select-none object-contain",
          withBackplate
            ? "brightness-100 contrast-110 saturate-110"
            : "brightness-100 contrast-110 saturate-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.14)]",
          className,
        )}
      />
    </div>
  );
}
