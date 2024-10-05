import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '@/public/images/Concrete_Catholic-86.jpg'

export function Hero() {
  return (
    <section id="hero-section" className="w-full self-center bg-cc-charcoal text-white">
      <div className="container mx-auto pt-24">
        <div className="grid grid-cols-2">
          <div className="relative z-20 flex flex-col content-center justify-center">
            <div className="mb-4 uppercase text-inherit opacity-70">
              A podcast for the Every day Catholic
            </div>
            <div className="max-w-[47.50rem] overflow-hidden pb-1.5 text-7xl font-extrabold">
              <h1 className="max-w-[50.00rem] pb-3.5 pt-6">
                When was the last time you had an encounter with Christ?
              </h1>
            </div>
            <p className="mb-8 max-w-[37.50rem] overflow-visible text-lg">
              Encounter begins with a simple prayer. Let us begin.
            </p>
            <div className="flex items-center gap-8">
              <Link
                className="relative max-w-full cursor-pointer overflow-hidden rounded-sm bg-white px-8 py-3 text-xl text-orange-400"
                href="/#"
              >
                Listen Now
              </Link>
              <Link
                href="/#"
                className="relative inline-block max-w-full cursor-pointer overflow-hidden text-xl text-orange-400"
              >
                Meet Fr. Jack Knight
              </Link>
            </div>
          </div>
          <div className="relative flex h-[80vh] w-[40vw] max-w-[46.88rem] flex-col items-center justify-center bg-zinc-700">
            <div className="mb-12 ml-12 mr-6 mt-6 inline-block h-full max-h-[56.25rem] w-[37.00rem] max-w-none pb-3 align-middle">
              <Image src={HeroImage} alt="Fr. Jack Knight sitting in a local brewery." />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
