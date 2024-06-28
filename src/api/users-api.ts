"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
  errors?: {
    name?: string[];
    nip?: string[];
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
  nip: z.coerce
    .number({
      invalid_type_error: "NIP harus diisi angka",
    })
    .min(1, {
      message: "NIP harus diisi",
    }),
});

const AddUser = formSchema.omit({ id: true });
const EditUser = formSchema.omit({ id: true });

export async function addUser(prevState: State, formData: FormData) {
  console.log("formdata", formData);

  console.log("nip type", typeof formData.get("nip"));

  const validatedFields = AddUser.safeParse({
    name: formData.get("name"),
    nip: formData.get("nip"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);

    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Data tidak valid",
    };
  }

  const { name, nip } = validatedFields.data;

  // Simulate server request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  redirect("/dashboard/users");
}

export async function editUser(prevState: State, formData: FormData) {
  console.log("formdata", formData);

  console.log("nip type", typeof formData.get("nip"));

  const validatedFields = AddUser.safeParse({
    name: formData.get("name"),
    nip: formData.get("nip"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);

    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Data tidak valid",
    };
  }

  const { name, nip } = validatedFields.data;

  // Simulate server request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  redirect("/dashboard/users");
}
