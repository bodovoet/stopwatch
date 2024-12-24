import SecondNavResources from "@/components/shared/protected/secondNav-Resources";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function ResourcesLines() {
  return (
    <SignedInLayout>
      <SecondNavResources />
      <div className="p-6">
        <h1 className="text-xl font-bold">Resources: Lines</h1>
        <p>Content for Lines will go here.</p>
      </div>
    </SignedInLayout>
  );
}