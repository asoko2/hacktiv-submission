import LoginForm from "@/components/login-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";

export default function LoginPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-100">
      <div className="w-2/3 md:w-1/2 lg:w-2/5">
        <Card>
          <CardHeader className="text-center border-b border-slate-200">
            <CardTitle className="text-3xl">SIJUANG</CardTitle>
            <CardDescription>
              Anda harus login terlebih dahulu untuk menggunakan aplikasi
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full py-4">
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
