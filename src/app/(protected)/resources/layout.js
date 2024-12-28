import SecondNavResources from "@/components/shared/protected/secondNav-Resources";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function ReourcesLayout({ children }) {
  return (
    <SignedInLayout>
      <SecondNavResources />
      {children}
    </SignedInLayout>
  );
}