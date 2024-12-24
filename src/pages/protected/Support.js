import SecondNavSupport from "@/components/shared/protected/secondNav-Support";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function Support() {
  return (
    <SignedInLayout>
      <SecondNavSupport />
      <div className="p-6">
        <h1 className="text-xl font-semibold">Support</h1>
        <p>Welcome to the Support page. Here you can find resources to assist you.</p>
      </div>
    </SignedInLayout>
  );
}