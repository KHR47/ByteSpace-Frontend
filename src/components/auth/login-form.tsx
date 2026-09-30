"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = React.useState(false);

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Signed in successfully with " + email);
    }, 1000);
  };

  return (
    <div className="w-full max-w-[480px] bg-white rounded-[32px] p-8 sm:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.18)] border border-slate-100/80">
      <span className="block text-sm font-semibold text-[#0047FF] mb-1">
        Sign In
      </span>

      <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-8">
        Welcome Back
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="space-y-2">
          <label
            htmlFor="login-email"
            className="block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder="designer@example.com"
            className={`w-full h-12 px-4 rounded-xl border ${
              errors.email ? "border-red-500 ring-2 ring-red-500/10" : "border-slate-200"
            } text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#0047FF] focus:ring-2 focus:ring-[#0047FF]/10 transition-all`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 font-medium mt-1">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="login-password"
            className="block text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
            }}
            placeholder="••••••••"
            className={`w-full h-12 px-4 rounded-xl border ${
              errors.password ? "border-red-500 ring-2 ring-red-500/10" : "border-slate-200"
            } text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#0047FF] focus:ring-2 focus:ring-[#0047FF]/10 transition-all`}
          />
          {errors.password && (
            <p className="text-xs text-red-600 font-medium mt-1">{errors.password}</p>
          )}
        </div>

        <div className="flex justify-end pt-1">
          <Button
            type="submit"
            variant="lime"
            size="md"
            disabled={isLoading}
            className="px-8 h-11 text-sm font-extrabold rounded-full shadow-[0_4px_14px_rgba(210,248,0,0.35)] hover:scale-105 active:scale-95"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </div>

        <div className="relative flex items-center justify-center pt-2">
          <div className="w-full border-t border-slate-200" />
          <span className="absolute bg-white px-3 text-xs text-slate-400">or</span>
        </div>

        <div className="flex items-center justify-center gap-4 pt-1">
          <button
            type="button"
            className="w-12 h-12 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label="Sign in with Facebook"
          >
            <svg className="w-5 h-5 text-slate-900 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>

          <button
            type="button"
            className="w-12 h-12 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label="Sign in with Google"
          >
            <svg className="w-5 h-5 text-slate-900 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V13.4h6.887C18.2 16.14 15.645 18 12.24 18c-3.655 0-6.6-2.945-6.6-6s2.945-6 6.6-6c1.615 0 3.09.585 4.235 1.57l2.37-2.37C17.01 3.515 14.775 2.6 12.24 2.6 7.025 2.6 2.8 6.825 2.8 12.04s4.225 9.44 9.44 9.44c5.44 0 9.06-3.825 9.06-9.22 0-.62-.065-1.22-.18-1.975H12.24z"/>
            </svg>
          </button>
        </div>

        <p className="text-center text-xs text-slate-500 pt-3">
          New user?{" "}
          <Link
            href="/register"
            className="font-medium text-[#0047FF] hover:underline"
          >
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}
