"use client";
import { submissionItems } from "@/app/dashboard/submissions/[id]/edit/data";
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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

export default function SubmissionDetailPage() {
  const { pending } = useFormStatus();
  // const [error, formAction] = useFormState(login, undefined);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="flex-1">
      <div className="mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href="/dashboard/submissions">Pengajuan Barang</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Pengajuan Laptop</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">Detail Pengajuan</h1>
            <Button variant="default">Tambah Barang</Button>
          </div>
          <Separator className="my-2" />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/12">NO</TableHead>
                <TableHead className="w-3/12">Nama Barang</TableHead>
                <TableHead className="w-1/12 text-right">Harga</TableHead>
                <TableHead className="w-2/12 text-right">
                  Jumlah Barang
                </TableHead>
                <TableHead className="w-2/12 text-right">Total Harga</TableHead>
                <TableHead className="text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissionItems.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.itemName}</TableCell>
                  <TableCell className="text-right">
                    {new Intl.NumberFormat("id-ID").format(item.price)}
                  </TableCell>
                  <TableCell className="text-right">
                    {new Intl.NumberFormat("id-ID").format(item.qty)}
                  </TableCell>
                  <TableCell className="text-right">
                    {new Intl.NumberFormat("id-ID").format(item.total)}
                  </TableCell>
                  <TableCell className="justify-center flex gap-2">
                    <Dialog>
                      <TooltipProvider>
                        <Tooltip delayDuration={150}>
                          <DialogTrigger asChild>
                            <TooltipTrigger asChild content="tooltip content">
                              <Button size="icon">
                                <Icon icon="tabler:edit" />
                              </Button>
                            </TooltipTrigger>
                          </DialogTrigger>
                          <TooltipContent>Edit</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit Barang</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="flex flex-col">
                            <div className="mb-4">
                              <label htmlFor="name" className="block text-sm">
                                Nama Barang
                              </label>
                              <Input
                                type="text"
                                id="name"
                                className="input"
                                defaultValue={item.itemName}
                              />
                            </div>
                            <div className="mb-4">
                              <label htmlFor="price" className="block text-sm">
                                Harga
                              </label>
                              <Input
                                type="number"
                                id="price"
                                className="input"
                                defaultValue={item.price}
                              />
                            </div>
                            <div className="mb-4">
                              <label htmlFor="qty" className="block text-sm">
                                Jumlah Barang
                              </label>
                              <Input
                                type="number"
                                id="qty"
                                className="input"
                                defaultValue={item.qty}
                              />
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <AlertDialog>
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
                          <AlertDialogTitle>
                            Apakah anda yakin?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Data barang {item.itemName} akan dihapus permanen.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <form>
                            <Button type="submit" variant="destructive">
                              Hapus
                            </Button>
                          </form>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
