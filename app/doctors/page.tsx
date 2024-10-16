import React from "react";
import AllDoctors from "@/components/all-doctors";
import DoctorComponents from "@/components/Doctors";
import DoctorFilterlogic from "@/components/doctorFilterlogic";
function Doctors() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-5 gap-3">
      <div className="col-span-1 ">
        <DoctorFilterlogic />
      </div>
      <div className="col-span-3 md:col-span-4">
        <DoctorComponents />
      </div>
    </div>
  );
}

export default Doctors;
