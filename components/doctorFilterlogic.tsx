"use client";
import React from "react";
import { useAppContext } from "@/app/context/page";
import { doctors } from "@/assets";
import { usePathname } from "next/navigation";
function DoctorFilterlogic() {
  const pathname = usePathname();
  const { doctorData, setDoctorData } = useAppContext();

  // Get unique specialties
  const speciality = [...new Set(doctors.map((spec) => spec.speciality))];

  // Filter function
  function handleFilter(data: string) {
    if (data === "all") {
      setDoctorData(doctors); // Show all doctors
    } else {
      setDoctorData(doctors.filter((spec) => spec.speciality === data)); // Filter by specialty
    }
  }

  return (
    <ul className="space-y-7">
      {speciality.map((items, index) => (
        <li
          key={index}
          className="border-2 p-2 cursor-pointer"
          onClick={() => handleFilter(items)}
        >
          {items}
        </li>
      ))}
      <li
        className="border-2 p-2 cursor-pointer"
        onClick={() => handleFilter("all")}
      >
        <p>All</p>
      </li>
    </ul>
  );
}

export default DoctorFilterlogic;
