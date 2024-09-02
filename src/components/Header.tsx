import { Logo } from './Logo';
import { NavItem } from './NavItem';


 const navItems = [
    { label: "About Us" },
    { label: "Meet Fr. Jack" },
    { label: "Contact" },
    { label: "Listen Now", isActive: true }
  ];


export function Header() {
  return (
    <header className="flex z-10 justify-center items-center px-16 pt-9 -mt-12 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-w-[1375px] max-md:flex-wrap max-md:max-w-full">
        <Logo />
        <nav className="flex items-center my-auto text-sm leading-5 text-white text-opacity-50">
          {navItems.map((item, index) => (
            <NavItem key={index} label={item.label} isActive={item.isActive} />
          ))}
        </nav>
      </div>
    </header>
  );
}
