import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex justify-center items-center">
      <Image 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7337a8c98f16151ffa623f3b1859c1bf0c5880f75d0c445c2ef5979c35b34dc0?apiKey=30aa5622865a4691b40c2c8f7feb241d&&apiKey=30aa5622865a4691b40c2c8f7feb241d" 
        alt="Concrete Catholic Logo" 
        width={175} 
        height={96}
        className="aspect-[1.82] w-[175px]" 
      />
    </div>
  );
}