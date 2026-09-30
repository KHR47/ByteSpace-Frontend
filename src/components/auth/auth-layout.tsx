import * as React from "react";
import Link from "next/link";
import { BlueprintGrid } from "@/components/ui/blueprint-grid";
import { ByteSpaceBrandMark } from "./brand-mark";
import { AuthVisual } from "./auth-visual";

export interface AuthLayoutProps {
  heading: string;
  description: string;
  children: React.ReactNode;
}

export function AuthLayout({
  heading,
  description,
  children,
}: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen w-full bg-[#0047FF] text-white flex flex-col justify-between overflow-x-hidden selection:bg-[#D2F800] selection:text-slate-950">
      <BlueprintGrid density="dense" />

      <header className="relative z-10 w-full px-6 py-8 sm:px-12 lg:px-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 group focus:outline-none"
          aria-label="ByteSpace Home"
        >
          <ByteSpaceBrandMark className="w-10 h-10 shadow-lg transition-transform group-hover:scale-105" />
        </Link>
      </header>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center flex-1">
        <div className="flex flex-col justify-center space-y-8 pr-0 lg:pr-6">
          <div className="space-y-3 max-w-md">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {heading}
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
              {description}
            </p>
          </div>

          <div className="pt-2 pb-6 flex justify-start">
            <AuthVisual />
          </div>
        </div>

        <div className="w-full flex items-center justify-center lg:justify-end">
          {children}
        </div>
      </main>

      <div className="h-6" />
    </div>
  );
}
