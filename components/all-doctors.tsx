"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context/page";
function AllDoctors() {
  const { doctorData } = useAppContext();
  console.log(doctorData);

  const router = useRouter();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {doctorData.map((doctor: any) => (
        <div
          key={doctor._id}
          className="bg-white rounded-lg overflow-hidden border-[1px] hover:-translate-y-2 duration-500  cursor-pointer "
          onClick={() => router.push(`appointment/${doctor._id}`)}
        >
          <Image
            width={411}
            height={412}
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-60 object-cover bg-[#C9D8FF] dark:bg-gray-900"
          />
          <div className="p-4 dark:bg-slate-600 ">
            <p className="text-[#0FBF00] font-semibold">• Available</p>
            <h2 className="mt-2 text-lg font-medium">{doctor.name}</h2>
            <p className="text-sm text-gray-500 dark:text-white">
              {doctor.speciality}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllDoctors;
