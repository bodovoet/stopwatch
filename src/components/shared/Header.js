import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/Stopwatch">Stopwatch</Link> | 
        <Link href="/About">About</Link> | 
        <Link href="/Contact">Contact</Link> | 
        <Link href="/Support">Support</Link> | 
        <Link href="/Login">Login</Link>
      </nav>
    </header>
  );
}