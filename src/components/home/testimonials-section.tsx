import * as React from "react";
import { Container } from "@/components/layout/container";
import { TestimonialCard } from "./testimonial-card";
import { MOCK_TESTIMONIALS } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-white overflow-hidden">
      <div className="pointer-events-none absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-[#D2F800]/15 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-14 sm:mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MOCK_TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
