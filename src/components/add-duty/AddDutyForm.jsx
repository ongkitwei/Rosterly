"use client";

import React, { useState } from "react";
import { Roboto } from "next/font/google";
import names from "../../../data/troopersNames.json"; // adjust the path to match your file
import comdnames from "../../../data/comdsNames.json"; // adjust the path to match your file

const robotoFont = Roboto({ subsets: ["latin"], weight: "400" });

function AddDutyForm() {
  const [isAdded, setIsAdded] = useState(false);
  console.log(names[0]);
  return (
    <div className="w-full max-w-[95%] mx-auto lg:max-w-[80%] h-fit bg-base-100 shadow-lg rounded-2xl p-5 lg:p-12 mt-4 mb-12">
      <h2 className={`font-black pb-4 text-2xl ${robotoFont.className}`}>
        CREATE DUTY LIST
      </h2>
      <input
        type="text"
        className="input w-full"
        placeholder="Area of Guard Duty"
        list="browsers"
      />
      <datalist id="browsers">
        <option value="BEDOK GD"></option>
        <option value="DIEPPE GD"></option>
      </datalist>
      <div className="flex flex-row items-end justify-center mt-8 gap-4">
        <div>
          {" "}
          <label htmlFor="datee" className="pl-2 text-slate-500">
            Date of Guard Duty
          </label>
          <input type="datetime-local" id="datee" className="input w-full" />
        </div>

        <input
          type="text"
          className="input w-full"
          placeholder="Duration of GD"
          list="browsers2"
        />
        <datalist id="browsers2">
          <option value="12 HR"></option>
          <option value="24 HR"></option>
        </datalist>
      </div>
      <h2 className="text-lg mt-5 pl-1 pb-2 pt-8">DUTY NAMES</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          className="input"
          placeholder="Troopers names"
          list="trooper1"
        />
        <datalist id="trooper1" className="max-h-[50px]">
          {names.map((name, index) => (
            <option key={index} value={name}></option>
          ))}
        </datalist>
        <input
          type="text"
          className="input"
          placeholder="Troopers names"
          list="trooper2"
        />
        <datalist id="trooper2" className="max-h-[50px]">
          {names.map((name, index) => (
            <option key={index} value={name}></option>
          ))}
        </datalist>
        <input
          type="text"
          className="input"
          placeholder="Troopers names"
          list="trooper3"
        />
        <datalist id="trooper3" className="max-h-[50px]">
          {names.map((name, index) => (
            <option key={index} value={name}></option>
          ))}
        </datalist>{" "}
        <input
          type="text"
          className="input"
          placeholder="Troopers names"
          list="trooper4"
        />
        <datalist id="trooper4" className="max-h-[50px]">
          {names.map((name, index) => (
            <option key={index} value={name}></option>
          ))}
        </datalist>{" "}
        <input
          type="text"
          className="input"
          placeholder="Troopers names"
          list="trooper5"
        />
        <datalist id="trooper5" className="max-h-[50px]">
          {names.map((name, index) => (
            <option key={index} value={name}></option>
          ))}
        </datalist>{" "}
        <input
          type="text"
          className="input"
          placeholder="Troopers names"
          list="trooper6"
        />
        <datalist id="trooper6" className="max-h-[50px]">
          {names.map((name, index) => (
            <option key={index} value={name}></option>
          ))}
        </datalist>{" "}
        <input
          type="text"
          className="input"
          placeholder="Troopers names"
          list="trooper7"
        />
        <datalist id="trooper7" className="max-h-[50px]">
          {names.map((name, index) => (
            <option key={index} value={name}></option>
          ))}
        </datalist>
        <input
          type="text"
          className="input"
          placeholder="Troopers names"
          list="trooper8"
        />
        <datalist id="trooper8" className="max-h-[50px]">
          {names.map((name, index) => (
            <option key={index} value={name}></option>
          ))}
        </datalist>
      </div>
      <input
        type="text"
        className="input mt-4 w-full"
        placeholder="COMDS names"
        list="gc1"
      />
      <datalist id="gc1" className="max-h-[50px]">
        {comdnames.map((name, index) => (
          <option key={index} value={name}></option>
        ))}
      </datalist>
      <input
        type="text"
        className="input mt-4 w-full"
        placeholder="COMDS names"
        list="gc2"
      />
      <datalist id="gc2" className="max-h-[50px]">
        {comdnames.map((name, index) => (
          <option key={index} value={name}></option>
        ))}
      </datalist>
      <button
        className="btn btn-soft btn-info mt-12 w-full"
        onClick={() => setIsAdded(!isAdded)}
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
