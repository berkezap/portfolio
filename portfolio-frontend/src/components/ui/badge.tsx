import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        {
          "border-transparent bg-blue-600 text-white hover:bg-blue-700":
            variant === "default",
          "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100":
            variant === "secondary",
          "border-transparent bg-red-600 text-white hover:bg-red-700":
            variant === "destructive",
          "border-gray-300 text-gray-900 dark:border-gray-600 dark:text-gray-100": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge }; 