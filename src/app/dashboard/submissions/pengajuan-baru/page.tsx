"use client";
import { login } from "@/api/auth-api";
import { storeSubmission, storeSubmissionState } from "@/api/submissions-api";
import SubmitButton from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { SubmissionItem } from "@/lib/definition";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FormEvent, useState } from "react";
import { useFormState } from "react-dom";

export default function NewSubmissionsPage() {
  const [submissionsItems, setSubmissionsItems] = useState<SubmissionItem[]>([
    { itemName: "", price: 0, qty: 0, total: 0 },
  ]);
  const initialState: storeSubmissionState = {
    errors: {
      year: [],
      name: [],
    },
    message: null,
  };
  const storeSubmissionWithItems = storeSubmission.bind(null, submissionsItems);
  const [state, formAction] = useFormState(
    storeSubmissionWithItems,
    initialState
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.onformdata?.length);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, index) => currentYear - index);

  const handleClick = () => {
    setSubmissionsItems([
      ...submissionsItems,
      { itemName: "", price: 0, qty: 0, total: 0 },
    ]);
  };

  const handleChange = (e: FormEvent<HTMLInputElement>, i: number) => {
    const tempItems = [...submissionsItems];
    const { name, value } = e.currentTarget;
    tempItems[i][name] = value;

    tempItems[i].total = tempItems[i].price * tempItems[i].qty;

    setSubmissionsItems(tempItems);
  };

  const handleDelete = (index: number) => {
    const tempItems = [...submissionsItems];
    tempItems.splice(index, 1);
    setSubmissionsItems(tempItems);
  };

  return (
    <div className="flex-1">
      <Card className="w-2/3 mx-auto">
        <CardContent className="p-8">
          <h1 className="text-2xl font-semibold">Pengajuan Baru</h1>
          <Separator className="my-4" />
          <form action={formAction}>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Deskripsi</Label>
                <Input id="name" name="name" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="year">Tahun</Label>
                <Select name="year">
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Tahun" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/4">
                <Button variant="default" onClick={handleClick}>
                  Tambah Barang
                </Button>
              </div>
              {submissionsItems.map((item, index) => (
                <div key={index} className="flex justify-between items-end">
                  <div className="grid grid-cols-4 items-end gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Nama Barang</Label>
                      <Input
                        id="name"
                        name="itemName"
                        value={item.itemName}
                        onChange={(e) => handleChange(e, index)}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="price">Harga</Label>
                      <Input
                        id="price"
                        name="price"
                        value={item.price}
                        onChange={(e) => handleChange(e, index)}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="qty">Jumlah Barang</Label>
                      <Input
                        id="qty"
                        name="qty"
                        value={item.qty}
                        onChange={(e) => handleChange(e, index)}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="total">Total Harga</Label>
                      <Input
                        id="total"
                        name="total"
                        value={item.total}
                        readOnly
                      />
                    </div>
                  </div>
                  <div>
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(index)}
                    >
                      <Icon icon="tabler:trash" className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <div className="w-full mb-4">
                <SubmitButton>Simpan</SubmitButton>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
