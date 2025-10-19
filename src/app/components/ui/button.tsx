// src/app/components/ui/button.tsx
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary";
}

export function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center font-medium rounded-md transition ${
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : variant === "secondary"
          ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
      } ${className}`}
    >
      {children}
    </button>
  );
}
