import Image from "next/image";

const audienceCards = [
  {
    title: 'The "Everyday Catholic"',
    description:
      "Children know well what we often forget...just keep it simple. You do not need a fancy degree to encounter Christ in your daily life, just a willingness to try.",
    imageSrc: "",
  },
  {
    title: 'The "Struggling Catholic"',
    description:
      "Life is hard, and sometimes the darkness seems to surround us all. We know no matter how bad things seem to be, that Jesus has conquered all, even death itself.",
    imageSrc: "",
  },
  {
    title: 'The "Busy Catholic"',
    description:
      'Balancing a career, kids, and a mortgage is not easy. Even though Jesus never promised "easy," He did promise that He would never abandon us.',
    imageSrc: "",
  },
];

export function AudienceSection() {
  return (
    <section className="flex w-full items-center justify-center px-16 py-20 max-md:max-w-full max-md:px-5">
      <div className="my-5 w-full max-w-[1370px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex w-[27%] flex-col max-md:ml-0 max-md:w-full">
            <div className="my-auto flex flex-col self-stretch pb-8 text-black max-md:mt-10">
              <h2 className="text-4xl font-extrabold leading-10">
                Who is the Concrete <br /> Catholic podcast for?
              </h2>
              <p className="mt-8 text-lg leading-9">
                No matter where you are in your faith, we <br /> have created
                Concrete Catholic with you <br /> in mind.
              </p>
            </div>
          </div>
          {audienceCards.map((card, index) => (
            <div
              key={index}
              className="ml-5 flex w-[36%] flex-col max-md:ml-0 max-md:w-full"
            >
              <div className="flex grow flex-col text-black max-md:max-w-full">
                <div className="flex flex-col justify-center p-5 max-md:max-w-full">
                  <div className="flex flex-col bg-white shadow-2xl max-md:max-w-full">
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      width={500}
                      height={275}
                      className="aspect-[1.82] w-full max-md:max-w-full"
                    />
                    <div className="flex flex-col p-8 max-md:max-w-full max-md:px-5">
                      <h3 className="text-3xl font-extrabold leading-9">
                        {card.title}
                      </h3>
                      <p className="mt-8 text-lg leading-9">
                        {card.description}
                      </p>
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
