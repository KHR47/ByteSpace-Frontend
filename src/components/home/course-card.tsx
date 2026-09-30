import * as React from "react";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";
import { Course } from "@/types";
import { cn } from "@/lib/utils";

export interface CourseCardProps {
  course: Course;
  className?: string;
  onEnroll?: (course: Course) => void;
}

const AVATAR_LIST = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&auto=format&fit=crop&q=80",
];

export function CourseCard({
  course,
  className,
  onEnroll,
}: CourseCardProps) {
  return (
    <div
      onClick={() => onEnroll?.(course)}
      className={cn(
        "group relative bg-white rounded-3xl p-3 sm:p-3.5 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,71,255,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer",
        className
      )}
    >
      <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-slate-100">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute bottom-3 inset-x-2.5 flex items-center justify-between gap-1.5 z-10">
          <span className="bg-white/85 backdrop-blur-md text-slate-800 text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-1 rounded-full shadow-xs">
            {course.lessonsCount ?? 17} Lessons
          </span>
          <span className="bg-white/85 backdrop-blur-md text-slate-800 text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-1 rounded-full shadow-xs">
            {course.duration ?? "2 hours 16 mins"}
          </span>
          <span className="bg-white/85 backdrop-blur-md text-slate-800 text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-1 rounded-full shadow-xs">
            {course.commentsCount ?? 59} Comments
          </span>
        </div>
      </div>

      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-[#0047FF] transition-colors line-clamp-1 leading-snug">
            {course.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0 text-slate-700 text-xs sm:text-sm font-bold">
            <span>{course.rating.toFixed(1)}</span>
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </div>
        </div>

        <div className="text-xs font-semibold text-[#0047FF]">
          by {course.instructor.name}
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
            <BarChart2 className="w-3.5 h-3.5 text-slate-500 rotate-90" />
            <span>{course.level ?? "Beginner"}</span>
          </div>

          <div className="flex items-center -space-x-1.5">
            {AVATAR_LIST.map((avatar, idx) => (
              <div
                key={idx}
                className="relative w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-slate-200"
              >
                <Image
                  src={avatar}
                  alt="Student"
                  fill
                  sizes="24px"
                  className="object-cover"
                />
              </div>
            ))}
            <div className="relative w-6 h-6 rounded-full border-2 border-white bg-[#D2F800] text-slate-950 font-black text-[9px] flex items-center justify-center">
              {course.enrolledStudentsCount ?? "26+"}
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 flex items-baseline">
          <span className="text-[#0047FF] font-black text-xl sm:text-2xl">
            ${course.price}
          </span>
          <span className="text-slate-400 text-xs font-medium ml-1">
            {course.priceSuffix ?? "/lifetime"}
          </span>
        </div>
      </div>
    </div>
  );
}
