"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface GlowCardProps {
  children?: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "success" | "red" | "orange";
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

type GlowStyle = CSSProperties & {
  "--base"?: number | string;
  "--spread"?: number | string;
  "--radius"?: number | string;
  "--border"?: number | string;
  "--backdrop"?: string;
  "--backup-border"?: string;
  "--size"?: number | string;
  "--outer"?: number | string;
  "--border-size"?: string;
  "--spotlight-size"?: string;
  "--hue"?: string;
};

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  success: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};

const sizeMap = {
  sm: "h-64 w-48",
  md: "h-80 w-64",
  lg: "h-96 w-80",
};

export function GlowCard({
  children,
  className = "",
  glowColor = "blue",
  size = "md",
  width,
  height,
  customSize = false,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (event: PointerEvent) => {
      const { clientX, clientY } = event;

      if (!cardRef.current) return;

      cardRef.current.style.setProperty("--x", clientX.toFixed(2));
      cardRef.current.style.setProperty("--xp", (clientX / window.innerWidth).toFixed(2));
      cardRef.current.style.setProperty("--y", clientY.toFixed(2));
      cardRef.current.style.setProperty("--yp", (clientY / window.innerHeight).toFixed(2));
    };

    document.addEventListener("pointermove", syncPointer);
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  const inlineStyles: GlowStyle = {
    "--base": base,
    "--spread": spread,
    "--radius": 28,
    "--border": 2,
    "--backdrop": "hsl(222 47% 11% / 0.15)",
    "--backup-border": "var(--backdrop)",
    "--size": 220,
    "--outer": 1,
    "--border-size": "calc(var(--border, 2) * 1px)",
    "--spotlight-size": "calc(var(--size, 150) * 1px)",
    "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) 100% 72% / 0.16),
      transparent
    )`,
    backgroundColor: "var(--backdrop, transparent)",
    backgroundSize: "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
    backgroundPosition: "50% 50%",
    backgroundAttachment: "fixed",
    border: "var(--border-size) solid var(--backup-border)",
    position: "relative",
    touchAction: "none",
  };

  if (width !== undefined) {
    inlineStyles.width = typeof width === "number" ? `${width}px` : width;
  }

  if (height !== undefined) {
    inlineStyles.height = typeof height === "number" ? `${height}px` : height;
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-glow-card]::before,
            [data-glow-card]::after {
              pointer-events: none;
              content: "";
              position: absolute;
              inset: calc(var(--border-size) * -1);
              border: var(--border-size) solid transparent;
              border-radius: calc(var(--radius) * 1px);
              background-attachment: fixed;
              background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
              background-repeat: no-repeat;
              background-position: 50% 50%;
              mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
              mask-clip: padding-box, border-box;
              mask-composite: intersect;
            }

            [data-glow-card]::before {
              background-image: radial-gradient(
                calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
                calc(var(--x, 0) * 1px)
                calc(var(--y, 0) * 1px),
                hsl(var(--hue, 210) 100% 65% / 0.95),
                transparent 100%
              );
              filter: brightness(1.6);
            }

            [data-glow-card]::after {
              background-image: radial-gradient(
                calc(var(--spotlight-size) * 0.45) calc(var(--spotlight-size) * 0.45) at
                calc(var(--x, 0) * 1px)
                calc(var(--y, 0) * 1px),
                hsl(0 0% 100% / 0.95),
                transparent 100%
              );
            }

            [data-glow-card] > [data-glow-inner] {
              position: absolute;
              inset: 0;
              opacity: var(--outer, 1);
              border-radius: calc(var(--radius) * 1px);
              border-width: calc(var(--border-size) * 18);
              filter: blur(calc(var(--border-size) * 8));
              pointer-events: none;
            }
          `,
        }}
      />

      <div
        ref={cardRef}
        data-glow-card
        style={inlineStyles}
        className={cn(
          customSize ? "" : `${sizeMap[size]} aspect-[3/4]`,
          "relative overflow-hidden rounded-[28px] backdrop-blur-[6px]",
          className,
        )}
      >
        <div data-glow-inner />
        {children}
      </div>
    </>
  );
}
