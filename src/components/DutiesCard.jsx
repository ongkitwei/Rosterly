import React from "react";

function DutiesCard({ shift, camp, noOfPeople, date, guardcomd }) {
  return (
    <div className="w-full max-w-[95%] mx-auto lg:max-w-[60%] h-fit bg-base-100 shadow-lg rounded-2xl p-5 mb-4">
      <h1 className="text-xl lg:text-3xl font-bold">{camp} Guard Duty</h1>
      <h2 className="text-slate-500 text-sm">{date}</h2>
      <div className="grid grid-cols-2 gap-3 pt-3">
        {" "}
        <span className="badge badge-secondary rounded-lg">{shift}</span>
        <span className="badge badge-primary rounded-lg">{camp}</span>
        <span className="badge badge-accent rounded-lg">
          {noOfPeople} PEOPLE
        </span>
        <span className="badge badge-warning rounded-lg w-fit h-fit">
          {guardcomd}
        </span>
      </div>
    </div>
  );
}

export default DutiesCard;
