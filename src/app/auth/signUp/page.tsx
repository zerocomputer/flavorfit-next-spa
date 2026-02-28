import { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { AuthForm } from "@/src/features/auth/ui/AuthForm";

export const metadata: Metadata = {
    title: 'Регистрация',
    ...NO_INDEX_PAGE,
}

export default function Page() {
    return <div className="min-h-[80vh] flex flex-col justify-center">
        <AuthForm type="signUp" />
    </div>
}