import Image from "next/image";

const sponsorLogos = [
  {
    src: "",
    alt: "Sponsor Logo 1",
    width: 272,
    height: 136,
  },
  {
    src: "",
    alt: "Sponsor Logo 2",
    width: 136,
    height: 49,
  },
  {
    src: "",
    alt: "Sponsor Logo 3",
    width: 204,
    height: 51,
  },
  {
    src: "",
    alt: "Sponsor Logo 4",
    width: 204,
    height: 53,
  },
];

export function LogoSection() {
  return (
    <section className="w-full justify-center border-b border-zinc-100 px-5 py-px max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {sponsorLogos.map((logo, index) => (
          <div
            key={index}
            className="flex w-3/12 flex-col max-md:ml-0 max-md:w-full"
          >
            <div className="flex max-w-[1920px] grow items-center justify-center self-stretch border border-solid border-zinc-100 px-16 py-20 max-md:max-w-full max-md:px-5">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={`mt-${index === 0 ? "4" : index === 1 ? "16" : "14"} max-w-full ${index === 0 ? "aspect-[2]" : index === 1 ? "aspect-[2.78]" : index === 2 ? "aspect-[4]" : "aspect-[3.85]"} ${index === 1 ? "max-md:mt-10" : ""}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
