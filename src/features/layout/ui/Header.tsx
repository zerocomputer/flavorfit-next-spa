import { Logo } from "../../../shared/components/Logo";
import { HeaderNavMenu } from "./HeaderNavMenu";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-between py-4 px-8">
                <Logo className="size-10" />
                <HeaderNavMenu />
            </div>
        </header>
    );
}