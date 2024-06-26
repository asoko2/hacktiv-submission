import MenuItem from "@/components/layout/menu-item";
import { dashboardRoutes } from "@/lib/routes";

export default function Sidebar() {
  return (
    <aside className="fixed w-64 flex-1 flex-col overflow-y-auto hide-scrollbar h-full bg-primary-500/70 text-white shadow-sm border-r-2">
      <div className="w-full h-16 flex items-center justify-center">
        <h1 className="text-xl font-semibold">SIJUANG</h1>
      </div>
      <div className="flex-1 flex flex-col gap-2 px-4 pt-8">
        {dashboardRoutes.map((route, index) => (
          <MenuItem key={index} {...route} />
        ))}
      </div>
    </aside>
  );
}
