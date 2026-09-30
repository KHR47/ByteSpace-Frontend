"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function RegisterForm() {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState<{
    fullName?: string;
    email?: string;
    password?: string;
  }>({});
  const [isLoading, setIsLoading] = React.useState(false);

  const validate = () => {
    const newErrors: {
      fullName?: string;
      email?: string;
      password?: string;
    } = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
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
      alert("Account created successfully for " + fullName);
    }, 1000);
  };

  return (
    <div className="w-full max-w-[480px] bg-white rounded-[32px] p-8 sm:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.18)] border border-slate-100/80">
      <span className="block text-sm font-semibold text-[#0047FF] mb-1">
        Create an Account
      </span>

      <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-8">
        Welcome to <br />
        ByteSpace
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="space-y-2">
          <label
            htmlFor="register-fullname"
            className="block text-sm font-medium text-slate-700"
          >
            Full Name
          </label>
          <input
            id="register-fullname"
            type="text"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (errors.fullName)
                setErrors((prev) => ({ ...prev, fullName: undefined }));
            }}
            placeholder="Jamie Davis"
            className={`w-full h-12 px-4 rounded-xl border ${
              errors.fullName
                ? "border-red-500 ring-2 ring-red-500/10"
                : "border-slate-200"
            } text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#0047FF] focus:ring-2 focus:ring-[#0047FF]/10 transition-all`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 font-medium mt-1">
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="register-email"
            className="block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            id="register-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email)
                setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder="designer@example.com"
            className={`w-full h-12 px-4 rounded-xl border ${
              errors.email
                ? "border-red-500 ring-2 ring-red-500/10"
                : "border-slate-200"
            } text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#0047FF] focus:ring-2 focus:ring-[#0047FF]/10 transition-all`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 font-medium mt-1">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="register-password"
            className="block text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <input
            id="register-password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password)
                setErrors((prev) => ({ ...prev, password: undefined }));
            }}
            placeholder="••••••••"
            className={`w-full h-12 px-4 rounded-xl border ${
              errors.password
                ? "border-red-500 ring-2 ring-red-500/10"
                : "border-slate-200"
            } text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-[#0047FF] focus:ring-2 focus:ring-[#0047FF]/10 transition-all`}
          />
          {errors.password && (
            <p className="text-xs text-red-600 font-medium mt-1">
              {errors.password}
            </p>
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
            {isLoading ? "Creating..." : "Continue"}
          </Button>
        </div>

        <p className="text-center text-xs text-slate-500 pt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#0047FF] hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
