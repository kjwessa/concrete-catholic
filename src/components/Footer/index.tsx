import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/components/Logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

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
              {['About Us', 'Meet Fr. Jack', 'Listen Now'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
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
              {['Facebook', 'Instagram'].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform.toLowerCase()}.com/concretecatholic`}
                  className="flex items-center text-white/70 transition-colors hover:text-yellow-600"
                  aria-label={`${platform} link`}
                >
                  {platform === 'Instagram' ? (
                    <svg
                      width="24"
                      height="24"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#ffffff"
                      className="mr-2"
                    >
                      <path
                        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                        stroke="#ffffff"
                        stroke-width="1.5"
                      ></path>
                      <path
                        d="M17.5 6.51L17.51 6.49889"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="#ffffff"
                      className="mr-2"
                    >
                      <path
                        d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  )}
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
  )
}
