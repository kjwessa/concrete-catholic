import Image from 'next/image'

const ConcreteHomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col w-full">
        <div className="flex overflow-hidden flex-wrap w-full">
          <section className="relative flex-1 shrink basis-0 min-w-[240px]">
            <Image
              src="/images/Concrete_Catholic-77.jpg"
              alt="Background"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black/70 to-transparent">
              <h2 className="text-sm font-semibold text-white uppercase tracking-[4px] mb-6">
                It's great to meet you!
              </h2>
              <blockquote className="text-4xl font-extrabold text-white leading-tight mb-8 max-w-2xl">
                "Learn how to encounter Jesus Christ in every moment of every day."
              </blockquote>
              <div className="flex gap-6 items-start text-base">
                <button className="px-6 py-3 text-yellow-600 bg-white rounded-full hover:bg-yellow-100 transition duration-300 ease-in-out font-semibold">
                  Listen Now
                </button>
                <button className="px-6 py-3 text-white rounded-full border-2 border-white hover:bg-white hover:text-yellow-600 transition duration-300 ease-in-out font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
          <section className="flex flex-col flex-1 shrink justify-between px-16 pt-16 pb-60 bg-gray-800 basis-[120px] min-w-[240px]">
            <div className="flex gap-4 items-start self-end">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc744e56eabb62e3ae2854363e1ccc62d7cbf69692c3b9d7f4a0d3c2065e4a57?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
                alt=""
                className="object-contain shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/94bb7fababd436d41b36f5598b81699b87f2de444ea94b67525390dab32cf4cc?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
                alt=""
                className="object-contain shrink-0 w-6 aspect-square"
              />
            </div>
            <div className="flex flex-col mt-16 w-full text-white">
              <img
                loading="lazy"
                src=""
                alt="Logo"
                className="object-contain max-w-full aspect-[3.12] w-[156px]"
              />
              <h2 className="mt-8 text-5xl font-bold leading-tight tracking-tight">
                Contact Fr. Jack
              </h2>
              <p className="mt-6 text-xl leading-relaxed max-w-2xl">
                Thank you for your interest in the Concrete Catholic podcast. I do my best to reply
                to emails quickly, but please allow up to a week for a response.
              </p>
              <form className="flex flex-col mt-12 w-full text-lg leading-none text-white text-opacity-50">
                <div className="flex flex-wrap gap-4 items-start w-full">
                  <div className="flex-1 shrink min-w-[240px]">
                    <label htmlFor="firstName" className="sr-only">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="w-full px-4 py-2 border-b border-solid border-b-white bg-transparent"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="flex-1 shrink min-w-[240px]">
                    <label htmlFor="lastName" className="sr-only">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="w-full px-4 py-2 border-b border-solid border-b-white bg-transparent"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 items-start mt-6 w-full">
                  <div className="flex-1 shrink min-w-[240px]">
                    <label htmlFor="email" className="sr-only">
                      Your Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full px-4 py-2 border-b border-solid border-b-white bg-transparent"
                      placeholder="Your Email Address"
                    />
                  </div>
                  <div className="flex-1 shrink min-w-[240px]">
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-2 border-b border-solid border-b-white bg-transparent"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5 items-center px-4 py-2 mt-6 w-full border-b border-solid border-b-white">
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="flex-1 bg-transparent"
                    placeholder="Subject Field"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3aa2fc93681c8eb896a27a81eda5fed7a935f5410217d1754c25b538e4485f6?placeholderIfAbsent=true&apiKey=687549a059be4b889b95799647c9bdf8"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </div>
                <div className="mt-6 w-full">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full px-4 pt-2 pb-16 bg-transparent border-b border-solid border-b-white min-h-[98px]"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="flex flex-wrap gap-4 items-center mt-6 w-full">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacyAgreed"
                    className="w-6 h-6 border border-white border-solid"
                  />
                  <label
                    htmlFor="privacy"
                    className="flex-1 shrink self-stretch my-auto underline basis-0"
                  >
                    I agree to the{' '}
                    <a href="#" className="underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="self-start px-6 py-3 mt-8 text-lg font-semibold text-gray-800 bg-yellow-600 rounded-full hover:bg-yellow-500 transition-colors duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default ConcreteHomePage
