import SecondNavUser from "@/components/shared/protected/secondNav-User";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function UserLayout({ children }) {
  return (
    <SignedInLayout>
      <SecondNavUser />
      {children}
    </SignedInLayout>
  );
}