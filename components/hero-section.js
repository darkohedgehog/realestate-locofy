import React from "react";
import Link from "next/link";


const HeroSection = () => {
  

  return (
    <section className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url('/vu-anh-TiVPTYCG_3E-unsplash.jpg')] bg-cover  bg-no-repeat bg-[center] text-center text-gray-white font-body-regular-400">
      <div className="self-stretch h-[686px] flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <h1 className="mt-20 self-stretch relative text-inherit leading-[72px] font-semibold font-inherit text-[inherit]">
            Find Your Dream Home
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-gray-white">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <form className="self-stretch flex flex-col items-center justify-start gap-[17px]">
          <div className="flex flex-row items-start justify-start gap-[10px] mb-10">
          <Link className="no-underline" href="/properties">
            <button
              className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start"
              autoFocus
            > 
              <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
                Rent
              </div>
            </button>
            </Link>
            <Link className="no-underline" href="/agents">
            <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start">
              
              <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-primary-400 text-center">
                Sale
              </div>
            </button>
            </Link>
          </div>
          
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
