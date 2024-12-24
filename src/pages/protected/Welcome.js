import SecondNavWelcome from "@/components/shared/protected/secondNav-Welcome";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function Welcome() {
  return (
    <SignedInLayout>
      <SecondNavWelcome />
      <div className="p-6">
        <h1 className="text-xl font-semibold">Welcome</h1>
        <p>Welcome to OpenSeam.</p>
      </div>
    </SignedInLayout>
  );
}