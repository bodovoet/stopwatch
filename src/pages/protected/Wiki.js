import SecondNavSupport from "@/components/shared/secondNav-Support";
import SignedInLayout from "@/components/shared/SignedInLayout";

export default function Wiki() {
  return (
    <SignedInLayout>
      <SecondNavSupport />      
      <div className="p-6">
        <h1 className="text-xl font-semibold">Wiki</h1>
        <p>Welcome to the Wiki page. Explore detailed guides and information here.</p>
      </div>
    </SignedInLayout>
  );
}