"use client";
import { doctors } from "@/assets";
import { createContext, useContext, useState } from "react";
interface Context {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  doctorData: any;
  setDoctorData: (value: any) => void;
}
const AppWrapper = createContext<Context | undefined>(undefined);

export function AppProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [doctorData, setDoctorData] = useState<any>(doctors);
  return (
    <AppWrapper.Provider
      value={{ darkMode, setDarkMode, doctorData, setDoctorData }}
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
