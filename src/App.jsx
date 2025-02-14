import "./App.css";
import pic15 from "../src/assets/image.png";
import pic16 from "../src/assets/image2.png";
import pic17 from "../src/assets/image3.png";
import React, { useState } from "react";
import ApplyToJobModal from "./components/Modals/ApplyToJobModal";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Btnlinks from "./components/Btnlinks";
import JobListing from "./components/JobListing";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex font-inter -tracking-[2%]  text-[#18181B] bg-[#FDFDFD]">
        <Sidebar />
        <div className="flex flex-col w-[1200px] h-[100dvh] ">
          <Header />
          <div className="h-[100dvh]">
            <div className="border-[1px] h-[840px] w-full gap-[20px] flex pt-[32px] px-[40px]">
              <div className="w-[453px]  space-y-[16px] flex-col  ">
                <JobListing setOpen={setOpen} />
              </div>
            
              <div className="w-[647px]  justify-items-end overflow-scroll no-scrollbar scroll-smooth space-y-[24px] flex-col ">
                <div className="w-[627px] h-[240px] space-y-[16px] flex-col font-[400] text-[14px] leading-[18.2px] -tracking-[2%] bg-white">
                  <div className="w-full h-[48px] pb-[16px] border-b border-b-[#F4F4F5] ">
                    <div className="flex">
                      <p className="w-[120px] flex  items-center font-[500] h-[32px] text-sm text-black-custom">
                        Skills
                      </p>
                      <div className="h-[32px] gap-[8px] flex  ">
                        <Btnlinks text="A/B Testing" />
                        <Btnlinks text="Account Management" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[48px] pb-[16px] border-b border-b-[#F4F4F5] ">
                    <div className="flex">
                      <p className="w-[120px] flex items-center font-[500] h-[32px] text-sm text-black-custom">
                        Tools
                      </p>
                      <div className="h-[32px] gap-[8px] flex">
                        <div className="h-full w-[93px] cursor-pointer flex pl-[4px]  gap-[4px] items-center border rounded-full border-[#E4E4E7] ">
                          <img src={pic15} alt="" />
                          Shopify
                        </div>
                        <div className="h-full w-[101px] cursor-pointer flex pl-[4px]  gap-[4px]  items-center border rounded-full border-[#E4E4E7] ">
                          <img src={pic16} alt="" />
                          Magento
                        </div>
                        <div className="h-full w-[100px] cursor-pointer flex pl-[4px]  gap-[4px] items-center border rounded-full border-[#E4E4E7] ">
                          <img src={pic17} alt="" />
                          <p> Webflow</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[48px] pb-[16px] border-b border-b-[#F4F4F5] ">
                    <div className="flex">
                      <div className="w-[120px] flex items-center font-[500] h-[32px] text-sm text-black-custom">
                        Industries
                      </div>
                      <div className="h-[32px] gap-[8px] flex  ">
                        <div className="h-full w-[132px] flex cursor-pointer justify-center items-center border rounded-full border-[#E4E4E7] ">
                          Ecommerce/DTC
                        </div>
                        <div className="h-full w-[86px] flex cursor-pointer justify-center items-center border rounded-full border-[#E4E4E7] ">
                          B2B/Tech
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[48px] pb-[16px]  ">
                    <div className="flex">
                      <div className="w-[120px] flex items-center font-[500] h-[32px] ">
                        Niches
                      </div>
                      <div className="h-[32px] gap-[8px] flex  ">
                        <div className="h-full w-[174px] cursor-pointer flex justify-center items-center border rounded-full border-[#E4E4E7] ">
                          Beauty & Personal Care
                        </div>
                        <div className="h-full w-[138px] cursor-pointer flex justify-center items-center border rounded-full border-[#E4E4E7] ">
                          Health & Wellness
                        </div>
                        <div className="h-full w-[139px] cursor-pointer flex justify-center items-center border rounded-full border-[#E4E4E7] ">
                          Fashion & Apparel
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[627px] bg-white">
                  <p className="text-[16px] text-[#52525B] font-inter flex-col leading-[24px] -tracking-[2%] ">
                    We are looking for a{" "}
                    <span className="font-bold">
                      {" "}
                      skilled and results-driven Marketing Specialist
                    </span>{" "}
                    to join our team on a freelance basis. You will play a key
                    role in planning, executing, and optimizing marketing
                    campaigns to achieve our business objectives.{" "}
                  </p>
                  <p className="font-[550] font-inter text-[24px] mt-[32px] mb-[8px]  ">
                    Responsiblities
                  </p>
                  <div>
                    <p className="text-[16px] font-[400] text-[#52525B] leading-[150%]">
                      1. Develop and implement marketing strategies across
                      digital and traditional platforms.
                    </p>
                    <p className="text-[16px] font-[400] text-[#52525B] leading-[150%]">
                      2. Conduct market research to identify trends, customer
                      needs, and competitive positioning.
                    </p>
                    <p className="text-[16px] font-[400] text-[#52525B] leading-[150%]">
                      3. Create and manage campaigns for social media, email,
                      SEO, and paid advertising.
                    </p>
                    <p className="text-[16px] font-[400] text-[#52525B] leading-[150%]">
                      4. Analyze campaign performance metrics and generate
                      actionable insights for improvement.
                    </p>
                    <p className="text-[16px] font-[400] text-[#52525B] leading-[150%]">
                      5. Collaborate with creative teams to produce engaging
                      content and promotional materials.
                    </p>
                  </div>
                  <p className="font-[550] font-inter text-[24px] mt-[32px] mb-[8px]  ">
                    Qualifications
                  </p>
                  <div className="text-[16px] font-[400] text-[#52525B]">
                    <p className="text-[16px] font-[400] text-[#52525B] leading-[150%]">
                      1. Proven experience as a Marketing Specialist or similar
                      role, with a portfolio of successful campaigns.
                    </p>
                    <p className="text-[16px] font-[400] text-[#52525B] leading-[150%]">
                      2. Proficiency in marketing tools and platforms such as
                      Google Ads, Facebook Ads Manager, HubSpot, or similar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {open && <ApplyToJobModal isOpen={open} onClose={() => setOpen(false)} />}

      </div>
    </>
  );
};

export default App;
