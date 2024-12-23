import SecondNavResources from "@/components/shared/secondNav-Resources";
import SignedInLayout from "@/components/shared/SignedInLayout";

export default function ResourcesAssetsWorkers() {
  return (
    <SignedInLayout>
      <SecondNavResources />
      <div className="p-6">
        <h1 className="text-xl font-bold">Resources: Assets - Workers</h1>
        <p>Content for Assets - Workers will go here.</p>
      </div>
    </SignedInLayout>
  );
}