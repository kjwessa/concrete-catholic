import Link from 'next/link'
import Image from 'next/image'
export function Header() {
  return (
    <header
      id="header"
      className="z-10 w-full bg-cc-charcoal px-4 pt-2 text-white text-opacity-75 sm:px-12"
      role="banner"
    >
      <div className="container mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-5">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/images/cc-logo.png"
            alt="Concrete Catholic Logo"
            width={175}
            height={96}
            priority
          />
        </Link>
        <nav
          className="my-auto hidden flex-col items-center text-sm leading-5 sm:flex sm:flex-row"
          role="navigation"
        >
          {[
            { text: 'Meet Fr. Jack', link: '/meet-fr-jack' },
            { text: 'About Us', link: '/about' },
            { text: 'Contact', link: '/contact' },
            { text: 'Listen Now', link: '/listen', isActive: true },
          ].map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`my-auto self-stretch px-5 py-1 hover:text-yellow-400 ${
                item.isActive ? 'text-xl text-yellow-600' : 'tracking-[2px]'
              }`}
            >
              {item.text}
              {item.isActive && <div className="mt-2 h-0.5 shrink-0 bg-orange-400" />}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
