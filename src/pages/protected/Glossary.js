import SecondNavSupport from "@/components/shared/protected/secondNav-Support";
import SignedInLayout from "@/components/shared/protected/SignedInLayout";

export default function Glossary() {
  return (
    <SignedInLayout>
      <SecondNavSupport />
      <div className="p-6">
        <h1 className="text-xl font-semibold">Glossary</h1>
        <p>Welcome to the Glossary page. Learn terminology and definitions here.</p>
      </div>
    </SignedInLayout>
  );
}