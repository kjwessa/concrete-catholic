import Image from 'next/image';

const audienceCards = [
  {
    title: "The \"Everyday Catholic\"",
    description: "Children know well what we often forget...just keep it simple. You do not need a fancy degree to encounter Christ in your daily life, just a willingness to try.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/05487ef9bd3ba36301d736ff86341244464dabab183d4186213bd0607d8e848c?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d"
  },
  {
    title: "The \"Struggling Catholic\"",
    description: "Life is hard, and sometimes the darkness seems to surround us all. We know no matter how bad things seem to be, that Jesus has conquered all, even death itself.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cb34eb4786d2bb66a6d1471bb5c70b16496dafd6b63256a7e15a2e07901a271?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d"
  },
  {
    title: "The \"Busy Catholic\"",
    description: "Balancing a career, kids, and a mortgage is not easy. Even though Jesus never promised \"easy,\" He did promise that He would never abandon us.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/52aa7cf1f3ffed58cd4e32a180388d8e76c2581f9a8e4736d4aeafe0aa014e8b?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d"
  }
];

export function AudienceSection() {
  return (
    <section className="flex justify-center items-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="my-5 w-full max-w-[1370px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch pb-8 my-auto text-black max-md:mt-10">
              <h2 className="text-4xl font-extrabold leading-10">
                Who is the Concrete <br /> Catholic podcast for?
              </h2>
              <p className="mt-8 text-lg leading-9">
                No matter where you are in your faith, we <br /> have created Concrete Catholic with you <br /> in mind.
              </p>
            </div>
          </div>
          {audienceCards.map((card, index) => (
            <div key={index} className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-black max-md:max-w-full">
                <div className="flex flex-col justify-center p-5 max-md:max-w-full">
                  <div className="flex flex-col bg-white shadow-2xl max-md:max-w-full">
                    <Image 
                      src={card.imageSrc} 
                      alt={card.title} 
                      width={500} 
                      height={275} 
                      className="w-full aspect-[1.82] max-md:max-w-full" 
                    />
                    <div className="flex flex-col p-8 max-md:px-5 max-md:max-w-full">
                      <h3 className="text-3xl font-extrabold leading-9">{card.title}</h3>
                      <p className="mt-8 text-lg leading-9">{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
