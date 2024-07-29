export function AboutJackSection() {
  return (
    <>
      <div>
        <div
          className="grid auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto] flex-col items-center justify-center gap-4 bg-gray-800 px-6 pb-24 pt-12 text-sm text-white"
          id="div-1"
        >
          <div
            className="relative flex w-full max-w-[85.63rem] flex-col items-start justify-center justify-self-end px-3"
            id="div-2"
          >
            It's great to meet you!
            <h2 className="mb-8 text-[4.38rem] font-extrabold leading-none">
              Hi, I'm Fr. Jack.
            </h2>
            <p className="mb-8 max-w-[44.38rem] text-lg">
              Hi, my name is Fr. Jack Knight and I was ordained a priest for the
              Archdiocese of Atlanta in 2018. I am the last born of four
              children (three girls!) to my amazing parents. After college at
              the University of North Florida I spent time working in foreign
              missions. An illness in my immediate family called me back home to
              make them my main mission. After helping my family back to health
              and perfecting the best latte in the evenings, while holding down
              a nine to five during the day, I spent much time discerning God’s
              will for my life. <br />
              <br />I entered formal discernment to the priesthood and studied
              in Saint Benedict, LA, Chicago, IL, and Boynton Beach, FL before
              coming back home to be ordained. I currently serve as a parochial
              vicar in the metro Atlanta area. <br />
              <br />
              Concrete Catholic is a podcast that will help us all to see that
              the Lord reveals himself to us daily. I hope this is helpful for
              all of you striving to daily live for the Lord while constantly
              keeping our eyes open to the ways in which he reveals Himself to
              us.
              <br />
            </p>
            <a
              className="relative max-w-full overflow-hidden bg-white px-10 py-5 text-xl text-yellow-600"
              href="https://www.concretecatholic.com/#contact"
            >
              <div className="cursor-pointer">Contact</div>

              <div className="absolute right-full top-0 z-[1] h-full w-full cursor-pointer bg-zinc-700" />
            </a>
          </div>

          <div
            className='-mt-28 h-[110vh] min-h-[auto] bg-[url("https://www.concretecatholic.com/images/Concrete_Catholic_bnw-33.jpg")] bg-cover'
            id="div-3"
          />
        </div>
      </div>
    </>
  );
}
