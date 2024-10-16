import Image from "next/image";
import Hero from "@/components/hero";
import Doctors from "@/components/Doctors";
import Speciality from "@/components/Speciality";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <Speciality />
      <Doctors />
    </div>
  );
}
