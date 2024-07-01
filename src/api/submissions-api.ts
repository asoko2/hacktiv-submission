"use server";

import { Submission, SubmissionItem } from "@/lib/definition";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export type storeSubmissionState = {
  errors?: {
    year?: string[];
    name?: string[];
  };
  message?: string | null;
};

const formSchema = z.object({
  id: z.string(),
  name: z.coerce
    .string({
      required_error: "Nama harus diisi",
    })
    .min(1, {
      message: "Nama harus diisi",
    }),
  year: z.coerce.string().min(1, {
    message: "Tahun harus dipilih",
  }),
  items: z.array(
    z.object({
      itemName: z.string(),
      price: z.string(),
      qty: z.string(),
      total: z.number(),
    })
  ),
});

const AddSubmission = formSchema.omit({ id: true });

export async function storeSubmission(
  submissionItem: SubmissionItem[],
  prevState: storeSubmissionState,
  formData: FormData
) {
  const validatedFields = AddSubmission.safeParse({
    name: formData.get("name"),
    year: formData.get("year"),
    items: submissionItem,
  });

  console.log("validatedFields", validatedFields.error);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.errors,
      message: null,
    };
  }

  const { name, year, items } = validatedFields.data;

  const token = cookies().get("accessToken")?.value;

  const response = await fetch(`${process.env.API_URL}/submissions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      year,
      submissionItems: items,
    }),
  });

  const responseJson = await response.json();

  console.log("responseJson", responseJson);

  if (!response.ok) {
    return {
      errors: responseJson.errors,
      message: responseJson.message,
    };
  }

  redirect("/dashboard/submissions");
}

export async function getSubmissionByUserId(): Promise<Submission[]> {
  const token = cookies().get("accessToken");

  const response = await fetch(`${process.env.API_URL}/auth/submissions`, {
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
  });

  const responseJson = await response.json();

  return await responseJson.data;
}
