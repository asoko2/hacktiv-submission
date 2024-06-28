"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  DialogFooter,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: string;
  name: string;
  groups: string[];
};

export const groups = ["hrd", "atasan", "pengesah", "pegawai"];

export const columns: ColumnDef<User>[] = [
  {
    id: "rowNumber",
    header: "No",
    size: 50,
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "name",
    header: "Nama",
    size: 50,
  },
  {
    accessorKey: "groups",
    header: "Hak Akses",
    size: 50,
  },
  {
    id: "actions",
    size: 50,
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="flex items-center justify-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon">
                <Icon icon="tabler:edit" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Hak Akses</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {groups.map((group) => (
                  <label key={group} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      defaultChecked={user.groups.includes(group)}
                    />
                    {group}
                  </label>
                ))}
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
