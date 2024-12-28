import SecondNavReports from "@/components/shared/protected/secondNav-Reports";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function ReportsLayout({ children }) {
  return (
    <SignedInLayout>
      <SecondNavReports />
      {children}
    </SignedInLayout>
  );
}