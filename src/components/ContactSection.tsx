import Image from "next/image";

import { useRef, useState } from "react";

export function ContactSection() {
  return (
    <section className="w-full bg-cc-sunset pb-16 pr-20 max-md:max-w-full max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex w-[63%] flex-col max-md:ml-0 max-md:w-full">
          <Image
            loading="lazy"
            src=""
            alt="Fr. Jack"
            width={800}
            height={630}
            className="aspect-[1.27] w-full grow max-md:mt-7 max-md:max-w-full"
          />
        </div>
        <div className="ml-5 flex w-[37%] flex-col max-md:ml-0 max-md:w-full">
          <div className="my-auto flex flex-col self-stretch pb-4 max-md:mt-10 max-md:max-w-full">
            <h2 className="text-sm leading-5 text-white max-md:max-w-full">
              Its great to meet you!
            </h2>
            <h3 className="mt-8 self-start text-6xl font-extrabold leading-[72px] text-white max-md:text-4xl">
              Contact Fr. Jack
            </h3>
            <form className="mt-8">
              <label
                htmlFor="name"
                className="text-base font-bold text-white max-md:max-w-full"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="First + Last"
                className="mt-1.5 w-full border border-solid border-stone-300 bg-white px-3.5 py-2.5 text-sm text-neutral-400 max-md:max-w-full"
              />

              <label
                htmlFor="email"
                className="mt-4 text-base font-bold text-white max-md:max-w-full"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@domain.com"
                className="mt-1.5 w-full whitespace-nowrap border border-solid border-stone-300 bg-white px-3.5 py-2.5 text-sm text-neutral-400 max-md:max-w-full"
              />

              <label
                htmlFor="message"
                className="mt-4 text-base font-bold text-white max-md:max-w-full"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Leave your message here."
                className="mt-1.5 w-full border border-solid border-stone-300 bg-white px-3.5 pb-7 pt-2.5 text-sm leading-5 text-neutral-400 max-md:max-w-full"
              ></textarea>

              <div className="mt-4 flex w-[304px] max-w-full flex-col justify-center bg-white"></div>

              <button
                type="submit"
                className="mt-3 self-start whitespace-nowrap bg-white px-10 pb-5 pt-9 text-center text-xl leading-5 tracking-wider text-yellow-600 max-md:px-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
