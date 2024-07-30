import { Logo } from "./Logo";
import { NavItem } from "./NavItem";

const navItems = [
  { label: "About Us" },
  { label: "Meet Fr. Jack" },
  { label: "Contact" },
  { label: "Listen Now", isActive: true },
];

export function Header() {
  return (
    <header className="bg-cc-charcoal z-10 w-full px-12 pt-2 text-white text-opacity-75">
      <div className="container mx-auto flex w-full max-w-screen-2xl justify-between gap-5">
        <Logo />
        <nav className="my-auto flex items-center text-sm leading-5">
          {navItems.map((item, index) => (
            <NavItem key={index} label={item.label} isActive={item.isActive} />
          ))}
        </nav>
      </div>
    </header>
  );
}
