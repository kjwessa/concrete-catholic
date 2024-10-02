"use client";

import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { text: "Meet Fr. Jack", link: "/meet-fr-jack" },
  { text: "About Us", link: "/about" },
  { text: "Contact", link: "/contact" },
  { text: "Listen Now", link: "/listen", isActive: true },
];

export function HeaderOld() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      id="header"
      className="z-10 w-full bg-cc-charcoal px-4 pt-2 text-white text-opacity-75 sm:px-12"
      role="banner"
    >
      <div className="container mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-5">
        <Logo />
        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav
          className={`${isMenuOpen ? "block" : "hidden"} my-auto flex flex-col items-center text-sm leading-5 sm:block sm:flex-row`}
          role="navigation"
        >
          {navItems.map((item, index) => (
            <Link href={item.link} key={index} passHref>
              <NavItem
                text={item.text}
                isActive={item.isActive}
                link={item.link}
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
