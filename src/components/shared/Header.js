import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white text-black p-4">
      <nav>
        <Link href="/Home">Home</Link> | 
        <Link href="/About">About</Link> | 
        <Link href="/Contact">Contact</Link> | 
        <Link href="/Support">Support</Link> | 
        <Link href="/Login">Login</Link>
      </nav>
    </header>
  );
}