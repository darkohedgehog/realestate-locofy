import Link from "next/link";

const PropertyRentCards = () => {
  

  return (
    <>
      <div className="flex pt-[86px] px-0 pb-[226px] items-center gap-[39px]">
        <div className="flex flex-wrap justify-evenly md:flex-col gap-2">
          <div className="flex flex-col items-center m-10 gap-[24px] w-full md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Latest Properties for Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div
            className="self-stretch flex flex-wrap flex-row justify-center gap-2 relative rounded-3xs max-w-full overflow-hidden h-[350px] shrink-0 object-cover mb-3">
            <img
              className="flex w-[350px]"
              src="/card-21@3x.png" />   
               <div className="my-0 absolute top-[16px] flex flex-col items-center gap-[11px] z-[0] text-[20px] text-gray-white">
                  <Link
                    className="[text-decoration:none] relative leading-[32px] font-semibold text-[inherit]"
                    target="_blank"
                    href="/properties"
                  >
                    Centerville
                  </Link>
                </div>         
          </div>         
          <div
            className="self-stretch flex flex-wrap flex-row justify-center gap-2 relative rounded-3xs max-w-full overflow-hidden h-[350px] shrink-0 object-cover mb-3">
            <img
              className="flex w-[350px]"
              src="/card-31@3x.png" />
               <div className="my-0 absolute top-[16px] flex flex-col items-center gap-[11px] z-[0] text-[20px] text-gray-white">
                  <Link
                    className="[text-decoration:none] relative leading-[32px] font-semibold text-[inherit]"
                    target="_blank"
                    href="/properties"
                  >
                    Centerville
                  </Link>
                </div>         
          </div>
          <div
            className="self-stretch flex flex-wrap flex-row justify-center gap-2 relative rounded-3xs max-w-full overflow-hidden h-[350px] shrink-0 object-cover mb-3">
            <img
              className="flex w-[350px]"
              src="/card-41@3x.png" />
               <div className="my-0 absolute top-[16px] flex flex-col items-center gap-[11px] z-[0] text-[20px] text-gray-white">
                  <Link
                    className="[text-decoration:none] relative leading-[32px] font-semibold text-[inherit]"
                    target="_blank"
                    href="/properties"
                  >
                    Centerville
                  </Link>
                </div>         
          </div>
          <div
            className="self-stretch flex flex-wrap flex-row justify-center gap-2 relative rounded-3xs max-w-full overflow-hidden h-[350px] shrink-0 object-cover mb-3">
            <img
              className="flex w-[350px]"
              src="/card-11@3x.png" />
               <div className="my-0 absolute top-[16px] flex flex-col items-center gap-[11px] z-[0] text-[20px] text-gray-white">
                  <Link
                    className="[text-decoration:none] relative leading-[32px] font-semibold text-[inherit]"
                    target="_blank"
                    href="/properties"
                  >
                    Centerville
                  </Link>
                </div>         
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyRentCards;
