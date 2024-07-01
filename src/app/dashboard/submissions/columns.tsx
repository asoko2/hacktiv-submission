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
import { login } from "@/api/auth-api";
import { Submission } from "@/lib/definition";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

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
    accessorKey: "status_name",
    header: "Status",
  },
  {
    accessorKey: "year",
    header: "Tahun",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { pending } = useFormStatus();
      const [error, formAction] = useFormState(login, undefined);

      const submission = row.original;
      const [isDialogOpen, setIsDialogOpen] = useState(false);

      return (
        <div className="flex items-center justify-center gap-2">
          <TooltipProvider>
            <Tooltip delayDuration={150}>
              <TooltipTrigger asChild>
                <Link href={`/dashboard/submissions/${submission.id}`}>
                  <Button variant="default" size="icon">
                    <Icon icon="tabler:eye" className="h-4 w-4" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>Detail</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip delayDuration={150}>
              <TooltipTrigger asChild>
                <Link href={`/dashboard/submissions/${submission.id}/edit`}>
                  <Button variant="default" size="icon">
                    <Icon icon="tabler:edit" className="h-4 w-4" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>Edit</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <TooltipProvider>
              <Tooltip delayDuration={150}>
                <AlertDialogTrigger asChild>
                  <TooltipTrigger asChild content="tooltip content">
                    <Button variant="destructive" size="icon">
                      <Icon icon="tabler:trash" className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                </AlertDialogTrigger>
                <TooltipContent>Hapus</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
                <AlertDialogDescription>
                  Data submission {submission.name} akan dihapus permanen.
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
