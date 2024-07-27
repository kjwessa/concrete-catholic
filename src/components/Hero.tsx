import Image from "next/image";
import { BtnMain } from "./BtnMain";

export function Hero() {
  return (
    <section className="w-full self-center bg-gray-800">
      <div className="container mx-auto w-full">
        <div className="flex min-h-screen flex-col items-center justify-center pb-24 pt-6 text-sm text-white">
          <div className="relative z-20 flex w-[90%] max-w-[85.63rem]">
            <div className="relative">
              <div className="uppercase text-white/[0.5]" id="div-2">
                A podcast for the Every day Catholic
              </div>

              <div className="max-w-[47.50rem] overflow-hidden pb-1.5 text-7xl font-extrabold">
                <h1 className="z-20 max-w-[50.00rem] pb-3.5 pt-6">
                  When was the last time you had an encounter with Christ?
                </h1>
              </div>

              <p className="mb-8 max-w-[37.50rem] overflow-visible text-lg">
                Encounter begins with a simple prayer. Let us begin.{" "}
              </p>
              <div className="mb-8 flex items-center text-xl text-yellow-600">
                <BtnMain text="learn more" link="/#" />
                <a
                  className="relative inline-block max-w-full overflow-hidden pb-3"
                  href="https://www.concretecatholic.com/#meet-jack"
                  id="a-1"
                >
                  <div className="cursor-pointer">Meet Fr. Jack Knight</div>

                  <div className="absolute left-0 mt-2 h-0.5 w-1/5 cursor-pointer bg-orange-400 text-orange-400" />
                </a>
              </div>
            </div>

            <div
              className="absolute right-[0vw] top-0 flex h-[80vh] max-h-[56.25rem] w-[40vw] max-w-[46.88rem] flex-col items-center justify-center bg-zinc-700"
              id="div-3"
            >
              <img
                className="-mb-12 -ml-12 -mr-6 mt-6 inline-block h-full max-h-[56.25rem] w-[37.00rem] max-w-none pb-3 align-middle"
                id="img-1"
                src="https://www.concretecatholic.com/images/Concrete_Catholic-86.jpg"
                srcSet="https://www.concretecatholic.com/images/Concrete_Catholic-86-p-500.jpeg 500w, images/Concrete_Catholic-86.jpg 800w"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
