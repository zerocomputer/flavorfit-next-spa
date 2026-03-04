'use client';

import { menuItems } from "../data/menu-items.data";
import { HeaderNavItem } from "./HeaderNavItem";
import { match } from "path-to-regexp";
import { usePathname } from "next/navigation";

export function HeaderNavMenu() {
    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-4">
            {
                menuItems.map((item) => (
                    <HeaderNavItem key={item.href} menuItem={item} isActive={!!match(item.href)(pathname)} />
                ))
            }
        </nav>
    );
}