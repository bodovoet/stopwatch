import SecondNavTrends from "@/components/shared/protected/secondNav-Trends";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function TrendsLayout({ children }) {
  return (
    <SignedInLayout>
      <SecondNavTrends />
      {children}
    </SignedInLayout>
  );
}