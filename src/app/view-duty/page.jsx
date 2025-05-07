"use client";
import DutiesCard from "@/components/DutiesCard";
import React, { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { useAtom } from "jotai";
import { homePageStatsAtoms } from "@/jotai/HomePageAtoms";
import axios from "axios";
import Filter from "@/ui/Filter";

function page() {
  const [data, setData] = useAtom(homePageStatsAtoms);
  const [filter, setFilter] = useState("ALL");
  // const [filteredData, setFilteredData] = useState([]);

  // useEffect(() => {
  //   setFilteredData(data);
  // }, [data]);

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

  const filteredData = data.filter((x) => x.camp == filter || filter == "ALL");

  function handleBedokFilter() {
    console.log("bedok camp filter");
    setFilter("BEDOK");
  }
  function handleDieppeFilter() {
    console.log("dieppe camp filter");
    setFilter("DIEPPE");
  }
  function handleAllData() {
    console.log("show all data");
    setFilter("ALL");
  }
  return (
    <div className="mt-24 flex flex-col items-center">
      <Filter
        handleBedokFilter={handleBedokFilter}
        handleDieppeFilter={handleDieppeFilter}
        handleAllData={handleAllData}
      />
      {filteredData.map((x, index) => (
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
          guardtwo={x.comdsName?.[1]}
          id={x._id}
        />
      ))}
    </div>
  );
}

export default page;
