import SecondNavResources from "@/components/shared/secondNav-Resources";
import SignedInLayout from "@/components/shared/SignedInLayout";

export default function ResourcesCyclePlans() {
  return (
    <SignedInLayout>
      <SecondNavResources />
      <div className="p-6">
        <h1 className="text-xl font-bold">Resources: Cycle Plans</h1>
        <p>Content for Cycle Plans will go here.</p>
      </div>
    </SignedInLayout>
  );
}