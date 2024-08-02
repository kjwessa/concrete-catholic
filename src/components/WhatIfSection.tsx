import { Eyebrow } from "./Eyebrow";
import { ListenCTA } from "./ListenCTA";

export function WhatIfSection() {
  return (
    <section id="what-if-section">
      <div>
        <div className="flex flex-col items-center justify-center py-24 text-sm">
          <div className="relative w-[90%] max-w-[85.63rem]">
            <div className="grid auto-cols-fr grid-cols-[1.4fr_1fr] grid-rows-[auto_auto] gap-x-10 gap-y-5">
              <div className="col-start-2 col-end-3 row-start-1 row-end-2 pr-12">
                <Eyebrow text="Imagine this..." />

                <h3 className="mb-8 max-w-[26.25rem] text-[2.50rem] font-extrabold leading-none">
                  What if you could encounter God in the ordinary?
                </h3>

                <ol className="mb-3 flex flex-wrap pl-8 text-xl font-bold">
                  <li className="list-item basis-1/2 py-3 pr-5">
                    <h5 className="mb-3 font-extrabold">
                      Through every relationship in your life.
                    </h5>
                  </li>

                  <li className="list-item basis-1/2 py-3 pr-5">
                    <h5 className="mb-3 font-extrabold">
                      Through your work, desires, and plans.
                    </h5>
                  </li>

                  <li className="list-item basis-1/2 py-3 pr-5">
                    <h5 className="mb-3 font-extrabold">
                      Through your loneliness, boredom, and sadness.
                    </h5>
                  </li>

                  <li className="list-item basis-1/2 py-3 pr-5">
                    <h5 className="mb-3 font-extrabold">
                      Through your joy, hope, and happiness.
                    </h5>
                  </li>
                </ol>
              </div>

              <div
                className='relative col-start-1 col-end-2 row-start-1 row-end-2 flex h-[37.50rem] flex-col items-center justify-center bg-[url("https://www.concretecatholic.com/images/knight-park-bench-small.jpg")] bg-cover blur-[1px]'
                id="div-4"
              ></div>

              <div className="relative col-start-1 col-end-3 row-start-2 row-end-3 -mt-16 flex w-[70%] min-w-[53.13rem] items-center justify-between justify-self-end">
                <ListenCTA
                  text="Jesus, reveal yourself to me in a real and concrete way today."
                  link="/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
