import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PiChartPieSliceThin,
  PiStackThin,
  PiTreeStructureThin,
  PiUserThin,
  PiUserCirclePlusThin,
  PiQuestionThin,
  PiSignOutThin,
} from "react-icons/pi";
import SignOutContent from "./SignOutContent";

export default function SignedInSidebar() {
  const router = useRouter();
  const [showSignOutPopover, setShowSignOutPopover] = useState(false);

  const navLinks = [
    { href: "/protected/Metrics-seambits", label: "Metrics", icon: <PiChartPieSliceThin /> },
    { href: "/protected/Reports-eod", label: "Reports", icon: <PiStackThin /> },
    { href: "/protected/Trends", label: "Trends", icon: <PiChartPieSliceThin /> },
    { href: "/protected/Resources-lines", label: "Resources", icon: <PiTreeStructureThin /> },
  ];

  const bottomNavLinks = [
    { href: "/protected/User-profile", label: "User", icon: <PiUserThin /> },
    { href: "/protected/Invite-users", label: "Invite Users", icon: <PiUserCirclePlusThin /> },
    { href: "/protected/Support", label: "Support", icon: <PiQuestionThin /> },
    { href: "/sign-out", label: "Sign Out", icon: <PiSignOutThin /> },
  ];

  const toggleSignOutPopover = () => setShowSignOutPopover((prev) => !prev);

  return (
    <div className="sidebar w-[180px] bg-white text-black flex flex-col justify-between min-h-screen border-r border-[var(--border-primary)]">
      {/* Logo */}
      <div className="px-4 py-6">
        <Link href="/protected/Welcome">
          <img src="/logo-black-beta.svg" alt="Logo" className="w-full h-auto" />
        </Link>
      </div>

      {/* Primary Navigation Links */}
      <nav className="flex flex-col gap-1 px-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center space-x-3 py-3 px-4 rounded hover:bg-[var(--background-hover)] ${
              router.pathname.startsWith(link.href) ? "bg-[var(--background-secondary)] text-white" : ""
            }`}
            style={{ fontSize: "var(--font-size-body)" }}
          >
            <span className="icon text-lg">{link.icon}</span>
            <span className="label">{link.label}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom Navigation Links */}
      <div className="mt-auto border-t border-[var(--border-primary)]">
        <nav className="flex flex-col gap-1 px-4 py-4">
          {bottomNavLinks.map((link) => (
            link.label === "Sign Out" ? (
              <div key={link.href} className="relative">
                <button
                  onClick={toggleSignOutPopover}
                  className="flex items-center space-x-3 py-3 px-4 rounded hover:bg-[var(--background-hover)] w-full"
                  style={{ fontSize: "var(--font-size-body)" }}
                >
                  <span className="icon text-lg">{link.icon}</span>
                  <span className="label">{link.label}</span>
                </button>
                {showSignOutPopover && (
                  <div className="popover">
                    <SignOutContent />
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center space-x-3 py-3 px-4 rounded hover:bg-[var(--background-hover)] ${
                  router.pathname.startsWith(link.href) ? "bg-[var(--background-secondary)] text-white" : ""
                }`}
                style={{ fontSize: "var(--font-size-body)" }}
              >
                <span className="icon text-lg">{link.icon}</span>
                <span className="label">{link.label}</span>
              </Link>
            )
          ))}
        </nav>
      </div>
    </div>
  );
}