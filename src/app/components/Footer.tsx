import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-cc-charcoal flex w-full items-center justify-center px-16 pb-12 pt-20">
      <div className="mt-5 flex w-full max-w-[1370px] flex-col max-md:max-w-full">
        <div className="flex justify-between max-md:max-w-full max-md:flex-wrap">
          <form className="flex gap-5 whitespace-nowrap max-md:max-w-full max-md:flex-wrap">
            <input
              type="email"
              placeholder="name@domain.com"
              className="flex-1 border-b border-white border-opacity-50 px-5 pb-5 pt-5 text-lg text-white text-opacity-50 max-md:max-w-full"
            />
            <button
              type="submit"
              className="bg-yellow-600 px-10 py-5 text-xl leading-5 tracking-wider text-white max-md:px-5"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-5 py-5 pr-5">
            <a
              href="#"
              className="flex flex-col items-start justify-center px-5"
            >
              <Image
                loading="lazy"
                src=""
                alt="Social Media Icon 1"
                width={20}
                height={20}
                className="aspect-square w-5"
              />
            </a>
            <a
              href="#"
              className="flex flex-col items-start justify-center px-5"
            >
              <Image
                loading="lazy"
                src=""
                alt="Social Media Icon 2"
                width={20}
                height={20}
                className="aspect-square w-5"
              />
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col border-t border-white border-opacity-10 pt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex w-full justify-between gap-5 text-sm leading-5 tracking-[2px] text-white text-opacity-50 max-md:max-w-full max-md:flex-wrap">
            <Image
              loading="lazy"
              src=""
              alt="Concrete Catholic Logo"
              width={175}
              height={96}
              className="aspect-[1.82] max-w-full shrink-0"
            />
            <nav className="my-auto flex">
              <a href="#" className="px-5 py-1">
                About Us
              </a>
              <a href="#" className="px-5 py-1 text-sm leading-5">
                Meet Fr. Jack
              </a>
              <a href="#" className="px-5 py-1">
                Listen Now
              </a>
            </nav>
          </div>
          <div className="mt-12 flex items-start pl-20 text-xs leading-5 max-md:mt-10 max-md:flex-wrap max-md:pl-5">
            <div className="self-stretch pb-1.5 pr-1.5 pt-1 tracking-wider text-white text-opacity-50">
              © 2020 Concrete Catholic.
            </div>
            <div className="flex gap-1.5 pb-1.5 pr-1 pt-0.5">
              <div className="tracking-wider text-white text-opacity-50">
                Photography by
              </div>
              <div className="tracking-[2px] text-yellow-600">
                Brittney Rivera
              </div>
            </div>
            <div className="flex gap-1.5 pb-1.5 pr-1 pt-0.5">
              <div className="tracking-wider text-white text-opacity-50">
                + Design by
              </div>
              <div className="tracking-[2px] text-yellow-600">Brewww</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
