import SecondNavMetrics from "@/components/shared/protected/secondNav-Metrics";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function MetricsWorkers() {
  return (
    <SignedInLayout>
      <SecondNavMetrics />
      <div className="p-6">
        <h1 className="text-xl font-bold">Metrics: Workers</h1>
        <p>Content for the Workers metrics will go here.</p>
      </div>
    </SignedInLayout>
  );
}