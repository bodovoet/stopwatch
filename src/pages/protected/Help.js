import SecondNavSupport from "@/components/shared/protected/secondNav-Support";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function Help() {
  return (
    <SignedInLayout>
      <SecondNavSupport />
      <div className="p-6">
        <h1 className="text-xl font-semibold">Help</h1>
        <p>Welcome to the Help page. Find solutions and FAQs to common problems here.</p>
      </div>
    </SignedInLayout>
  );
}