import Image from 'next/image';

export function FrJackSection() {
  return (
    <section className="flex justify-center items-center px-16 py-20 mt-44 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="mt-32 mb-5 max-w-full w-[1370px] max-md:pr-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch pr-12 pb-8 my-auto max-md:mt-10 max-md:max-w-full">
              <h2 className="text-xs leading-5 uppercase text-zinc-400 tracking-[2px] max-md:max-w-full">
                Fr. Jack Says...
              </h2>
              <h3 className="mt-8 text-4xl font-extrabold leading-10 text-black max-md:max-w-full">
                "Give it a shot, I think <br /> you'll love this podcast."
              </h3>
              <p className="mt-8 text-base leading-8 text-black max-md:mr-1 max-md:max-w-full">
                This podcast is the fruit of a simple prayer that has carried me for the <br /> last six years: "Jesus, reveal yourself to me today in a real and <br /> concrete way."
              </p>
              <p className="mt-8 text-base leading-8 text-black max-md:mr-1 max-md:max-w-full">
                I invite you to join us as we embark on the path towards a <br /> relationship with Jesus Christ that will change everything.
              </p>
              <div className="flex gap-5 pr-20 mt-8 text-xl leading-5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <button className="px-10 py-5 tracking-wider text-white bg-yellow-600 max-md:px-5">Listen Now</button>
                <div className="flex flex-col my-auto text-yellow-600">
                  <div>Contact Fr. Jack</div>
                  <div className="shrink-0 mt-2 h-0.5 bg-orange-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <Image 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/79903ef8cef56b4a4be4833b92353685f0d5f76fc6640c13336595524cc52ba0?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d" 
              alt="Fr. Jack" 
              width={300} 
              height={450} 
              className="grow w-full aspect-[0.67] max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
