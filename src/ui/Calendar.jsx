"use client";
import React, { useState } from "react";
import { Lobster } from "next/font/google";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { useAtom } from "jotai";
import { homePageStatsAtoms } from "@/jotai/HomePageAtoms";
import { getDayAndMonthFromDateInput } from "@/util";

const lobsterFont = Lobster({ subsets: ["latin"], weight: "400" });
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function Calendar() {
  const [data, setData] = useAtom(homePageStatsAtoms);
  const [currentMonthNumberReflected, setCurrentMonthNumberReflected] =
    useState(new Date().getMonth());
  const currentMonthName = months[currentMonthNumberReflected];
  const currentDateInNumber = new Date().getDate();
  const currentMonthDays = new Date(
    new Date().getFullYear(),
    currentMonthNumberReflected + 1,
    0
  ).getDate();

  const highlightedDates = data.map((item) =>
    getDayAndMonthFromDateInput(item.date)
  );

  return (
    <div className="w-full max-w-[95%] lg:max-w-[80%] mx-auto shadow-lg rounded-2xl p-1 py-5 md:p-8">
      <h1
        className={`text-secondary text-3xl font-bold flex justify-center items-center gap-3 ${lobsterFont.className}`}
      >
        <IoMdArrowDropleft
          className="hover:cursor-pointer hover:text-secondary-focus text-secondary transition-colors"
          onClick={() => {
            setCurrentMonthNumberReflected((prev) =>
              Math.max(0, Math.min(11, currentMonthNumberReflected - 1))
            );
          }}
        />
        <span className="w-[120px] text-center"> {currentMonthName}</span>

        <IoMdArrowDropright
          className="hover:cursor-pointer hover:text-secondary-focus text-secondary transition-colors"
          onClick={() => {
            setCurrentMonthNumberReflected((prev) =>
              Math.max(0, Math.min(11, currentMonthNumberReflected + 1))
            );
          }}
        />
      </h1>
      <div className="grid grid-cols-7 gap-2 p-8">
        <span></span>
        <span></span>
        {Array.from({ length: currentMonthDays }, (_, i) => (
          <span
            key={i}
            className={`text-secondary-content border border-base-300 px-1.5 py-2.5 rounded-xl ${
              i + 1 === currentDateInNumber &&
              currentMonthNumberReflected === new Date().getMonth()
                ? "bg-secondary text-secondary-content"
                : null
            } ${
              highlightedDates.some(
                (d) =>
                  d.day === i + 1 && d.month === currentMonthNumberReflected + 1
              )
                ? "bg-green-300"
                : ""
            }`}
          >
            {i + 1}
          </span>
        ))}
      </div>
      <legend className="flex flex-col items-end pr-10">
        <div className="flex items-center gap-2">
          <p className="h-3 w-3 bg-secondary rounded-md"></p>
          <span>Current Date</span>
        </div>
        <div className="flex items-center gap-2 pr-2.5">
          <p className="h-3 w-3 bg-green-400 rounded-md"></p>
          <span>Active Duty</span>
        </div>
      </legend>
    </div>
  );
}

export default Calendar;
