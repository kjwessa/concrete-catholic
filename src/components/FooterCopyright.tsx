export const FooterCopyright: React.FC = () => {
  return (
    <div className="mt-12 flex gap-1.5 pl-20 text-xs leading-5 max-md:mt-10 max-md:flex-wrap max-md:pl-5">
      <div className="tracking-wider text-white text-opacity-50">
        © 2020 Concrete Catholic.
      </div>
      <div className="flex gap-0">
        <div className="flex gap-1.5 pb-1.5 pr-1 pt-1">
          <div className="tracking-wider text-white text-opacity-50">
            Photography by
          </div>
          <div className="tracking-[2px] text-yellow-600">Brittney Rivera</div>
        </div>
        <div className="flex gap-1.5 pb-1.5 pr-1 pt-1">
          <div className="tracking-wider text-white text-opacity-50">
            + Design by
          </div>
          <div className="tracking-[2px] text-yellow-600">Brewww</div>
        </div>
      </div>
    </div>
  );
};
