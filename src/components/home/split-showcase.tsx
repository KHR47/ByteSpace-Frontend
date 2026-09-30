import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Check, Star, BarChart2 } from "lucide-react";
import { ShapeSquiggle } from "./geometric-shapes";

const AVATAR_LIST = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&auto=format&fit=crop&q=80",
];

export function SplitShowcase() {
  return (
    <section className="relative w-full py-16 sm:py-24 space-y-24 lg:space-y-36 bg-white overflow-hidden">
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#D2F800]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#0047FF]/10 blur-3xl" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 lg:max-w-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#0047FF] tracking-tight">
                  12K
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  Students
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#0047FF] tracking-tight">
                  70+
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  Courses
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#0047FF] tracking-tight">
                  16
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  Creators
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
            <div className="relative z-10 w-64 h-80 sm:w-80 sm:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=85"
                alt="Student with headphones and laptop"
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover object-top drop-shadow-2xl rounded-2xl"
              />
            </div>

            <div className="absolute top-2 -left-2 sm:-left-8 z-20 w-44 sm:w-52 bg-white rounded-2xl p-2.5 shadow-xl border border-slate-100">
              <div className="relative w-full h-20 rounded-xl overflow-hidden bg-slate-100 mb-2">
                <Image
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&auto=format&fit=crop&q=80"
                  alt="Learn Figma from Basic"
                  fill
                  sizes="200px"
                  className="object-cover"
                />
                <div className="absolute bottom-1 inset-x-1 flex items-center justify-between text-[8px] font-semibold text-slate-800 bg-white/80 backdrop-blur-xs px-1.5 py-0.5 rounded-full">
                  <span>17 Lessons</span>
                  <span>2 hours 16 mins</span>
                </div>
              </div>
              <h4 className="font-extrabold text-[11px] sm:text-xs text-slate-900 truncate">
                Learn Figma from Basic
              </h4>
              <p className="text-[9px] text-[#0047FF] font-semibold">
                by purepearl studio
              </p>
              <div className="flex items-center justify-between mt-1 pt-1 border-t border-slate-100">
                <span className="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded-full text-slate-600 font-medium flex items-center gap-1">
                  <BarChart2 className="w-2.5 h-2.5 rotate-90" /> Beginner
                </span>
                <span className="text-[11px] font-black text-[#0047FF]">
                  $25<span className="text-[8px] text-slate-400 font-normal">/lifetime</span>
                </span>
              </div>
            </div>

            <div className="absolute top-12 -right-2 sm:-right-6 z-20 w-40 sm:w-48 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 text-left">
              <span className="block text-[10px] sm:text-xs text-slate-500 font-medium mb-0.5">
                Learning Progress
              </span>
              <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                55%
              </div>
              <div className="w-full h-1.5 sm:h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
                <div className="w-[55%] h-full bg-[#D2F800] rounded-full" />
              </div>
            </div>

            <div className="pointer-events-none absolute -top-4 right-0 sm:right-6 z-30">
              <ShapeSquiggle className="w-16 sm:w-20 drop-shadow-lg" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
            <div className="relative z-10 w-64 h-80 sm:w-80 sm:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=85"
                alt="Course instructor with headset and tablet"
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover object-top drop-shadow-2xl rounded-2xl"
              />
            </div>

            <div className="absolute top-2 -left-2 sm:-left-8 z-20 w-40 sm:w-48 bg-[#0047FF] text-white rounded-2xl p-3 shadow-xl text-left">
              <div className="flex items-center justify-between text-[10px] text-blue-100 font-medium">
                <span>Total Revenue</span>
                <span className="text-[9px] text-blue-200">July 1-28</span>
              </div>
              <div className="text-lg sm:text-xl font-black text-white mt-1">
                $120.29
              </div>
              <div className="w-full h-1.5 bg-blue-800 rounded-full mt-2 overflow-hidden">
                <div className="w-[65%] h-full bg-gradient-to-r from-cyan-300 to-[#D2F800] rounded-full" />
              </div>
            </div>

            <div className="absolute top-28 -left-2 sm:-left-8 z-20 w-40 sm:w-48 bg-[#0047FF] text-white rounded-2xl p-3 shadow-xl text-left">
              <div className="flex items-center justify-between text-[10px] text-blue-100 font-medium">
                <span>Year to Date</span>
                <span className="text-[9px] text-blue-200">2023</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-base sm:text-lg font-black text-white">
                  $1,200.38
                </span>
                <span className="text-[9px] font-bold bg-[#D2F800] text-slate-950 px-1.5 py-0.5 rounded-full">
                  +128
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 right-2 sm:right-6 z-20 bg-white text-slate-900 rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-100 text-left space-y-1">
              <h5 className="font-extrabold text-xs text-slate-900">
                Happy Students
              </h5>
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-900">
                <span>4.5</span>
                <span className="text-[9px] text-slate-400 font-normal">(240)</span>
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              </div>
              <div className="flex items-center -space-x-1.5 pt-1">
                {AVATAR_LIST.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="relative w-5 h-5 rounded-full border border-white overflow-hidden bg-slate-200"
                  >
                    <Image
                      src={avatar}
                      alt="Student"
                      fill
                      sizes="20px"
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-5 h-5 rounded-full border border-white bg-[#D2F800] text-slate-950 flex items-center justify-center text-[8px] font-bold">
                  2K+
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute top-16 right-0 sm:right-4 z-20">
              <ShapeSquiggle className="w-16 sm:w-20 drop-shadow-lg" />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 lg:max-w-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Create &amp; Manage Courses Easily.
            </h2>

            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
              <strong className="text-slate-900 font-bold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            <div className="space-y-4 pt-2">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0047FF] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
