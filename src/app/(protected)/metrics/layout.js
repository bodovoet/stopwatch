import SecondNavMetrics from "@/components/shared/protected/secondNav-Metrics";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function MetricsLayout({ children }) {
  return (
    <SignedInLayout>
      <SecondNavMetrics />
      {children}
    </SignedInLayout>
  );
}