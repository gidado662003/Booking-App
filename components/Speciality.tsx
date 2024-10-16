"use client";
import React from "react";
import Image from "next/image";
import { specialityData } from "../assets";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context/page";
import { doctors } from "../assets";
function Speciality() {
  const data = specialityData;

  const router = useRouter();
  const { setDoctorData } = useAppContext();
  const handleSpecialitRoute = (data: any) => {
    router.push("/doctors");
    const filteredData = doctors.filter(
      (items) => items.speciality === data.speciality
    );
    setDoctorData(filteredData);
  };
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <p className="text-3xl font-semibold">Find by Speciality</p>
        <div className="text-gray-500 text-sm mt-4">
          <p>
            Simply browse through our extensive list of trusted doctors,
            schedule
          </p>
          <p>your appointment hassle-free.</p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 justify-center items-center ">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 transition transform hover:scale-105 "
            onClick={() => handleSpecialitRoute(item)}
          >
            <Image
              src={item.image.src}
              width={80}
              height={80}
              alt={item.speciality}
              className="rounded-full cursor-pointer"
            />
            <p className="mt-4 text-sm font-medium text-gray-700">
              {item.speciality}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speciality;
