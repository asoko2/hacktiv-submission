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
import { SubmissionItem } from "@/lib/definition";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SubmitButton from "@/components/submit-button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<SubmissionItem>[] = [
  {
    id: "rowNumber",
    header: "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "itemName",
    header: "Nama Barang",
  },
  {
    accessorKey: "price",
    header: "Harga",

    cell: ({ row }) => (
      <div className="text-right">
        {new Intl.NumberFormat("id-ID").format(row.original.price)}
      </div>
    ),
  },
  {
    accessorKey: "qty",
    header: "Jumlah Barang",
    cell: ({ row }) => new Intl.NumberFormat("id-ID").format(row.original.qty),
  },
  {
    accessorKey: "total",
    header: "Total Harga",
    cell: ({ row }) =>
      new Intl.NumberFormat("id-ID").format(row.original.total),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { pending } = useFormStatus();
      const [error, formAction] = useFormState(login, undefined);

      const submissionItem = row.original;
      const [isDialogOpen, setIsDialogOpen] = useState(false);
      const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

      return (
        <div className="flex items-center justify-center gap-2">
          <AlertDialog
            open={isEditDialogOpen}
            onOpenChange={setIsEditDialogOpen}
          >
            <AlertDialogTrigger asChild>
              <Button size="icon">
                <Icon icon="tabler:edit" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="">
              <AlertDialogHeader>
                <AlertDialogTitle>Edit Hak Akses</AlertDialogTitle>
              </AlertDialogHeader>
              <div className="grid gap-4 py-4">
                <form action={formAction}>
                  <div className="flex gap-4 mb-4 items-center">
                    <Label htmlFor="itemName" className="w-2/5">
                      Nama Barang
                    </Label>
                    <Input
                      id="itemName"
                      defaultValue={submissionItem.itemName}
                    />
                  </div>
                  <div className="flex justify-end">
                    <div className="w-1/2">
                      <div className="flex gap-4">
                        <AlertDialogCancel className="w-1/2">
                          Batal
                        </AlertDialogCancel>
                        <div className="w-1/2">
                          <SubmitButton>Simpan</SubmitButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </AlertDialogContent>
          </AlertDialog>
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
                  Data submission {submissionItem.itemName} akan dihapus
                  permanen.
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
