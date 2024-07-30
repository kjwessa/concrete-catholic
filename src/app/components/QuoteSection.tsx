import Image from "next/image";

interface QuoteSectionProps {
  image: string;
  alt: string;
  quoteContent: string;
  quoteAuthor: string;
  quoteSource: string;
}

export function QuoteSection({
  image,
  alt,
  quoteAuthor,
  quoteContent,
  quoteSource,
}: QuoteSectionProps) {
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
            {quoteContent}
          </p>
          <cite className="mt-20 text-xl leading-5 tracking-wider text-gray-800 max-md:mt-10 max-md:max-w-full">
            {quoteAuthor}
          </cite>
          <div className="text-xs uppercase leading-5 tracking-wider text-zinc-400 max-md:max-w-full">
            {quoteSource}
          </div>
        </blockquote>
        <Image
          src={image}
          alt={alt}
          width={300}
          height={390}
          className="aspect-[0.77] max-w-full shrink-0"
        />
      </div>
    </section>
  );
}
