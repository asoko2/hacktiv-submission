import AddUserForm from "@/app/dashboard/users/tambah/add-user-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AddUserPage(){
  return (
    <div className="flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Tambah User</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="p-6">
          <AddUserForm />
        </CardContent>
      </Card>
    </div>
  )
}