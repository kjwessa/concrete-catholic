import Link from 'next/link'
import Image from 'next/image'
export function Header() {
  const logo =
    'https://cdn.builder.io/api/v1/image/assets/TEMP/a1500297b3d9a173a0bd66cba0a672134d9faae8da730743ad7daff0bf978cfc?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8'

  return (
    <>
      <header className="flex flex-wrap gap-10 justify-between items-center px-72 py-4 w-full text-lg leading-none text-white bg-gray-800 border-solid border-b-[0.5px] border-b-white border-b-opacity-50 max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src={logo}
          alt="Logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-[3.12] w-[156px]"
        />
        <nav className="flex gap-10 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
          {[
            { label: 'Episodes', hasIcon: true },
            { label: 'Meet Fr. Jack', hasIcon: false },
            { label: 'Contact', hasIcon: false },
          ].map((item, index) => (
            <div key={index} className="flex gap-1 items-end whitespace-nowrap rounded">
              <div>{item.label}</div>
              {item.hasIcon && (
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3aa2fc93681c8eb896a27a81eda5fed7a935f5410217d1754c25b538e4485f6?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
                  alt=""
                  className="object-contain shrink-0 w-6 aspect-square"
                />
              )}
            </div>
          ))}
          <button className="text-yellow-600 rounded">Listen Now</button>
        </nav>
      </header>
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
    </>
  )
}
