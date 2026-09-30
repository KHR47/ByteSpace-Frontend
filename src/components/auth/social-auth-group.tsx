import * as React from "react";
import Image from "next/image";

export function SocialAuthGroup({
  label = "Or continue with",
}: {
  label?: string;
}) {
  return (
    <div className="w-full space-y-4">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200"></div>
        </div>
        <span className="relative bg-white px-3 text-xs uppercase tracking-wider text-slate-400">
          {label}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button
          type="button"
          className="h-11 flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 cursor-pointer"
          aria-label="Continue with Google"
        >
          <Image
            src="/icons/google.svg"
            alt="Google"
            width={18}
            height={18}
            className="w-4.5 h-4.5"
          />
        </button>

        <button
          type="button"
          className="h-11 flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 cursor-pointer"
          aria-label="Continue with GitHub"
        >
          <Image
            src="/icons/github.svg"
            alt="GitHub"
            width={18}
            height={18}
            className="w-4.5 h-4.5 text-slate-800"
          />
        </button>

        <button
          type="button"
          className="h-11 flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 cursor-pointer"
          aria-label="Continue with Apple"
        >
          <Image
            src="/icons/apple.svg"
            alt="Apple"
            width={18}
            height={18}
            className="w-4.5 h-4.5 text-slate-900"
          />
        </button>
      </div>
    </div>
  );
}
