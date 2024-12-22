import SignedInLayout from "@/components/shared/SignedInLayout";

export default function Dashboard() {
  return (
    <SignedInLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome to your personal dashboard. Explore the app and manage your activities.</p>
      </div>
    </SignedInLayout>
  );
}