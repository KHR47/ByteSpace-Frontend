import * as React from "react";

export function ByteSpaceBrandMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="44" height="44" rx="14" fill="#D2F800" />
      <path
        d="M16 12V32M16 23C17.5 20.5 20.2 19 23.5 19C28.2 19 31 22.8 31 26.5C31 30.2 28.2 34 23.5 34C20.2 34 17.5 32.5 16 30"
        stroke="#0047FF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
