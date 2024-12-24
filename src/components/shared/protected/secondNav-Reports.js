import Link from "next/link";
import { useRouter } from "next/router";

export default function SecondNavReports() {
  const router = useRouter();

  return (
    <nav className="secondNav">
      <Link
        href="/protected/Reports-eod"
        className={router.pathname === "/protected/Reports-eod" ? "active" : ""}
      >
        EOD
      </Link>
      <Link
        href="/protected/Reports-custom"
        className={router.pathname === "/protected/Reports-custom" ? "active" : ""}
      >
        Custom
      </Link>
    </nav>
  );
}