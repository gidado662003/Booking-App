import React from "react";
import DoctorComponents from "@/components/Doctors";
import DoctorFilterlogic from "@/components/doctorFilterlogic";

function Doctors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 duration-150">
      <div className="col-span-1 mb-10">
        <DoctorFilterlogic />
      </div>
      <div className="col-span-5">
        <DoctorComponents />
      </div>
    </div>
  );
}

export default Doctors;
