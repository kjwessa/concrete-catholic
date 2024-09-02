import Link from "next/link";

interface LinkMainProps {
  link: string;
  text: string;
}

export function LinkMain({ link, text }: LinkMainProps) {
  return (
    <Link
      href={link}
      className="relative inline-block max-w-full cursor-pointer overflow-hidden text-xl text-orange-400"
    >
      {text}
    </Link>
  );
}
