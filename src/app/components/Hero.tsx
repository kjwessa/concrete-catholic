import { BtnMain } from "./BtnMain";
import { LinkMain } from "./LInkMain";

export function Hero() {
  return (
    <section className="w-full self-center bg-gray-800">
      <div className="container mx-auto w-full pt-24">
        <div className="grid min-h-screen w-full grid-cols-2 text-sm text-white">
          <div className="relative z-20">
            <div className="uppercase text-white/[0.5]" id="div-2">
              A podcast for the Every day Catholic
            </div>

            <div className="max-w-[47.50rem] overflow-hidden pb-1.5 text-7xl font-extrabold">
              <h1 className="z-20 max-w-[50.00rem] pb-3.5 pt-6">
                When was the last time you had an encounter with Christ?
              </h1>
            </div>

            <p className="mb-8 max-w-[37.50rem] overflow-visible text-lg">
              Encounter begins with a simple prayer. Let us begin.
            </p>
            <div className="flex items-center gap-8">
              <BtnMain text="Listen Now" link="/#" />
              <LinkMain link="/#" text="Meet Fr. Jack Knight" />
            </div>
          </div>

          <div
            className="relative flex h-[80vh] w-[40vw] max-w-[46.88rem] flex-col items-center justify-center bg-zinc-700"
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
    </section>
  );
}
