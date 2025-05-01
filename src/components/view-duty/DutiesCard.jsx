import React from "react";

function DutiesCard({ shift, camp, noOfPeople }) {
  return (
    <div className="w-full max-w-[95%] mx-auto lg:max-w-[60%] h-fit bg-base-100 shadow-lg rounded-2xl p-5 mb-4">
      <h1 className="text-3xl font-bold">{camp} Guard Duty</h1>
      <h2 className="text-slate-500">Thursday, 1 May 2025</h2>
      <div className="flex flex-row gap-3 pt-3">
        {" "}
        <span className="badge badge-secondary rounded-lg">{shift}</span>
        <span className="badge badge-primary rounded-lg">{camp}</span>
        <span className="badge badge-accent rounded-lg">
          {noOfPeople} PEOPLE
        </span>
      </div>
    </div>
  );
}

export default DutiesCard;
