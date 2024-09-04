import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="footer" className="bg-cc-charcoal px-16 py-12">
      <div className="container mx-auto max-w-[1370px]">
        <div className="flex flex-wrap justify-between">
          <form className="flex flex-wrap gap-5">
            <input
              type="email"
              placeholder="name@domain.com"
              className="flex-1 border-b border-white/50 p-5 text-lg text-white/50"
              aria-label="Email for newsletter subscription"
              required
            />
            <button
              type="submit"
              className="bg-yellow-600 px-10 py-5 text-xl text-white hover:bg-yellow-700"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-5 py-5">
            {["Facebook", "Twitter", "Instagram"].map((platform) => (
              <a
                key={platform}
                href={`https://${platform.toLowerCase()}.com/concretecatholic`}
                className="p-5 hover:opacity-80"
                aria-label={`${platform} link`}
              >
                <Image
                  src={`/images/${platform.toLowerCase()}-icon.svg`}
                  alt={`${platform} Icon`}
                  width={20}
                  height={20}
                  className="w-5"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-12">
          <div className="flex flex-wrap justify-between text-sm text-white/50">
            <Image
              src=""
              alt="Concrete Catholic Logo"
              width={175}
              height={96}
              className="max-w-full"
            />
            <nav className="flex flex-wrap">
              {["About Us", "Meet Fr. Jack", "Listen Now"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-5 py-1 hover:text-yellow-600"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-12 flex flex-wrap text-xs text-white/50">
            <div className="pr-2">© 2020 Concrete Catholic.</div>
            <div className="flex">
              <span>Photography by</span>
              <Link
                href="https://www.instagram.com/brivera_photography/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-yellow-600 hover:underline"
              >
                Brittney Rivera
              </Link>
            </div>
            <div className="ml-2 flex">
              <span>+ Design by</span>
              <span className="ml-1 text-yellow-600">Brewww</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
