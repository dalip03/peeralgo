// src/app/components/ui/badge.tsx
import React, { ReactNode, HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "success" | "warning";
}

export function Badge({
  children,
  className = "",
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={`inline-flex items-center justify-center rounded-full px-2 py-0.5 text-sm font-medium ${
        variant === "success"
          ? "bg-green-100 text-green-700 border border-green-200"
          : variant === "warning"
          ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
          : "bg-white text-gray-700 border border-gray-200"
      } ${className}`}
    >
      {children}
    </span>
  );
}
