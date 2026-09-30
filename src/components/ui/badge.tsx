import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "lime" | "blue" | "dark" | "outline";
}

export function Badge({
  className,
  variant = "lime",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    lime: "bg-[#D2F800] text-slate-900 font-semibold",
    blue: "bg-[#1A56DB]/10 text-[#1A56DB] font-semibold",
    dark: "bg-slate-900 text-white font-medium",
    outline: "border border-slate-200 text-slate-700 font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs rounded-full tracking-wide transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
