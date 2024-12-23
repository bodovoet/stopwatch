import SecondNavTrends from "@/components/shared/secondNav-Trends";
import SignedInLayout from "@/components/shared/SignedInLayout";

export default function Trends() {
  return (
    <SignedInLayout>
      <SecondNavTrends />
      <div className="p-6">
        <h1 className="text-xl font-semibold">Trends</h1>
        <p>Welcome to the Trends page.</p>
      </div>
    </SignedInLayout>
  );
}