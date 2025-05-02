"use client";
import React, { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import { homePageStatsAtoms } from "@/jotai/HomePageAtoms";
import { useAtom } from "jotai";
import axios from "axios";

const robotoFont = Roboto({ subsets: ["latin"], weight: "400" });

function HomepageStats() {
  const [data, setData] = useAtom(homePageStatsAtoms);
  const [todayFormatted, setTodayFormatted] = useState(null);
  console.log(data);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getUsers();
  }, []);

  useEffect(() => {
    const formattedDate = new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setTodayFormatted(formattedDate);
  }, []);

  return (
    <div className="w-full max-w-[95%] lg:max-w-[80%] h-fit bg-base-100 shadow-md rounded-2xl mt-32 p-4">
      <h2 className={`text-2xl ${robotoFont.className}`}>
        Good Morning! <span>YZ</span>
      </h2>
      <p className="text-slate-400">{todayFormatted}</p>
      <div className="flex flex-row items-center justify-between text-slate-500 pt-8">
        <div className="flex items-center gap-1 text-sm md:text-base">
          <p className="h-3 w-3 bg-indigo-400 rounded-md"></p>
          <span className="font-bold">{data?.length}</span>
          <span>Total Duties</span>
        </div>
        <div className="flex items-center gap-1 text-sm md:text-base">
          <p className="h-3 w-3 bg-green-400 rounded-md"></p>
          <span className="font-bold">9</span>

          <span>Completed Duty</span>
        </div>
        <div className="flex items-center gap-1 text-sm md:text-base">
          <p className="h-3 w-3 bg-yellow-400 rounded-md"></p>

          <span className="font-bold">1</span>
          <span>In Progress</span>
        </div>
      </div>
    </div>
  );
}

export default HomepageStats;
