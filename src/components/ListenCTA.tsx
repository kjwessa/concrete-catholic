import { BtnMain } from "./BtnMain";

export function ListenCTA() {
  return (
    <>
      {" "}
      <div className="relative col-start-1 col-end-3 row-start-2 row-end-3 -mt-16 flex w-[70%] min-w-[53.13rem] items-center justify-between bg-yellow-600 px-16 py-20 text-white">
        <h4 className="mr-28 max-w-[25.00rem] text-3xl font-extrabold">
          "Jesus, reveal yourself to me in a real and concrete way today."
        </h4>
        <BtnMain link="" text="Listen Now" />
      </div>
    </>
  );
}
