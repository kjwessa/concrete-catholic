import Image from 'next/image';

import { useRef, useState } from 'react';

export function SubscribeSection() {
  const recaptchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, including captchaToken
    recaptchaRef.current.reset(); // Reset reCAPTCHA after submission
  };

  return (
    <section className="pr-20 pb-16 w-full bg-yellow-600 max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/84ddc7c1db7470e003f8f030727140458710d718e4e38ffe61f59187bace3a13?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d"
            alt="Fr. Jack"
            width={800}
            height={630}
            className="grow w-full aspect-[1.27] max-md:mt-7 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch pb-4 my-auto max-md:mt-10 max-md:max-w-full">
            <h2 className="text-sm leading-5 text-white max-md:max-w-full">It's great to meet you!</h2>
            <h3 className="self-start mt-8 text-6xl font-extrabold text-white leading-[72px] max-md:text-4xl">Contact Fr. Jack</h3>
            <form className="mt-8" onSubmit={handleSubmit}>
              <label htmlFor="name" className="text-base font-bold text-white max-md:max-w-full">Name</label>
              <input type="text" id="name" placeholder="First + Last" className="px-3.5 py-2.5 mt-1.5 w-full text-sm bg-white border border-solid border-stone-300 text-neutral-400 max-md:max-w-full" />
              
              <label htmlFor="email" className="mt-4 text-base font-bold text-white max-md:max-w-full">Email Address</label>
              <input type="email" id="email" placeholder="name@domain.com" className="px-3.5 py-2.5 mt-1.5 w-full text-sm whitespace-nowrap bg-white border border-solid border-stone-300 text-neutral-400 max-md:max-w-full" />
              
              <label htmlFor="message" className="mt-4 text-base font-bold text-white max-md:max-w-full">Message</label>
              <textarea id="message" placeholder="Leave your message here." className="px-3.5 pt-2.5 pb-7 mt-1.5 w-full text-sm leading-5 bg-white border border-solid border-stone-300 text-neutral-400 max-md:max-w-full"></textarea>
              
              <div className="flex flex-col justify-center mt-4 max-w-full bg-white w-[304px]">
               
              </div>
              
              <button type="submit" className="self-start px-10 pt-9 pb-5 mt-3 text-xl tracking-wider leading-5 text-center text-yellow-600 whitespace-nowrap bg-white max-md:px-5">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
