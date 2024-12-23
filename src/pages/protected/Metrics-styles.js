import SecondNavMetrics from "@/components/shared/secondNav-Metrics";
import SignedInLayout from "@/components/shared/SignedInLayout";

export default function MetricsStyles() {
  return (
    <SignedInLayout>
      <SecondNavMetrics />
      <div className="p-6">
        <h1 className="text-xl font-bold">Metrics: Styles</h1>
        <p>Content for the Styles metrics will go here.</p>
      </div>
    </SignedInLayout>
  );
}