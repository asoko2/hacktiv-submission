import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full flex justify-center mx-auto bg-white">
      <div className="w-full bg-red-500">
        <Sidebar />
        <div className="flex flex-col ml-64 flex-grow">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
