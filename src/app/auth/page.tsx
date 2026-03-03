import { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { SignForm } from "@/src/features/auth/ui/SignForm";
import { Logo } from "@/src/shared/components/Logo";

export const metadata: Metadata = {
    title: 'Авторизация',
    ...NO_INDEX_PAGE,
}

export default function Page() {
    return <div className="fixed left-0 right-0 top-0 bottom-0 min-h-dvh flex flex-col items-center justify-center gap-8">
        <Logo className="size-18" />
        <SignForm />
    </div>
}