export type SubmissionItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  total: number;
};

export const submissionItems: SubmissionItem[] = [
  {
    id: "1",
    name: "Buku",
    price: 10000,
    qty: 10,
    total: 100000,
  },
  {
    id: "2",
    name: "Pensil",
    price: 5000,
    qty: 20,
    total: 100000,
  },
  {
    id: "3",
    name: "Bolpoin",
    price: 3000,
    qty: 30,
    total: 90000,
  },
  {
    id: "4",
    name: "Penghapus",
    price: 2000,
    qty: 40,
    total: 80000,
  },
  {
    id: "5",
    name: "Penggaris",
    price: 1000,
    qty: 50,
    total: 50000,
  },
];
