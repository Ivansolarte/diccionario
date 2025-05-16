"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = ({
  className = "",
  hasError = false,
  ...props
}: InputProps) => {
  const baseStyles =
    "border px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-700";
  const errorStyles = "border-red-500 dark:border-red-400";

  return (
    <input
      className={`${baseStyles} ${
        hasError ? errorStyles : "border-gray-300"
      } ${className}`}
      {...props}
    />
  );
};
