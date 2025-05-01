import DutiesCard from "@/components/view-duty/DutiesCard";
import React from "react";
import { MdLocationPin } from "react-icons/md";

function page() {
  return (
    <div className="mt-32 flex flex-col items-center">
      <DutiesCard shift="24 HR" noOfPeople="7" camp="BEDOK" />
      <DutiesCard shift="24 HR" noOfPeople="7" camp="BEDOK" />
      <DutiesCard shift="12 HR" noOfPeople="7" camp="DIEPEE" />
      <DutiesCard shift="24 HR" noOfPeople="7" camp="BEDOK" />
      <DutiesCard shift="12 HR" noOfPeople="7" camp="BEDOK" />
      <DutiesCard shift="12 HR" noOfPeople="7" camp="BEDOK" />
      <DutiesCard shift="12 HR" noOfPeople="7" camp="BEDOK" />
      <DutiesCard shift="12 HR" noOfPeople="7" camp="BEDOK" />
      <DutiesCard shift="12 HR" noOfPeople="7" camp="BEDOK" />
      <DutiesCard shift="12 HR" noOfPeople="7" camp="BEDOK" />
      <DutiesCard shift="24 HR" noOfPeople="7" camp="DIEPPE" />
    </div>
  );
}

export default page;
