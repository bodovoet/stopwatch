import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SecondNavMetrics() {
  const router = useRouter();

  const links = [
    { href: '/protected/Metrics-seambits', label: 'Seambits' },
    { href: '/protected/Metrics-workers', label: 'Workers' },
    { href: '/protected/Metrics-styles', label: 'Styles' },
    { href: '/protected/Metrics-cycles', label: 'Cycles' },
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