"use client";
import React, { useState, useEffect } from "react";
import { Roboto } from "next/font/google";
import names from "../../data/troopersNames.json";
import comdnames from "../../data/comdsNames.json";
import allnames from "../../data/names.json";
import { useAtom } from "jotai";
import axios from "axios";
import { getDayName } from "@/util/index";
import {
  campAtoms,
  shiftAtoms,
  dateAtoms,
  troopersMainAtoms,
  commandersAtoms,
  reserveAtoms,
} from "@/jotai/DutyFormAtoms";
import toast from "react-hot-toast";

const robotoFont = Roboto({ subsets: ["latin"], weight: "700" });

function Form({ title, buttonName }) {
  const [camp, setCamp] = useAtom(campAtoms);
  const [date, setDate] = useAtom(dateAtoms);
  const [shift, setShift] = useAtom(shiftAtoms);
  const [troopersName, setTroopersName] = useAtom(troopersMainAtoms);
  const [comdsName, setComdsName] = useAtom(commandersAtoms);
  const [reserveName, setReserveName] = useAtom(reserveAtoms);

  async function handleOnSubmit(event) {
    event.preventDefault();
    const dayName = getDayName(date);
    console.log(dayName);
    try {
      const response = await axios.post("/api/users", {
        camp,
        date,
        dayName,
        shift,
        troopersName,
        comdsName,
        reserveName,
      });

      toast.success("Duty Added");
      console.log(response);
      setComdsName([]);
      setTroopersName([""]);
      setDate("");
      setCamp("");
      setShift("");
      setReserveName([""]);
    } catch (err) {
      console.error(err);
      toast.error(err || "Failed to add duty", {
        duration: 4000,
        position: "top-center",
      });
    }
  }

  return (
    <>
      <h2
        className={`font-extrabold pb-8 text-center text-gray-800 text-3xl ${robotoFont.className}`}
      >
        {title}
      </h2>
      <form className="w-full" onSubmit={(event) => handleOnSubmit(event)}>
        <select
          className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500"
          onChange={(x) => setCamp(x.target.value)}
          value={camp || ""}
          required
        >
          <option value="" disabled>
            select camp
          </option>

          <option value="DIEPPE">DIEPPE</option>
          <option value="BEDOK">BEDOK</option>
        </select>

        <div className="flex flex-row items-end justify-center mt-8 gap-4 mb-12">
          <div>
            {" "}
            <label htmlFor="datee" className="pl-2 text-slate-500 text-xs">
              Date of Guard Duty
            </label>
            <input
              type="date"
              id="datee"
              className="input w-full"
              onChange={(x) => {
                setDate(x.target.value);
              }}
              value={date}
              required
            />
          </div>

          <select
            className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500"
            onChange={(x) => setShift(x.target.value)}
            value={shift || ""}
            required
          >
            <option value="" disabled>
              shift hours
            </option>
            <option value="12 HR">12 HR</option>
            <option value="24 HR">24 HR</option>
          </select>
        </div>
        <span className="text-base mt-5 pl-1 pb-2 pt-8 pr-8">TROOPERS</span>
        <span
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 hover:cursor-pointer"
          onClick={() => setTroopersName([...troopersName, ""])}
        >
          {" "}
          + trooper
        </span>
        <div className="pt-4">
          {troopersName.map((name, index) => (
            <select
              className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500 mb-4"
              onChange={(e) => {
                const updated = [...troopersName];
                updated[index] = e.target.value;
                setTroopersName(updated);
              }}
              value={troopersName[index] || ""}
              key={index}
            >
              <option value="" disabled>
                trooper name
              </option>

              {names.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          ))}
          <h2 className="pl-1 text-base pt-10">COMMANDERS</h2>

          <select
            className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500 mt-4"
            onChange={(e) => {
              const updated = [...comdsName];
              updated[0] = e.target.value; // for GC1
              setComdsName(updated);
            }}
            value={comdsName[0] || ""}
          >
            <option value="" disabled>
              GC name
            </option>

            {comdnames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
          <select
            className="mt-4 border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500 mb-16"
            onChange={(e) => {
              const updated = [...comdsName];
              updated[1] = e.target.value; // for GC1
              setComdsName(updated);
            }}
            value={comdsName[1] || ""}
          >
            <option value="" disabled>
              G2 name
            </option>
            {comdnames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
          {/* <select
            className="mt-4 border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500 mb-12"
            onChange={(e) => {
              const updated = [...comdsName];
              updated[2] = e.target.value; // for GC1
              setComdsName(updated);
            }}
            value={comdsName[2] || ""}
          >
            <option value="" disabled>
              G Reserve
            </option>
            {comdnames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select> */}
          <span className="pl-1 pr-8">RESERVES</span>
          <span
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 hover:cursor-pointer"
            onClick={() => setReserveName([...reserveName, ""])}
          >
            {" "}
            + reserve
          </span>
          {reserveName.map((name, index) => (
            <select
              className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500 mb-4 mt-4"
              onChange={(e) => {
                const updated = [...reserveName];
                updated[index] = e.target.value;
                setReserveName(updated);
              }}
              value={reserveName[index] || ""}
              key={index}
            >
              <option value="" disabled>
                reserve name
              </option>

              {allnames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          ))}
        </div>

        <button className="btn btn-soft btn-info mt-12 w-full" type="submit">
          {buttonName}
        </button>
      </form>
    </>
  );
}

export default Form;
