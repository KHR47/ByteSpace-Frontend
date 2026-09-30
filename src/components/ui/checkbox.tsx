import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, checked, defaultChecked, onChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(
      checked ?? defaultChecked ?? false
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
      onChange?.(e);
    };

    const checkboxId = id || (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <label
        htmlFor={checkboxId}
        className="inline-flex items-center gap-2.5 cursor-pointer select-none group"
      >
        <div className="relative flex items-center justify-center">
          <input
            id={checkboxId}
            type="checkbox"
            ref={ref}
            checked={checked !== undefined ? checked : isChecked}
            onChange={handleChange}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              "w-4 h-4 rounded-md border border-slate-300 bg-white transition-all peer-checked:bg-[#1A56DB] peer-checked:border-[#1A56DB] peer-focus-visible:ring-2 peer-focus-visible:ring-[#1A56DB]/30 group-hover:border-slate-400 flex items-center justify-center",
              className
            )}
          >
            <Check className="w-3 h-3 text-white stroke-[3] opacity-0 peer-checked:opacity-100 transition-opacity" />
          </div>
        </div>
        {label && (
          <span className="text-xs text-slate-600 group-hover:text-slate-900 transition-colors">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
