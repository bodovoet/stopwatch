import SecondNavReports from "@/components/shared/secondNav-Reports";
import SignedInLayout from "@/components/shared/SignedInLayout";

export default function ReportsCustom() {
  return (
    <SignedInLayout>
      <SecondNavReports />
      <div className="p-6">
        <h1 className="text-xl font-bold">Reports: Custom</h1>
        <p>Content for the custom reports will go here.</p>
      </div>
    </SignedInLayout>
  );
}