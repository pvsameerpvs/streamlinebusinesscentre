import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "dark";
}

export const Badge = ({
  className,
  variant = "default",
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "outline" &&
          "border border-border bg-background text-foreground",
        variant === "dark" && "bg-accent text-accent-foreground",
        className
      )}
      {...props}
    />
  );
};
