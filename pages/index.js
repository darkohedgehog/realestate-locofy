import Head from "next/head";
import { Button } from "@mui/material";
import Link from "next/link";
import HeroSection from "../components/hero-section";
import SellYourHomeContainer from "../components/sell-your-home-container";
import CardFormInputs from "../components/card-form-inputs";
import PropertyRentCars from "../components/property-rent-cars";
import FooterSection from "../components/footer-section";
import Header from "../components/header";

const LandingPage = () => {
 
  return (
    <>
    <Head>
      <title>Real Estate</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <main className="relative bg-gray-white flex flex-col items-center justify-start text-center text-21xl text-primary-800 font-body-large-400">

      <Header />      
      <HeroSection />

      <div className="self-stretch flex flex-col py-[53px] px-[50px] box-border items-center justify-start gap-[45px]">
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
                  <Link
                    className="[text-decoration:none] relative leading-[32px] font-semibold text-[inherit]"
                    target="_blank"
                    href="/properties"
                  >
                    Centerville
                  </Link>
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
      <div className="self-stretch bg-primary-50 flex flex-col py-[70px] px-0 box-border items-center justify-start">
        <div className="self-stretch flex flex-col px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px] mb-7">
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
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px]"
            href="/properties"
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
      <form className="flex flex-col py-[170px] px-0 mt-20 box-border items-center justify-start gap-[39px]">
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
      <FooterSection />
    </main>
    </>
      
  );
};

export default LandingPage;
