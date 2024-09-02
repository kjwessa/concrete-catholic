import Image from 'next/image';

export function Footer() {
  return (
    <footer className="flex justify-center items-center px-16 pt-20 pb-12 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col mt-5 w-full max-w-[1370px] max-md:max-w-full">
        <div className="flex justify-between max-md:flex-wrap max-md:max-w-full">
          <form className="flex gap-5 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <input
              type="email"
              placeholder="name@domain.com"
              className="flex-1 px-5 pt-5 pb-5 text-lg border-b border-white border-opacity-50 text-white text-opacity-50 max-md:max-w-full"
            />
            <button type="submit" className="px-10 py-5 text-xl tracking-wider leading-5 text-white bg-yellow-600 max-md:px-5">
              Subscribe
            </button>
          </form>
          <div className="flex gap-5 py-5 pr-5">
            <a href="#" className="flex flex-col justify-center items-start px-5">
              <Image
                loading="lazy"
                src=""
                alt="Social Media Icon 1"
                width={20}
                height={20}
                className="w-5 aspect-square"
              />
            </a>
            <a href="#" className="flex flex-col justify-center items-start px-5">
              <Image
                loading="lazy"
                src=""
                alt="Social Media Icon 2"
                width={20}
                height={20}
                className="w-5 aspect-square"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col pt-12 mt-12 border-t border-white border-opacity-10 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full text-sm leading-5 text-white text-opacity-50 tracking-[2px] max-md:flex-wrap max-md:max-w-full">
            <Image
              loading="lazy"
              src=""
              alt="Concrete Catholic Logo"
              width={175}
              height={96}
              className="shrink-0 max-w-full aspect-[1.82]"
            />
            <nav className="flex my-auto">
              <a href="#" className="px-5 py-1">About Us</a>
              <a href="#" className="px-5 py-1 text-sm leading-5">Meet Fr. Jack</a>
              <a href="#" className="px-5 py-1">Listen Now</a>
            </nav>
          </div>
          <div className="flex items-start pl-20 mt-12 text-xs leading-5 max-md:flex-wrap max-md:pl-5 max-md:mt-10">
            <div className="self-stretch pt-1 pr-1.5 pb-1.5 tracking-wider text-white text-opacity-50">
              © 2020 Concrete Catholic.
            </div>
            <div className="flex gap-1.5 pt-0.5 pr-1 pb-1.5">
              <div className="tracking-wider text-white text-opacity-50">Photography by</div>
              <div className="text-yellow-600 tracking-[2px]">Brittney Rivera</div>
            </div>
            <div className="flex gap-1.5 pt-0.5 pr-1 pb-1.5">
              <div className="tracking-wider text-white text-opacity-50">+ Design by</div>
              <div className="text-yellow-600 tracking-[2px]">Brewww</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
