import { columns } from "@/app/dashboard/users/permissions/columns";
import { usersPermission } from "@/app/dashboard/users/permissions/data";
import { UsersPermissionTable } from "@/app/dashboard/users/permissions/users-permissions-table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function UsersPermissionPage() {
  return (
    <div className="flex-1">
      <div className="mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/dashboard">
                Dashboard
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Users Permission</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-1">
        <UsersPermissionTable columns={columns} data={usersPermission} />
      </div>
    </div>
  );
}
