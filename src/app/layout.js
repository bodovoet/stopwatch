import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function ProtectedLayout({ children }) {
  return <SignedInLayout>{children}</SignedInLayout>;
}