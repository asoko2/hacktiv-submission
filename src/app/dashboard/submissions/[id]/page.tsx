"use client";

import { submissionItems } from "@/app/dashboard/submissions/[id]/data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
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
import Link from "next/link";
import { useState } from "react";
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
          <h1 className="text-xl font-semibold">Detail Pengajuan</h1>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
