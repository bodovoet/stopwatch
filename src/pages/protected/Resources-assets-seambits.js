import SecondNavResources from "@/components/shared/secondNav-Resources";
import SignedInLayout from "@/components/shared/SignedInLayout";

export default function ResourcesAssetsSeambits() {
  return (
    <SignedInLayout>
      <SecondNavResources />
      <div className="p-6">
        <h1 className="text-xl font-bold">Resources: Assets - Seambits</h1>
        <p>Content for Assets - Seambits will go here.</p>
      </div>
    </SignedInLayout>
  );
}