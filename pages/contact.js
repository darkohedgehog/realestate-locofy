import Header from "../components/header";
import Link from "next/link";
import { Button } from "@mui/material";
import FooterSection from "../components/footer-section";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
   

    emailjs
      .send(
        process.env.NEXT_EMAILJS_SERVICE_ID,
        process.env.NEXT_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Real Estate",
          from_email: form.email,
          to_email: "zivic.darko79@gmail.com",
          message: form.message,
        },
        process.env.NEXT_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you.");

          setForm({
            name: "",
            lastname: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something goes wrong. Please try later");
        }
      );
  };


  return (
    <>
      <Header />

      <div className="self-stretch h-80 flex flex-col items-center justify-center bg-[url('/category@3x.png')] bg-cover bg-no-repeat">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="relative leading-[72px] font-semibold text-white text-[28px]">
            Contact Us
          </div>
          <div className="relative text-base leading-[24px] text-whitesmoke-200 font-body-large-400">
            <Link href="/">
              <span>{`Home | `}</span>
            </Link>
            <Link href="/properties">
              <span className="font-medium text-gray-white">Properties</span>
            </Link>
          </div>
        </div>
      </div>
      <span className="m-10 flex justify-center font-body-large-400 text-5xl">
        <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">Keep In Touch</h3>
      </span>
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
            <form
               ref={formRef}
               onSubmit={handleSubmit}
              className="self-stretch flex flex-col items-center justify-start gap-[10px] text-base text-darkgray font-components-input-text">
              <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
                <div className="self-stretch flex-1 rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray md:flex-[unset] md:self-stretch">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="relative tracking-[0.15px] leading-[24px]" />

                </div>
                <div className="self-stretch flex-1 rounded flex flex-col py-4 px-3 items-start justify-center border-[1px] border-solid border-gray md:flex-[unset] md:self-stretch">
                  <input
                    type="text"
                    lastname="name"
                    value={form.lastname}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="relative tracking-[0.15px] leading-[24px]" />
                </div>
              </div>
              <div className="self-stretch rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray">
                <input
                  type="email"
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='Your Email'
                  required
                  className="relative tracking-[0.15px] leading-[24px]" />
              </div>
              <textarea 
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Your Message'              
                className="self-stretch rounded box-border h-[105px] flex flex-col p-3 items-start justify-start border-[1px] border-solid border-gray">                               
              </textarea>
              <Button
                type='submit'                
                sx={{ width: 222 }} variant="contained" color="primary">
                {loading ? "Sending..." : "Send"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <FooterSection />
    </>
  );
};

export default Contact;