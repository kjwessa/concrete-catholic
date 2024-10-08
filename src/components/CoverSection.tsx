export function CoverSection() {
  return (
    <section
      id="cover-section"
      className="bg-cc-charcoal pb-36 pt-24 text-white"
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[4.38rem] font-extrabold leading-none">
            What do we cover? 
          </h2>

          <div className="pb-6 pt-3" id="div-2">
            "Lord Jesus, reveal yourself to me today in a real and concrete
            way."
          </div>

          <p className="mb-8 max-w-[43.75rem] text-lg text-white/[0.7]">
            Concrete Catholic covers the essential aspects of forming a
            relationship with Jesus Christ, from prayer to encounter to sharing
            the Good News. God comes to us in the everyday, not just in the
            religious moments.
          </p>
        </div>

        <div className="-mb-96 grid min-h-[31.25rem] w-full max-w-[85.63rem] grid-cols-1 gap-4 px-3 text-3xl font-extrabold md:grid-cols-2 lg:grid-cols-3">
          {coverCardItems.map((card, index) => (
            <CoverCard key={index} title={card.title} content={card.content} />
          ))}
        </div>
      </div>
    </section>
  );
}

const coverCardItems = [
  {
    title: "How to share your experiences with others.",
    content:
      "Life is complicated, but prayer doesn't have to be. We approach life (and begin our Podcast) with a simple prayer: \"Jesus, reveal yourself to me today in a real and concrete way.\" That's it.",
  },
  {
    title: "How to encounter Christ in the ordinary.",
    content:
      "Through the Incarnation, Christ took on our flesh, and entered into every experience of our lives. He longs to meet us in our work, in our families, in our joys, in our sorrows.",
  },
  {
    title: "How to pray in a simple and authentic way.",
    content:
      "Sometimes we encounter Jesus, but we have no idea how to share what we've experienced. We'll walk through how to share what you've encountered with your friends and your family.",
  },
];

interface CoverCardProps {
  title: string;
  content: string;
}

function CoverCard({ title, content }: CoverCardProps) {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-cc-slate p-10 transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-xl"
      role="article"
      aria-labelledby={`card-title-${title}`}
    >
      <div className="flex h-full w-full flex-col justify-between">
        <h4 id={`card-title-${title}`} className="text-3xl font-bold">
          {title}
        </h4>
        <p className="translate-y-full transform font-sans text-base font-normal opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-90">
          {content}
        </p>
      </div>
    </div>
  );
}
