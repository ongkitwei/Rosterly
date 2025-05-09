import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

function SkeletonCalendar() {
  return (
    <div className="w-full max-w-[95%] lg:max-w-[80%] flex items-center justify-center h-[323px] shadow-md rounded-2xl p-3">
      <div className=" w-full h-full flex items-center justify-center bg-gray-200 rounded-xl animate-pulse">
        {" "}
        <FaCalendarAlt color="gray" size={50} />
      </div>
    </div>
  );
}

export default SkeletonCalendar;
