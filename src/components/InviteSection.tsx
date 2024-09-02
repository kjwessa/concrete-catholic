import Image from "next/image";
import { Eyebrow } from "./Eyebrow";
import { BtnMain } from "./BtnMain";
import { LinkMain } from "./LinkMain";
import InviteImage from "@/images/Concrete_Catholic-77.jpg";

export function InviteSection() {
  return (
    <section
      id="invite-section"
      className="mt-44 flex w-full items-center justify-center px-16 py-20"
    >
      <div className="container">
        <div className="mb-5 mt-32">
          <div className="flex gap-5">
            <div className="flex w-[67%] flex-col">
              <div className="my-auto flex flex-col self-stretch pb-8 pr-12">
                <Eyebrow text="Fr. Jack Says" />
                <h3 className="mt-8 text-4xl font-extrabold leading-10 text-black max-md:max-w-full">
                  "Give it a shot, I think you'll love this podcast."
                </h3>
                <p className="mt-8 text-base leading-8 text-black max-md:mr-1 max-md:max-w-full">
                  This podcast is the fruit of a simple prayer that has carried
                  me for the last six years: "Jesus, reveal yourself to me today
                  in a real and concrete way."
                </p>
                <p className="mt-8 text-base leading-8 text-black max-md:mr-1 max-md:max-w-full">
                  I invite you to join us as we embark on the path towards a{" "}
                  relationship with Jesus Christ that will change everything.
                </p>
                <div className="mt-8 flex gap-5 pr-20 text-xl leading-5 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                  <BtnMain link="/" text="Listen Now" />
                  <LinkMain link="/" text="Contact Fr. Jack" />
                </div>
              </div>
            </div>
            <div className="relative ml-5 flex w-[33%] flex-col max-md:ml-0 max-md:w-full">
              <Image
                loading="lazy"
                src={InviteImage}
                alt="Fr. Jack"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
