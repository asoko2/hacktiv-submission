"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const formStatus = useFormStatus();

  return (
    <div className="w-full">
      <Button type="submit" disabled={formStatus.pending} className="w-full">
        {formStatus.pending ? "Loading..." : children}
      </Button>
    </div>
  );
}
