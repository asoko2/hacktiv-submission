import { columns } from "@/app/dashboard/users/columns";
import { users } from "@/app/dashboard/users/data";
import { UsersTable } from "@/app/dashboard/users/users-table";

export default function UsersPage() {
  return (
    <div className="flex-1">
      <div className="flex flex-1">
        <UsersTable columns={columns} data={users} />
      </div>
    </div>
  );
}
