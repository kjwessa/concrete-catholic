export function FAQSection() {
  return (
    <>
      <div>
        <div
          className="flex flex-col items-center justify-center pb-48 pt-24 text-center text-sm"
          id="div-1"
        >
          <div className="w-[90%] max-w-[85.63rem]">
            <h2 className="mb-8 text-6xl font-extrabold">
              Got questions?
              <br />
              We have answers.
              <a
                className="text-teal-300"
                href="https://iamablogger.convertkit.com/creator-pass/#faq1"
              >
                <br className="cursor-pointer" />
              </a>
            </h2>

            <div className="mb-10 flex flex-col border-2 border-solid border-yellow-600">
              <a
                className="flex max-w-full items-center justify-between p-10 text-yellow-600"
                href="https://www.concretecatholic.com/#"
                id="a-1"
              >
                <h5 className="mr-10 cursor-pointer text-xl font-bold text-black">
                  What makes Concrete Catholic different from other podcasts?
                </h5>
                <img
                  className="inline-block h-5 w-5 max-w-full cursor-pointer align-middle"
                  src="https://www.concretecatholic.com/images/icons8-plus.svg"
                />
              </a>

              <p className="mx-10 mb-10 max-w-full text-lg" id="p-1">
                Relationship <em className="italic">with </em>
                Jesus Christ will always trump knowledge{" "}
                <em className="italic">abou</em>t Jesus Christ. While there are
                a lot of Catholic podcasts out there (many of them great),
                we wanted to address the most foundational matter of faith...how
                to have a relationship with Jesus Christ.
              </p>
            </div>

            <div className="mb-10 flex flex-col border-2 border-solid border-yellow-600">
              <a
                className="flex max-w-full items-center justify-between p-10 text-yellow-600"
                href="https://www.concretecatholic.com/#"
                id="a-2"
              >
                <h5 className="mr-10 cursor-pointer text-xl font-bold text-black">
                  Does it matter what order I listen to the episodes?
                </h5>
                <img
                  className="inline-block h-5 w-5 max-w-full cursor-pointer align-middle"
                  src="https://www.concretecatholic.com/images/icons8-plus.svg"
                />
              </a>

              <p className="mx-10 mb-10 max-w-full text-lg" id="p-2">
                Wherever you are joining us in our podcast, it does not matter
                which order you listen to the episodes. We have designed
                Concrete Catholic to be accessible whether you're listening from
                the very beginning or joining us on a random week.
              </p>
            </div>

            <div className="mb-10 flex flex-col border-2 border-solid border-yellow-600">
              <a
                className="flex max-w-full items-center justify-between p-10 text-yellow-600"
                href="https://www.concretecatholic.com/#"
                id="a-3"
              >
                <h5 className="mr-10 cursor-pointer text-xl font-bold text-black">
                  Where did you learn the prayer you say in the podcast? 
                </h5>
                <img
                  className="inline-block h-5 w-5 max-w-full cursor-pointer align-middle"
                  src="https://www.concretecatholic.com/images/icons8-plus.svg"
                />
              </a>

              <p className="mx-10 mb-10 max-w-full text-lg" id="p-3">
                The prayer was really born out of intentional time with Christ
                around the time of my ordination (Summer 2018).{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
