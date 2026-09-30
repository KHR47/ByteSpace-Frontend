import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  reviewsCount?: number;
  size?: "sm" | "md";
  className?: string;
}

export function RatingStars({
  rating,
  maxRating = 5,
  reviewsCount,
  size = "sm",
  className,
}: RatingStarsProps) {
  const iconSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <div className="flex items-center text-amber-400">
        {Array.from({ length: maxRating }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              iconSize,
              i < Math.floor(rating)
                ? "fill-amber-400 text-amber-400"
                : "text-slate-300"
            )}
          />
        ))}
      </div>
      <span className="text-xs font-bold text-slate-900">
        {rating.toFixed(1)}
      </span>
      {reviewsCount !== undefined && (
        <span className="text-xs text-slate-400 font-normal">
          ({reviewsCount})
        </span>
      )}
    </div>
  );
}
