import Link from "next/link";
import Header from "../components/header";
import FooterSection from "../components/footer-section";

const about = () => {
  return (
    <>
        <Header />
        <div className="self-stretch h-80 flex flex-col items-center justify-center bg-[url('/todd-kent-178j8tJrNlc-unsplash.jpg')] bg-cover bg-no-repeat bg-[center] rounded-2xl">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="relative leading-[72px] font-semibold text-white text-[28px]">
            About Us
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
      <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">Something About Us</h3>
      </span>
      <div className="self-stretch flex m-0 md:flex-col p-10 bg-slate-200">
      <img
              className="self-stretch flex items-center justify-center w-50 h-40"
              alt=""
              src="/unsplashrlwe8f8anoc1@2x.png"
            />

        <aside className="flex flex-col gap-1 ml-3">
          <p className="flex">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat
            </p>
            <p className="flex"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
            </p>
            <p className="flex"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
            </p>
            </aside>

      </div>
      <FooterSection />
    </>
  )
}

export default about;