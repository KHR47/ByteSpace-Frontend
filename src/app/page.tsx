"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { PartnerBar } from "@/components/home/partner-bar";
import { CoursesSection } from "@/components/home/courses-section";
import { FeatureHighlights } from "@/components/home/feature-highlights";
import { SplitShowcase } from "@/components/home/split-showcase";
import { CtaBanner } from "@/components/home/cta-banner";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleHeroSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#D2F800] selection:text-slate-950">
      <Navbar />

      <main className="flex-1">
        <Hero onSearch={handleHeroSearch} />
        <PartnerBar />
        <CoursesSection searchQuery={searchQuery} />
        <FeatureHighlights />
        <SplitShowcase />
        <CtaBanner />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}
