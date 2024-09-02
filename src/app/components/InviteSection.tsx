import Image from "next/image";

export function InviteSection() {
  return (
    <section className="mt-44 flex w-full items-center justify-center px-16 py-20 max-md:mt-10 max-md:max-w-full max-md:px-5">
      <div className="mb-5 mt-32 w-[1370px] max-w-full max-md:mt-10 max-md:pr-5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex w-[67%] flex-col max-md:ml-0 max-md:w-full">
            <div className="my-auto flex flex-col self-stretch pb-8 pr-12 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-xs uppercase leading-5 tracking-[2px] text-zinc-400 max-md:max-w-full">
                Fr. Jack Says...
              </h2>
              <h3 className="mt-8 text-4xl font-extrabold leading-10 text-black max-md:max-w-full">
                "Give it a shot, I think <br /> you'll love this podcast."
              </h3>
              <p className="mt-8 text-base leading-8 text-black max-md:mr-1 max-md:max-w-full">
                This podcast is the fruit of a simple prayer that has carried me
                for the <br /> last six years: "Jesus, reveal yourself to me
                today in a real and <br /> concrete way."
              </p>
              <p className="mt-8 text-base leading-8 text-black max-md:mr-1 max-md:max-w-full">
                I invite you to join us as we embark on the path towards a{" "}
                <br /> relationship with Jesus Christ that will change
                everything.
              </p>
              <div className="mt-8 flex gap-5 pr-20 text-xl leading-5 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <button className="bg-yellow-600 px-10 py-5 tracking-wider text-white max-md:px-5">
                  Listen Now
                </button>
                <div className="my-auto flex flex-col text-yellow-600">
                  <div>Contact Fr. Jack</div>
                  <div className="mt-2 h-0.5 shrink-0 bg-orange-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 flex w-[33%] flex-col max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src=""
              alt="Fr. Jack"
              width={300}
              height={450}
              className="aspect-[0.67] w-full grow max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
