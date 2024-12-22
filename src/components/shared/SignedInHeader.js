import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function SignedInHeader() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/protected/Dashboard">
          Stopwatch App
        </Link>
        <nav className="space-x-4">
          <Link href="/protected/Dashboard">
            Dashboard
          </Link>
          <Link href="/protected/StopwatchEmbed">
            Stopwatch
          </Link>
          <UserButton />
        </nav>
      </div>
    </header>
  );
}