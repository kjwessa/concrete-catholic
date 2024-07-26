import Image from 'next/image';

export function QuoteSection() {
  return (
    <section className="flex relative flex-col justify-center items-center px-16 py-20 mt-44 max-w-full font-extrabold min-h-[850px] w-[1536px] max-md:pl-5 max-md:mt-10">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9a8a3c00b249c22a4a8131fd75c219ced4abcd2f85e4173d4761f03d29bbf92?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="flex relative gap-5 justify-between p-20 mt-16 mb-10 w-full shadow-2xl bg-white bg-opacity-90 max-w-[1370px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <blockquote className="flex flex-col self-end mt-24 max-md:mt-10 max-md:max-w-full">
          <p className="text-4xl leading-9 text-black max-md:max-w-full">
            "Being Christian is not the result of <br /> an ethical choice or a lofty idea, but <br /> the encounter with an event, a person, <br /> which gives life a new horizon and a<br /> decisive direction."
          </p>
          <cite className="mt-20 text-xl tracking-wider leading-5 text-gray-800 max-md:mt-10 max-md:max-w-full">
            Pope Benedict XVI
          </cite>
          <div className="text-xs tracking-wider leading-5 uppercase text-zinc-400 max-md:max-w-full">
            Deus Caritas Est
          </div>
        </blockquote>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d7dc1a061431689b3d2e230bd78f4a62b81b5992b1ea617a01797e75f213cd4?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d"
          alt="Pope Benedict XVI"
          width={300}
          height={390}
          className="shrink-0 max-w-full aspect-[0.77]"
        />
      </div>
    </section>
  );
}

