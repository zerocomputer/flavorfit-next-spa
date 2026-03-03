import { PAGES } from "@/src/shared/config/page.config";
import { IMenuItem } from "../interface/menu-item.interface";
import { BookMarkedIcon, CalendarDaysIcon, HomeIcon, StoreIcon, UsersRoundIcon } from "lucide-react";

export const menuItems: IMenuItem[] = [
    {
        icon: HomeIcon,
        label: 'Главная',
        href: PAGES.DASHBOARD,
    },
    {
        icon: CalendarDaysIcon,
        label: 'Планы',
        href: PAGES.PLANS,
    },
    {
        icon: StoreIcon,
        label: 'Заказы',
        href: PAGES.ORDERS,
    },
    {
        icon: BookMarkedIcon,
        label: 'Рецепты',
        href: PAGES.RECIPES,
    },
    {
        icon: UsersRoundIcon,
        label: 'Форум',
        href: PAGES.FORUM,
    },
];