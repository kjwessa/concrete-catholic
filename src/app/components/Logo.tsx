import Image from "next/image";
import LogoImage from "@/public/images/cc-logo.png";
export function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={LogoImage}
        alt="Concrete Catholic Logo"
        width={175}
        height={96}
        priority
      />
    </div>
  );
}
