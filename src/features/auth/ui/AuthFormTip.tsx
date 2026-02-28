import { PAGES } from "@/src/shared/config/page.config";
import Link from "next/link";

interface AuthFormTipProps {
    isSignIn: boolean;
}

export function AuthFormTip({ isSignIn }: AuthFormTipProps) {
    return (
        <div className="w-full">
            {
                isSignIn ?
                    (
                        <div className="flex items-center justify-center gap-1">
                            Нет аккаунта?
                            <Link className="text-primary" href={PAGES.SIGN_UP}>
                                Создать аккаунт!
                            </Link>
                        </div>
                    ):
                    (
                        <div className="flex items-center justify-center gap-1">
                            Уже есть аккаунт?
                            <Link className="text-primary" href={PAGES.SIGN_IN}>
                                Войти!
                            </Link>
                        </div>
                    )
            }
        </div>
    );
}