import SecondNavMetrics from "@/components/shared/secondNav-Metrics";
import SignedInLayout from "@/components/shared/SignedInLayout";

export default function MetricsSeambits() {
  return (
    <SignedInLayout>
      <SecondNavMetrics />
      <div className="mt-6 px-6">
        <h3>Metrics: Seambits</h3>
        <p>This is the Metrics Seambits page content.</p>
      </div>
    </SignedInLayout>
  );
}