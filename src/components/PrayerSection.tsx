import Image from "next/image";
import PrayerSectionImage from "@/public/images/Concrete_Catholic_bnw-81.jpg";
import { BtnMain } from "./BtnMain";

export function PrayerSection() {
  return (
    <section className="flex w-full flex-col p-20 max-md:max-w-full max-md:px-5">
      <div>
        <div className="flex flex-col items-center justify-center pb-24 pt-48 text-sm">
          <div className="relative w-[90%] max-w-[85.63rem]">
            <div className="grid auto-cols-fr grid-cols-[1fr_1.4fr] grid-rows-[auto_auto] gap-x-10 gap-y-5">
              <div className="relative col-start-2 col-end-3 row-start-1 row-end-2 flex h-[37.50rem] flex-col items-center justify-center bg-cover">
                <Image
                  src={PrayerSectionImage}
                  alt="Concrete Catholic"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                <div className="uppercase text-zinc-400" id="div-5">
                  Pray. Encounter. Share.
                </div>

                <h3 className="mb-8 max-w-[26.25rem] text-[2.50rem] font-extrabold leading-none">
                  Encounter begins with a simple prayer.
                </h3>

                <h5 className="mb-3 text-xl font-extrabold">
                  "Lord Jesus, reveal yourself to me..."
                  <br />
                </h5>

                <p className="mb-8 max-w-[31.88rem]">
                  This simple prayer begins by acknowledging the person of
                  Christ, asking that He make His presence known to us here and
                  now...
                </p>

                <h5 className="mb-3 text-xl font-extrabold">
                  "...in a real and concrete way today."
                </h5>

                <p className="mb-8 max-w-[31.88rem]">
                  We pray that Jesus reveals Himself to us in our joys, our
                  sorrows, our work, our relationships, our boredom, and our
                  reality.
                </p>
              </div>

              <div className="relative col-start-1 col-end-3 row-start-2 row-end-3 -mt-16 flex w-[70%] min-w-[53.13rem] items-center justify-between bg-yellow-600 px-16 py-20 text-white">
                <h4 className="mr-28 max-w-[25.00rem] text-3xl font-extrabold">
                  "Jesus, reveal yourself to me in a real and concrete way
                  today."
                </h4>
                <BtnMain link="" text="Listen Now" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
