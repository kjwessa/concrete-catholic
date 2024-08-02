export function ListenNowSection() {
  return (
    <section id="listen-now-section">
      <div>
        <div className="flex flex-col items-center justify-center py-24 text-center text-sm">
          <div className="relative flex w-[90%] max-w-[85.63rem] flex-col items-center">
            <h2 className="mb-8 text-6xl font-extrabold">Listen now.</h2>

            <div className="pb-6 pt-3">
              "Lord Jesus, reveal yourself to me today in a real and concrete
              way."
            </div>

            <div
              className="mb-8 grid w-4/5 auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto] gap-4"
              id="div-3"
            >
              <div
                className='relative col-start-2 col-end-3 row-start-1 row-end-2 flex h-[34.38rem] flex-col items-center bg-[url("https://www.concretecatholic.com/images/Concrete_Catholic_bnw-62.jpg")] bg-cover'
                id="div-4"
                style={{
                  backgroundPosition: "50% 50%",
                }}
              ></div>

              <div className="flex min-h-[31.25rem] flex-col items-center justify-center pt-3">
                <iframe
                  className="h-[31.25rem] w-96"
                  src="https://play.pod.co/concretecatholic"
                />
              </div>
            </div>

            <div
              className="mb-16 grid w-4/5 auto-cols-fr grid-cols-[1fr_1fr_1fr] grid-rows-[12.50rem] gap-4 text-teal-300"
              id="div-6"
            >
              <a
                className="col-start-3 col-end-4 row-start-1 row-end-2 flex max-w-full flex-col items-center justify-center self-stretch overflow-hidden border-2 border-solid border-zinc-100"
                href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkLnBvZC5jby9jb25jcmV0ZWNhdGhvbGlj"
                id="a-1"
              >
                <img
                  className="inline-block h-11 w-44 max-w-[60%] cursor-pointer align-middle blur-[1px]"
                  id="img-1"
                  src="https://www.concretecatholic.com/images/google-podcasts-logo-transparent.png"
                  srcSet="https://www.concretecatholic.com/images/google-podcasts-logo-transparent-p-500.png 500w, images/google-podcasts-logo-transparent.png 640w"
                />
              </a>

              <a
                className="col-start-2 col-end-3 row-start-1 row-end-2 flex max-w-full flex-col items-center justify-center self-stretch overflow-hidden border-2 border-solid border-zinc-100"
                href="https://podcasts.apple.com/gb/podcast/concrete-catholic/id1493441020"
                id="a-2"
              >
                <img
                  className="inline-block h-32 w-64 max-w-full cursor-pointer align-middle blur-[1px]"
                  id="img-2"
                  src="https://www.concretecatholic.com/images/apple-podcasts-listen-on-logo.jpg"
                  srcSet="https://www.concretecatholic.com/images/apple-podcasts-listen-on-logo-p-800.jpeg 800w, images/apple-podcasts-listen-on-logo-p-1080.jpeg 1080w, images/apple-podcasts-listen-on-logo.jpg 1166w"
                />
              </a>

              <a
                className="col-start-1 col-end-2 row-start-1 row-end-2 flex max-w-full flex-col items-center justify-center self-stretch overflow-hidden border-2 border-solid border-zinc-100"
                href="https://open.spotify.com/show/0wEutwZjgwYDADZM9okTPD"
              >
                <img
                  className="inline-block h-12 w-32 max-w-full cursor-pointer align-middle blur-[1px]"
                  id="img-3"
                  src="https://www.concretecatholic.com/images/spotify-podcast-logo.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
