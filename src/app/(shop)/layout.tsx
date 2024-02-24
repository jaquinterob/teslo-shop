import {} from "@/components";
import { TopMenu, Sidebar } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="px-o sm:px-10">{children}</div>
    </main>
  );
}
