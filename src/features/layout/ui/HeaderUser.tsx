import { Avatar, AvatarFallback, AvatarImage } from "@/src/shared/components/ui/avatar";
import { PAGES } from "@/src/shared/config/page.config";
import { cn } from "@/src/shared/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

interface HeaderUserProps {
    name: string;
    email: string;
    avatarUrl: string;
    isActive: boolean;
    className?: string;
}

export const HeaderUser = forwardRef<HTMLDivElement, HeaderUserProps>(
    ({ avatarUrl, name, email, className, isActive, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "group flex items-center gap-2 max-h-10 cursor-pointer",
                    "transition-all duration-300 bg-transparent rounded-4xl p-0",
                    "hover:bg-popover-foreground hover:rounded-sm hover:text-popover hover:p-2",
                    isActive && "bg-popover-foreground rounded-sm text-popover p-2",
                    className
                )}
                {...props}
            >
                <Avatar
                    className={cn(
                        "transition-all duration-200 size-10! group-hover:size-8!",
                        isActive && "size-8!"
                    )}
                >
                    <AvatarImage src={avatarUrl} />
                    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                    <span
                        className="font-sans text-sm font-medium"
                    >
                        {name}
                    </span>

                    <span
                        className={cn(
                            "font-mono text-xs text-secondary-foreground transition-colors duration-300 group-hover:text-popover",
                            isActive && "text-popover"
                        )}
                    >
                        {email}
                    </span>
                </div>
            </div>
        );
    }
);