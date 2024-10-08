export function BeConcreteSection() {
  return (
    <section
      id="be-concrete-section"
      className="w-full bg-cc-crimson text-white"
    >
      <div className="container mx-auto w-full">
        <div className="flex w-full flex-col items-center justify-center pb-24 pt-72 text-center text-sm">
          <div className="flex flex-col items-start justify-center">
            <h2 className="mb-8 text-[4.38rem] font-extrabold leading-none">
              Be a Concrete Catholic
            </h2>
            <p className="mb-8 max-w-xs font-sans text-lg">
              We have created Concrete Catholic as an invitation to walk with us
              as we walk with Christ.
            </p>
            <div className="flex h-auto flex-col items-start justify-start self-center">
              {concreteCardItems.map((card, index) => (
                <ConcreteCard
                  key={index}
                  title={card.title}
                  content={card.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const concreteCardItems = [
  {
    title: "01. Focus",
    content:
      "Keep your eyes fixed on Christ. Literally. Find an image of Jesus, and give yourself time to simply look at Him, and let Him look at you. This simple exercise puts everything in perspective, letting Jesus be our focus, and allowing the noise to fade away.",
  },
  {
    title: "02. Pray",
    content:
      'This step, while obvious, must still be said. This is a state of "being," not a state of "doing." With your eyes fixed on Christ, it becomes natural to ask Jesus to reveal Himself in the circumstances of your life.',
  },
  {
    title: "03. Anticipate",
    content:
      "  Expect the unexpected and allow the Lord to enter into your surroundings. Very often, we have a specific idea in our minds how (and where) Christ will come to us. Anticipation is not just about seeking out Christ, but allowing ourselves to be found by Him.",
  },
];

interface ConcreteCardProps {
  title: string;
  content: string;
}

function ConcreteCard({ title, content }: ConcreteCardProps) {
  return (
    <div>
      <h3 className="mb-8 text-[2.50rem] font-extrabold leading-none">
        {title}
      </h3>
      <p className="mb-8 max-w-[44.38rem] font-sans text-lg">{content}</p>
    </div>
  );
}
