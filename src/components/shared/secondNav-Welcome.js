import Link from "next/link";
import { useRouter } from "next/router";

export default function SecondNavWelcome() {
  const router = useRouter();
  const links = [
    { href: '/protected/Welcome', label: 'Placeholder' },
  ];

  return (
    <nav className="secondNav">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            router.pathname === link.href ? 'active' : ''
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}