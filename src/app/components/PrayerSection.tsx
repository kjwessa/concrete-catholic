import Image from "next/image";

export function PrayerSection() {
  return (
    <section className="flex w-full flex-col p-20 max-md:max-w-full max-md:px-5">
      <div className="z-10 mt-32 w-full max-w-[1370px] self-center max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex w-[39%] flex-col max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
              <h2 className="text-sm uppercase leading-5 tracking-[2px] text-zinc-400 max-md:max-w-full">
                Pray. Encounter. Share.
              </h2>
              <h3 className="mt-8 text-4xl font-extrabold leading-10 max-md:max-w-full">
                Encounter begins with a<br /> simple prayer.
              </h3>
              <h4 className="mt-16 text-xl font-extrabold leading-6 max-md:mt-10 max-md:max-w-full">
                Lord Jesus, reveal yourself to me...
              </h4>
              <p className="mt-2.5 text-base leading-8 max-md:max-w-full">
                This simple prayer begins by acknowledging the person of Christ,{" "}
                <br /> asking that He make His presence known to us here and
                now...
              </p>
              <h4 className="mt-8 text-xl font-extrabold leading-6 max-md:max-w-full">
                ...in a real and concrete way today.
              </h4>
              <p className="mt-2.5 text-base leading-8 max-md:max-w-full">
                We pray that Jesus reveals Himself to us in our joys, our
                sorrows, our <br /> work, our relationships, our boredom, and
                our reality.
              </p>
            </div>
          </div>
          <div className="ml-5 flex w-[61%] flex-col max-md:ml-0 max-md:w-full">
            <div className="relative flex min-h-[600px] grow flex-col px-10 pb-10 max-md:mt-10 max-md:max-w-full">
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbe6a066953414bafefb9fa57dfe80951dc73d7fe58c70a34fdba607abc2a0b0?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d"
                alt="Background image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
              <div className="relative h-[560px] shrink-0 border-2 border-solid border-yellow-600 max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 ml-48 flex w-[959px] max-w-full justify-between bg-yellow-600 px-16 py-20 max-md:px-5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex w-[76%] flex-col max-md:ml-0 max-md:w-full">
            <h2 className="grow text-3xl font-extrabold leading-9 text-white max-md:mt-10 max-md:max-w-full">
              Jesus, reveal yourself to me in a real and concrete way today.
            </h2>
          </div>
          <div className="ml-5 flex w-[24%] flex-col max-md:ml-0 max-md:w-full">
            <button className="my-auto w-full self-stretch bg-white px-10 py-5 text-xl leading-5 tracking-wider text-yellow-600 max-md:mt-10 max-md:px-5">
              Listen Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
