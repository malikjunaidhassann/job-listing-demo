import React from "react";
import pic12 from "../assets/ch1.png";
import pic13 from "../assets/ch2.png";
import pic14 from "../assets/Indicator.png";
import pic7 from "../assets/star.png";
const Header = () => {
  return (
    <div>
      <div className=" w-full flex items-center justify-evenly h-[64px] ">
        <div className="w-[1024px] h-[32px]  gap-[8px]  flex items-center">
          <div className="w-[24px] h-[24px] flex items-center justify-center ">
            <img src={pic7} alt="" className="w-[16px] h-[16px]" />
          </div>
          <p className="text-[20px] font-Inter font-[500] leading-[120%] -tracking-[2%]">
            Jobs
          </p>
        </div>
        <div className="w-[88px] gap-[8px] flex justify-center items-center ">
          <div className="flex justify-center items-center w-[40px]">
            <div className="relative bottom-1 cursor-pointer">
              <img src={pic14} alt="" className="relative left-4 top-3 " />
              <img src={pic12} alt="" />
            </div>
          </div>
          <div className="flex justify-center cursor-pointer items-center w-[40px]">
            <img src={pic13} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
