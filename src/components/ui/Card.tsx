import * as React from "react";

import { cn } from "@/lib/utils";

type CardVariant = "default" | "glow" | "outline";

const cardVariants: Record<CardVariant, string> = {
  default:
    "border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0)),var(--color-bg-secondary)] text-text-primary shadow-[0_16px_40px_rgba(0,0,0,0.18)] [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
  glow:
    "border border-brand-primary/20 bg-[linear-gradient(180deg,rgba(56,189,248,0.05),rgba(255,255,255,0)),var(--color-bg-secondary)] text-text-primary hover:-translate-y-1 hover:border-brand-glow/50 hover:shadow-[0_20px_44px_rgba(56,189,248,0.14)] [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:shadow-[0_10px_30px_rgba(0,0,0,0.08)] [.light_&]:hover:border-blue-200 [.light_&]:hover:shadow-[0_15px_40px_rgba(37,99,235,0.15)]",
  outline:
    "border border-white/10 bg-transparent text-text-primary backdrop-blur-sm hover:bg-white/[0.04] [.light_&]:border-gray-200 [.light_&]:bg-white/80 [.light_&]:shadow-[0_10px_30px_rgba(0,0,0,0.08)] [.light_&]:hover:bg-white",
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-2xl transition-all duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent [.light_&]:before:via-blue-200",
        cardVariants[variant],
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight text-white [.light_&]:text-[#111827]", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-text-secondary", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
