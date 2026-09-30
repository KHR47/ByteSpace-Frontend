import * as React from "react";
import { cn } from "@/lib/utils";

export interface BlueprintGridProps extends React.HTMLAttributes<HTMLDivElement> {
  density?: "normal" | "dense";
}

export function BlueprintGrid({
  className,
  density = "normal",
  children,
  ...props
}: BlueprintGridProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0",
        density === "normal" ? "bg-blueprint-grid" : "bg-blueprint-grid-dense",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
