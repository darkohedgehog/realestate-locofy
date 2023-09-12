import Head from "next/head";
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
      <SellYourHomeContainer />      
      <CardFormInputs />
      <PropertyRentCards />      
      <FooterSection />
    </main>
    </>
      
  );
};

export default LandingPage;
