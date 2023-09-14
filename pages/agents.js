import Link from "next/link";
import Header from "../components/header";
import FooterSection from "../components/footer-section";

const agents = () => {
  return (
    <>
     <Header />

     <div className="self-stretch h-80 flex flex-col items-center justify-center bg-[url('/category@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="relative leading-[72px] font-semibold text-white text-[28px]">
            Our Agents
          </div>
          <div className="relative text-base leading-[24px] text-whitesmoke-200 font-body-large-400">
            <Link href="/" className="text-white no-underline">
            <span>{`Home | `}</span>
            </Link>
            <Link href="/properties" className="text-white no-underline">
            <span className="font-medium text-gray-white">Properties</span>
            </Link>
          </div>
        </div>
      </div>
      <span className="m-10 flex justify-center font-body-large-400 text-5xl">
      <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">Meet Our Agents</h3>
      </span>

    <div className="flex flex-wrap justify-evenly md:flex-col gap-2">
    <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] text-left text-[14.51px] text-gray-700 font-body-large-400 border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[333px] shrink-0 object-cover"
        alt=""
        src="/christina-wocintechchat-com-kXfBDl0fR1E-unsplash.jpg"
      />
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
        <div className="flex-1 relative leading-[20.32px] font-medium">
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-primary-500">
        <div className="relative leading-[18.98px] font-semibold">
          01/123-456
        </div>
      </div>    
    </div>

    <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] text-left text-[14.51px] text-gray-700 font-body-large-400 border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[333px] shrink-0 object-cover"
        alt=""
        src="/ali-morshedlou-WMD64tMfc4k-unsplash.jpg"
      />
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
        <div className="flex-1 relative leading-[20.32px] font-medium">
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-primary-500">
        <div className="relative leading-[18.98px] font-semibold">
          01/123-456
        </div>
      </div>    
    </div>

    <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] text-left text-[14.51px] text-gray-700 font-body-large-400 border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[333px] shrink-0 object-cover"
        alt=""
        src="/daria-pimkina-Dj5HnHMtkH0-unsplash.jpg"
      />
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
        <div className="flex-1 relative leading-[20.32px] font-medium">
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-primary-500">
        <div className="relative leading-[18.98px] font-semibold">
          01/123-456
        </div>
      </div>    
    </div>

    <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] text-left text-[14.51px] text-gray-700 font-body-large-400 border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[333px] shrink-0 object-cover"
        alt=""
        src="/magnet-me-zWkZwLUTlbw-unsplash.jpg"
      />
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
        <div className="flex-1 relative leading-[20.32px] font-medium">
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className="self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-primary-500">
        <div className="relative leading-[18.98px] font-semibold">
          01/123-456
        </div>
      </div>    
    </div>

    </div>   
      
    <FooterSection />
  </>
  )
}

export default agents;