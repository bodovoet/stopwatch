import SecondNavMetrics from "@/components/shared/secondNav-Metrics";
import SignedInLayout from "@/components/shared/SignedInLayout";

export default function MetricsCycles() {
  return (
    <SignedInLayout>
      <SecondNavMetrics />
      <div className="p-6">
        <h1 className="text-xl font-bold">Metrics: Cycles</h1>
        <p>Content for the Cycles metrics will go here.</p>
      </div>
    </SignedInLayout>
  );
}