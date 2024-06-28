import { submissionItems } from "@/app/dashboard/submissions/[id]/data";
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

export default function SubmissionDetailPage() {
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
                <TableHead className="text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissionItems.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
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
                          <DialogTitle>Edit Hak Akses</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">Tes</div>
                        <DialogFooter>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <TooltipProvider>
                        <Tooltip delayDuration={150}>
                          <DialogTrigger asChild>
                            <TooltipTrigger asChild content="tooltip content">
                              <Button size="icon" variant={"destructive"}>
                                <Icon icon="tabler:trash" />
                              </Button>
                            </TooltipTrigger>
                          </DialogTrigger>
                          <TooltipContent>Hapus</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit Hak Akses</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">Tes</div>
                        <DialogFooter>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
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
