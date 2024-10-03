import Image from 'next/image'
import BusyCatholicImage from '@/public/images/busy-catholic-small.jpg'

export function AudienceSection() {
  return (
    <section id="audience-section" className="w-full px-8 py-20">
      <div className="container mx-auto">
        <div className="flex gap-5">
          <div className="flex w-[27%] flex-col max-md:ml-0">
            <div className="my-auto flex flex-col self-stretch pb-8 text-black">
              <h2 className="text-4xl font-extrabold leading-10">
                Who is the Concrete Catholic podcast for?
              </h2>
              <p className="mt-8 text-lg leading-9">
                No matter where you are in your faith, we have created Concrete Catholic with you in
                mind.
              </p>
            </div>
          </div>
          <div className="ml-5 flex w-[36%] flex-col max-md:ml-0">
            <div className="flex grow flex-col text-black">
              <div className="flex flex-col justify-center p-5">
                <div className="flex flex-col bg-white shadow-2xl">
                  <div className="relative h-0 w-full pb-[66%]">
                    <Image
                      src="/images/catholic-everyday.jpeg"
                      alt="The 'Everyday Catholic'"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="flex flex-col p-8">
                    <h3 className="text-3xl font-extrabold leading-9">The "Everyday Catholic"</h3>
                    <p className="mt-8 text-lg leading-9">
                      Children know well what we often forget...just keep it simple. You do not need
                      a fancy degree to encounter Christ in your daily life, just a willingness to
                      try.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 flex w-[36%] flex-col max-md:ml-0">
            <div className="flex grow flex-col text-black">
              <div className="flex flex-col justify-center p-5">
                <div className="flex flex-col bg-white shadow-2xl">
                  <div className="relative h-0 w-full pb-[66%]">
                    <Image
                      src="/images/catholic-struggling.jpeg"
                      alt="The 'Struggling Catholic'"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="flex flex-col p-8">
                    <h3 className="text-3xl font-extrabold leading-9">The "Struggling Catholic"</h3>
                    <p className="mt-8 text-lg leading-9">
                      Life is hard, and sometimes the darkness seems to surround us all. We know no
                      matter how bad things seem to be, that Jesus has conquered all, even death
                      itself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 flex w-[36%] flex-col max-md:ml-0">
            <div className="flex grow flex-col text-black">
              <div className="flex flex-col justify-center p-5">
                <div className="flex flex-col bg-white shadow-2xl">
                  <div className="relative h-0 w-full pb-[66%]">
                    <Image
                      src="/images/catholic-busy.jpeg"
                      alt="The 'Busy Catholic'"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="flex flex-col p-8">
                    <h3 className="text-3xl font-extrabold leading-9">The "Busy Catholic"</h3>
                    <p className="mt-8 text-lg leading-9">
                      Balancing a career, kids, and a mortgage is not easy. Even though Jesus never
                      promised "easy," He did promise that He would never abandon us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
