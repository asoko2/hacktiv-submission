"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { login } from "@/api/action";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Submission = {
  id: string;
  name: string;
  total_qty: number;
  total_price: number;
  total_item: number;
  status: string;
  year: number;
  semester: number;
  invoice: string;
};

export const columns: ColumnDef<Submission>[] = [
  {
    id: "rowNumber",
    header: "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "total_qty",
    header: "Jumlah Barang",
  },
  {
    accessorKey: "total_price",
    header: "Total Harga",
    cell: ({ row }) =>
      new Intl.NumberFormat("id-ID").format(row.original.total_price),
  },
  {
    accessorKey: "total_item",
    header: "Total Item",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "year",
    header: "Tahun",
  },
  {
    accessorKey: "semester",
    header: "Semester",
  },
  {
    accessorKey: "invoice",
    header: "Invoice",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { pending } = useFormStatus();
      const [error, formAction] = useFormState(login, undefined);

      const user = row.original;
      const [isDialogOpen, setIsDialogOpen] = useState(false);

      return (
        <div className="flex items-center justify-center gap-2">
          <TooltipProvider>
            <Tooltip delayDuration={150}>
              <TooltipTrigger asChild>
                <Link href={`/dashboard/users/${user.id}/edit`}>
                  <Button variant="default" size="icon">
                    <Icon icon="tabler:edit" className="h-4 w-4" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>Edit</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            {/* <AlertDialog> */}
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="icon">
                <Icon icon="tabler:trash" className="h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
                <AlertDialogDescription>
                  Data user {user.name} akan dihapus permanen.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Batal</AlertDialogCancel>
                <form>
                  <Button
                    type="submit"
                    disabled={pending}
                    variant="destructive"
                  >
                    Hapus
                  </Button>
                </form>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
