import React from "react";

const Tags = ({ text }) => {
  return (
    <div>
      <button className="py-[2px] h-full px-[12px] border-[1px] text-[14px] leading-[18.2px] font-[400] -tracking-[-0.28px] border-[#E4E4E7] flex rounded-full items-center  ">
        {text}
      </button>
    </div>
  );
};

export default Tags;
