export function WhatIfSection() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center py-24 text-sm">
          <div className="relative w-[90%] max-w-[85.63rem]">
            <div
              className="grid auto-cols-fr grid-cols-[1.4fr_1fr] grid-rows-[auto_auto] gap-x-10 gap-y-5"
              id="div-1"
            >
              <div
                className="col-start-2 col-end-3 row-start-1 row-end-2 pr-12"
                id="div-2"
              >
                <div className="uppercase text-zinc-400" id="div-3">
                  Imagine this...
                </div>

                <h3 className="mb-8 max-w-[26.25rem] text-[2.50rem] font-extrabold leading-none">
                  What if you could encounter God in the ordinary?
                </h3>

                <ol className="mb-3 flex flex-wrap pl-8 text-xl font-bold">
                  <li className="list-item basis-1/2 py-3 pr-5">
                    <h5 className="mb-3 font-extrabold">
                      Through every relationship in your life.
                      <br />
                    </h5>
                  </li>

                  <li className="list-item basis-1/2 py-3 pr-5">
                    <h5 className="mb-3 font-extrabold">
                      Through your work, desires, and plans.
                      <br />
                    </h5>
                  </li>

                  <li className="list-item basis-1/2 py-3 pr-5">
                    <h5 className="mb-3 font-extrabold">
                      Through your loneliness, boredom, and sadness.
                      <br />
                    </h5>
                  </li>

                  <li className="list-item basis-1/2 py-3 pr-5">
                    <h5 className="mb-3 font-extrabold">
                      Through your joy, hope, and happiness.
                      <br />
                    </h5>
                  </li>
                </ol>
              </div>

              <div
                className='relative col-start-1 col-end-2 row-start-1 row-end-2 flex h-[37.50rem] flex-col items-center justify-center bg-[url("https://www.concretecatholic.com/images/knight-park-bench-small.jpg")] bg-cover blur-[1px]'
                id="div-4"
              ></div>

              <div
                className="relative col-start-1 col-end-3 row-start-2 row-end-3 -mt-16 flex w-[70%] min-w-[53.13rem] items-center justify-between justify-self-end bg-yellow-600 px-16 py-20 text-white"
                id="div-5"
              >
                <h4
                  className="mr-28 max-w-[25.00rem] text-3xl font-extrabold"
                  id="h4-1"
                >
                  Learn how to encounter Jesus Christ in every moment of every
                  day.
                </h4>

                <a
                  className="relative max-w-full overflow-hidden bg-white px-10 py-5 text-xl text-yellow-600"
                  href="https://www.concretecatholic.com/#listen-now"
                >
                  <div className="cursor-pointer">Listen Now</div>

                  <div className="absolute right-full top-0 z-[1] h-full w-full cursor-pointer bg-zinc-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
