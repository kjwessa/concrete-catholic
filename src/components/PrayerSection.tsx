import Image from 'next/image';

export function PrayerSection() {
  return (
    <section className="flex flex-col p-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="z-10 self-center mt-32 w-full max-w-[1370px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
              <h2 className="text-sm leading-5 uppercase text-zinc-400 tracking-[2px] max-md:max-w-full">
                Pray. Encounter. Share.
              </h2>
              <h3 className="mt-8 text-4xl font-extrabold leading-10 max-md:max-w-full">
                Encounter begins with a<br /> simple prayer.
              </h3>
              <h4 className="mt-16 text-xl font-extrabold leading-6 max-md:mt-10 max-md:max-w-full">
                "Lord Jesus, reveal yourself to me..."
              </h4>
              <p className="mt-2.5 text-base leading-8 max-md:max-w-full">
                This simple prayer begins by acknowledging the person of Christ, <br /> asking that He make His presence known to us here and now...
              </p>
              <h4 className="mt-8 text-xl font-extrabold leading-6 max-md:max-w-full">
                "...in a real and concrete way today."
              </h4>
              <p className="mt-2.5 text-base leading-8 max-md:max-w-full">
                We pray that Jesus reveals Himself to us in our joys, our sorrows, our <br /> work, our relationships, our boredom, and our reality.
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow px-10 pb-10 min-h-[600px] max-md:mt-10 max-md:max-w-full">
              <Image 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbe6a066953414bafefb9fa57dfe80951dc73d7fe58c70a34fdba607abc2a0b0?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d" 
                alt="Background image" 
                layout="fill" 
                objectFit="cover" 
                className="absolute inset-0"
              />
              <div className="relative shrink-0 border-2 border-yellow-600 border-solid h-[560px] max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-16 py-20 mb-5 ml-48 max-w-full bg-yellow-600 w-[959px] max-md:px-5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
            <h2 className="grow text-3xl font-extrabold leading-9 text-white max-md:mt-10 max-md:max-w-full">
              "Jesus, reveal yourself to me in <br />a real and concrete way today."
            </h2>
          </div>
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <button className="self-stretch px-10 py-5 my-auto w-full text-xl tracking-wider leading-5 text-yellow-600 bg-white max-md:px-5 max-md:mt-10">
              Listen Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
