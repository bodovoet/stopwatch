import SecondNavUser from "@/components/shared/secondNav-User";
import SignedInLayout from "@/components/shared/SignedInLayout";

export default function InviteUsers() {
  return (
    <SignedInLayout>
      <SecondNavUser />
      <div className="p-6">
        <h1 className="text-xl font-semibold">Invite users</h1>
        <p>Welcome to the Invite Users page.</p>
      </div>
    </SignedInLayout>
  );
}