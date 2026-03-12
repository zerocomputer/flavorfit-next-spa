import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Личный кабинет",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex min-w-fit flex-col items-start">
        <h3 className="text-4xl">
          Привет, <b>Никита</b>
        </h3>
        <p className="text-2xl">
          За сегодня <b>8</b> упражнений
        </p>
      </div>
    </div>
  );
}
