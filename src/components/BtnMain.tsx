import Link from "next/link";

interface BtnMainProps {
  link: string;
  text: string;
}

export function BtnMain({ link, text }: BtnMainProps) {
  return (
    <Link
      className="relative max-w-full cursor-pointer overflow-hidden rounded-sm bg-white px-8 py-3 text-xl text-orange-400"
      href={link}
    >
      {text}
    </Link>
  );
}
