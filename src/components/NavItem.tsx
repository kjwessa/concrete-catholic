import { FC } from 'react';

interface NavItemProps {
  label: string;
  isActive?: boolean;
}

export const NavItem: FC<NavItemProps> = ({ label, isActive }) => {
  return (
    <div className={`self-stretch px-5 py-1 my-auto ${isActive ? 'text-xl text-yellow-600' : 'tracking-[2px]'}`}>
      {label}
      {isActive && <div className="shrink-0 mt-2 h-0.5 bg-orange-400" />}
    </div>
  );
};
