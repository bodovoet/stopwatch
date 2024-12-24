import SecondNavReports from "@/components/shared/protected/secondNav-Reports";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function ReportsEOD() {
  return (
    <SignedInLayout>
      <SecondNavReports />
      <div className="p-6">
        <h1 className="text-xl font-bold">Reports: EOD</h1>
        <p>Content for the End of Day (EOD) reports will go here.</p>
      </div>
    </SignedInLayout>
  );
}