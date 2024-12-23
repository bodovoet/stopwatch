import Link from "next/link";
import { useRouter } from "next/router";

export default function SecondNavSupport() {
  const router = useRouter();

  const links = [
    { href: "/protected/Support", label: "Support" },
    { href: "/protected/Wiki", label: "Wiki" },
    { href: "/protected/Help", label: "Help" },
    { href: "/protected/Glossary", label: "Glossary" },
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