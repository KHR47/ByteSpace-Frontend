"use client";

import * as React from "react";
import { Container } from "@/components/layout/container";
import { CourseCard } from "./course-card";
import { MOCK_COURSES } from "@/lib/data";
import { Course } from "@/types";
import { cn } from "@/lib/utils";

const CATEGORY_ROWS = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
    "+ More",
  ],
];

export function CoursesSection({
  searchQuery = "",
}: {
  searchQuery?: string;
}) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("Featured");
  const [enrolledCourse, setEnrolledCourse] = React.useState<string | null>(null);

  const filteredCourses = React.useMemo(() => {
    return MOCK_COURSES.filter((course) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  const handleEnroll = (course: Course) => {
    setEnrolledCourse(course.title);
    setTimeout(() => {
      setEnrolledCourse(null);
    }, 4000);
  };

  return (
    <section id="courses" className="w-full py-16 sm:py-20 bg-white scroll-mt-10">
      <Container>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Discover Your Passion, <br />
            Build Your Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 mb-12 sm:mb-14">
          {CATEGORY_ROWS.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
            >
              {row.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs",
                      isActive
                        ? "bg-[#D2F800] text-slate-950 font-bold shadow-[0_4px_12px_rgba(210,248,0,0.35)]"
                        : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/90 hover:text-slate-900"
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {enrolledCourse && (
          <div className="max-w-xl mx-auto mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs sm:text-sm text-center font-medium shadow-sm animate-in fade-in slide-in-from-top-2">
            🎉 Great choice! You enrolled in <strong>{enrolledCourse}</strong>. Happy learning!
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEnroll={handleEnroll}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
