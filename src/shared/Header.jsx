import React from "react";
import { Poppins } from "next/font/google";
import { IoCalendar } from "react-icons/io5";
import Link from "next/link";

const poppinsFont = Poppins({ subsets: ["latin"], weight: "400" });

function Header() {
  return (
    <div
      className={`${poppinsFont.className} text-3xl text-neutral w-full py-4 border border-b-2 border-slate-200 flex items-center justify-center z-50 fixed`}
    >
      <div className="absolute dropdown left-0 pl-8">
        <div tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />{" "}
          </svg>
        </div>
        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <Link href="/" className="text-base">
              Homepage
            </Link>
          </li>
          <li>
            <Link href="/add-duty" className="text-base">
              Add Duty
            </Link>
          </li>
          <li>
            <Link href="/view-duty" className="text-base">
              View Duties
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-1">
        ROSTERLY <IoCalendar className="text-neutral" />
      </div>
    </div>
  );
}

export default Header;
