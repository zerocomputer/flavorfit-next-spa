import * as React from "react"
import { LucideIcon } from "lucide-react"

import { cn } from "@/src/shared/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  leftLucideIcon?: LucideIcon
  rightLucideIcon?: LucideIcon
}

function Input({
  className,
  type,
  leftLucideIcon: LeftLucideIcon,
  rightLucideIcon: RightLucideIcon,
  ...props
}: InputProps) {
  return (
    <div
      className={cn(
        "relative flex items-center w-full",
        "h-12 rounded-full border border-input px-4 shadow-xs transition-[color,box-shadow] outline-none bg-background",
        "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
    >
      {LeftLucideIcon && (
        <span className="absolute left-4 flex items-center justify-center text-muted-foreground">
          <LeftLucideIcon className="h-5 w-5" />
        </span>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30",
          "h-full w-full min-w-0 bg-transparent text-base outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 font-sans",
          LeftLucideIcon ? "pl-10" : "pl-4",
          RightLucideIcon ? "pr-10" : "pr-4"
        )}
        {...props}
      />
      {RightLucideIcon && (
        <span className="absolute right-4 flex items-center justify-center text-muted-foreground">
          <RightLucideIcon className="h-5 w-5" />
        </span>
      )}
    </div>
  )
}

export { Input }