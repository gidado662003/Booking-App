"use client";
import React, { useState } from "react";
import Image from "next/image";
import { doctors } from "@/assets";
import { useRouter } from "next/navigation";
import Booking from "@/components/Booking";

function Appointment({ params }: any) {
  const router = useRouter();
  const [doctorData, setDoctorData] = useState(
    doctors.filter((data) => data._id === params.id)
  );
  if (doctorData.length === 0) return <div>No doctor found</div>;

  const doctor = doctorData[0];

  const relatedDoctors = doctors.filter(
    (item) => item.speciality === doctor.speciality && item._id !== doctor._id
  );

  return (
    <div className=" dark:text-gray-100 p-6">
      {/* Doctor Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-center">
        <div className="col-span-1">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={311}
            height={312}
            layout="fixed"
            className="bg-gradient-to-r from-[#5F6FFF] via-[#7B5FFF] to-[#A35FFF] rounded-md"
          />
        </div>
        <div className="col-span-2 rounded-md border-2 border-gray-300 dark:border-gray-700 p-3">
          <p className="text-4xl font-semibold mb-3">{doctor.name}</p>
          <div className="flex gap-5 text-gray-700 dark:text-gray-400">
            <p>
              {doctor.degree} - {doctor.speciality}
            </p>
            <div className="border-[3px] rounded-[40%] px-2 dark:border-gray-600">
              {doctor.experience}
            </div>
          </div>
          <p className="mb-2">About</p>
          <p className="text-gray-700 dark:text-gray-400 mb-5">
            {doctor.about}
          </p>
          <p>
            <span>Appointment fee</span>:{" "}
            <span className="font-bold">${doctor.fees}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-[80px]">
        <Booking />
      </div>

      {/* Related Doctors Section */}
      <div className="mt-10">
        <div className="text-center">
          <p className="dark:text-white">Related Doctors</p>
          <p className="dark:text-gray-400">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>
        <div className="flex text-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[40px] mt-[50px]">
            {relatedDoctors.map((relatedDoctor) => (
              <div
                key={relatedDoctor._id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border-[1px] border-gray-300 dark:border-gray-700 hover:-translate-y-2 duration-150 cursor-pointer"
                onClick={() => {
                  setDoctorData([relatedDoctor]);
                  router.push(`/appointment/${relatedDoctor._id}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <Image
                  width={411}
                  height={412}
                  src={relatedDoctor.image}
                  alt={relatedDoctor.name}
                  className="w-full h-60 object-cover bg-gray-200 dark:bg-gray-700"
                />
                <div className="p-4">
                  <p className="text-green-600 dark:text-green-400 font-semibold">
                    • Available
                  </p>
                  <h2 className="mt-2 text-lg font-medium dark:text-gray-100">
                    {relatedDoctor.name}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {relatedDoctor.speciality}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
