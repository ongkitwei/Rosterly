"use client";

import React, { useState } from "react";
import { Roboto } from "next/font/google";
import names from "../../../data/troopersNames.json"; // adjust the path to match your file
import comdnames from "../../../data/comdsNames.json"; // adjust the path to match your file
import axios from "axios";

const robotoFont = Roboto({ subsets: ["latin"], weight: "700" });

function AddDutyForm() {
  const [troopersName, setTroopersName] = useState([""]);
  const [comdsName, setComdsName] = useState([]);
  const [camp, setCamp] = useState("");
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("");

  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="w-full max-w-[95%] mx-auto lg:max-w-[80%] h-fit bg-base-100 shadow-lg rounded-2xl p-5 lg:p-12 mt-4 mb-12">
      <h2
        className={`font-extrabold pb-8 text-center text-gray-800 text-3xl ${robotoFont.className}`}
      >
        CREATE DUTY LIST
      </h2>
      <form className="w-full">
        <select
          className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500"
          onChange={(x) => setCamp(x.target.value)}
          value={camp || ""}
        >
          <option value="" disabled>
            select camp
          </option>

          <option value="DIEPPE">DIEPPE</option>
          <option value="BEDOK">BEDOK</option>
        </select>
      </form>

      <div className="flex flex-row items-end justify-center mt-8 gap-4 mb-8">
        <div>
          {" "}
          <label htmlFor="datee" className="pl-2 text-slate-500 text-xs">
            Date of Guard Duty
          </label>
          <input
            type="date"
            id="datee"
            className="input w-full"
            onChange={(x) => setDate(x.target.value)}
            value={date}
          />
        </div>

        <form className="w-full">
          <select
            className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500"
            onChange={(x) => setShift(x.target.value)}
            value={shift || ""}
          >
            <option value="" disabled>
              shift hours
            </option>
            <option value="12 HR">12 HR</option>
            <option value="24 HR">24 HR</option>
          </select>
        </form>
      </div>

      <span className="text-lg mt-5 pl-1 pb-2 pt-8 pr-8">DUTY NAMES</span>
      <span
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 hover:cursor-pointer"
        onClick={() => setTroopersName([...troopersName, ""])}
      >
        {" "}
        + trooper
      </span>

      <div>
        <form className="w-full pt-4">
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
        </form>{" "}
        {/* <form className="w-full">
          <select
            className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500"
            onChange={(e) => {
              const updated = [...troopersName];
              updated[1] = e.target.value;
              setTroopersName(updated);
            }}
            value={troopersName[1] || ""}
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
        </form>{" "}
        <form className="w-full">
          <select
            className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500"
            onChange={(e) => {
              const updated = [...troopersName];
              updated[2] = e.target.value;
              setTroopersName(updated);
            }}
            value={troopersName[2] || ""}
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
        </form>{" "}
        <form className="w-full">
          <select
            className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500"
            onChange={(e) => {
              const updated = [...troopersName];
              updated[3] = e.target.value;
              setTroopersName(updated);
            }}
            value={troopersName[3] || ""}
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
        </form>{" "}
        <form className="w-full">
          <select
            className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500"
            onChange={(e) => {
              const updated = [...troopersName];
              updated[4] = e.target.value;
              setTroopersName(updated);
            }}
            value={troopersName[4] || ""}
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
        </form>{" "}
        <form className="w-full">
          <select
            className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500"
            onChange={(e) => {
              const updated = [...troopersName];
              updated[5] = e.target.value;
              setTroopersName(updated);
            }}
            value={troopersName[5] || ""}
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
        </form>{" "}
        <form className="w-full">
          <select
            className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500"
            onChange={(e) => {
              const updated = [...troopersName];
              updated[6] = e.target.value;
              setTroopersName(updated);
            }}
            value={troopersName[6] || ""}
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
        </form>{" "}
        <form className="w-full">
          <select
            className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500"
            onChange={(e) => {
              const updated = [...troopersName];
              updated[7] = e.target.value;
              setTroopersName(updated);
            }}
            value={troopersName[7] || ""}
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
        </form> */}
      </div>
      <h2 className="pl-1 text-base pt-5">Commaders name</h2>
      <form className="w-full mt-4">
        <select
          className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500"
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
      </form>
      <form className="w-full mt-4">
        <select
          className="border border-gray-300 text-sm rounded-lg focus:border-gray-500 block w-full p-2.5 placeholder-gray-400 text-gray-500 focus:ring-gray-500"
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
      </form>

      <button
        className="btn btn-soft btn-info mt-12 w-full"
        onClick={async () => {
          setIsAdded(!isAdded);
          setComdsName([]);
          setTroopersName([""]);
          setDate("");
          setCamp("");
          setShift("");

          try {
            const response = await axios.post("/api/users", {
              camp,
              date,
              shift,
              troopersName,
              comdsName,
            });
          } catch (err) {
            console.error(err);
          }
        }}
      >
        ADD DUTY
      </button>
      {isAdded ? (
        <div className="toast">
          <div className="alert alert-success">
            <span className="px-8">DUTY ADDED</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default AddDutyForm;
