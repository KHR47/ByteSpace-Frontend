"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./container";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Creators", href: "/#creators" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full z-50 bg-[#0047FF] text-white">
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="ByteSpace Home"
          >
            <div className="w-8 h-8 rounded-xl bg-[#D2F800] flex items-center justify-center text-[#0047FF] font-black text-xl shadow-md transition-transform group-hover:scale-105">
              b
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white">
              ByteSpace
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#D2F800]",
                    isActive
                      ? "text-white font-bold border-b-2 border-white pb-0.5"
                      : "text-white/85"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/login"
              className="text-sm font-medium text-white hover:text-[#D2F800] transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="text-sm font-medium text-white hover:text-[#D2F800] transition-colors"
            >
              Join Us
            </Link>
            <button
              type="button"
              aria-label="Shopping Bag"
              className="p-1 text-white hover:text-[#D2F800] transition-colors focus:outline-none cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              aria-label="Shopping Bag"
              className="p-1 text-white/90"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-white/90 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-white/90 hover:text-[#D2F800] py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2 text-sm font-medium text-white/90"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                <Button variant="lime" size="md" className="w-full">
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
