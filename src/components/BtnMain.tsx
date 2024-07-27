import Link from "next/link";

interface BtnMainProps {
  link: string;
  text: string;
}

export function BtnMain({ link, text }: BtnMainProps) {
  return (
    <Link
      className="relative max-w-full cursor-pointer overflow-hidden bg-white px-10 py-5"
      href={link}
    >
      {text}
    </Link>
  );
}
