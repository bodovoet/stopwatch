import SecondNavResources from "@/components/shared/protected/secondNav-Resources";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function ResourcesStyleVariants() {
  return (
    <SignedInLayout>
      <SecondNavResources />
      <div className="p-6">
        <h1 className="text-xl font-bold">Resources: Style Variants</h1>
        <p>Content for Style Variants will go here.</p>
      </div>
    </SignedInLayout>
  );
}