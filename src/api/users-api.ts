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
  name: z.coerce.string({
    required_error: "Nama harus diisi",
  }),
  nip: z.number({
    required_error: "NIP harus diisi",
    invalid_type_error: "NIP harus diisi angka",
  }),
});

const AddUser = formSchema.omit({ id: true });

export async function addUser(prevState: State, formData: FormData) {
  console.log("formdata", formData);

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
