import React, { useState } from "react";
import pic from "../assets/sparkles.png";
import pic2 from "../assets/level.png";
import pic3 from "../assets/clock.png";
import pic4 from "../assets/briefcase.png";
import pic5 from "../assets/map-pin.png";
import pic6 from "../assets/language.png";
import pic7 from "../assets/star.png";
import pic8 from "../assets/hand-thumb-down.png";
import pic9 from "../assets/Avatar.png";
import pic10 from "../assets/star2.png";
import pic11 from "../assets/ceo.png";
import { job } from "../Constants/Jobs";
import Tags from "./Btnlinks";
import ApplyToJobModal from "./Modals/ApplyToJobModal";
import ReportDropdown from "./Dropdowns/ReportDropdown";

const JobListing = ({setOpen}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <div className="w-full  space-y-[16px] flex-col justify-center p-6  border-[1px] rounded-[20px] ">
        <div className="w-[122px] h-[28px] bg-[#DCFF7A] flex items-center justify-evenly  rounded-full">
          <img src={pic} alt="" />
          <p className="text-[#49670D] text-[14px] font-[400] -tracking-[2%] leading-[130%]">
            {job?.matchPercentage}
          </p>
        </div>

        <p className="text-[24px] text-[#18181B] font-[550] font-inter leading-[28.8px] tracking-[-2%] ">
          {job.title}
        </p>
        {job?.salary || job?.level || job?.category ? (
          <div className="gap-[12px] flex h-[32px] ">
            <p className="w-[101px] h-full cursor-pointer flex justify-center items-center rounded-full bg-[#ffffff] text-[#18181B] hover:bg-[#ECE8FF] border-[1px] border-[#E4E4E7] hover:border-none hover:text-[#49169C] leading-[18.2px] -tracking-[2%]  font-[400] text-[14px] ">
              {job?.salary}
            </p>
            <p className="w-[105px]  h-full flex cursor-pointer justify-evenly items-center leading-[18.2px] -tracking-[2%] rounded-full  bg-[#ffffff] text-[#18181B] hover:bg-[#ECE8FF] border-[1px] border-[#E4E4E7] hover:border-none hover:text-[#49169C] font-[400] text-[14px] ">
              <img src={pic2} alt="" />
              {job?.level}
            </p>
            <p className="w-[161px] h-full  cursor-pointer flex justify-center items-center leading-[18.2px] -tracking-[2%]  rounded-full  bg-[#ffffff] text-[#18181B] hover:bg-[#ECE8FF] border-[1px] border-[#E4E4E7] hover:border-none hover:text-[#49169C] font-[400] text-[14px] ">
              {job?.category}
            </p>
          </div>
        ) : (
          <></>
        )}

        <div className="bg-custom-gradient h-[1px] w-full "></div>

        <div className="h-[44px] w-full space-y-[8px] flex-col">
          <div className="flex items-center h-[18px] text-[14px]  gap-[8px]">
            <img src={pic3} alt="" className="w-[16px]" />
            <p className="font-inter font-sm leading-[130%] text-black-custom -tracking-[2%]">
              {job?.type}
            </p>
            <div className="w-[4px] h-[4px] rounded-full bg-[#A1A1AA] "></div>
            <p className="font-inter font-sm leading-[130%] text-black-custom -tracking-[2%]">
              {job?.hoursPerWeek}
            </p>
          </div>

          <div className="gap-[8px] h-[18px] flex items-center text-[14px]  ">
            <img src={pic4} alt="" />
            <p className="font-inter font-sm leading-[130%] text-black-custom -tracking-[2%]">
              {job?.contractType}
            </p>
          </div>
        </div>
        <div className=" gap-[12px] h-[48px] flex items-center  ">
          <button
            onClick={() => setOpen(true)}
            className="w-[285px] h-full bg-[#3040FF] px-[20px] py-[4px] gap-[12px] rounded-[14px] text-[#FFFFFF] font-inter leading-[20.8px] font-[500]  transition shadow-none hover:shadow-lg hover:shadow-blue-500/50"
          >
            Apply now
          </button>
          <button className="w-[48px] h-full border-[1px] border-[#E4E4E7] flex items-center justify-center  rounded-[14px] text-[#FFFFFF] leading-[20.8px] font-[500] ">
            <img src={pic7} alt="" />
          </button>
          <div className="relative h-full">
            <button onClick={(e) =>{e.stopPropagation(); setDropdownOpen(!dropdownOpen)}} className="w-[48px] h-full border-[1px] border-[#FECDD3] flex items-center justify-center   rounded-[14px] text-[#FFFFFF] leading-[20.8px] font-[500] ">
              <img src={pic8} alt="" />
            </button>
            {dropdownOpen && (
              <ReportDropdown isOpen={true} onClose={() => setDropdownOpen(false)} />)}
          </div>
        </div>
        <div className="bg-custom-gradient h-[2px] w-full "></div>
        <div className=" space-y-[8px] h-[70px]  flex-col ">
          <div className="flex h-[18px] items-center text-[14px] gap-[8px]">
            <img src={pic5} alt="" />
            <p className="font-inter font-sm leading-[130%] text-black-custom -tracking-[2%]">
              {job?.location}
            </p>
          </div>
          <div className="flex h-[18px] items-center text-[14px] gap-[8px]">
            <img src={pic3} alt="" />
            <p className="font-inter font-sm leading-[130%] text-black-custom -tracking-[2%]">
              {job?.timezone}
            </p>
          </div>
          <div className="flex h-[18px] items-center text-[14px] gap-[8px]">
            <img src={pic6} alt="" />

            <p className="font-inter font-sm leading-[130%] text-black-custom -tracking-[2%]">
              {job?.languages
                .map((item, i) =>
                  i + 1 !== job.languages.length ? `${item}, ` : item
                )
                .join("")}
            </p>
          </div>
        </div>
        <p className="h-[18px] text-[14px] text-[#71717A] leading-[18.2px] font-[400] ">
          {job?.posted}
        </p>
      </div>
      <div className="w-full h-[259px] space-y-[16px] flex-col p-[24px]  border-[1px] border-[#E4E4E7] rounded-[20px] bg-white">
        <div className="w-[405px] h-[88px] flex-col  space-y-[16px]">
          <div className="w-full h-[40px] flex gap-[12px] items-center ">
            <img src={pic9} alt="" />
            <p className="text-[20px] font-[550] ">{job?.company?.name}</p>
          </div>

          <div className="h-[32px] flex gap-[8px] w-full">
            {job?.company?.tags?.map((item) => (
              <Tags text={item} />
            ))}
          </div>
        </div>
        <div className="bg-custom-gradient h-[1px] w-full "></div>
        <div className="flex items-center gap-[8px] ">
          <img src={pic10} alt="" />
          <p className="font-[400] text-[14px] leading-[18.2px] -tracking-[0.28px] ">
            <span className="font-[500]">
              {" "}
              {job?.company?.recommendationRate}
            </span>{" "}
            {job?.company?.recommendation}
          </p>
        </div>
        <div className="bg-custom-gradient h-[1px] w-full "></div>
        <div className="w-[130px] flex h-[41px] gap-[12px] ">
          <img src={pic11} alt="" />
          <div className=" w-[78px] h-full ">
            <p className=" h-[21px] w-full text-[15px] font-[500] -tracking-[2%] leading-[20.8px] ">
              {job?.company?.ceo?.name}
            </p>
            <p className=" h-[21px] text-[14px] text-[#71717A] ">
              {job?.company?.ceo?.title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListing;
