import { BtnMain } from "./BtnMain";
interface ListenCTAProps {
  link: string;
  text: string;
}

export function ListenCTA({ link, text }: ListenCTAProps) {
  return (
    <div className="relative flex w-full min-w-[53.13rem] items-center justify-between bg-cc-sunset px-16 py-20 text-white">
      <h4 className="mr-28 max-w-[25.00rem] text-3xl font-extrabold">{text}</h4>
      <BtnMain link={link} text="Listen Now" />
    </div>
  );
}
