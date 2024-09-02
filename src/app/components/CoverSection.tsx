export function CoverSection() {
  return (
    <>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@media (max-width: 991px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-1 {\npadding-top: 100px !important;\n}\n#div-3 {\nheight: auto !important; grid-template-rows: auto auto auto auto !important;\n}\n#div-4 {\ngrid-column-start: 1 !important; grid-row-start: 3 !important; grid-column-end: 5 !important; grid-row-end: 4 !important;\n}\n#h4-1 {\nposition: static !important;\n}\n#div-5 {\ngrid-column-start: 1 !important; grid-row-start: 2 !important; grid-column-end: 5 !important; grid-row-end: 3 !important;\n}\n#h4-2 {\nposition: static !important;\n}\n#div-6 {\ngrid-column-start: 1 !important; grid-column-end: 5 !important; grid-row-start: 1 !important; grid-row-end: 2 !important;\n}\n#h4-3 {\nposition: static !important;\n}\n}\n@media (max-width: 479px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-2 {\npadding-top: 12px !important; padding-bottom: 24px !important;\n}\n}\n",
          }}
        />

        <div
          className="relative flex flex-col items-center justify-center bg-gray-800 pb-24 pt-48 text-center text-sm text-white"
          id="div-1"
        >
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
              relationship with Jesus Christ, from prayer to encounter to
              sharing the Good News. God comes to us in the everyday, not just
              in the religious moments.{" "}
            </p>
          </div>

          <div
            className="-mb-96 grid min-h-[31.25rem] w-full max-w-[85.63rem] auto-cols-fr grid-cols-[1fr_1fr_1fr] grid-rows-[auto] gap-[0.63rem] px-3 text-3xl font-extrabold"
            id="div-3"
          >
            <div
              className="relative col-start-3 col-end-4 row-start-1 row-end-2 flex cursor-pointer flex-col items-start justify-end bg-slate-600 p-10"
              id="div-4"
            >
              <h4
                className="absolute left-[2.50rem] right-[2.50rem] top-[5.00rem] mb-8"
                id="h4-1"
              >
                How to share your experiences with others.
              </h4>
            </div>

            <div
              className="relative col-start-2 col-end-3 row-start-1 row-end-2 flex cursor-pointer flex-col items-start justify-end bg-slate-600 p-10"
              id="div-5"
            >
              <h4
                className="absolute left-[2.50rem] right-[2.50rem] top-[5.00rem] mb-8"
                id="h4-2"
              >
                How to encounter Christ in the ordinary.
              </h4>
            </div>

            <div
              className="relative col-start-1 col-end-2 row-start-1 row-end-2 flex cursor-pointer flex-col items-start justify-end bg-slate-600 p-10"
              id="div-6"
            >
              <h4
                className="absolute left-[2.50rem] right-[2.50rem] top-[5.00rem] mb-8"
                id="h4-3"
              >
                How to pray in a simple and authentic way.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
