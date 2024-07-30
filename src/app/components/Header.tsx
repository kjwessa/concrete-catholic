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
    <header className="bg-cc-charcoal z-10 flex w-full items-center justify-center px-16 pt-9 max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1375px] justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <Logo />
        <nav className="my-auto flex items-center text-sm leading-5 text-white text-opacity-50">
          {navItems.map((item, index) => (
            <NavItem key={index} label={item.label} isActive={item.isActive} />
          ))}
        </nav>
      </div>
    </header>
  );
}
