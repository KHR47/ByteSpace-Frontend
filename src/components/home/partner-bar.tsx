import * as React from "react";
import { Container } from "@/components/layout/container";

export function PartnerBar() {
  return (
    <section className="w-full bg-[#FAFAFA] border-y border-slate-200/60 py-8 sm:py-10">
      <Container>
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 sm:gap-12 opacity-80">
          <div className="flex items-center gap-2.5 text-slate-700">
            <svg className="w-7 h-7 fill-slate-700" viewBox="0 0 28 28">
              <path d="M14 2C7.37 2 2 7.37 2 14s5.37 12 12 12 12-5.37 12-12S20.63 2 14 2zm0 4c2.8 0 5.3 1.2 7 3.1-1.3.5-3 .9-5 .9-3.5 0-6.2-1.3-8.8-1.3-1.2 0-2.3.3-3.2.7C6.1 7.7 9.8 6 14 6zm-9.8 8.8c.8-.4 1.9-.8 3-.8 3.5 0 6.2 1.3 8.8 1.3 2.5 0 4.6-.7 6.4-1.6.4 1.1.6 2.3.6 3.5 0 2.2-.8 4.2-2.1 5.8-1.5-1.1-3.6-1.8-5.9-1.8-3.4 0-5.9 1.4-8.4 1.4-.9 0-1.8-.2-2.6-.5.1-2.6 1.3-5.2 2.2-7.3z" />
            </svg>
            <span className="font-extrabold text-xl tracking-tight text-slate-800">
              Logoipsum
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-slate-700">
            <svg className="w-7 h-7 fill-slate-700" viewBox="0 0 28 28">
              <circle cx="14" cy="14" r="5" />
              <path d="M14 3v3M14 22v3M3 14h3M22 14h3M6.2 6.2l2.1 2.1M19.7 19.7l2.1 2.1M6.2 21.8l2.1-2.1M19.7 8.3l2.1-2.1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span className="font-extrabold text-xl tracking-tight text-slate-800">
              Logoipsum
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-slate-700">
            <svg className="w-7 h-7 fill-slate-700" viewBox="0 0 28 28">
              <circle cx="14" cy="14" r="12" />
              <path d="M15 5L9 15h5l-2 8 8-10h-5l2-8z" fill="#FAFAFA" />
            </svg>
            <span className="font-extrabold text-xl tracking-tight text-slate-800">
              Logoipsum
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-slate-700">
            <svg className="w-7 h-7 fill-slate-700" viewBox="0 0 28 28">
              <circle cx="14" cy="7" r="4" />
              <circle cx="14" cy="21" r="4" />
              <circle cx="7" cy="14" r="4" />
              <circle cx="21" cy="14" r="4" />
              <circle cx="14" cy="14" r="2.5" fill="#FAFAFA" />
            </svg>
            <span className="font-extrabold text-xl tracking-tight text-slate-800">
              Logoipsum
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-slate-700">
            <svg className="w-7 h-7 fill-slate-700" viewBox="0 0 28 28">
              <circle cx="14" cy="14" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="14" cy="14" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="14" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M14 2v24M2 14h24" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            </svg>
            <span className="font-extrabold text-xl tracking-tight text-slate-800">
              Logoipsum
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
