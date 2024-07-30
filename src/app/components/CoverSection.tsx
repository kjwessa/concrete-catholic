export function CoverSection() {
  return (
    <section className="bg-cc-charcoal text-white">
      <div className="relative flex flex-col items-center justify-center pb-36 pt-24 text-center">
        <div className="flex w-[90%] max-w-[85.63rem] flex-col items-center justify-center">
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

        <div className="-mb-96 grid min-h-[31.25rem] w-full max-w-[85.63rem] auto-cols-fr grid-cols-[1fr_1fr_1fr] grid-rows-[auto] gap-[0.63rem] px-3 text-3xl font-extrabold">
          {coverCardItems.map((card, index) => (
            <CoverCard key={index} title={card.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

const coverCardItems = [
  { title: "How to share your experiences with others.", content: "" },
  { title: "How to encounter Christ in the ordinary.", content: "" },
  { title: "How to pray in a simple and authentic way.", content: "" },
];

interface CoverCardProps {
  title: string;
  content: string;
}

function CoverCard({ title, content }: CoverCardProps) {
  return (
    <div>
      <div className="relative col-start-3 col-end-4 row-start-1 row-end-2 flex cursor-pointer flex-col items-start justify-end bg-slate-600 p-10">
        <h4 className="absolute left-[2.50rem] right-[2.50rem] top-[5.00rem] mb-8">
          {title}
        </h4>
        <p>{content}</p>
      </div>
    </div>
  );
}
