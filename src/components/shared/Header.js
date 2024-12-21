import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-black.svg";

export default function Header() {
  return (
    <header className="bg-white text-black mt-5 pb-5 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="Logo" width={200} />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-gray-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-gray-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/Support" className="hover:text-gray-600">
                Support
              </Link>
            </li>
            <li>
              <Link href="/Login" className="hover:text-gray-600">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}