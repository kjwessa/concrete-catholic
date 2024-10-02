'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroImage from '@/public/images/Concrete_Catholic-86.jpg'

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
      <section
        id="logo-section"
        className="w-full justify-center border-b border-zinc-100 px-5 py-px"
      >
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex w-3/12 flex-col max-md:ml-0 max-md:w-full">
            <div className="flex max-w-[1920px] grow items-center justify-center self-stretch border border-solid border-zinc-100 px-16 py-20 max-md:px-5">
              <Image
                src=""
                alt="Sponsor Logo 1"
                width={272}
                height={136}
                className="mt-4 max-w-full aspect-[2]"
              />
            </div>
          </div>
          <div className="flex w-3/12 flex-col max-md:ml-0 max-md:w-full">
            <div className="flex max-w-[1920px] grow items-center justify-center self-stretch border border-solid border-zinc-100 px-16 py-20 max-md:px-5">
              <Image
                src=""
                alt="Sponsor Logo 2"
                width={136}
                height={49}
                className="mt-16 max-w-full aspect-[2.78] max-md:mt-10"
              />
            </div>
          </div>
          <div className="flex w-3/12 flex-col max-md:ml-0 max-md:w-full">
            <div className="flex max-w-[1920px] grow items-center justify-center self-stretch border border-solid border-zinc-100 px-16 py-20 max-md:px-5">
              <Image
                src=""
                alt="Sponsor Logo 3"
                width={204}
                height={51}
                className="mt-14 max-w-full aspect-[4]"
              />
            </div>
          </div>
          <div className="flex w-3/12 flex-col max-md:ml-0 max-md:w-full">
            <div className="flex max-w-[1920px] grow items-center justify-center self-stretch border border-solid border-zinc-100 px-16 py-20 max-md:px-5">
              <Image
                src=""
                alt="Sponsor Logo 4"
                width={204}
                height={53}
                className="mt-14 max-w-full aspect-[3.85]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col w-full min-h-[998px] max-md:max-w-full">
          <div className="flex flex-1 w-full bg-gray-800 min-h-[934px] max-md:max-w-full" />
          <div className="flex w-full bg-stone-50 min-h-[64px] max-md:max-w-full" />
        </div>
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
      <section className="flex flex-col justify-center items-center self-center px-64 py-32 max-w-full rounded bg-gray-800 bg-opacity-90 w-[1888px] max-md:px-5 max-md:py-24">
        <img
          loading="lazy"
          src="http://b.io/ext_38-"
          alt="Concrete Catholic Logo"
          className="object-contain max-w-full aspect-[3.12] w-[156px]"
        />
        <blockquote className="self-stretch mt-12 text-6xl font-extrabold text-center text-yellow-600 leading-[60px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          "Being Christian is not the result of an ethical choice or a lofty idea, but the encounter
          with an event, a person, which gives life a new horizon <br />
          and a decisive direction."
        </blockquote>
        <footer className="flex flex-col justify-center items-center mt-12 max-md:mt-10">
          <cite className="text-xl font-bold leading-none text-white not-italic">
            Pope Benedict XVI
          </cite>
          <div className="mt-2 text-xs font-semibold leading-none text-center uppercase text-zinc-400 tracking-[4px]">
            Deus Caritas Est
          </div>
        </footer>
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
    </>
  )
}
