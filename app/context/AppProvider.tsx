"use client";
import { doctors } from "@/assets";
import { createContext, useContext, useEffect, useState } from "react";

interface Context {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  doctorData: any; // Define a specific type here
  setDoctorData: (value: any) => void; // Replace 'any' with specific type
  appointment: any; // Replace 'any' with specific type
  setAppointment: (value: any) => void; // Replace 'any' with specific type
}

const AppWrapper = createContext<Context | undefined>(undefined);

export function AppProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode ? JSON.parse(savedMode) : false;
    }
    return false;
  });

  const [doctorData, setDoctorData] = useState<any>(doctors);

  const [appointment, setAppointment] = useState<any>(() => {
    if (typeof window !== "undefined") {
      const savedAppointment = localStorage.getItem("appointment");
      return savedAppointment ? JSON.parse(savedAppointment) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("appointment", JSON.stringify(appointment));
    }
  }, [appointment]);

  return (
    <AppWrapper.Provider
      value={{
        darkMode,
        setDarkMode,
        doctorData,
        setDoctorData,
        appointment,
        setAppointment,
      }}
    >
      {children}
    </AppWrapper.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppWrapper);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
