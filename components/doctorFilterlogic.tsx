"use client";
import React, { useState } from "react";
import { useAppContext } from "@/app/context/AppProvider";
import { doctors } from "@/assets";
import { usePathname } from "next/navigation";

function DoctorFilterlogic() {
  const pathname = usePathname();
  const { doctorData, setDoctorData } = useAppContext();

  const speciality = [...new Set(doctors.map((spec) => spec.speciality))];
  const [selected_filter, set_selected_filter] = useState("all");

  function handleFilter(data: string) {
    set_selected_filter(data);
    if (data === "all") {
      setDoctorData(doctors); // Show all doctors
    } else {
      setDoctorData(doctors.filter((spec) => spec.speciality === data));
    }
  }
  const [toggle_filter, set_toggle_filter] = useState(false);

  return (
    <div>
      <div
        className={`cursor-pointer mb-6  px-8 py-2 w-fit lg:hidden ${
          toggle_filter ? "bg-blue-400 text-white" : "bg-gray-200 text-black"
        } transition-colors duration-300 ease-in-out`}
        onClick={() => set_toggle_filter(!toggle_filter)}
      >
        FILTER
      </div>

      <ul
        className={`space-y-7 overflow-hidden transition-all duration-500 ease-in-out ${
          toggle_filter ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } lg:max-h-full lg:opacity-100 lg:block`}
      >
        {speciality.map((items, index) => (
          <li
            key={index}
            className={`border-2 rounded-md p-2 cursor-pointer  transition-colors duration-300 ease-in-out ${
              selected_filter === items
                ? "bg-blue-500 text-white" // Active state styles
                : "hover:bg-gray-100"
            }`}
            onClick={() => {
              handleFilter(items);
              set_toggle_filter(false);
            }}
          >
            {items}
          </li>
        ))}
        <li
          className={`rounded-md border-2 p-2 cursor-pointer transition-colors duration-300 ease-in-out ${
            selected_filter === "all" ? "bg-blue-500 " : "hover:bg-gray-100 "
          }`}
          onClick={() => handleFilter("all")}
        >
          <p>All</p>
        </li>
      </ul>
    </div>
  );
}

export default DoctorFilterlogic;
