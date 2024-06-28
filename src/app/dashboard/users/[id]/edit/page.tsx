import EditUserForm from "@/app/dashboard/users/[id]/edit/edit-user-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function EditUserPage() {
  return (
    <div className="flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Edit User</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="p-6">
          <EditUserForm />
        </CardContent>
      </Card>
    </div>
  );
}
