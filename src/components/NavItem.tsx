import { FC } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface NavItemProps {
  text: string;
  link: string;
  isActive?: boolean;
}

// TODO merge styling using tw merge
// TODO add hover state to each button
// TODO ensure button sizes are more consistent
export const NavItem: FC<NavItemProps> = ({ text, link, isActive }) => {
  return (
    <Link
      href={link}
      className={`my-auto self-stretch px-5 py-1 ${isActive ? "text-xl text-yellow-600" : "tracking-[2px]"}`}
    >
      {text}
      {isActive && <div className="mt-2 h-0.5 shrink-0 bg-orange-400" />}
    </Link>
  );
};
