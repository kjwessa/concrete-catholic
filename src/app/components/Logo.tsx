import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/public/images/cc-logo.png";
export function Logo() {
  return (
    <Link href="/" className="cursor-pointer">
      <Image
        src={LogoImage}
        alt="Concrete Catholic Logo"
        width={175}
        height={96}
        priority
      />
    </Link>
  );
}
