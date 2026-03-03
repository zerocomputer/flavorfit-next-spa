import Link from "next/link";
import { Logo } from "../../../shared/components/Logo";
import { HeaderNavMenu } from "./HeaderNavMenu";
import { PAGES } from "@/src/shared/config/page.config";
import { HeaderUser } from "./HeaderUser";
import { HeaderButton } from "./HeaderButton";
import { BellIcon, HeadsetIcon } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center py-4 px-8">
                <Link className="mr-8" href={PAGES.DASHBOARD}>
                    <Logo className="size-10" />
                </Link>

                <HeaderNavMenu />

                <div className="ml-auto flex items-center gap-4">
                    <HeaderButton icon={HeadsetIcon} />
                    <HeaderButton icon={BellIcon} />

                    <HeaderUser
                        avatarUrl="https://github.com/zerocomputer.png"
                        name="Nikita"
                        email="zerocomputer@yandex.ru"
                    />
                </div>
            </div>
        </header>
    );
}