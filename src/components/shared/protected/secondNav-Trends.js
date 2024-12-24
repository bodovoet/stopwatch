import { useRouter } from "next/router";
import Link from "next/link";

export default function SecondNavTrends() {
  const router = useRouter();

  const links = [
    { href: '/protected/Trends', label: 'Placeholder' },
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