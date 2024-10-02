import Image from "next/image";
import PrayerSectionImage from "@/public/images/Concrete_Catholic_bnw-81.jpg";
import { ListenCTA } from "./ListenCTA";
import { Eyebrow } from "./Eyebrow";

export function PrayerSection() {
  return (
    <section id="prayer-section" className="w-full pb-24 pt-48">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-sm">
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
                <Eyebrow text="Pray. Encounter. Share." />

                <h3 className="mb-8 max-w-[26.25rem] text-[2.50rem] font-extrabold leading-none">
                  Encounter begins with a simple prayer.
                </h3>

                <h5 className="mb-3 text-xl font-extrabold">
                  "Lord Jesus, reveal yourself to me..."
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
              <div className="relative col-start-1 col-end-3 row-start-2 row-end-3 -mt-16 flex w-[70%] items-center justify-between text-white">
                <ListenCTA
                  text="Jesus, reveal yourself to me in a real and concrete way today."
                  link="/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
