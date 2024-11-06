import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "w-64 pl-12 pr-6 py-2 rounded-full shadow-md dark:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400",
          "bg-white text-gray-900 placeholder-gray-500",
          "dark:bg-white dark:text-gray-100 dark:placeholder-gray-400",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
