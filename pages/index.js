import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
import PropertyArea from "../components/property-area";
import SellYourHomeContainer from "../components/sell-your-home-container";
import CardFormInputs from "../components/card-form-inputs";
import PropertyRentCards from "../components/property-rent-cards";
import FooterSection from "../components/footer-section";



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
      <PropertyArea />

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
      <CardFormInputs />
      <PropertyRentCards />      
      <FooterSection />
    </main>
    </>
      
  );
};

export default LandingPage;
