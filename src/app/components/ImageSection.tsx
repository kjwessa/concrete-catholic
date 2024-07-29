import Image from "next/image";

export function ImageSection() {
  return (
    <section className="flex w-full items-center justify-center px-16 py-20 max-md:max-w-full max-md:pl-5">
      <Image
        loading="lazy"
        src=""
        alt="Concrete Catholic visual representation"
        width={1645}
        height={857}
        className="mb-16 mt-24 aspect-[1.92] w-full max-w-[1645px] max-md:my-10 max-md:max-w-full"
      />
    </section>
  );
}
