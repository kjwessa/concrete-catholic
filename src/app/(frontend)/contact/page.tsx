'use client'

import React, { useState } from 'react'

const ConcreteHomePage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacyAgreed: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, privacyAgreed: e.target.checked }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="flex flex-col">
      <main className="flex flex-col w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap w-full max-md:max-w-full">
          <section className="flex flex-col flex-1 shrink px-32 py-16 basis-0 bg-gray-800 bg-opacity-10 min-w-[240px] max-md:px-5 max-md:max-w-full">
            <h2 className="text-xs font-semibold leading-none text-white uppercase tracking-[4px] max-md:max-w-full">
              It's great to meet you!
            </h2>
            <blockquote className="mt-8 text-6xl font-extrabold text-white leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              "Learn how to encounter Jesus Christ in every moment of every day."
            </blockquote>
            <div className="flex gap-4 items-start self-start mt-8 text-lg leading-none">
              <button className="gap-2.5 self-stretch px-4 py-2 text-yellow-600 bg-white rounded">
                Listen Now
              </button>
              <button className="gap-2.5 self-stretch px-4 py-2 text-white whitespace-nowrap rounded border border-white border-solid">
                Subscribe
              </button>
            </div>
          </section>
          <section className="flex flex-col flex-1 shrink justify-between px-16 pt-16 pb-60 bg-gray-800 basis-[120px] min-w-[240px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
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
            <div className="flex flex-col mt-16 w-full text-lg leading-9 text-white max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src=""
                alt="Logo"
                className="object-contain max-w-full aspect-[3.12] w-[156px]"
              />
              <h2 className="mt-6 text-7xl font-extrabold leading-none max-md:max-w-full max-md:text-4xl">
                Contact Fr. Jack
              </h2>
              <p className="mt-6 max-md:max-w-full">
                Thank you for your interest in the Concrete Catholic podcast. I do my best to reply
                to emails quickly, but please allow up to a week for a reply.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col mt-6 w-full text-lg leading-none text-white text-opacity-50 max-md:max-w-full"
              >
                <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
                  <div className="flex-1 shrink min-w-[240px]">
                    <label htmlFor="firstName" className="sr-only">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
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
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-b border-solid border-b-white bg-transparent"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 items-start mt-6 w-full max-md:max-w-full">
                  <div className="flex-1 shrink min-w-[240px]">
                    <label htmlFor="email" className="sr-only">
                      Your Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
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
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-b border-solid border-b-white bg-transparent"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5 items-center px-4 py-2 mt-6 w-full border-b border-solid border-b-white max-md:max-w-full">
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
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
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 pt-2 pb-16 bg-transparent border-b border-solid border-b-white min-h-[98px] max-md:max-w-full"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="flex flex-wrap gap-4 items-center mt-6 w-full max-md:max-w-full">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacyAgreed"
                    checked={formData.privacyAgreed}
                    onChange={handleCheckboxChange}
                    className="w-6 h-6 border border-white border-solid"
                  />
                  <label
                    htmlFor="privacy"
                    className="flex-1 shrink self-stretch my-auto underline basis-0 max-md:max-w-full"
                  >
                    I agree to the{' '}
                    <a href="#" className="underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="self-start px-4 py-2 mt-6 text-lg leading-none bg-yellow-600 rounded"
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
