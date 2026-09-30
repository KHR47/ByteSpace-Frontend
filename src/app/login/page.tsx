import { AuthLayout } from "@/components/auth/auth-layout";
import { LoginForm } from "@/components/auth/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In — ByteSpace",
  description: "Sign in to access your ByteSpace courses, mentorship, and certifications.",
};

export default function LoginPage() {
  return (
    <AuthLayout
      heading="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <LoginForm />
    </AuthLayout>
  );
}
