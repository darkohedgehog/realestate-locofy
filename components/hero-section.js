import React from "react";
import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";


const locationOptions = ["New York", "Los Angeles", "Chicago", "Berlin"];
const propertyTypeOptions = [
  "Studio apartments",
  "One-bedroom apartments",
  "Two-bedroom apartments",
  "Three-bedroom apartments",
  "Four or more bedroom apartments/houses",
];
const rentRangeOptions = ["$500-$2000", "$2500-$10000", "$10000+"];

const HeroSection = () => {
  const router = useRouter();

  const onSearchCTAClick = () => {
    router.push("/properties");
  };

  const handleLocationClick = (location) => {
    const locationSlug = location.toLowerCase().replace(/\s/g, "-");
    const locationPath = `/properties/${locationSlug}`;
    router.push(locationPath);
  };

  const handlePropertyTypeClick = (propertyType) => {
    // Kreirajte putanju za preusmeravanje na osnovu odabrane vrste nekretnine
    const propertyTypeSlug = propertyType.toLowerCase().replace(/\s/g, "-");
    const propertyTypePath = `/property-types/${propertyTypeSlug}`;
    router.push(propertyTypePath);
  };

  const handleRentRangeClick = (rentRange) => {
    // Kreirajte putanju za preusmeravanje na osnovu odabrane raspona rente
    const rentRangeSlug = rentRange.toLowerCase().replace(/\s/g, "-");
    const rentRangePath = `/rent-ranges/${rentRangeSlug}`;
    router.push(rentRangePath);
  };

  return (
    <section className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-gray-white font-body-regular-400">
      <div className="self-stretch h-[686px] flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[72px] font-semibold font-inherit text-[inherit]">
            Find Your Dream Home
          </h1>
          <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <form className="self-stretch flex flex-col items-center justify-start gap-[17px]">
          <div className="flex flex-row items-start justify-start gap-[10px] mb-10">
            <button
              className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start"
              autoFocus
            >
              <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
                Rent
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-primary-400 text-center">
                Sale
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-5">
            <nav className="m-0 flex-1 rounded-lg bg-gray-white flex flex-row py-1 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-large-400 text-primary-700 text-center">
                  Locations
                </div>
                <Dropdown
                  className="self-stretch text-[18px]"
                  overlay={
                    <Menu>
                      {locationOptions.map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={() => handleLocationClick(option)}>{option}</a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <div>
                    <a>
                      {`Select your city `}
                      <DownOutlined />
                    </a>
                  </div>
                </Dropdown>
              </div>
              <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-large-400 text-primary-700 text-left flex items-end w-[150px]">
                  Property Type
                </div>
                <Dropdown
                  className="self-stretch text-[18px]"
                  overlay={
                    <Menu>
                      {propertyTypeOptions.map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={() => handlePropertyTypeClick(option)}>{option}</a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <div>
                    <a>
                      {`Select property type `}
                      <DownOutlined />
                    </a>
                  </div>
                </Dropdown>
              </div>
              <div className="w-[155px] flex flex-col items-center justify-center gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-large-400 text-primary-700 text-left flex items-end w-[150px]">
                  Rent Range
                </div>
                <Dropdown
                  className="self-stretch text-[18px]"
                  overlay={
                    <Menu>
                      {rentRangeOptions.map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={() => handleRentRangeClick(option)}>{option}</a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <div>
                    <a>
                      {`Select rent range `}
                      <DownOutlined />
                    </a>
                  </div>
                </Dropdown>
              </div>
              <Button
                className="cursor-pointer"
                style={{ width: "102px" }}
                type="primary"
                size="middle"
                shape="default"
                onClick={onSearchCTAClick}
              >
                Search
              </Button>
            </nav>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
