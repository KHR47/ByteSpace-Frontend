import * as React from "react";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";
import { ShapeTorus, ShapeWedge } from "@/components/home/geometric-shapes";

export function AuthVisual() {
  return (
    <div className="relative w-full max-w-[420px] select-none">
      <div className="pointer-events-none absolute -top-8 -left-6 z-30 animate-pulse duration-1000">
        <ShapeTorus className="w-20 h-20 drop-shadow-[0_12px_24px_rgba(210,248,0,0.4)]" />
      </div>

      <div className="pointer-events-none absolute -bottom-6 -left-6 z-30">
        <ShapeWedge className="w-20 h-20 drop-shadow-[0_16px_30px_rgba(0,0,0,0.3)]" />
      </div>

      <div className="pointer-events-none absolute top-1/2 -right-8 -translate-y-8 z-30">
        <svg
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-24 drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
        >
          <path
            d="M30 10 C50 15, 80 15, 85 35 C90 50, 40 50, 35 70 C30 85, 90 90, 80 110"
            stroke="#FFFFFF"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M30 10 C50 15, 80 15, 85 35 C90 50, 40 50, 35 70 C30 85, 90 90, 80 110"
            stroke="#F1F5F9"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>

      <div className="absolute top-6 -left-6 w-full bg-white rounded-3xl p-5 shadow-lg border border-slate-100 opacity-90 -rotate-3 scale-[0.96] pointer-events-none">
        <div className="w-full h-32 bg-slate-200 rounded-2xl relative overflow-hidden mb-4">
          <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full">
            17 Lessons
          </div>
        </div>
        <div className="space-y-1">
          <h4 className="font-bold text-sm text-slate-900">Build Digital Products</h4>
          <p className="text-[11px] text-[#1A56DB]">by purepearl studio</p>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-slate-100">
          <span className="font-bold text-[#1A56DB]">$25<span className="text-slate-400 font-normal">/lifetime</span></span>
        </div>
      </div>

      <div className="relative z-10 bg-white rounded-3xl p-5 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-slate-100">
        <div className="relative w-full h-44 bg-slate-950 rounded-2xl p-4 overflow-hidden border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span className="tracking-wider uppercase">USERS LAST 7 DAYS</span>
            <span className="text-emerald-400 font-semibold">+18.4%</span>
          </div>

          <div className="relative w-full h-20 my-1">
            <svg viewBox="0 0 280 80" fill="none" className="w-full h-full">
              <defs>
                <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M10 65 Q 40 20, 70 45 T 140 25 T 200 40 T 270 20 L 270 75 L 10 75 Z"
                fill="url(#cyanGrad)"
              />
              <path
                d="M10 65 Q 40 20, 70 45 T 140 25 T 200 40 T 270 20"
                stroke="#38BDF8"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <rect x="180" y="35" width="5" height="35" rx="2.5" fill="#38BDF8" />
              <rect x="190" y="25" width="5" height="45" rx="2.5" fill="#38BDF8" />
              <rect x="200" y="15" width="5" height="55" rx="2.5" fill="#38BDF8" />
              <rect x="210" y="30" width="5" height="40" rx="2.5" fill="#38BDF8" />
              <rect x="220" y="45" width="5" height="25" rx="2.5" fill="#38BDF8" />
              <rect x="230" y="20" width="5" height="50" rx="2.5" fill="#38BDF8" />
            </svg>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto text-[10px] text-white">
            <span className="bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded-full shrink-0">
              17 Lessons
            </span>
            <span className="bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded-full shrink-0">
              2 hours 16 mins
            </span>
            <span className="bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded-full shrink-0">
              59 Comments
            </span>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-extrabold text-base text-slate-900 leading-tight">
              the Power of Big Data
            </h3>
            <div className="flex items-center gap-1 text-xs font-bold text-slate-900 shrink-0">
              <span>4.5</span>
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
          </div>

          <p className="text-xs text-[#1A56DB] font-medium">
            by purepearl studio
          </p>

          <div className="flex items-center justify-between pt-1">
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
              <BarChart2 className="w-3 h-3 text-slate-500" />
              <span>Beginner</span>
            </div>

            <div className="flex items-center -space-x-2">
              <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80"
                  alt="Student avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80"
                  alt="Student avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80"
                  alt="Student avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-900 text-white flex items-center justify-center text-[9px] font-bold">
                26+
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-baseline">
            <span className="text-lg font-black text-[#0047FF]">$25</span>
            <span className="text-xs text-slate-400 font-medium ml-1">/lifetime</span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-7 -right-4 z-20 bg-[#D2F800] rounded-2xl p-3.5 shadow-xl border border-white/50 text-slate-950 w-56 space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-extrabold text-xs text-slate-900">Happy Students</span>
          <div className="flex items-center gap-1 text-[11px] font-bold text-slate-900">
            <span>4.5</span>
            <span className="text-[10px] text-slate-600 font-normal">(240)</span>
            <Star className="w-3 h-3 fill-slate-900 text-slate-900" />
          </div>
        </div>

        <div className="flex items-center -space-x-1.5">
          <div className="w-5 h-5 rounded-full border border-white overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&auto=format&fit=crop&q=80"
              alt="Happy student"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-5 h-5 rounded-full border border-white overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&auto=format&fit=crop&q=80"
              alt="Happy student"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-5 h-5 rounded-full border border-white overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&auto=format&fit=crop&q=80"
              alt="Happy student"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-5 h-5 rounded-full border border-white overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&auto=format&fit=crop&q=80"
              alt="Happy student"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-5 h-5 rounded-full border border-white bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold">
            2K+
          </div>
        </div>
      </div>
    </div>
  );
}
