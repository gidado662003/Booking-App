"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { useAppContext } from "../context/AppProvider";

function MyAppointments() {
  const { appointment, setAppointment } = useAppContext();

  const checkAppointmentValidity = () => {
    const currentDate = new Date();
    setAppointment((prev: any) => {
      return prev.map((app: any) => {
        const appointmentDate = new Date(app.date);
        if (appointmentDate <= currentDate) {
          return { ...app, isValid: false };
        }
        return app;
      });
    });
  };
  const handleInvalidAppointments = () => {
    const findInvalid = appointment.filter(
      (invalid: any) => invalid.isValid === false
    );
    setAppointment(findInvalid);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleInvalidAppointments();
    }, 21600000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      checkAppointmentValidity();
    }, 21600000);

    return () => clearInterval(interval);
  }, []);

  const cancelAppointment = (apointment: any) => {
    const validAppointments = appointment.filter(
      (data: any) => data.id !== apointment
    );
    setAppointment(validAppointments);
  };
  return (
    <div>
      <p>My Appointments</p>
      <div className="container mx-auto p-4 sm:p-6">
        {appointment.map((data: any) => (
          <div
            key={data.time}
            className="flex flex-col sm:flex-row justify-between items-start bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-lg overflow-hidden mb-6 p-4 sm:p-6  transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <Image
                  className="bg-slate-200 dark:bg-gray-700 rounded-md object-cover"
                  src={data.info[0].image}
                  alt="Doctor"
                  width={160}
                  height={160}
                />
              </div>
              <div className="space-y-4 text-center sm:text-left">
                <div>
                  <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                    {data.info[0].name}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {data.info[0].speciality}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">
                    Address
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <p>{data.info[0].address?.line1}</p>
                    <p>{data.info[0].address?.line2}</p>
                  </div>
                </div>
                <div className="flex justify-center sm:justify-start items-center gap-2 text-gray-600 dark:text-gray-300">
                  <p className="font-semibold text-gray-800 dark:text-gray-100">
                    Date and Time
                  </p>
                  <p className="text-sm">
                    {data.date} | {data.time}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:items-end items-center mt-4 sm:mt-0 space-y-4 w-full sm:w-auto">
              {data.isValid === true ? (
                <>
                  <button className="w-full sm:w-auto bg-blue-500 dark:bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300">
                    Pay Online
                  </button>
                  <button
                    onClick={() => {
                      cancelAppointment(data.id);
                    }}
                    className="w-full sm:w-auto bg-red-500 dark:bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-600 dark:hover:bg-red-700 transition-colors duration-300"
                  >
                    Cancel Appointment
                  </button>
                </>
              ) : (
                <button className="w-full sm:w-auto bg-red-500 dark:bg-red-600 text-white px-6 py-2 rounded-[10px] hover:bg-red-600 dark:hover:bg-red-700 transition-colors duration-300">
                  Appointment expired
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAppointments;
