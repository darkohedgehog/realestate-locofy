import { useMemo } from "react";
import Link from "next/link";

const SellYourHomeContainer = ({
  homeSaleRentId="/icon.svg",
  homeSaleRentText="Sell your home",
  homeSaleRentId1="/icon1.svg",
  homeSaleRentText1="Rent your home",
  homeSaleRentId2="/icon2.svg",
  homeSaleRentText2="Buy a home",
  homeSaleRentId3="/icon3.svg",
  homeSaleRentText3="Free marketing",
  propWidth="312px",
}) => {
  const sellYourHomeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div 
    className="self-stretch bg-primary-50 flex flex-col py-[70px] px-0 box-border items-center justify-start">
      <div
      className="self-stretch flex flex-col px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px] mb-7">
       <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
            <div className="self-stretch relative font-semibold">
              Properties by Area
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
    <div className="flex flex-wrap gap-4 sm:[flex-col justify-evenly items-center]">
    <div
      className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col p-[22px] box-border items-start justify-start min-w-[300px] max-w-[340px] text-left text-base text-gray-700 font-body-large-400"
      style={sellYourHomeStyle}
    >
      <div className="w-[268px] h-[254px] flex flex-col items-start justify-start gap-[24px]">
        <img
          className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
          alt=""
          src={homeSaleRentId}
        />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative text-5xl leading-[32px] font-semibold text-center">
            {homeSaleRentText}
          </div>
          <div className="relative leading-[24px] text-lightslategray flex items-end w-[268px]">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <Link href="/agents" className="relative leading-[24px] text-primary-500 no-underline">
            Read more
          </Link>
        </div>
      </div>
    </div>
    <div
    className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col p-[22px] box-border items-start justify-start min-w-[300px] max-w-[340px] text-left text-base text-gray-700 font-body-large-400"
    style={sellYourHomeStyle}
  >
    <div className="w-[268px] h-[254px] flex flex-col items-start justify-start gap-[24px]">
      <img
        className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
        alt=""
        src={homeSaleRentId1}
      />
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <div className="relative text-5xl leading-[32px] font-semibold text-center">
          {homeSaleRentText1}
        </div>
        <div className="relative leading-[24px] text-lightslategray flex items-end w-[268px]">
          We do a free evaluation to be sure you want to start selling.
        </div>
        <Link href="/agents" className="relative leading-[24px] text-primary-500 no-underline">
          Read more
        </Link>
      </div>
    </div>
  </div>
  <div
      className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col p-[22px] box-border items-start justify-start min-w-[300px] max-w-[340px] text-left text-base text-gray-700 font-body-large-400"
      style={sellYourHomeStyle}
    >
      <div className="w-[268px] h-[254px] flex flex-col items-start justify-start gap-[24px]">
        <img
          className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
          alt=""
          src={homeSaleRentId2}
        />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative text-5xl leading-[32px] font-semibold text-center">
            {homeSaleRentText2}
          </div>
          <div className="relative leading-[24px] text-lightslategray flex items-end w-[268px]">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <Link href="/properties" className="relative leading-[24px] text-primary-500 no-underline">
            Read more
          </Link>
        </div>
      </div>
    </div>
    <div
      className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col p-[22px] box-border items-start justify-start min-w-[300px] max-w-[340px] text-left text-base text-gray-700 font-body-large-400"
      style={sellYourHomeStyle}
    >
      <div className="w-[268px] h-[254px] flex flex-col items-start justify-start gap-[24px]">
        <img
          className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
          alt=""
          src={homeSaleRentId3}
        />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative text-5xl leading-[32px] font-semibold text-center">
            {homeSaleRentText3}
          </div>
          <div className="relative leading-[24px] text-lightslategray flex items-end w-[268px]">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <Link href="/contact" className="relative leading-[24px] text-primary-500 no-underline">
            Read more
          </Link>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>
  );
};

export default SellYourHomeContainer;
