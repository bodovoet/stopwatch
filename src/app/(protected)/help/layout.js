import SecondNavHelp from "@/components/shared/protected/secondNav-Help";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function HelpLayout({ children }) {
  return (
    <SignedInLayout>
      <SecondNavHelp />
      {children}
    </SignedInLayout>
  );
}