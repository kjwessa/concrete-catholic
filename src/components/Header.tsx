import { Logo } from "./Logo";
import { NavItem } from "./NavItem";

const navItems = [
  { text: "Meet Fr. Jack", link: "" },
  { text: "About Us", link: "" },
  { text: "Contact", link: "" },
  { text: "Listen Now", link: "", isActive: true },
];

export function Header() {
  return (
    <header className="bg-cc-charcoal z-10 w-full px-12 pt-2 text-white text-opacity-75">
      <div className="container mx-auto flex w-full max-w-screen-2xl justify-between gap-5">
        <Logo />
        <nav className="my-auto flex items-center text-sm leading-5">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              text={item.text}
              link={item.link}
              isActive={item.isActive}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
