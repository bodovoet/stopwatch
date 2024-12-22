import Link from "next/link";

export default function SignedInSidebar() {
  return (
    <aside className="w-[44] bg-white text-black flex flex-col justify-between min-h-screen border-r border-gray-300">
      {/* Top section with logo */}
      <div className="px-4 py-6">
        <img src="/logo-black-beta.svg" alt="OpenSeam Logo" className="h-10" />
      </div>

      {/* Middle section with navigation links */}
      <nav className="px-4 space-y-4">
        <Link href="/protected/Dashboard" className="block hover:underline">
          Metrics
        </Link>
        <Link href="/protected/Reports" className="block hover:underline">
          Reports
        </Link>
        <Link href="/protected/Resources" className="block hover:underline">
          Resources
        </Link>
      </nav>

      {/* Bottom section with user-related links */}
      <div className="px-4 py-6 space-y-4 border-t border-gray-300">
        <Link href="/protected/User" className="block hover:underline">
          User
        </Link>
        <Link href="/protected/InviteUsers" className="block hover:underline">
          Invite Users
        </Link>
        <Link href="/protected/Support" className="block hover:underline">
          Support
        </Link>
        <Link href="/sign-out" className="block hover:underline">
          Sign Out
        </Link>
      </div>
    </aside>
  );
}