export function Footer() {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@media (max-width: 991px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-1 {\nwidth: 100% !important; min-width: auto !important; margin-bottom: 40px !important;\n}\n#div-2 {\njustify-content: flex-end !important;\n}\n}\n@media (max-width: 767px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#input-1 {\nmargin-bottom: 30px !important;\n}\n#a-1 {\nwidth: 100% !important;\n}\n}\n@media (max-width: 479px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-2 {\njustify-content: center !important;\n}\n#a-2 {\nmargin-right: 10px !important; margin-left: 10px !important;\n}\n#a-3 {\nmargin-right: 10px !important; margin-left: 10px !important;\n}\n#a-4 {\nmargin-right: 10px !important; margin-left: 10px !important;\n}\n#a-5 {\nmargin-right: 10px !important; margin-left: 10px !important;\n}\n#div-3 {\njustify-content: center !important;\n}\n#a-6 {\nmargin-bottom: 20px !important;\n}\n#div-4 {\nwidth: 100% !important; justify-content: center !important; margin-top: 30px !important; flex-direction: column !important;\n}\n#a-7 {\nmargin-right: 20px !important; align-items: center !important;\n}\n#a-8 {\nmargin-right: 20px !important; align-items: center !important;\n}\n#a-9 {\nmargin-right: 20px !important; align-items: center !important;\n}\n#div-5 {\nwidth: 100% !important; justify-content: center !important; margin-top: 30px !important; flex-direction: row !important;\n}\n#div-6 {\nmargin-left: 20px !important;\n}\n#a-10 {\nmargin-right: 20px !important; align-items: center !important;\n}\n#span-1 {\nmargin-left: 20px !important;\n}\n#a-11 {\nmargin-right: 20px !important; align-items: center !important;\n}\n#span-2 {\nmargin-left: 20px !important;\n}\n}\n",
        }}
      />

      <div className="flex flex-col items-center justify-center bg-gray-800 pb-12 pt-24 text-center text-sm">
        <div className="relative mb-12 flex w-[90%] max-w-[85.63rem] justify-between">
          <div className="w-2/4 min-w-[37.50rem] text-white" id="div-1">
            <form
              action="https://concretecatholic.us4.list-manage.com/subscribe/post?u=53f53fe5a933a9eb9d871a5fb&amp;id=47b722dd9d"
              className="flex items-center"
            >
              <input
                className="h-16 w-full cursor-text border-b-2 border-solid border-b-white/[0.5] px-5 text-lg"
                id="input-1"
                placeholder="name@domain.com"
                type="email"
              />

              <a
                className="relative max-w-full overflow-hidden bg-yellow-600 px-10 py-5 text-xl"
                href="https://concretecatholic.us4.list-manage.com/subscribe/post?u=53f53fe5a933a9eb9d871a5fb&amp;id=47b722dd9d"
                id="a-1"
              >
                <div className="cursor-pointer">Subscribe</div>

                <div className="absolute right-full top-0 z-[1] h-full w-full cursor-pointer bg-zinc-700" />
              </a>
            </form>
          </div>

          <div className="flex items-center text-teal-300" id="div-2">
            <a
              className="ml-5 inline-block h-5 max-w-full opacity-50"
              href="https://www.facebook.com/frjackknight"
              id="a-2"
            >
              <img
                className="h-full w-5 max-w-full cursor-pointer"
                src="https://www.concretecatholic.com/images/icons8-facebook-filled.svg"
              />
            </a>

            <a
              className="ml-5 inline-block h-5 max-w-full opacity-50"
              href="https://twitter.com/webflow"
              id="a-3"
            />

            <a
              className="ml-5 inline-block h-5 max-w-full opacity-50"
              href="https://www.instagram.com/frjackknight"
              id="a-4"
            >
              <img
                className="h-full w-5 max-w-full cursor-pointer"
                src="https://www.concretecatholic.com/images/icons8-instagram.svg"
              />
            </a>

            <a
              className="ml-5 inline-block h-5 max-w-full opacity-50"
              href="https://www.linkedin.com/company/webflow-inc-/"
              id="a-5"
            />
          </div>
        </div>

        <div
          className="flex w-[90%] max-w-[85.63rem] flex-wrap items-center justify-between border-t-2 border-solid border-t-white/[0.1] pt-12"
          id="div-3"
        >
          <a
            className="inline-block max-w-full overflow-hidden text-slate-300"
            href="https://www.concretecatholic.com/index.html"
            id="a-6"
          >
            <img
              className="-mb-10 -mt-10 inline-block h-44 w-44 max-w-full cursor-pointer align-middle"
              src="https://www.concretecatholic.com/images/CCwhite.png"
            />
          </a>

          <div className="flex items-center text-white/[0.5]" id="div-4">
            <a
              className="ml-5 pb-1.5"
              href="https://www.concretecatholic.com/#about"
              id="a-7"
            >
              About Us
            </a>

            <a
              className="ml-5 pb-1.5"
              href="https://www.concretecatholic.com/#meet-jack"
              id="a-8"
            >
              Meet Fr. Jack
            </a>

            <a
              className="ml-5 pb-1.5"
              href="https://www.concretecatholic.com/#listen-now"
              id="a-9"
            >
              Listen Now
            </a>
          </div>

          <div
            className="mt-12 flex basis-full items-center justify-end text-[0.63rem]"
            id="div-5"
          >
            <div className="mr-1 pb-1.5 text-white/[0.5]" id="div-6">
              © 2020 Concrete Catholic.{" "}
            </div>

            <a
              className="pb-1.5 pr-1 text-yellow-600"
              href="https://www.instagram.com/brivera_photography/"
              id="a-10"
            >
              <span
                className="mr-1 cursor-pointer pb-1.5 text-white/[0.5]"
                id="span-1"
              >
                Photography by
              </span>{" "}
              Brittney Rivera
            </a>

            <a
              className="pb-1.5 pr-1 text-yellow-600"
              href="https://brewww.co"
              id="a-11"
            >
              <span
                className="mr-1 cursor-pointer pb-1.5 text-white/[0.5]"
                id="span-2"
              >
                + Design by{" "}
              </span>
              Brewww
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
