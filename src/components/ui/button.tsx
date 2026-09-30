import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "lime" | "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  pill?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "lime",
      size = "md",
      pill = true,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] cursor-pointer";

    const variantStyles = {
      lime: "bg-[#D2F800] text-slate-900 hover:bg-[#BEE300] hover:shadow-[0_0_20px_rgba(210,248,0,0.35)] focus-visible:ring-[#D2F800]",
      primary: "bg-[#1A56DB] text-white hover:bg-[#1442B0] focus-visible:ring-[#1A56DB]",
      secondary: "bg-white text-slate-900 hover:bg-slate-100 shadow-sm border border-slate-200 focus-visible:ring-slate-400",
      outline: "border-2 border-white/80 text-white hover:bg-white/10 focus-visible:ring-white",
      ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-300",
    };

    const sizeStyles = {
      sm: "h-9 px-4 text-xs tracking-wide",
      md: "h-11 px-6 text-sm",
      lg: "h-13 px-8 text-base",
    };

    const roundedStyles = pill ? "rounded-full" : "rounded-xl";

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          roundedStyles,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
