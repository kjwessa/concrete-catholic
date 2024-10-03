'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroImage from '@/public/images/Concrete_Catholic-86.jpg'
import PrayerSectionImage from '@/public/images/Concrete_Catholic_bnw-81.jpg'

export default function ConcreteCatholicPage() {
  return (
    <>
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
      <section className="flex flex-col w-full max-md:max-w-full">
        <div className="flex z-10 flex-wrap gap-10 justify-center items-center px-72 mt-0 w-full min-h-[998px] max-md:px-5 max-md:mt-0 max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-[60px] min-w-[240px] max-md:max-w-full">
            <div className="flex flex-col w-full text-white max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="text-xs font-semibold leading-none uppercase opacity-40 tracking-[4px] max-md:max-w-full">
                  A podcast for the Every day Catholic
                </div>
                <h1 className="mt-4 text-8xl font-extrabold text-yellow-600 leading-[92px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  When was the last time you had an encounter with Christ?
                </h1>
                <p className="mt-4 text-lg leading-9 max-md:max-w-full">
                  Encounter begins with a simple prayer. Let us begin.
                </p>
              </div>
              <div className="flex gap-4 items-start self-start mt-8 text-lg leading-none">
                <button className="self-stretch px-6 py-4 bg-yellow-600 rounded max-md:px-5">
                  Listen to the Latest Episode
                </button>
                <button className="self-stretch px-6 py-4 whitespace-nowrap rounded border border-white border-solid max-md:px-5">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-start mt-16 w-full max-md:mt-10 max-md:max-w-full">
              {[
                {
                  src: 'http://b.io/ext_32-',
                  alt: 'Podcast platform logo 1',
                  className: 'rounded-lg aspect-[2.78] w-[111px]',
                },
                {
                  src: 'http://b.io/ext_33-',
                  alt: 'Podcast platform logo 2',
                  className: 'rounded-lg aspect-[3.85] w-[154px]',
                },
                {
                  src: 'http://b.io/ext_34-',
                  alt: 'Podcast platform logo 3',
                  className: 'aspect-[3.97] w-[155px]',
                },
                {
                  src: 'http://b.io/ext_35-',
                  alt: 'Podcast platform logo 4',
                  className: 'aspect-[3.95] w-[154px]',
                },
              ].map((img, index) => (
                <div
                  key={index}
                  className={`flex overflow-hidden flex-col bg-white rounded-lg w-[154px]`}
                >
                  <img
                    loading="lazy"
                    src={img.src}
                    alt={img.alt}
                    className={`object-contain ${img.className}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch px-8 pb-8 my-auto rounded bg-black bg-opacity-10 min-w-[240px] w-[656px] max-md:max-w-full">
            <div className="flex z-10 flex-col justify-center items-center px-16 py-96 mt-0 mr-0 rounded border-solid border-[1.5px] border-zinc-100 max-md:px-5 max-md:py-24 max-md:max-w-full">
              <img
                loading="lazy"
                src="http://b.io/ext_36-"
                alt="Decorative hero image"
                className="object-contain mb-0 max-w-full aspect-square w-[120px] max-md:mb-2.5"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="prayer-section" className="w-full pb-24 pt-48">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center text-sm">
            <div className="relative w-[90%] max-w-[85.63rem]">
              <div className="grid auto-cols-fr grid-cols-[1fr_1.4fr] grid-rows-[auto_auto] gap-x-10 gap-y-5">
                <div className="relative col-start-2 col-end-3 row-start-1 row-end-2 flex h-[37.50rem] flex-col items-center justify-center bg-cover">
                  <Image
                    src={PrayerSectionImage}
                    alt="Concrete Catholic"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
                <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                  <div className="mb-4 uppercase text-inherit opacity-70">
                    Pray. Encounter. Share.
                  </div>

                  <h3 className="mb-8 max-w-[26.25rem] text-[2.50rem] font-extrabold leading-none">
                    Encounter begins with a simple prayer.
                  </h3>

                  <h5 className="mb-3 text-xl font-extrabold">
                    "Lord Jesus, reveal yourself to me..."
                  </h5>

                  <p className="mb-8 max-w-[31.88rem]">
                    This simple prayer begins by acknowledging the person of Christ, asking that He
                    make His presence known to us here and now...
                  </p>

                  <h5 className="mb-3 text-xl font-extrabold">
                    "...in a real and concrete way today."
                  </h5>

                  <p className="mb-8 max-w-[31.88rem]">
                    We pray that Jesus reveals Himself to us in our joys, our sorrows, our work, our
                    relationships, our boredom, and our reality.
                  </p>
                </div>
                <div className="relative col-start-1 col-end-3 row-start-2 row-end-3 -mt-16 flex w-[70%] items-center justify-between text-white">
                  <div className="relative flex w-full min-w-[53.13rem] items-center justify-between bg-cc-sunset px-16 py-20 text-white">
                    <h4 className="mr-28 max-w-[25.00rem] text-3xl font-extrabold">
                      Jesus, reveal yourself to me in a real and concrete way today.
                    </h4>
                    <Link
                      className="relative max-w-full cursor-pointer overflow-hidden rounded-sm bg-white px-8 py-3 text-xl text-orange-400"
                      href="/"
                    >
                      Listen Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col justify-center items-center self-center px-0.5 py-32 rounded-md w-[calc(100%-1rem)] overflow-hidden">
        <Image
          src="/images/atlanta-traffic-guy-1200.jpg"
          alt="Background"
          fill
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 flex flex-col items-center max-w-4xl">
          <div className="flex flex-col items-center">
            <img
              loading="lazy"
              src="http://b.io/ext_38-"
              alt="Concrete Catholic Logo"
              className="object-contain w-32 mb-12"
            />
            <blockquote className="text-5xl font-bold text-center text-yellow-600 leading-tight mb-8">
              "Being Christian is not the result of an ethical choice or a lofty idea, but the
              encounter with an event, a person, which gives life a new horizon and a decisive
              direction."
            </blockquote>
            <cite className="text-2xl font-semibold text-white not-italic mb-4">
              Pope Benedict XVI
            </cite>
            <div className="text-sm font-medium uppercase text-zinc-400 tracking-wider">
              Deus Caritas Est
            </div>
          </div>
        </div>
      </section>

      <section id="invite-section" className="px-16 py-20">
        <div className="container mx-auto">
          <div className="">
            <div className="flex gap-5">
              <div className="flex w-[67%] flex-col">
                <div className="my-auto flex flex-col self-stretch pb-8 pr-12">
                  <div className="mb-4 uppercase text-inherit opacity-70">Fr. Jack Says</div>
                  <h3 className="mt-8 text-4xl font-extrabold leading-10 text-black max-md:max-w-full">
                    "Give it a shot, I think you'll love this podcast."
                  </h3>
                  <p className="mt-8 text-base leading-8 text-black max-md:mr-1 max-md:max-w-full">
                    This podcast is the fruit of a simple prayer that has carried me for the last
                    six years: "Jesus, reveal yourself to me today in a real and concrete way."
                  </p>
                  <p className="mt-8 text-base leading-8 text-black max-md:mr-1 max-md:max-w-full">
                    I invite you to join us as we embark on the path towards a relationship with
                    Jesus Christ that will change everything.
                  </p>
                  <div className="mt-8 flex gap-5 pr-20 text-xl leading-5 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                    <Link
                      className="relative max-w-full cursor-pointer overflow-hidden rounded-sm bg-white px-8 py-3 text-xl text-orange-400"
                      href="/"
                    >
                      Listen Now
                    </Link>
                    <Link
                      href="/"
                      className="relative inline-block max-w-full cursor-pointer overflow-hidden text-xl text-orange-400"
                    >
                      Contact Fr. Jack
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative ml-5 flex w-[33%] flex-col max-md:ml-0 max-md:w-full">
                <Image
                  loading="lazy"
                  src="/images/Concrete_Catholic-77.jpg"
                  alt="Fr. Jack"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap gap-10 py-40 pr-64 pl-4 w-full max-md:py-24 max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink px-8 pb-8 rounded basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex z-10 shrink-0 mt-0 mr-0 rounded border-solid border-[1.5px] border-zinc-400 h-[610px] max-md:max-w-full" />
        </div>
        <div className="flex flex-col py-8 my-auto min-w-[240px] w-[656px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-xs font-semibold leading-none uppercase opacity-40 text-zinc-700 tracking-[4px] max-md:max-w-full">
              Pray. Encounter. Share.
            </div>
            <h2 className="mt-4 text-7xl font-extrabold text-yellow-600 leading-[76px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Encounter begins with a simple prayer.
            </h2>
          </div>
          <div className="flex flex-col mt-8 w-full text-lg leading-9 text-black max-md:max-w-full">
            <p className="italic max-md:max-w-full">
              <strong>&quot;Lord Jesus, reveal yourself to me...&quot;</strong>
            </p>
            <p className="mt-2 max-md:max-w-full">
              This simple prayer begins by acknowledging the person of Christ, <br />
              asking that He make His presence known to us here and now...
            </p>
            <p className="mt-2 italic max-md:max-w-full">
              <strong>&quot;...in a real and concrete way today.&quot;</strong>
            </p>
            <p className="mt-2 max-md:max-w-full">
              We pray that Jesus reveals Himself to us in our joys, our sorrows, our <br />
              work, our relationships, our boredom, and our reality.
            </p>
          </div>
          <div className="flex gap-8 items-center self-start mt-8 text-lg leading-none">
            <button className="gap-2.5 self-stretch px-8 py-4 my-auto text-white bg-yellow-600 rounded max-md:px-5">
              Listen Now
            </button>
            <a href="#" className="self-stretch my-auto text-yellow-600 rounded">
              Meet Fr. Jack Knight
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap gap-10 py-40 pr-4 pl-64 w-full max-md:py-24 max-md:pl-5 max-md:max-w-full">
        <div className="flex flex-col py-8 my-auto min-w-[240px] w-[656px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-xs font-semibold leading-none uppercase opacity-40 text-zinc-700 tracking-[4px] max-md:max-w-full">
              Testimonials
            </div>
            <h2 className="mt-4 text-7xl font-extrabold text-yellow-600 leading-[76px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Dictum phasellus odio massa aliquet augue. Tellus id sed magna etiam.
            </h2>
          </div>
          <p className="mt-8 text-lg leading-9 text-black max-md:max-w-full">
            At nam dolor lobortis nisl varius semper tempus posuere sed. Netus dapibus neque in
            tincidunt sapien ut. Sit in eu diam amet nisi magna in.
          </p>
          <div className="flex flex-wrap gap-6 items-center mt-8 w-full text-zinc-700 max-md:max-w-full">
            <img
              loading="lazy"
              src="http://b.io/ext_37-"
              alt="Testimonial author"
              className="object-contain shrink-0 self-stretch my-auto rounded aspect-square w-[62px]"
            />
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
              <div className="text-3xl font-extrabold leading-none max-md:max-w-full">
                Name Here
              </div>
              <div className="text-lg leading-9 max-md:max-w-full">Position</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink pb-8 rounded basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex z-10 shrink-0 -mt-8 rounded border-solid border-[1.5px] border-zinc-400 h-[610px] max-md:max-w-full" />
        </div>
      </section>
      <section className="flex flex-wrap gap-10 justify-between items-center px-64 py-32 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col self-stretch py-8 my-auto min-w-[240px] w-[656px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-xs font-semibold leading-none uppercase opacity-40 text-zinc-700 tracking-[4px] max-md:max-w-full">
              Fr. Jack Says...
            </div>
            <h2 className="mt-4 text-7xl font-extrabold text-yellow-600 leading-[76px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              &quot;Give it a shot, I think you'll love this podcast.&quot;
            </h2>
          </div>
          <div className="flex flex-col mt-8 w-full text-lg leading-9 text-black max-md:max-w-full">
            <p className="italic max-md:max-w-full">
              This podcast is the fruit of a simple prayer that has carried me for the <br />
              last six years:{' '}
              <span className="italic font-bold">
                {' '}
                &quot;Jesus, reveal yourself to me today in a real and{' '}
              </span>{' '}
              <br />
              <span className="italic font-bold">concrete way.&quot;</span>
            </p>
            <p className="mt-2 max-md:max-w-full">
              I invite you to join us as we embark on the path towards a<br />
              relationship with Jesus Christ that will change everything.
            </p>
          </div>
          <div className="flex gap-8 items-center self-start mt-8 text-lg leading-none text-white">
            <button className="gap-2.5 self-stretch px-8 py-4 my-auto bg-yellow-600 rounded max-md:px-5">
              Listen Now
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start self-stretch pb-8 my-auto min-w-[240px] w-[656px] max-md:max-w-full">
          <div className="flex z-10 shrink-0 mt-0 rounded border-solid border-[1.5px] border-zinc-400 h-[900px] max-md:max-w-full" />
        </div>
      </section>
      <section className="flex overflow-hidden flex-wrap gap-8 justify-center items-center self-center px-64 py-32 max-w-full bg-gray-800 w-[1888px] max-md:px-5 max-md:py-24">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[397px]">
          <div className="flex flex-col w-full">
            <h2 className="text-6xl font-extrabold text-yellow-600 leading-[60px] max-md:text-4xl max-md:leading-10">
              What Our Client Say
            </h2>
            <p className="mt-4 text-lg leading-9 text-white">
              Ut suspendisse fermentum sed lobortis sit ornare nibh duis. Suspendisse lorem morbi
              purus volutpat.
            </p>
          </div>
          <button className="self-start mt-8 text-lg leading-none text-orange-400 rounded">
            Call To Action
          </button>
        </div>
        <div className="flex flex-wrap flex-1 shrink gap-4 items-center self-stretch my-auto basis-0 min-w-[240px] text-zinc-700 max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink self-stretch px-4 pt-2 pb-4 my-auto bg-white rounded border border-solid basis-0 border-stone-50 min-w-[240px] max-md:max-w-full">
            <img
              loading="lazy"
              src="http://b.io/ext_39-"
              alt="Testimonial icon"
              className="object-contain aspect-square w-[72px]"
            />
            <div className="flex flex-col mt-2.5 w-full leading-9">
              <h3 className="text-3xl font-extrabold">
                Dictum phasellus odio massa ullamcorper aliquet augue. Tellus id sed magna etiam.
              </h3>
              <p className="mt-2 text-lg">
                At nam dolor lobortis nisl varius semper tempus posuere sed. Netus dapibus neque in
                tincidunt sapien ut. Sit in eu diam amet nisi magna in.
              </p>
            </div>
            <div className="flex gap-2 items-center mt-2.5 w-full">
              <img
                loading="lazy"
                src="http://b.io/ext_40-"
                alt="Testimonial author"
                className="object-contain shrink-0 self-stretch my-auto rounded aspect-square w-[42px]"
              />
              <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
                <div className="text-lg leading-none">
                  <strong>Name Here</strong>
                </div>
                <div className="text-xs leading-none">Position</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 shrink self-stretch px-4 pt-2 pb-4 my-auto bg-white rounded border border-solid basis-0 border-stone-50 min-w-[240px] max-md:max-w-full">
            <img
              loading="lazy"
              src="http://b.io/ext_41-"
              alt="Testimonial icon"
              className="object-contain aspect-square w-[72px]"
            />
            <div className="flex flex-col mt-2.5 w-full leading-9">
              <h3 className="text-3xl font-extrabold">
                Dictum phasellus odio massa ullamcorper aliquet augue. Tellus id sed magna etiam.
              </h3>
              <p className="mt-2 text-lg">
                At nam dolor lobortis nisl varius semper tempus posuere sed. Netus dapibus neque in
                tincidunt sapien ut. Sit in eu diam amet nisi magna in.
              </p>
            </div>
            <div className="flex gap-2 items-center mt-2.5 w-full">
              <img
                loading="lazy"
                src="http://b.io/ext_42-"
                alt="Testimonial author"
                className="object-contain shrink-0 self-stretch my-auto rounded aspect-square w-[42px]"
              />
              <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
                <div className="text-lg leading-none">
                  <strong>Name Here</strong>
                </div>
                <div className="text-xs leading-none">Position</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex overflow-hidden flex-col justify-center self-center px-64 py-32 w-full bg-stone-50 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col w-full text-center max-md:max-w-full">
          <h2 className="self-center text-6xl font-extrabold leading-none text-yellow-600 max-md:max-w-full max-md:text-4xl">
            Who is the Concrete Catholic podcast for?
          </h2>
          <p className="mt-2.5 text-lg leading-9 text-black max-md:max-w-full">
            No matter where you are in your faith, we have created Concrete Catholic with you in
            mind.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 items-center mt-8 w-full text-zinc-700 max-md:max-w-full">
          <div className="flex flex-col grow shrink self-stretch my-auto bg-white rounded border border-solid shadow-lg border-zinc-100 min-w-[240px] w-[359px] max-md:max-w-full">
            <img
              loading="lazy"
              src="http://b.io/ext_43-"
              alt="The Ordinary Catholic"
              className="object-contain w-full aspect-[1.43] max-md:max-w-full"
            />
            <div className="flex flex-col px-4 pt-2 pb-4 mt-2 w-full max-md:max-w-full">
              <div className="flex flex-col w-full">
                <h3 className="text-3xl font-extrabold leading-none">
                  The &quot;Ordinary Catholic&quot;
                </h3>
                <p className="mt-2 text-lg leading-9">
                  Children know well what we often forget...just keep it simple. You do not need a
                  fancy degree to encounter Christ in your daily life, just a<br />
                  willingness to try.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col grow shrink self-stretch my-auto bg-white rounded border border-solid shadow-lg border-zinc-100 min-w-[240px] w-[360px] max-md:max-w-full">
            <img
              loading="lazy"
              src="http://b.io/ext_44-"
              alt="The Busy Catholic"
              className="object-contain w-full aspect-[1.43] max-md:max-w-full"
            />
            <div className="flex flex-col px-4 pt-2 pb-4 mt-2 w-full max-md:max-w-full">
              <div className="flex flex-col w-full">
                <h3 className="text-3xl font-extrabold leading-none">
                  The &quot;Busy Catholic&quot;
                </h3>
                <p className="mt-2 text-lg leading-9">
                  Balancing a career, kids, and a mortgage is not <br />
                  easy. Even though Jesus never promised &quot;easy,&quot; <br />
                  He did promise that He would never abandon <br />
                  us.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col grow shrink self-stretch my-auto bg-white rounded border border-solid shadow-lg border-zinc-100 min-w-[240px] w-[359px] max-md:max-w-full">
            <img
              loading="lazy"
              src="http://b.io/ext_45-"
              alt="The Struggling Catholic"
              className="object-contain w-full aspect-[1.43] max-md:max-w-full"
            />
            <div className="flex flex-col px-4 pt-2 pb-4 mt-2 w-full max-md:max-w-full">
              <div className="flex flex-col w-full">
                <h3 className="text-3xl font-extrabold leading-none">
                  The &quot;Struggling Catholic&quot;
                </h3>
                <p className="mt-2 text-lg leading-9">
                  Life is hard, and sometimes the darkness seems <br />
                  to surround us all. We know no matter how bad <br />
                  things seem to be, that Jesus has conquered all, <br />
                  even death itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap gap-10 justify-center items-center px-64 py-12 mt-8 w-full bg-yellow-600 rounded max-md:px-5 max-md:max-w-full">
        <h2 className="self-stretch my-auto text-6xl font-extrabold text-white leading-[60px] w-[367px] max-md:text-4xl max-md:leading-10">
          Connect <br /> With Fr. Jack
        </h2>
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <form className="flex gap-4 justify-center items-start w-full text-lg leading-none max-md:max-w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 shrink gap-2.5 self-stretch px-4 py-2 border-b border-solid border-b-white min-w-[240px] text-white text-opacity-50 bg-transparent"
              aria-label="Your email address"
            />
            <button
              type="submit"
              className="gap-2.5 self-stretch px-4 py-2 text-yellow-600 whitespace-nowrap bg-white rounded"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs leading-4 text-white text-opacity-50 max-md:max-w-full">
            We will never spam you or distribute your information. Our Mailchimp sign-up helps us
            communicate our hopes and dreams with you for Concrete Catholic as we grow.
          </p>
        </div>
      </section>
      <section className="flex flex-wrap gap-10 items-start px-80 py-32 w-full leading-9 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink py-8 text-lg text-black basis-0 min-w-[240px] max-md:max-w-full">
          <h2 className="text-7xl font-extrabold leading-none text-yellow-600 max-md:max-w-full max-md:text-4xl">
            What do we cover?
          </h2>
          <p className="mt-8 max-md:max-w-full">
            <strong>
              &quot;Lord Jesus, reveal yourself to me today in a real and concrete way.&quot;
            </strong>
          </p>
          <p className="mt-8 max-md:max-w-full">
            Concrete Catholic covers the essential aspects of forming a relationship with Jesus
            Christ, from prayer to encounter to sharing the Good News. God comes to us in the
            everyday, not just in the religious moments.
          </p>
        </div>
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] text-zinc-700 max-md:max-w-full">
          <div className="flex flex-col p-8 w-full rounded border border-solid bg-stone-50 border-zinc-100 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-4 justify-center items-start w-full text-3xl font-extrabold max-md:max-w-full">
              <h3 className="flex-1 shrink basis-0 max-md:max-w-full">
                How to pray in a simple <br /> and authentic way.
              </h3>
              <img
                loading="lazy"
                src="http://b.io/ext_46-"
                alt="Prayer icon"
                className="object-contain shrink-0 aspect-square w-[72px]"
              />
            </div>
            <p className="mt-6 text-lg max-md:max-w-full">
              Life is complicated, but prayer doesn't have to be. We approach life (and begin our
              Podcast) with a simple prayer: &quot;Jesus, reveal yourself to me today in a real and
              concrete way.&quot; That's it.
            </p>
          </div>
          <div className="flex flex-col p-8 mt-6 w-full rounded border border-solid bg-stone-50 border-zinc-100 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-4 justify-center items-start w-full text-3xl font-extrabold max-md:max-w-full">
              <h3 className="flex-1 shrink basis-0 max-md:max-w-full">
                How to encounter Christ <br /> in the ordinary.
              </h3>
              <img
                loading="lazy"
                src="http://b.io/ext_47-"
                alt="Encounter icon"
                className="object-contain shrink-0 aspect-square w-[72px]"
              />
            </div>
            <p className="mt-6 text-lg max-md:max-w-full">
              Through the Incarnation, Christ took on our flesh, and entered into every experience
              of our lives. He longs to meet us in our work, in our families, in our joys, in our
              sorrows.
            </p>
          </div>
          <div className="flex flex-col p-8 mt-6 w-full rounded border border-solid bg-stone-50 border-zinc-100 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-4 justify-center items-start w-full text-3xl font-extrabold max-md:max-w-full">
              <h3 className="flex-1 shrink basis-0 max-md:max-w-full">
                How to share your experiences <br /> with others.
              </h3>
              <img
                loading="lazy"
                src="http://b.io/ext_48-"
                alt="Share icon"
                className="object-contain shrink-0 aspect-square w-[72px]"
              />
            </div>
            <p className="mt-6 text-lg max-md:max-w-full">
              Sometimes we encounter Jesus, but we have no idea how to share what we've experienced.
              We'll walk through how to share what you've encountered with your friends and your
              family.
            </p>
          </div>
        </div>
      </section>
      <section id="what-if-section" className="py-24">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center text-sm">
            <div className="relative w-[90%] max-w-[85.63rem]">
              <div className="grid auto-cols-fr grid-cols-[1.4fr_1fr] grid-rows-[auto_auto] gap-x-10 gap-y-5">
                <div className="col-start-2 col-end-3 row-start-1 row-end-2 pr-12">
                  <div className="mb-4 uppercase text-inherit opacity-70">Imagine this...</div>

                  <h3 className="mb-8 max-w-[26.25rem] text-[2.50rem] font-extrabold leading-none">
                    What if you could encounter God in the ordinary?
                  </h3>

                  <ol className="mb-3 flex flex-wrap pl-8 text-xl font-bold">
                    <li className="list-item basis-1/2 py-3 pr-5">
                      <h5 className="mb-3 font-extrabold">
                        Through every relationship in your life.
                      </h5>
                    </li>

                    <li className="list-item basis-1/2 py-3 pr-5">
                      <h5 className="mb-3 font-extrabold">
                        Through your work, desires, and plans.
                      </h5>
                    </li>

                    <li className="list-item basis-1/2 py-3 pr-5">
                      <h5 className="mb-3 font-extrabold">
                        Through your loneliness, boredom, and sadness.
                      </h5>
                    </li>

                    <li className="list-item basis-1/2 py-3 pr-5">
                      <h5 className="mb-3 font-extrabold">
                        Through your joy, hope, and happiness.
                      </h5>
                    </li>
                  </ol>
                </div>

                <div
                  className='relative col-start-1 col-end-2 row-start-1 row-end-2 flex h-[37.50rem] flex-col items-center justify-center bg-[url("https://www.concretecatholic.com/images/knight-park-bench-small.jpg")] bg-cover blur-[1px]'
                  id="div-4"
                ></div>

                <div className="relative col-start-1 col-end-3 row-start-2 row-end-3 -mt-16 flex w-[70%] min-w-[53.13rem] items-center justify-between justify-self-end">
                  <div className="relative flex w-full min-w-[53.13rem] items-center justify-between bg-cc-sunset px-16 py-20 text-white">
                    <h4 className="mr-28 max-w-[25.00rem] text-3xl font-extrabold">
                      Jesus, reveal yourself to me in a real and concrete way today.
                    </h4>
                    <Link
                      className="relative max-w-full cursor-pointer overflow-hidden rounded-sm bg-white px-8 py-3 text-xl text-orange-400"
                      href="/"
                    >
                      Listen Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="audience-section" className="w-full px-8 py-20">
        <div className="container mx-auto">
          <div className="flex gap-5">
            <div className="flex w-[27%] flex-col max-md:ml-0">
              <div className="my-auto flex flex-col self-stretch pb-8 text-black">
                <h2 className="text-4xl font-extrabold leading-10">
                  Who is the Concrete Catholic podcast for?
                </h2>
                <p className="mt-8 text-lg leading-9">
                  No matter where you are in your faith, we have created Concrete Catholic with you
                  in mind.
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
                        Children know well what we often forget...just keep it simple. You do not
                        need a fancy degree to encounter Christ in your daily life, just a
                        willingness to try.
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
                      <h3 className="text-3xl font-extrabold leading-9">
                        The "Struggling Catholic"
                      </h3>
                      <p className="mt-8 text-lg leading-9">
                        Life is hard, and sometimes the darkness seems to surround us all. We know
                        no matter how bad things seem to be, that Jesus has conquered all, even
                        death itself.
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
                        Balancing a career, kids, and a mortgage is not easy. Even though Jesus
                        never promised "easy," He did promise that He would never abandon us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="subscribe-section" className="w-full pb-48 pt-24">
        <div className="container mx-auto flex flex-col items-center justify-center text-center text-sm">
          <div className="relative flex min-h-[15.63rem] w-[90%] max-w-[62.50rem] flex-col items-center justify-center p-20">
            <div className="w-full">
              <form
                action="https://concretecatholic.us4.list-manage.com/subscribe/post?u=53f53fe5a933a9eb9d871a5fb&amp;id=47b722dd9d"
                className="flex items-center"
              >
                <input
                  className="h-16 w-full cursor-text border-b-2 border-solid border-b-zinc-400 px-5 text-lg text-zinc-800"
                  id="input-1"
                  placeholder="Your email address"
                  type="email"
                />

                <a
                  className="relative max-w-full overflow-hidden bg-yellow-600 px-10 py-5 text-xl text-white"
                  href="https://www.concretecatholic.com/#"
                >
                  <div className="cursor-pointer">Subscribe</div>
                  <div className="absolute right-full top-0 z-[1] h-full w-full cursor-pointer bg-zinc-700" />
                </a>
              </form>
            </div>

            <h2 className="absolute top-[-2.50rem] mb-8 text-[4.38rem] font-extrabold leading-none">
              Connect With Fr. Jack
            </h2>
          </div>

          <p className="mb-8 max-w-[31.88rem] px-5" id="p-1">
            We will never spam you or distribute your information. Our Mailchimp sign-up helps us
            communicate our hopes and dreams with you for Concrete Catholic as we grow.
          </p>
        </div>
      </section>
      <section id="cover-section" className="bg-cc-charcoal pb-36 pt-24 text-white">
        <div className="container mx-auto flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[4.38rem] font-extrabold leading-none">What do we cover?</h2>

            <div className="pb-6 pt-3" id="div-2">
              "Lord Jesus, reveal yourself to me today in a real and concrete way."
            </div>

            <p className="mb-8 max-w-[43.75rem] text-lg text-white/[0.7]">
              Concrete Catholic covers the essential aspects of forming a relationship with Jesus
              Christ, from prayer to encounter to sharing the Good News. God comes to us in the
              everyday, not just in the religious moments.
            </p>
          </div>

          <div className="-mb-96 grid min-h-[31.25rem] w-full max-w-[85.63rem] grid-cols-1 gap-4 px-3 text-3xl font-extrabold md:grid-cols-2 lg:grid-cols-3">
            <div
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-cc-slate p-10 transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-xl"
              role="article"
              aria-labelledby="card-title-1"
            >
              <div className="flex h-full w-full flex-col justify-between">
                <h4 id="card-title-1" className="text-3xl font-bold">
                  How to share your experiences with others.
                </h4>
                <p className="translate-y-full transform font-sans text-base font-normal opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-90">
                  Life is complicated, but prayer doesn't have to be. We approach life (and begin
                  our Podcast) with a simple prayer: "Jesus, reveal yourself to me today in a real
                  and concrete way." That's it.
                </p>
              </div>
            </div>
            <div
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-cc-slate p-10 transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-xl"
              role="article"
              aria-labelledby="card-title-2"
            >
              <div className="flex h-full w-full flex-col justify-between">
                <h4 id="card-title-2" className="text-3xl font-bold">
                  How to encounter Christ in the ordinary.
                </h4>
                <p className="translate-y-full transform font-sans text-base font-normal opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-90">
                  Through the Incarnation, Christ took on our flesh, and entered into every
                  experience of our lives. He longs to meet us in our work, in our families, in our
                  joys, in our sorrows.
                </p>
              </div>
            </div>
            <div
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-cc-slate p-10 transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-xl"
              role="article"
              aria-labelledby="card-title-3"
            >
              <div className="flex h-full w-full flex-col justify-between">
                <h4 id="card-title-3" className="text-3xl font-bold">
                  How to pray in a simple and authentic way.
                </h4>
                <p className="translate-y-full transform font-sans text-base font-normal opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-90">
                  Sometimes we encounter Jesus, but we have no idea how to share what we've
                  experienced. We'll walk through how to share what you've encountered with your
                  friends and your family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center pb-24 pt-24 text-sm">
            <div className="w-full max-w-3xl">
              <div className="mb-12 text-center">
                <h2 className="mb-8 text-4xl font-extrabold md:text-5xl lg:text-6xl">
                  Got questions?
                  <br />
                  We have answers.
                </h2>
              </div>

              <div>
                <div className="mb-6 flex flex-col overflow-hidden rounded-md border-2 border-solid border-yellow-600">
                  <div className="flex max-w-full cursor-pointer items-center justify-between p-6 text-yellow-600">
                    <h5 className="mr-10 text-xl font-bold text-black">
                      What makes Concrete Catholic different from other podcasts?
                    </h5>
                    <Image
                      alt="FAQ Icon"
                      className="inline-block h-5 w-5 max-w-full align-middle"
                      src=""
                    />
                  </div>
                  <div className="max-h-0 opacity-0">
                    <p className="p-6 font-sans text-lg">
                      Relationship with Jesus Christ will always trump knowledge about Jesus Christ.
                      While there are a lot of Catholic podcasts out there (many of them great), we
                      wanted to address the most foundational matter of faith...how to have a
                      relationship with Jesus Christ.
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex flex-col overflow-hidden rounded-md border-2 border-solid border-yellow-600">
                  <div className="flex max-w-full cursor-pointer items-center justify-between p-6 text-yellow-600">
                    <h5 className="mr-10 text-xl font-bold text-black">
                      Does it matter what order I listen to the episodes?
                    </h5>
                    <Image
                      alt="FAQ Icon"
                      className="inline-block h-5 w-5 max-w-full align-middle"
                      src=""
                    />
                  </div>
                  <div className="max-h-0 opacity-0">
                    <p className="p-6 font-sans text-lg">
                      Wherever you are joining us in our podcast, it does not matter which order you
                      listen to the episodes. We have designed Concrete Catholic to be accessible
                      whether you're listening from the very beginning or joining us on a random
                      week.
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex flex-col overflow-hidden rounded-md border-2 border-solid border-yellow-600">
                  <div className="flex max-w-full cursor-pointer items-center justify-between p-6 text-yellow-600">
                    <h5 className="mr-10 text-xl font-bold text-black">
                      Where did you learn the prayer you say in the podcast?
                    </h5>
                    <Image
                      alt="FAQ Icon"
                      className="inline-block h-5 w-5 max-w-full align-middle"
                      src=""
                    />
                  </div>
                  <div className="max-h-0 opacity-0">
                    <p className="p-6 font-sans text-lg">
                      The prayer was really born out of intentional time with Christ around the time
                      of my ordination (Summer 2018).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-section" className="w-full bg-cc-sunset pb-16 pr-20 text-white">
        <div className="container flex">
          <div className="relative w-[63%]">
            <Image
              loading="lazy"
              src="/images/Concrete_Catholic_bnw-62.jpg"
              alt="Fr. Jack"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="ml-5 flex flex-col">
            <div className="my-auto flex flex-col self-stretch pb-4 max-md:mt-10">
              <h2 className="text-sm leading-5">Its great to meet you!</h2>
              <h3 className="mt-8 self-start text-6xl font-extrabold leading-[72px] max-md:text-4xl">
                Contact Fr. Jack
              </h3>
              <form className="mt-8">
                <label htmlFor="name" className="text-base font-bold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="First + Last"
                  className="mt-1.5 w-full border border-solid border-stone-300 bg-white px-3.5 py-2.5 text-sm text-neutral-400 max-md:max-w-full"
                />

                <label htmlFor="email" className="mt-4 text-base font-bold max-md:max-w-full">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@domain.com"
                  className="mt-1.5 w-full whitespace-nowrap border border-solid border-stone-300 bg-white px-3.5 py-2.5 text-sm text-neutral-400 max-md:max-w-full"
                />

                <label
                  htmlFor="message"
                  className="mt-4 text-base font-bold text-white max-md:max-w-full"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Leave your message here."
                  className="mt-1.5 w-full border border-solid border-stone-300 bg-white px-3.5 pb-7 pt-2.5 text-sm leading-5 text-neutral-400 max-md:max-w-full"
                ></textarea>

                <div className="mt-4 flex w-[304px] max-w-full flex-col justify-center bg-white"></div>

                <button
                  type="submit"
                  className="mt-3 self-start whitespace-nowrap bg-white px-10 pb-5 pt-9 text-center text-xl leading-5 tracking-wider text-yellow-600 max-md:px-5"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="be-concrete-section" className="w-full bg-cc-crimson text-white">
        <div className="container mx-auto w-full">
          <div className="flex w-full flex-col items-center justify-center pb-24 pt-72 text-center text-sm">
            <div className="flex flex-col items-start justify-center">
              <h2 className="mb-8 text-[4.38rem] font-extrabold leading-none">
                Be a Concrete Catholic
              </h2>
              <p className="mb-8 max-w-xs font-sans text-lg">
                We have created Concrete Catholic as an invitation to walk with us as we walk with
                Christ.
              </p>
              <div className="flex h-auto flex-col items-start justify-start self-center">
                <div>
                  <h3 className="mb-8 text-[2.50rem] font-extrabold leading-none">01. Focus</h3>
                  <p className="mb-8 max-w-[44.38rem] font-sans text-lg">
                    Keep your eyes fixed on Christ. Literally. Find an image of Jesus, and give
                    yourself time to simply look at Him, and let Him look at you. This simple
                    exercise puts everything in perspective, letting Jesus be our focus, and
                    allowing the noise to fade away.
                  </p>
                </div>
                <div>
                  <h3 className="mb-8 text-[2.50rem] font-extrabold leading-none">02. Pray</h3>
                  <p className="mb-8 max-w-[44.38rem] font-sans text-lg">
                    This step, while obvious, must still be said. This is a state of "being," not a
                    state of "doing." With your eyes fixed on Christ, it becomes natural to ask
                    Jesus to reveal Himself in the circumstances of your life.
                  </p>
                </div>
                <div>
                  <h3 className="mb-8 text-[2.50rem] font-extrabold leading-none">
                    03. Anticipate
                  </h3>
                  <p className="mb-8 max-w-[44.38rem] font-sans text-lg">
                    Expect the unexpected and allow the Lord to enter into your surroundings. Very
                    often, we have a specific idea in our minds how (and where) Christ will come to
                    us. Anticipation is not just about seeking out Christ, but allowing ourselves to
                    be found by Him.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
