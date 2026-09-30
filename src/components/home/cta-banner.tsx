import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { BlueprintGrid } from "@/components/ui/blueprint-grid";
import {
  ShapeTorus,
  ShapeSquiggle,
  ShapeWhiteCone,
  ShapeWhiteZigzag,
} from "./geometric-shapes";

export function CtaBanner() {
  return (
    <section className="w-full bg-[#0047FF] text-white py-20 sm:py-28 overflow-hidden relative">
      <BlueprintGrid density="dense" />

      <div className="pointer-events-none absolute top-8 left-4 sm:left-10">
        <ShapeSquiggle className="w-20 sm:w-28 drop-shadow-[0_15px_30px_rgba(210,248,0,0.35)]" />
      </div>
      <div className="pointer-events-none absolute top-1/2 left-2 sm:left-8 -translate-y-8">
        <ShapeWhiteZigzag className="w-14 sm:w-18 opacity-90" />
      </div>
      <div className="pointer-events-none absolute bottom-6 left-6 sm:left-14">
        <ShapeWhiteCone className="w-16 sm:w-22 drop-shadow-2xl" />
      </div>
      <div className="pointer-events-none absolute -bottom-4 left-1/4">
        <ShapeTorus className="w-20 sm:w-28 opacity-80" />
      </div>

      <div className="pointer-events-none absolute top-8 right-6 sm:right-16">
        <ShapeWhiteCone className="w-16 sm:w-20 drop-shadow-2xl" />
      </div>
      <div className="pointer-events-none absolute bottom-4 right-6 sm:right-16">
        <ShapeSquiggle className="w-28 sm:w-40 drop-shadow-[0_15px_30px_rgba(210,248,0,0.35)]" />
      </div>
      <div className="pointer-events-none absolute top-1/2 right-4 sm:right-10 -translate-y-6">
        <div className="w-14 sm:w-20 h-20 sm:h-28 rounded-2xl bg-white shadow-2xl transform rotate-12 opacity-95" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.18] text-white">
            Unlock Your Potential as a <br />
            Creator with ByteSpace
          </h2>

          <p className="text-xs sm:text-sm text-blue-100/90 font-normal leading-relaxed max-w-2xl mx-auto">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <div className="pt-2">
            <Link href="/register">
              <button
                type="button"
                className="px-8 py-3.5 rounded-full bg-[#D2F800] text-slate-950 font-extrabold text-sm sm:text-base hover:bg-[#BEE300] hover:scale-105 transition-all shadow-[0_10px_25px_rgba(210,248,0,0.35)] cursor-pointer"
              >
                Join as Creator
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
