import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap font-semibold tracking-[0.01em] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-glow focus:ring-offset-2 focus:ring-offset-bg-dark disabled:pointer-events-none disabled:opacity-50 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_46%)] before:opacity-70",
  {
    variants: {
      variant: {
        primary:
          "border border-white/10 bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-[0_12px_32px_rgba(14,165,233,0.24)] hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(56,189,248,0.34)] [.light_&]:border-transparent [.light_&]:from-[#2563EB] [.light_&]:to-[#0EA5E9] [.light_&]:text-white [.light_&]:shadow-[0_10px_26px_rgba(37,99,235,0.24)] [.light_&]:hover:from-[#1D4ED8] [.light_&]:hover:to-[#0284C7] [.light_&]:hover:shadow-[0_14px_34px_rgba(37,99,235,0.3)]",
        outline:
          "border border-white/12 bg-white/[0.03] text-brand-glow backdrop-blur-sm hover:-translate-y-0.5 hover:border-brand-primary/70 hover:bg-brand-primary/10 hover:text-white hover:shadow-[0_14px_30px_rgba(14,165,233,0.16)] [.light_&]:border-gray-200 [.light_&]:bg-white [.light_&]:text-slate-700 [.light_&]:shadow-[0_5px_20px_rgba(0,0,0,0.04)] [.light_&]:hover:border-blue-200 [.light_&]:hover:bg-slate-50 [.light_&]:hover:text-blue-700 [.light_&]:hover:shadow-[0_8px_22px_rgba(37,99,235,0.12)]",
        ghost: "text-text-secondary hover:bg-bg-secondary/80 hover:text-white [.light_&]:text-slate-700 [.light_&]:hover:bg-slate-50 [.light_&]:hover:text-blue-700",
        default: "border border-white/10 bg-white text-slate-950 shadow-[0_10px_24px_rgba(255,255,255,0.08)] hover:bg-slate-100",
        destructive: "border border-red-400/30 bg-red-500 text-white hover:bg-red-600",
        secondary: "border border-white/10 bg-slate-100 text-slate-900 shadow-[0_10px_24px_rgba(15,23,42,0.12)] hover:bg-slate-200",
        link: "text-brand-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 rounded-xl px-8 py-3",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-2xl px-10 text-base",
        icon: "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
