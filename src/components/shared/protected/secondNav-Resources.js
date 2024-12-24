import Link from "next/link";
import { useRouter } from "next/router";

export default function SecondNavResources() {
  const router = useRouter();

  const links = [
    { href: "/protected/Resources-lines", label: "Lines" },
    { href: "/protected/Resources-line-setups", label: "Line Setups" },
    { href: "/protected/Resources-cycle-templates", label: "Cycle Templates" },
    { href: "/protected/Resources-cycle-plans", label: "Cycle Plans" },
    { href: "/protected/Resources-styles", label: "Styles" },
    { href: "/protected/Resources-style-variants", label: "Style Variants" },
    { href: "/protected/Resources-assets-shifts", label: "Shifts" },
    { href: "/protected/Resources-assets-plants", label: "Plants" },
    { href: "/protected/Resources-assets-workers", label: "Workers" },
    { href: "/protected/Resources-assets-stations", label: "Stations" },
    { href: "/protected/Resources-assets-seambits", label: "Seambits" },
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

