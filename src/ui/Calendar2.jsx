"use client";
import React, { useState } from "react";
import { useAtom } from "jotai";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Calendar } from "primereact/calendar";
import { homePageStatsAtoms } from "@/jotai/HomePageAtoms";
import { IoMdInformationCircleOutline } from "react-icons/io";

function Calendar2() {
  const [date, setDate] = useState(null);
  const [data, setData] = useAtom(homePageStatsAtoms);
  console.log(data);
  const redDatesArray = data.map((entry) => entry.date); // array of "YYYY-MM-DD" strings
  const redDatesSet = new Set(redDatesArray);

  const pad = (n) => n.toString().padStart(2, "0");

  const dateTemplate = (dateObj) => {
    const formatted = `${dateObj.year}-${pad(dateObj.month + 1)}-${pad(
      dateObj.day
    )}`;
    const isRedDate = redDatesSet.has(formatted);

    return (
      <div
        className={`w-full h-full flex items-center justify-center rounded-full ${
          isRedDate ? "bg-orange-300 font-semibold" : ""
        }`}
      >
        {dateObj.day}
      </div>
    );
  };

  return (
    <div className="w-full max-w-[95%] lg:max-w-[80%] pt-4">
      <h2 className="text-xl font-bold mb-2 flex items-center gap-1">
        Guard Duty Dates
        <IoMdInformationCircleOutline size={23} />
      </h2>
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        inline
        dateTemplate={dateTemplate}
        className="w-full shadow-md"
      />
    </div>
  );
}

export default Calendar2;
