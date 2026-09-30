import * as React from "react";
import Image from "next/image";
import { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-start space-y-5 text-left",
        className
      )}
    >
      <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          sizes="56px"
          className="object-cover"
        />
      </div>

      <div className="space-y-0.5">
        <h4 className="font-black text-lg text-slate-900 tracking-tight">
          {testimonial.name}
        </h4>
        <p className="text-xs sm:text-sm font-semibold text-[#0047FF]">
          {testimonial.role}
        </p>
      </div>

      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>
  );
}
