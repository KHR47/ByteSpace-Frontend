import * as React from "react";
import { cn } from "@/lib/utils";

export function ShapeTorus({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-20 h-20 drop-shadow-[0_10px_20px_rgba(210,248,0,0.3)]", className)}
    >
      <circle cx="50" cy="50" r="38" stroke="#D2F800" strokeWidth="18" strokeLinecap="round" />
      <path
        d="M26 26C32 20 40 16 50 16"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function ShapeWhiteTorus({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-16 h-16 drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)]", className)}
    >
      <circle cx="50" cy="50" r="36" stroke="#FFFFFF" strokeWidth="16" />
      <path
        d="M28 28C34 22 42 18 50 18"
        stroke="#E2E8F0"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShapeSquiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-24 h-12", className)}
    >
      <path
        d="M10 30 Q 25 5, 40 30 T 70 30 T 100 30"
        stroke="#D2F800"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M10 30 Q 25 5, 40 30 T 70 30 T 100 30"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
        fill="none"
      />
    </svg>
  );
}

export function ShapeWhiteZigzag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-16 h-8", className)}
    >
      <path
        d="M8 20L24 8L40 28L56 12L72 26"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
    </svg>
  );
}

export function ShapeWedge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-16 h-16 drop-shadow-md", className)}
    >
      <polygon points="40,10 70,68 10,68" fill="#D2F800" />
      <polygon points="40,10 70,68 40,68" fill="#BEE300" opacity="0.6" />
    </svg>
  );
}

export function ShapeWhiteCone({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-14 h-14 drop-shadow-md", className)}
    >
      <polygon points="40,8 72,70 8,70" fill="#FFFFFF" />
      <polygon points="40,8 72,70 40,70" fill="#CBD5E1" opacity="0.4" />
    </svg>
  );
}
