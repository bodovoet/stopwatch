import SecondNavResources from "@/components/shared/secondNav-Resources";
import SignedInLayout from "@/components/shared/SignedInLayout";

export default function ResourcesCycleTemplates() {
  return (
    <SignedInLayout>
      <SecondNavResources />
      <div className="p-6">
        <h1 className="text-xl font-bold">Resources: Cycle Templates</h1>
        <p>Content for Cycle Templates will go here.</p>
      </div>
    </SignedInLayout>
  );
}