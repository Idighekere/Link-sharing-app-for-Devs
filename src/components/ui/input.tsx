import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-borders bg-white px-3 py-[7px] text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-dark-grey/50 focus-visible:outline-none /focus-visible:ring-1 /focus-visible:ring-purple         disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",className
        )}
        ref={ref}
        {...props}
        // style={{boxShadow: "0px 0px 32px rgba(99, 60, 255, 0.25)"}}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
