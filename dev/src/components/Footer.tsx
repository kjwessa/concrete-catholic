import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo"; // Make sure to import the Logo component

export function FooterOld() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-cc-charcoal px-4 py-16 md:px-16">
      <div className="container mx-auto max-w-[1370px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-6">
            <Logo />
            <p className="text-white/70">Concrete Catholic: Faith in Action</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {["About Us", "Meet Fr. Jack", "Listen Now"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-white/70 transition-colors hover:text-yellow-600"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Stay Connected</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded bg-white/10 p-3 text-white placeholder-white/50"
                aria-label="Email for newsletter subscription"
                required
              />
              <button
                type="submit"
                className="rounded bg-yellow-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-yellow-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex space-x-4">
              {["Facebook", "Instagram"].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform.toLowerCase()}.com/concretecatholic`}
                  className="flex items-center text-white/70 transition-colors hover:text-yellow-600"
                  aria-label={`${platform} link`}
                >
                  <Image
                    src={`/images/${platform.toLowerCase()}-icon.svg`}
                    alt={`${platform} Icon`}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <span>{platform}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-between text-sm text-white/50">
            <div>© {currentYear} Concrete Catholic.</div>
            <div className="space-x-2">
              <span>Photography by</span>
              <Link
                href="https://www.instagram.com/brivera_photography/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 hover:underline"
              >
                Brittney Rivera
              </Link>
              <span>|</span>
              <span>Design by</span>
              <Link
                href="https://brewww.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 hover:underline"
              >
                Brewww Studio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
