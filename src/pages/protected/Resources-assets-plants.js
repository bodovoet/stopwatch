import SecondNavResources from "@/components/shared/protected/secondNav-Resources";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function ResourcesAssetsPlants() {
  return (
    <SignedInLayout>
      <SecondNavResources />
      <div className="p-6">
        <h1 className="text-xl font-bold">Resources: Assets - Plants</h1>
        <p>Content for Assets - Plants will go here.</p>
      </div>
    </SignedInLayout>
  );
}