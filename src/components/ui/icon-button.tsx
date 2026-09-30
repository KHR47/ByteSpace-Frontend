import * as React from "react";
import { cn } from "@/lib/utils";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "lime" | "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  rounded?: "circle" | "rounded";
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = "secondary",
      size = "md",
      rounded = "circle",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 cursor-pointer";

    const variantStyles = {
      lime: "bg-[#D2F800] text-slate-900 hover:bg-[#BEE300] hover:shadow-[0_0_15px_rgba(210,248,0,0.3)] focus-visible:ring-[#D2F800]",
      primary: "bg-[#1A56DB] text-white hover:bg-[#1442B0] focus-visible:ring-[#1A56DB]",
      secondary: "bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 border border-slate-200/90 shadow-sm focus-visible:ring-slate-300",
      outline: "border border-white/60 text-white hover:bg-white/10 focus-visible:ring-white",
      ghost: "text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-300",
    };

    const sizeStyles = {
      sm: "w-8 h-8 text-xs",
      md: "w-10 h-10 text-sm",
      lg: "w-12 h-12 text-base",
    };

    const roundedStyles = rounded === "circle" ? "rounded-full" : "rounded-xl";

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

IconButton.displayName = "IconButton";
