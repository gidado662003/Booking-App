"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { doctors } from "@/assets";
import { useAppContext } from "@/app/context/AppProvider";

function DoctorComponents() {
  const router = useRouter();
  const pathname = usePathname();
  const { doctorData } = useAppContext();
  const [doctorsFiltered, setDoctorsFiltered] = useState(
    doctorData.slice(0, 10)
  );

  useEffect(() => {
    setDoctorsFiltered(doctorData.slice(0, 10));
  }, [doctorData]);

  function showMore() {
    setDoctorsFiltered((prev: any) =>
      prev.length === doctorData.length
        ? doctorData
        : prev.concat(doctorData.slice(prev.length, prev.length + 3))
    );
  }

  return (
    <div className={`${pathname == "/" && "py-16"}`}>
      {pathname === "/" && (
        <div className="text-center mb-12">
          <p className="text-3xl font-semibold">Top Doctors to Book</p>
          <p className="text-gray-500 mt-4">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mb-7">
        {doctorsFiltered.map((doctor: any) => (
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
      {doctorData.length < doctors.length && (
        <div className="flex justify-center">
          <button className="bg-gray-400 rounded-md p-4" onClick={showMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default DoctorComponents;
