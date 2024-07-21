import { FooterWrap } from "./FooterWrap";

export const FooterLayout: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gray-800 px-16 pb-12 pt-20 max-md:px-5">
      <div className="mt-5 flex w-full max-w-[1370px] flex-col max-md:max-w-full">
        <FooterWrap />
      </div>
    </div>
  );
};
