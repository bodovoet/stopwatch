import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth, SignInButton } from "@clerk/nextjs";
import logo from "@/public/logo-black.svg";

export default function Header() {
  const { isSignedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <Link href="/">
          <Image src={logo} alt="OpenSeam" height={30} className="header-logo" />
        </Link>
        {/* Hamburger Menu Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="hamburger-button"
          aria-label="Toggle Navigation"
        >
          <svg
            className="hamburger-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {/* Desktop Navigation */}
        <nav className="desktop-navigation">
          <ul className="desktop-menu">
            <li>
              <Link href="/public/About" className="menu-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/public/Contact" className="menu-link">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/public/Support" className="menu-link">
                Support
              </Link>
            </li>
            {isSignedIn ? (
              <li>
                <Link href="/protected/Welcome" className="portal-button">
                  Portal
                </Link>
              </li>
            ) : (
              <li>
                <SignInButton mode="modal" redirectUrl="/protected/Welcome">
                  <button className="sign-in-button">Sign In</button>
                </SignInButton>
              </li>
            )}
          </ul>
        </nav>
      </div>
      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fullscreen-menu">
          <button
            onClick={toggleMenu}
            className="close-button"
            aria-label="Close Navigation"
          >
            <svg
              className="close-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <nav>
            <ul className="fullscreen-menu-list">
              <li>
                <Link href="/public/About" className="fullscreen-menu-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/public/Contact" className="fullscreen-menu-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/public/Support" className="fullscreen-menu-link">
                  Support
                </Link>
              </li>
              {isSignedIn ? (
                <li>
                  <Link
                    href="/protected/Welcome"
                    className="fullscreen-portal-button"
                  >
                    Portal
                  </Link>
                </li>
              ) : (
                <li>
                  <SignInButton mode="modal" redirectUrl="/protected/Welcome">
                    <button className="fullscreen-sign-in-button">
                      Sign In
                    </button>
                  </SignInButton>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}