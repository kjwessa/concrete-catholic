import Image from 'next/image';

export function ContactForm() {
  return (
    <section className="flex flex-col items-center p-20 w-full text-xl font-bold leading-6 text-black max-md:px-5 max-md:max-w-full">
      <h2 className="mt-9 text-6xl font-extrabold text-center max-md:text-4xl">Got questions?</h2>
      <h3 className="mt-3.5 text-6xl font-extrabold text-center max-md:max-w-full max-md:text-4xl">We have answers.</h3>
      <div className="flex flex-col justify-center p-px mt-24 w-full bg-white border border-yellow-600 border-solid shadow-2xl max-w-[1370px] max-md:mt-10 max-md:max-w-full">
        <button className="flex gap-5 justify-between p-10 w-full text-left max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <span className="max-md:max-w-full">What makes Concrete Catholic different from other podcasts?</span>
          <Image 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/97c61e49b8ab18f3d2b6e7ad16199382111fadb47f2c6be5b96e1b1af2950d8b?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d" 
            alt="Expand" 
            width={20} 
            height={20} 
            className="shrink-0 my-auto w-5 aspect-square" 
          />
        </button>
      </div>
      <div className="flex flex-col justify-center p-px mt-10 w-full bg-white border border-yellow-600 border-solid shadow-2xl max-w-[1370px] max-md:max-w-full">
        <button className="flex gap-5 justify-between p-10 w-full text-left max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <span className="max-md:max-w-full">Does it matter what order I listen to the episodes?</span>
          <Image 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c03f479fd367e3b87009b9ebb260360255a723983f8c3cd6fde264539e67fbc8?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d" 
            alt="Expand" 
            width={20} 
            height={20} 
            className="shrink-0 my-auto w-5 aspect-square" 
          />
        </button>
      </div>
      <div className="flex flex-col justify-center p-px mt-10 mb-28 w-full bg-white border border-yellow-600 border-solid shadow-2xl max-w-[1370px] max-md:mb-10 max-md:max-w-full">
        <button className="flex gap-5 justify-between p-10 w-full text-left max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <span className="max-md:max-w-full">Where did you learn the prayer you say in the podcast?</span>
          <Image 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75b33219471515f854fb99ede11cf1b39980f08fa1c088ecc4d4ae0f255d47c9?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d" 
            alt="Expand" 
            width={20} 
            height={20} 
            className="shrink-0 my-auto w-5 aspect-square" 
          />
        </button>
      </div>
    </section>
  );
}
