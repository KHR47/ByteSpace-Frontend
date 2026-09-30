import { AuthLayout } from "@/components/auth/auth-layout";
import { RegisterForm } from "@/components/auth/register-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an Account — ByteSpace",
  description: "Create an account on ByteSpace to access hundreds of courses and mentorship.",
};

export default function RegisterPage() {
  return (
    <AuthLayout
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
