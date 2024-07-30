import Image from "next/image";
import FAQIcon from "@/public/images/icons8-plus.svg";

export function FAQSection() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center pb-48 pt-24 text-sm">
          <div>
            <h2 className="mb-8 text-center text-6xl font-extrabold">
              Got questions?
              <br />
              We have answers.
            </h2>
            <div className="mx-auto">
              {faqCardItems.map((card, index) => (
                <FAQCard
                  key={index}
                  question={card.question}
                  answer={card.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqCardItems = [
  {
    question: "What makes Concrete Catholic different from other podcasts?",
    answer:
      "Relationship with Jesus Christ will always trump knowledge about Jesus Christ. While there are a lot of Catholic podcasts out there (many of them great), we wanted to address the most foundational matter of faith...how to have a relationship with Jesus Christ.",
  },
  {
    question: "Does it matter what order I listen to the episodes?",
    answer:
      "Wherever you are joining us in our podcast, it does not matter which order you listen to the episodes. We have designed Concrete Catholic to be accessible whether you're listening from the very beginning or joining us on a random week.",
  },
  {
    question: "Where did you learn the prayer you say in the podcast? ",
    answer:
      "The prayer was really born out of intentional time with Christ around the time of my ordination (Summer 2018).",
  },
];

interface FAQCardProps {
  question: string;
  answer: string;
}

function FAQCard({ question, answer }: FAQCardProps) {
  return (
    <div className="mb-10 flex flex-col border-2 border-solid border-yellow-600">
      <div className="flex max-w-full items-center justify-between p-10 text-yellow-600">
        <h5 className="mr-10 cursor-pointer text-xl font-bold text-black">
          {question}
        </h5>
        <Image
          alt="FAQ Icon"
          className="inline-block h-5 w-5 max-w-full cursor-pointer align-middle"
          src={FAQIcon}
        />
      </div>
      <div>
        <p className="mx-10 mb-10 max-w-full text-lg">{answer}</p>
      </div>
    </div>
  );
}
