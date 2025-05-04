"use client";
import DutiesCard from "@/components/DutiesCard";
import React, { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { useAtom } from "jotai";
import { homePageStatsAtoms } from "@/jotai/HomePageAtoms";
import axios from "axios";

function page() {
  const [data, setData] = useAtom(homePageStatsAtoms);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        console.log(response.data);
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="mt-32 flex flex-col items-center">
      {data.map((x, index) => (
        <DutiesCard
          key={index}
          date={x.date}
          day={x.dayName}
          shift={x.shift}
          noOfPeople={
            (x.comdsName?.length ?? 0) +
            (x.troopersName?.length ?? 0) +
            (x.reserveName?.length ?? 0)
          }
          camp={x.camp}
          guardcomd={x.comdsName?.[0]}
          id={x._id}
        />
      ))}
    </div>
  );
}

export default page;
