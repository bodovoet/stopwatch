import SecondNavResources from "@/components/shared/protected/secondNav-Resources";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function ResourcesAssetsStations() {
  return (
    <SignedInLayout>
      <SecondNavResources />
      <div className="p-6">
        <h1 className="text-xl font-bold">Resources: Assets - Stations</h1>
        <p>Content for Assets - Stations will go here.</p>
      </div>
    </SignedInLayout>
  );
}