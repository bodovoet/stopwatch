import SecondNavMetrics from "@/components/shared/secondNav-Metrics";
import SignedInLayout from "@/components/shared/SignedInLayout";

export default function MetricsSeambits() {
  return (
    <SignedInLayout>
      <SecondNavMetrics />
      <div className="mt-6 px-6">
        <h1 className="text-lg font-bold">Metrics: Seambits</h1>
        <p>This is the Metrics Seambits page content.</p>
      </div>
    </SignedInLayout>
  );
}