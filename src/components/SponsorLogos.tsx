import Image from 'next/image';

const sponsorLogos = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8771ddae00dd3dfec49a15f5a60582c2f6e61b30dfe1a3b37019c674eecd2a82?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d", alt: "Sponsor Logo 1", width: 272, height: 136 },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ceac517e596cb2cf47eded08aa770d3df299ab67fd00275bdb18bab34825a48a?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d", alt: "Sponsor Logo 2", width: 136, height: 49 },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5de449aed07d8e3a90279c56929050d8e579aa38ab33325ed53d10deae7b96f?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d", alt: "Sponsor Logo 3", width: 204, height: 51 },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c80f9ed64243162a79b27ba686be77a9bec6c538ced8b0d4e50f3edc290d248?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d", alt: "Sponsor Logo 4", width: 204, height: 53 },
];

export function SponsorLogos() {
  return (
    <section className="justify-center px-5 py-px w-full border-b border-zinc-100 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {sponsorLogos.map((logo, index) => (
          <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow justify-center items-center self-stretch px-16 py-20 border border-solid border-zinc-100 max-w-[1920px] max-md:px-5 max-md:max-w-full">
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={logo.width}
                height={logo.height}
                className={`mt-${index === 0 ? '4' : index === 1 ? '16' : '14'} max-w-full ${index === 0 ? 'aspect-[2]' : index === 1 ? 'aspect-[2.78]' : index === 2 ? 'aspect-[4]' : 'aspect-[3.85]'} ${index === 1 ? 'max-md:mt-10' : ''}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
