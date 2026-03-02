import { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { SignForm } from "@/src/features/auth/ui/SignForm";

export const metadata: Metadata = {
    title: 'Авторизация',
    ...NO_INDEX_PAGE,
}

export default function Page() {
    return <div className="min-h-[80vh]">
        <SignForm />
    </div>
}