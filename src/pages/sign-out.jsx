import { useAuth } from "@clerk/nextjs";

export default function SignOutPage() {
  const { signOut } = useAuth();

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={signOut}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
}