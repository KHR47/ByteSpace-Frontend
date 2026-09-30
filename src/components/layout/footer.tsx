"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="w-full bg-white border-t border-slate-200/70 pt-16 sm:pt-20 pb-10 text-slate-700">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-6 space-y-5 max-w-md">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#D2F800] flex items-center justify-center text-slate-950 font-black text-xl shadow-xs">
                b
              </div>
              <span className="font-black text-2xl tracking-tight text-slate-900">
                ByteSpace
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-11 sm:h-12 px-5 rounded-full border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 w-full sm:w-72 shadow-xs transition-colors"
              />
              <button
                type="submit"
                className="h-11 sm:h-12 px-7 rounded-full bg-[#D2F800] text-slate-950 font-extrabold text-sm hover:bg-[#BEE300] hover:scale-105 transition-all shadow-xs cursor-pointer shrink-0"
              >
                Search
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-emerald-600 font-semibold animate-in fade-in">
                ✓ Thank you for subscribing to our newsletter!
              </p>
            )}

            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal pt-1">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 pt-2 lg:pt-0">
            <ul className="space-y-4 text-xs sm:text-sm font-normal text-slate-600">
              <li>
                <Link href="/#courses" className="hover:text-slate-950 transition-colors">
                  Featured Courses
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="hover:text-slate-950 transition-colors">
                  Featured Categories
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="hover:text-slate-950 transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="hover:text-slate-950 transition-colors">
                  IT
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="hover:text-slate-950 transition-colors">
                  Design
                </Link>
              </li>
            </ul>

            <ul className="space-y-4 text-xs sm:text-sm font-normal text-slate-600">
              <li>
                <Link href="/#courses" className="hover:text-slate-950 transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="hover:text-slate-950 transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="hover:text-slate-950 transition-colors">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="hover:text-slate-950 transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="hover:text-slate-950 transition-colors">
                  Sport
                </Link>
              </li>
            </ul>

            <ul className="space-y-4 text-xs sm:text-sm font-normal text-slate-600 col-span-2 sm:col-span-1">
              <li>
                <Link href="/register" className="hover:text-slate-950 transition-colors">
                  Become a Creator
                </Link>
              </li>
              <li>
                <Link href="/#affiliate" className="hover:text-slate-950 transition-colors">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-slate-950 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#help" className="hover:text-slate-950 transition-colors">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-slate-950 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 sm:mt-20 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            @ 2023 ByteSpace. All rights reserved.
          </div>

          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="/#privacy" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#terms" className="hover:text-slate-800 transition-colors">
              Terms of Service
            </Link>
            <Link href="/#cookies" className="hover:text-slate-800 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
