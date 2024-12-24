import Link from "next/link";
import { useRouter } from "next/router";

export default function SecondNavUser() {
  const router = useRouter();

  const links = [
    { href: '/protected/User/Profile', label: 'Profile' },
    { href: '/protected/User/Invite-users', label: 'Invite users' },
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