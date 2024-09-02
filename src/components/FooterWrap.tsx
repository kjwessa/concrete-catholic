import { FooterLogo } from "./FooterLogo";
import { FooterNavigation } from "./FooterNavigation";
import { FooterCopyright } from "./FooterCopyright";

export const FooterWrap: React.FC = () => {
  return (
    <footer className="mt-12 flex flex-col border-t border-solid border-white border-opacity-10 pt-12 max-md:mt-10 max-md:max-w-full">
      <div className="flex w-full justify-between gap-5 px-px text-sm leading-5 tracking-[2px] text-white text-opacity-50 max-md:max-w-full max-md:flex-wrap">
        <FooterLogo />
        <FooterNavigation />
      </div>
      <FooterCopyright />
    </footer>
  );
};
