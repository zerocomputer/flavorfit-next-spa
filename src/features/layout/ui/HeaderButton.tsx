import { cn } from "@/src/shared/lib/utils";
import { LucideIcon } from "lucide-react";
import { forwardRef } from "react";

interface HeaderButtonProps { 
    icon: LucideIcon;
    className?: string;
    isActive?: boolean;
}

export const HeaderButton = forwardRef<HTMLButtonElement, HeaderButtonProps>(
    ({ icon: Icon, isActive, className, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "size-10 rounded-4xl bg-muted p-2 flex items-center justify-center cursor-pointer",
                    "transition-all hover:bg-popover-foreground hover:rounded-sm hover:text-popover duration-300",
                    isActive && "bg-popover-foreground rounded-sm text-popover",
                    className
                )}
                {...props}
            >
                <Icon className="size-5" />
            </button>
        );
    });