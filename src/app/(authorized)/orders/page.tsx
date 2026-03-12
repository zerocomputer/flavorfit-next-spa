import { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";

export const metadata: Metadata = {
    title: 'Планы',
    ...NO_INDEX_PAGE,
}

export default function Page() {
    return <div>
        Планы
    </div>
}