import SecondNavResources from "@/components/shared/protected/secondNav-Resources";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function ResourcesLineSetups() {
  return (
    <SignedInLayout>
      <SecondNavResources />
      <div className="p-6">
        <h1 className="text-xl font-bold">Resources: Line Setups</h1>
        <p>Content for Line Setups will go here.</p>
      </div>
    </SignedInLayout>
  );
}