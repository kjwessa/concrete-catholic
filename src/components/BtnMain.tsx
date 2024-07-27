interface BtnMainProps {
  link: string;
  text: string;
}

export function BtnMain({ link, text }: BtnMainProps) {
  return (
    <a
      className="relative max-w-full overflow-hidden bg-white px-10 py-5"
      href={link}
    >
      <div className="cursor-pointer">{text}</div>
      <div className="absolute right-full top-0 z-[1] h-full w-full cursor-pointer bg-zinc-700" />
    </a>
  );
}
