import Link from "next/link";
import { IMenuItem } from "../interface/menu-item.interface";
import { cn } from "@/src/shared/lib/utils";

interface HeaderNavItemProps {
    menuItem: IMenuItem;
    isActive: boolean;
}

export function HeaderNavItem({ menuItem, isActive }: HeaderNavItemProps) {
    return (
        <Link
            href={menuItem.href}
            className={cn(
                "text-secondary-foreground py-3 px-4 rounded-4xl bg-muted font-sans group",
                "flex items-center gap-3",
                "transition-all hover:bg-popover-foreground hover:text-popover hover:rounded-sm duration-300",
                isActive && "bg-popover-foreground text-popover rounded-sm"
            )}
        >
            <menuItem.icon
                size={18}
            />
            <span className="leading-none">{menuItem.label}</span>
        </Link>
    );
}