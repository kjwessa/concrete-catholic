'use client'

import React from 'react'

interface NavItemProps {
  label: string
  iconSrc?: string
  className?: string
}

const NavItem: React.FC<NavItemProps> = ({ label, iconSrc, className }) => {
  return (
    <div className={`flex gap-1 items-end ${className || ''}`}>
      <div>{label}</div>
      {iconSrc && (
        <img
          loading="lazy"
          src={iconSrc}
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
      )}
    </div>
  )
}

interface HeaderProps {
  logoSrc: string
}

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  const navItems = [
    {
      label: 'Episodes',
      iconSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/a3aa2fc93681c8eb896a27a81eda5fed7a935f5410217d1754c25b538e4485f6?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8',
    },
    { label: 'Meet Fr. Jack', className: 'rounded' },
    { label: 'Contact', className: 'whitespace-nowrap rounded' },
    { label: 'Listen Now', className: 'text-yellow-600 rounded' },
  ]

  return (
    <header className="flex flex-wrap gap-10 justify-between items-center px-72 py-4 w-full text-lg leading-none text-white bg-gray-800 border-solid border-b-[0.5px] border-b-white border-b-opacity-50 max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src={logoSrc}
        alt="Logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[3.12] w-[156px]"
      />
      <nav className="flex gap-10 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </nav>
    </header>
  )
}

const IntroSection: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-10 items-center px-64 py-40 w-full bg-gray-800 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col grow shrink items-start self-stretch pb-8 my-auto min-w-[240px] w-[525px] max-md:max-w-full">
        <div className="flex z-10 shrink-0 mt-0 rounded border-solid border-[1.5px] border-zinc-400 h-[900px] max-md:max-w-full" />
      </div>
      <div className="flex flex-col grow shrink self-stretch py-8 my-auto min-w-[240px] w-[525px] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h2 className="text-xs font-semibold leading-none uppercase opacity-40 text-white text-opacity-90 tracking-[4px] max-md:max-w-full">
            It's great to meet you!
          </h2>
          <h1 className="mt-4 text-7xl font-extrabold leading-none text-yellow-600 max-md:max-w-full max-md:text-4xl">
            Hi, I'm Fr. Jack.
          </h1>
        </div>
        <div className="flex flex-col mt-8 w-full text-lg leading-9 text-white max-md:max-w-full">
          <p className="max-md:max-w-full">
            Hi, my name is Fr. Jack Knight and I was ordained a priest for the Archdiocese of
            Atlanta in 2018. I am the last born of four children (three girls!) to my amazing
            parents. After college at the University of North Florida I spent time working in
            foreign missions. An illness in my immediate family called me back home to make them my
            main mission. After helping my family back to health and perfecting the best latte in
            the evenings, while holding down a nine to five during the day, I spent much time
            discerning God's will for my life.
          </p>
          <p className="mt-4 max-md:max-w-full">
            I entered formal discernment to the priesthood and studied in Saint Benedict, LA,
            Chicago, IL, and Boynton Beach, FL before coming back home to be ordained. I currently
            serve as a parochial vicar in the metro Atlanta area.
          </p>
          <p className="mt-4 max-md:max-w-full">
            Concrete Catholic is a podcast that will help us all to see that the Lord reveals
            himself to us daily. I hope this is helpful for all of you striving to daily live for
            the Lord while constantly keeping our eyes open to the ways in which he reveals Himself
            to us.
          </p>
        </div>
      </div>
    </section>
  )
}

const EncounterSection: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-10 py-40 pr-4 pl-64 w-full max-md:py-24 max-md:pl-5 max-md:max-w-full">
      <div className="flex flex-col py-8 my-auto min-w-[240px] w-[656px] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h2 className="text-xs font-semibold leading-none uppercase opacity-40 text-zinc-700 tracking-[4px] max-md:max-w-full">
            Pray. Encounter. Share.
          </h2>
          <h3 className="mt-4 text-7xl font-extrabold text-yellow-600 leading-[76px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Encounter begins with a simple prayer.
          </h3>
        </div>
        <div className="flex flex-col mt-8 w-full text-lg leading-9 text-black max-md:max-w-full">
          <p className="italic max-md:max-w-full">
            <strong>"Lord Jesus, reveal yourself to me..."</strong>
          </p>
          <p className="mt-2 max-md:max-w-full">
            This simple prayer begins by acknowledging the person of Christ, <br /> asking that He
            make His presence known to us here and now...
          </p>
          <p className="mt-2 italic max-md:max-w-full">
            <strong>"...in a real and concrete way today."</strong>
          </p>
          <p className="mt-2 max-md:max-w-full">
            We pray that Jesus reveals Himself to us in our joys, our sorrows, our <br /> work, our
            relationships, our boredom, and our reality.
          </p>
        </div>
        <div className="flex gap-8 items-center self-start mt-8 text-lg leading-none text-white">
          <button className="gap-2.5 self-stretch px-8 py-4 my-auto bg-yellow-600 rounded max-md:px-5">
            Listen Now
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1 shrink pb-8 rounded basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex z-10 shrink-0 mt-0 rounded border-solid border-[1.5px] border-zinc-400 h-[610px] max-md:max-w-full" />
      </div>
    </section>
  )
}

interface ContactSectionProps {
  imageSrc: string
}

const ContactSection: React.FC<ContactSectionProps> = ({ imageSrc }) => {
  return (
    <section className="flex overflow-hidden flex-wrap w-full text-white max-md:max-w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt="Contact section background"
        className="object-contain flex-1 shrink py-48 w-full aspect-[1.41] basis-[248px] min-w-[240px] max-md:max-w-full"
      />
      <div className="flex flex-col flex-1 shrink justify-center self-start px-32 py-48 bg-gray-800 basis-0 min-w-[240px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h2 className="text-xs font-semibold leading-none uppercase tracking-[4px] max-md:max-w-full">
            It's great to meet you!
          </h2>
          <h3 className="mt-6 text-6xl font-extrabold leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            "Learn how to encounter Jesus Christ in every moment of every day."
          </h3>
        </div>
        <div className="flex gap-4 items-start self-start mt-10 text-lg leading-none">
          <button className="gap-2.5 self-stretch px-4 py-2 bg-yellow-600 rounded">
            Contact Fr. Jack Now!
          </button>
        </div>
      </div>
    </section>
  )
}

const Footer: React.FC = () => {
  return (
    <footer className="gap-2.5 self-stretch py-6 w-full text-xs leading-none text-orange-300 bg-pink-800 min-h-[64px] max-md:max-w-full">
      © 2024 Concrete Catholic. Photography by{' '}
      <span className="text-orange-300">Brittney Rivera </span>+ Design by{' '}
      <span className="text-orange-300">Brewww</span>
    </footer>
  )
}

const ConcreteCatholic: React.FC = () => {
  return (
    <div className="flex flex-col justify-center">
      <Header logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a1500297b3d9a173a0bd66cba0a672134d9faae8da730743ad7daff0bf978cfc?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8" />
      <main>
        <IntroSection />
        <EncounterSection />
        <ContactSection imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/184b3c26511e6f8a9433cc8b508f382d066e867b51ec06a985058fed234d2e6c?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8" />
      </main>
      <Footer />
    </div>
  )
}

export default ConcreteCatholic
