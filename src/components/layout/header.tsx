import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";
import { saveGroup } from "@/api/authorization";
import SwitchGroupComponent from "@/components/switch-group";

export default function Header() {
  const { currentGroup, currentPermissions, currentSession, switchGroup } =
    useAuth();

  const onChangeGroup = (group: string) => {
    switchGroup(group);
    saveGroup(group);
  };

  if (!currentSession) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" h-16 bg-white top-0 left-0 right-0 fixed z-10 ml-64 border-b-2 flex justify-end items-center px-8 gap-4">
      <SwitchGroupComponent />
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={"/ganti-password"}>Ganti Password</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/logout"} className="w-full">
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
