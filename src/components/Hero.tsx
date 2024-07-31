import { BtnMain } from "./BtnMain";
import { LinkMain } from "./LinkMain";
import Image from "next/image";
import HeroImage from "@/public/images/Concrete_Catholic-86.jpg";

export function Hero() {
  return (
    <section className="bg-cc-charcoal w-full self-center text-white">
      <div className="container mx-auto pt-24">
        <div className="grid grid-cols-2">
          <div className="relative z-20 flex flex-col content-center justify-center">
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
          <div className="relative flex h-[80vh] w-[40vw] max-w-[46.88rem] flex-col items-center justify-center bg-zinc-700">
            <div className="mb-12 ml-12 mr-6 mt-6 inline-block h-full max-h-[56.25rem] w-[37.00rem] max-w-none pb-3 align-middle">
              <Image
                src={HeroImage}
                alt="Fr. Jack Knight sitting in a local brewery."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
