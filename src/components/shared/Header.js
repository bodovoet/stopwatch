import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/Support" className="hover:underline">
                Support
              </Link>
            </li>
            <li>
              <Link href="/Login" className="hover:underline">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}