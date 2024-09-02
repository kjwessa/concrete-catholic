import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex justify-center items-center">
      <Image 
        loading="lazy" 
        src="" 
        alt="Concrete Catholic Logo" 
        width={175} 
        height={96}
        className="aspect-[1.82] w-[175px]" 
      />
    </div>
  );
}