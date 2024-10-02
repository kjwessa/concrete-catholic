"use client";

import { useState } from "react";
import Image from "next/image";
import { Eyebrow } from "./Eyebrow";
import FAQIcon from "@/public/images/icons8-plus.svg";

export function FAQSection() {
  return (
    <section id="faq-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center pb-24 pt-24 text-sm">
          <div className="w-full max-w-3xl">
            <div className="mb-12 text-center">
              <Eyebrow text="FAQ" />
              <h2 className="mb-8 text-4xl font-extrabold md:text-5xl lg:text-6xl">
                Got questions?
                <br />
                We have answers.
              </h2>
            </div>

            <div>
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 flex flex-col overflow-hidden rounded-md border-2 border-solid border-yellow-600">
      <div
        className="flex max-w-full cursor-pointer items-center justify-between p-6 text-yellow-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h5 className="mr-10 text-xl font-bold text-black">{question}</h5>
        <Image
          alt="FAQ Icon"
          className={`inline-block h-5 w-5 max-w-full align-middle transition-transform duration-300 ease-out ${
            isOpen ? "rotate-45" : ""
          }`}
          src={FAQIcon}
        />
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="p-6 font-sans text-lg">{answer}</p>
      </div>
    </div>
  );
}
