import { Header } from "@/src/features/layout/ui/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="mt-20 px-6 py-3">{children}</div>
    </div>
  );
}
