import Link from "next/link";
import Image from "next/image";
import { useAuth, SignInButton } from "@clerk/nextjs"; // Import Clerk's SignInButton
import logo from "@/public/logo-black.svg";

export default function Header() {
  const { isSignedIn } = useAuth(); // Determine if the user is signed in

  return (
    <header className="bg-white text-black border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="Logo" width={200} />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/public/About" className="hover:text-gray-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/public/Contact" className="hover:text-gray-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/public/Support" className="hover:text-gray-600">
                Support
              </Link>
            </li>
            {isSignedIn ? (
              <li>
                <Link
                  href="/protected/Welcome"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Portal
                </Link>
              </li>
            ) : (
              <li>
                <SignInButton
                  mode="modal" // Opens the sign-in modal
                  redirectUrl="/protected/Welcome" // Redirect after sign-in
                >
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Sign In
                  </button>
                </SignInButton>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}