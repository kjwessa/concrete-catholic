import Image from 'next/image';

export function ImageSection() {
  return (
    <section className="flex justify-center items-center px-16 py-20 w-full max-md:pl-5 max-md:max-w-full">
      <Image 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2eb4ad27cb954b8d1d2e9d94e350b8d5bcd54ea4a1f542d27af8f824678bfbdd?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d" 
        alt="Concrete Catholic visual representation" 
        width={1645}
        height={857}
        className="mt-24 mb-16 w-full aspect-[1.92] max-w-[1645px] max-md:my-10 max-md:max-w-full" 
      />
    </section>
  );
}
