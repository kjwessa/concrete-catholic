'use client'

import React, { useState } from 'react'

interface Episode {
  title: string
  isPlaying: boolean
  duration: string
  season: string
}
const PodcastPage: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([
    { title: 'The Concrete Faith', isPlaying: true, duration: '23:45', season: 'Season 2' },
    { title: 'Walking with Christ', isPlaying: false, duration: '18:30', season: 'Season 2' },
    { title: 'Foundations of Belief', isPlaying: false, duration: '25:12', season: 'Season 2' },
    { title: 'Living the Gospel', isPlaying: false, duration: '20:55', season: 'Season 2' },
    { title: 'Building a Spiritual Life', isPlaying: false, duration: '22:03', season: 'Season 2' },
  ])

  const togglePlayEpisode = (index: number) => {
    setEpisodes((prevEpisodes) =>
      prevEpisodes.map((episode, i) => ({
        ...episode,
        isPlaying: i === index ? !episode.isPlaying : false,
      })),
    )
  }

  return (
    <>
      <main className="flex relative flex-col justify-center items-center px-64 py-32 w-full bg-gray-800 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col items-center text-white">
          <div className="text-sm font-semibold uppercase tracking-wider mb-2">Now Playing</div>
          <h1 className="text-6xl font-bold text-yellow-600 mb-4 max-md:text-4xl">Brothers</h1>
          <div className="flex items-center space-x-4 text-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
              Fr. Jack Knight
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
              </svg>
              4 Episodes
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
              Season 2
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-center items-start mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex-1 min-w-[240px] max-w-[530px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8ba0e1860bb81e13887716d601fa42323a7a500c3b899923687482981141e3c?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
              alt="Podcast cover"
              className="object-contain rounded aspect-square w-full"
            />
          </div>
          <div className="flex-1 min-w-[240px] max-w-[836px]">
            <div className="flex flex-col h-[528px] w-full">
              <div className="flex relative gap-2 items-start px-4 py-6 w-full text-white rounded bg-zinc-700 max-md:max-w-full">
                <div className="flex z-0 flex-col">
                  <div className="self-start text-6xl font-extrabold leading-none text-center max-md:text-4xl">
                    Season 2
                  </div>
                  <div className="flex gap-2 items-center mt-2 text-lg leading-9">
                    <div className="self-stretch my-auto">12 Episodes</div>
                    <div className="self-stretch my-auto">07:11 Min</div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd351bd93fe15247b3abb3d4f9c43153ce6b0f18f902817455d576b212e0bb15?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
                  alt=""
                  className="object-contain absolute right-1.5 bottom-1.5 z-0 shrink-0 aspect-[0.98] h-[85px] w-[83px]"
                />
              </div>
              <div className="flex flex-wrap gap-10 justify-between items-start px-4 py-2 w-full bg-zinc-100 min-h-[54px] max-md:max-w-full">
                <div className="flex gap-4 items-center text-lg leading-9 text-center text-gray-800 whitespace-nowrap min-w-[240px] w-[313px]">
                  <div className="flex gap-2 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b1dd4f61123a6ebba36aa1be567aee481c0143c9fca38b847880a5ee8882192?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto w-[83px]">Subscribe</div>
                  </div>
                  <div className="flex gap-2 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f4843d2c48fcd2d1a8ae078aaa11d80ca90c0a6b07412ad26529a131ea120f3?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto">Share</div>
                  </div>
                </div>
                <div className="flex gap-1 items-end px-4 py-2 text-lg leading-none border border-solid border-zinc-700 text-zinc-700">
                  <div>All Season</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a83e9711fcc9aced1e0c8bb49bea372269f8e1ce8c477a86daa411bc163baabb?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
                    alt=""
                    className="object-contain shrink-0 w-4 aspect-square"
                  />
                </div>
              </div>
              {episodes.map((episode, index) => (
                <div
                  key={index}
                  className={`flex flex-wrap justify-between items-center px-6 py-4 w-full cursor-pointer transition-all duration-300 ${
                    episode.isPlaying
                      ? 'text-lg leading-9 bg-yellow-600 text-white shadow-md'
                      : 'text-zinc-700 hover:bg-zinc-100'
                  } max-md:px-5 max-md:max-w-full`}
                  onClick={() => togglePlayEpisode(index)}
                >
                  <div
                    className={`flex flex-wrap flex-1 shrink gap-4 items-center self-stretch my-auto ${
                      episode.isPlaying ? 'basis-16' : 'basis-0'
                    } min-w-[240px] max-md:max-w-full`}
                  >
                    <img
                      loading="lazy"
                      src={
                        episode.isPlaying
                          ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/339a688cf46ded81a98a529b643227389f69c334a896b8508c641976cda7a08b?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8'
                          : 'https://cdn.builder.io/api/v1/image/assets/TEMP/ee4f5a60d62885af3a96028f5df12c4ede208789cb5390b3cb1939ced1e572dc?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8'
                      }
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[35px]"
                    />
                    <div
                      className={`self-stretch my-auto ${
                        episode.isPlaying ? 'flex-1 shrink basis-0 font-semibold' : 'w-[415px]'
                      } max-md:max-w-full`}
                    >
                      {episode.title}
                    </div>
                  </div>
                  <div
                    className={`flex gap-2 items-center self-stretch my-auto ${episode.isPlaying ? 'text-white' : 'text-zinc-500'}`}
                  >
                    <div className="self-stretch my-auto">{episode.duration}</div>
                    {episode.isPlaying && (
                      <div className="px-2 py-1 text-xs bg-white text-yellow-600 rounded-full">
                        {episode.season}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex z-0 flex-wrap gap-3 items-start mt-14 max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/61a6bbd3556da632a6779490a55cb041213e8e4902724bc640f12c3a9900b639?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
            alt=""
            className="object-contain shrink-0 rounded-lg aspect-[2.81] w-[101px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f20cb0e71d5fd4759dfcf15a8e36c8982d0aff201612201ed42e20e363a37a9e?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
            alt=""
            className="object-contain shrink-0 rounded-lg aspect-[3.76] w-[139px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb40ecffec46df7178694db58deb1886f7997bb2985c447f834b85f14aa518a3?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
            alt=""
            className="object-contain shrink-0 aspect-[3.86] w-[139px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c989f60f4e0b891648c9294c79770360b9c092691b5c230a99d2dab0c51779b?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
            alt=""
            className="object-contain shrink-0 aspect-[3.86] w-[139px]"
          />
        </div>

        {/* //TODO improve the play section */}
        <div className="flex absolute right-4 bottom-4 z-0 flex-wrap gap-6 justify-center items-center self-start px-16 py-2 bg-yellow-700 rounded-lg max-w-[1888px] w-[1888px] max-md:px-5 max-md:max-w-full">
          <div className="flex gap-2.5 items-center self-stretch my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd54edea5e17e93a248d948f91f08a2171ff4ae29ecd2cc2bf151b58ceef65bf?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
              alt="Previous"
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.06] w-[19px]"
            />
            <div className="flex overflow-hidden gap-1 self-stretch px-2.5 py-3.5 my-auto w-11 fill-white">
              <div className="flex shrink-0 w-1 h-4 bg-yellow-600 fill-yellow-600" />
              <div className="flex shrink-0 w-1 h-4 bg-yellow-600 fill-yellow-600" />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f229c73256e26890742d917834bd746bc8978764262c50ec7fc38a13f863e3ce?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
              alt="Next"
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.06] w-[19px]"
            />
          </div>
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[1295px] max-md:max-w-full">
            <div className="text-xl font-bold leading-none text-white">Brothers</div>
            <div className="flex flex-wrap gap-4 max-w-full rounded-none w-[1295px]">
              <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
                <div className="shrink-0 h-0.5 border-2 border-solid bg-white bg-opacity-10 border-white border-opacity-10 max-md:max-w-full" />
                <div className="z-10 shrink-0 max-w-full h-0.5 bg-white border-2 border-white border-solid w-[307px]" />
              </div>
              <div className="text-xs leading-none text-white opacity-50">07:11 Min</div>
            </div>
            <div className="text-xs leading-none text-white">Fr. Jack Knight</div>
          </div>
          <div className="flex flex-1 shrink gap-4 items-center self-stretch my-auto basis-0 min-w-[240px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/37d2b409ec995bc6469770202cdd30969801ab52b41677e570e15fe6ddaaf919?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
              alt="Volume"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/92d0a1c8da7f868e131c25989f9d4503e3c9390418b42147a1f73fb7015ef865?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
              alt="Shuffle"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c01ebb0b7acb4dcd0b004af88d7ce9b316a2a00e32070e73c99cab5b4601964?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
              alt="Repeat"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e59aba75a700108865b4f7651b6a77e29191cdeda2393479d92bce077ede457?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
              alt="Volume slider"
              className="object-contain shrink-0 self-stretch my-auto rounded-none w-[191px]"
            />
          </div>
        </div>
      </main>
      <section id="listen-now-section">
        <div>
          <div className="flex flex-col items-center justify-center py-24 text-center text-sm">
            <div className="relative flex w-[90%] max-w-[85.63rem] flex-col items-center">
              <h2 className="mb-8 text-6xl font-extrabold">Listen now.</h2>
              <div className="pb-6 pt-3">
                "Lord Jesus, reveal yourself to me today in a real and concrete way."
              </div>

              <div className="mb-8 grid w-4/5 auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto] gap-4">
                <div
                  className='relative col-start-2 col-end-3 row-start-1 row-end-2 flex h-[34.38rem] flex-col items-center bg-[url("https://www.concretecatholic.com/images/Concrete_Catholic_bnw-62.jpg")] bg-cover'
                  style={{
                    backgroundPosition: '50% 50%',
                  }}
                ></div>

                <div className="flex min-h-[31.25rem] flex-col items-center justify-center pt-3">
                  <iframe
                    className="h-[31.25rem] w-96"
                    src="https://play.pod.co/concretecatholic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PodcastPage
