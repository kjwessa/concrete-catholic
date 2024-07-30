import Image from "next/image";

export function QuoteSection() {
  return (
    <section className="relative mt-44 flex min-h-[850px] w-[1536px] max-w-full flex-col items-center justify-center px-16 py-20 font-extrabold max-md:mt-10 max-md:pl-5">
      <Image
        src=""
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="relative mb-10 mt-16 flex w-full max-w-[1370px] justify-between gap-5 bg-white bg-opacity-90 p-20 shadow-2xl max-md:mt-10 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <blockquote className="mt-24 flex flex-col self-end max-md:mt-10 max-md:max-w-full">
          <p className="text-4xl leading-9 text-black max-md:max-w-full">
            "Being Christian is not the result of an ethical choice or a lofty
            idea, but the encounter with an event, a person, which gives life a
            new horizon and a decisive direction."
          </p>
          <cite className="mt-20 text-xl leading-5 tracking-wider text-gray-800 max-md:mt-10 max-md:max-w-full">
            Pope Benedict XVI
          </cite>
          <div className="text-xs uppercase leading-5 tracking-wider text-zinc-400 max-md:max-w-full">
            Deus Caritas Est
          </div>
        </blockquote>
        <Image
          src=""
          alt="Pope Benedict XVI"
          width={300}
          height={390}
          className="aspect-[0.77] max-w-full shrink-0"
        />
      </div>
    </section>
  );
}
