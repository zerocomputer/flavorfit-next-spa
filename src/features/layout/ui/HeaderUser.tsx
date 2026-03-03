import { Avatar, AvatarFallback, AvatarImage } from "@/src/shared/components/ui/avatar";
import { PAGES } from "@/src/shared/config/page.config";
import { cn } from "@/src/shared/lib/utils";
import Link from "next/link";

interface HeaderUserProps {
    name: string;
    email: string;
    avatarUrl: string;
    className?: string;
}

export function HeaderUser({avatarUrl, name, email, className}: HeaderUserProps) {
    return (
        <Link href={PAGES.PROFILE} className={cn("flex items-center gap-2", className)}>
            <Avatar size="lg">
                <AvatarImage src={avatarUrl} />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
                <span className="font-sans text-sm font-medium">{name}</span>
                <span className="font-mono text-xs text-secondary-foreground">{email}</span>
            </div>
        </Link>
    );
}