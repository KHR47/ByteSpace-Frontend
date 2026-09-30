"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { BlueprintGrid } from "@/components/ui/blueprint-grid";
import { Search, Star } from "lucide-react";
import {
  ShapeWhiteTorus,
  ShapeSquiggle,
  ShapeWhiteZigzag,
  ShapeWhiteCone,
} from "./geometric-shapes";

export function Hero({
  onSearch,
}: {
  onSearch?: (query: string) => void;
}) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
    const el = document.getElementById("courses");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#0047FF] text-white pt-10 pb-28 lg:pt-14 lg:pb-36 overflow-hidden">
      <BlueprintGrid density="dense" />

      <div className="pointer-events-none absolute top-12 left-4 sm:left-8 lg:left-14">
        <ShapeSquiggle className="w-24 sm:w-36 h-auto drop-shadow-[0_15px_30px_rgba(210,248,0,0.35)]" />
      </div>

      <div className="pointer-events-none absolute top-1/2 left-2 sm:left-10 -translate-y-8">
        <ShapeWhiteZigzag className="w-16 sm:w-20" />
      </div>

      <div className="pointer-events-none absolute bottom-12 left-6 sm:left-16">
        <ShapeWhiteTorus className="w-20 sm:w-28 h-auto drop-shadow-2xl" />
      </div>

      <div className="pointer-events-none absolute top-12 right-6 sm:right-16">
        <div className="w-16 sm:w-24 h-24 sm:h-36 rounded-2xl bg-gradient-to-br from-[#D2F800] to-[#A3E635] shadow-[0_15px_30px_rgba(210,248,0,0.35)] transform rotate-12" />
      </div>

      <div className="pointer-events-none absolute top-1/2 right-4 sm:right-12 -translate-y-6">
        <ShapeWhiteCone className="w-16 sm:w-22 h-auto drop-shadow-2xl" />
      </div>

      <div className="pointer-events-none absolute bottom-14 right-8 sm:right-20">
        <ShapeWhiteZigzag className="w-18 sm:w-24 h-auto transform rotate-45 drop-shadow-lg" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
            Get Access to Hundreds <br />
            Courses Available
          </h1>

          <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          <form
            onSubmit={handleSearchSubmit}
            className="w-full max-w-xl mx-auto bg-white rounded-full p-1.5 pl-6 shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex items-center gap-3 transition-all focus-within:ring-4 focus-within:ring-[#D2F800]/40"
          >
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full text-slate-900 placeholder:text-slate-400 text-sm sm:text-base bg-transparent border-none focus:outline-none"
            />
            <Button
              type="submit"
              variant="lime"
              size="md"
              className="shrink-0 h-10 px-6 sm:px-7 font-extrabold text-sm shadow-none rounded-full"
            >
              Search
            </Button>
          </form>
        </div>

        <div className="relative mt-16 sm:mt-20 max-w-2xl mx-auto flex items-center justify-center">
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px] rounded-full bg-[#D2F800] shadow-[0_0_80px_rgba(210,248,0,0.35)]" />

          <div className="relative z-10 w-72 h-80 sm:w-96 sm:h-[430px] lg:w-[440px] lg:h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=85"
              alt="Student smiling with headphones and laptop"
              fill
              priority
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 440px"
              className="object-cover object-top rounded-b-full drop-shadow-2xl"
            />
          </div>

          <div className="absolute top-10 left-2 sm:-left-12 lg:-left-16 z-20 bg-white text-slate-900 rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-100 text-left">
            <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">
              UI/UX Design
            </h4>
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">
              200 Courses <span className="mx-1 text-slate-300">|</span> 1000+ Students
            </p>
          </div>

          <div className="absolute top-14 right-2 sm:-right-10 lg:-right-14 z-20 bg-white text-slate-900 rounded-2xl p-3.5 sm:p-5 shadow-xl border border-slate-100 w-44 sm:w-52 text-left">
            <span className="block text-[10px] sm:text-xs text-slate-500 font-medium mb-1">
              Learning Progress
            </span>
            <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              55%
            </div>
            <div className="w-full h-1.5 sm:h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
              <div className="w-[55%] h-full bg-[#D2F800] rounded-full" />
            </div>
          </div>

          <div className="absolute -bottom-4 left-0 sm:-left-12 lg:-left-16 z-20 bg-white text-slate-900 rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-100 space-y-1.5 text-left">
            <div className="flex items-center gap-1 text-xs font-bold text-slate-900">
              <span>4.5</span>
              <span className="text-[10px] text-slate-500 font-normal">(240)</span>
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            </div>
            <div className="flex items-center -space-x-1.5 pt-0.5">
              <div className="w-5 h-5 rounded-full border border-white overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&auto=format&fit=crop&q=80"
                  alt="Student"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-5 h-5 rounded-full border border-white overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&auto=format&fit=crop&q=80"
                  alt="Student"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-5 h-5 rounded-full border border-white overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&auto=format&fit=crop&q=80"
                  alt="Student"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-5 h-5 rounded-full border border-white bg-[#D2F800] text-slate-950 flex items-center justify-center text-[8px] font-bold">
                2K+
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
