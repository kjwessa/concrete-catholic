import Image from 'next/image';

export function Hero() {
  return (
    <section className="self-center mt-64 mb-52 w-full max-w-[1370px] max-md:my-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col grow px-5 pb-8 text-white max-md:max-w-full">
            <div className="text-sm leading-5 uppercase text-white text-opacity-50 tracking-[2px] max-md:max-w-full">
              A podcast for the Every day Catholic
            </div>
            <h1 className="mt-14 text-7xl font-extrabold leading-[72px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              When was the last time <br /> you had an encounter <br /> with Christ?
            </h1>
            <p className="mt-12 text-lg leading-9 max-md:mt-10 max-md:max-w-full">
              Encounter begins with a simple prayer. Let us begin.
            </p>
            <div className="flex gap-5 pr-20 mt-8 text-xl leading-5 text-yellow-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
              <button className="px-10 py-5 tracking-wider bg-white max-md:px-5">Listen Now</button>
              <div className="flex flex-col my-auto">
                <div>Meet Fr. Jack Knight</div>
                <div className="shrink-0 mt-2 h-0.5 bg-orange-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center items-start w-full bg-zinc-700 max-md:max-w-full">
            <Image 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e00a8a812551c2424cf7c9c75ee6f1daee84648129fb9b2b90c705e08b4b9ae4?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d" 
              alt="Fr. Jack Knight" 
              width={586} 
              height={492} 
              className="max-w-full aspect-[1.19]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
