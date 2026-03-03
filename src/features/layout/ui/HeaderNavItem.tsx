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
                "text-secondary-foreground py-2 px-4 rounded-md bg-transparent scale-100",
                "flex items-center gap-3",
                "transition-all hover:bg-secondary hover:rounded-4xl hover:scale-110 duration-500",
                isActive && "bg-secondary rounded-4xl scale-110"
            )}
        >
            <menuItem.icon size={20} className="text-primary" />
            {menuItem.label}
        </Link>
    );
}