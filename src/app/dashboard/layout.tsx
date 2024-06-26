import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full flex justify-center mx-auto bg-slate-100">
      <div className="w-full">
        <Sidebar />
        <div className="flex ml-64 flex-grow">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
