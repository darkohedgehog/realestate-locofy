import Head from "next/head";
import { Button } from "@mui/material";
import Link from "next/link";
import HeroSection from "./hero-section";
import SellYourHomeContainer from "./sell-your-home-container";
import CardFormInputs from "./card-form-inputs";
import PropertyRentCars from "./property-rent-cars";
import FooterSection from "./footer-section";

const LandingPage = () => {
  return (
    <main className="relative bg-gray-white w-[1920px] h-[5095.99px] flex flex-col items-center justify-start text-center text-21xl text-primary-800 font-body-large-400">
      <header className="self-stretch bg-gray-white h-[84px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-large-400 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
        <div className="flex-1 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <Link
              className="cursor-pointer [text-decoration:none] relative w-11 h-11"
              href="/../pages/properties-grid-view"
            >
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
              <img
                className="absolute h-[77.03%] w-9/12 top-[10.47%] right-[12.5%] bottom-[12.5%] left-[12.5%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector1.svg"
              />
              <img
                className="absolute h-[6.25%] w-[93.75%] top-[81.25%] right-[3.13%] bottom-[12.5%] left-[3.13%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector2.svg"
              />
              <img
                className="absolute h-[31.25%] w-3/12 top-[56.25%] right-[37.5%] bottom-[12.5%] left-[37.5%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector3.svg"
              />
            </Link>
            <div className="flex flex-col items-start justify-start">
              <h2 className="m-0 relative text-inherit leading-[24px] font-semibold font-inherit">
                REIS
              </h2>
              <div className="relative text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
            <div className="flex flex-row items-start justify-start gap-[30px]">
              <div className="relative leading-[22px]">HOME</div>
              <div className="relative leading-[22px]">ABOUT US</div>
              <div className="relative leading-[22px]">OUR AGENTS</div>
              <div className="relative leading-[22px] font-semibold">
                PROPERTIES
              </div>
              <div className="relative leading-[22px]">GALLERY</div>
              <div className="relative leading-[22px]">BLOG</div>
              <div className="relative leading-[22px]">CONTACT US</div>
              <div className="relative leading-[22px]">SEARCH</div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
                alt=""
                src="/notification.svg"
              />
            </button>
          </div>
        </div>
      </header>
      <HeroSection />
      <div className="self-stretch h-[752px] flex flex-col py-[53px] px-[50px] box-border items-center justify-start gap-[45px]">
        <div className="self-stretch flex flex-col py-0 px-[30px] items-center justify-start gap-[24px] md:self-stretch md:w-auto">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
            Properties by Area
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row flex-wrap py-0 px-2.5 box-border items-start justify-center max-w-[95%px] text-left text-5xl text-gray-white">
          <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-1@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <a
                    className="[text-decoration:none] relative leading-[32px] font-semibold text-[inherit]"
                    target="_blank"
                    href="/../pages/properties-grid-view"
                  >
                    Centerville
                  </a>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-2@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
                    Centerville
                  </h3>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-3@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
              <div className="flex-1 rounded-lg h-[241px] flex flex-row p-2.5 box-border items-start justify-start relative bg-[url('/card-4@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Arlington
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row p-2.5 box-border items-start justify-start relative bg-[url('/card-5@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-primary-50 h-[786px] flex flex-col py-[70px] px-0 box-border items-center justify-start">
        <div className="self-stretch flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
          <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Properties by Area
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px]"
            href="/../pages/properties-grid-view"
          >
            <SellYourHomeContainer
              homeSaleRentId="/icon.svg"
              homeSaleRentText="Sell your home"
            />
            <SellYourHomeContainer
              homeSaleRentId="/icon1.svg"
              homeSaleRentText="Rent your home"
              propWidth="312px"
            />
            <SellYourHomeContainer
              homeSaleRentId="/icon2.svg"
              homeSaleRentText="Buy a home"
              propWidth="unset"
            />
            <SellYourHomeContainer
              homeSaleRentId="/icon3.svg"
              homeSaleRentText="Free marketing"
              propWidth="312px"
            />
          </Link>
        </div>
      </div>
      <form className="w-[1890px] h-[873px] flex flex-col py-[86px] px-0 box-border items-center justify-start gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-large-400 text-primary-800 text-center">
              Latest Properties of Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-lightslategray text-center">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
            <CardFormInputs
              imageDimensions="/unsplashrlwe8f8anoc@2x.png"
              imageDimensionsText="/car.svg"
              imageDimensionsText2="/bathtub.svg"
              imageDimensionsText3="/arrowsout.svg"
              imageDimensionsText4="/plus.svg"
            />
            <CardFormInputs
              imageDimensions="/unsplashrlwe8f8anoc1@2x.png"
              imageDimensionsText="/car.svg"
              imageDimensionsText2="/bathtub.svg"
              imageDimensionsText3="/arrowsout.svg"
              imageDimensionsText4="/plus1.svg"
            />
            <CardFormInputs
              imageDimensions="/unsplashrlwe8f8anoc2@2x.png"
              imageDimensionsText="/car1.svg"
              imageDimensionsText2="/bathtub1.svg"
              imageDimensionsText3="/arrowsout1.svg"
              imageDimensionsText4="/plus2.svg"
            />
            <CardFormInputs
              imageDimensions="/unsplashrlwe8f8anoc3@2x.png"
              imageDimensionsText="/car1.svg"
              imageDimensionsText2="/bathtub1.svg"
              imageDimensionsText3="/arrowsout1.svg"
              imageDimensionsText4="/plus2.svg"
            />
          </div>
        </div>
        <Button variant="contained" color="primary">
          Load more listing
        </Button>
      </form>
      <div className="self-stretch flex flex-col pt-[86px] px-0 pb-[226px] items-center justify-start gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Latest Properties of Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px]">
            <PropertyRentCars />
            <PropertyRentCars propBackgroundImage="url('/card-21@3x.png')" />
            <PropertyRentCars propBackgroundImage="url('/card-31@3x.png')" />
            <PropertyRentCars propBackgroundImage="url('/card-41@3x.png')" />
          </div>
        </div>
        <Button variant="contained" color="primary">
          Load more listing
        </Button>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-row flex-wrap py-[86px] px-[5px] items-start justify-center">
        <div className="flex-1 flex flex-col py-0 px-2.5 box-border items-center justify-start gap-[40px] max-w-[900px]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Contact us
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[30px] items-center justify-start gap-[17px] text-left text-5xl text-darkslategray font-poppins">
            <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
              <b className="self-stretch relative leading-[36px]">
                Enquiry Form
              </b>
              <div className="self-stretch relative text-[18px] leading-[30px] font-components-input-text text-slategray">
                Are you looking for details about a certain property? Ask us a
                question using the form below.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-base text-darkgray font-components-input-text">
              <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
                <div className="self-stretch flex-1 rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray md:flex-[unset] md:self-stretch">
                  <div className="relative tracking-[0.15px] leading-[24px]">
                    First name
                  </div>
                </div>
                <div className="self-stretch flex-1 rounded flex flex-col py-4 px-3 items-start justify-center border-[1px] border-solid border-gray md:flex-[unset] md:self-stretch">
                  <div className="relative tracking-[0.15px] leading-[24px]">
                    Last name
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  Email id
                </div>
              </div>
              <div className="self-stretch rounded box-border h-[105px] flex flex-col p-3 items-start justify-start border-[1px] border-solid border-gray">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  Comments or questions
                </div>
              </div>
              <Button sx={{ width: 222 }} variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FooterSection
        imageDimensions="/houseline.svg"
        imageDimensionsText="/social-media-logo.svg"
        imageDimensionsText2="/social-media-logo1.svg"
        imageDimensionsText3="/social-media-logo2.svg"
        imageDimensionsText4="/social-media-logo3.svg"
        imageDimensionsText5="/social-media-logo4.svg"
        propHeight="429px"
        propBoxSizing="border-box"
        propOverflow="unset"
      />
    </main>
  );
};

export default LandingPage;
