import React from "react";
import { GrMapLocation } from "react-icons/gr";

const JobLocation = (props) => {
  return (
    <div>
      {/* Salary & Loaction */}
      <div className=" grid grid-cols-2 border-2 border-gray-300 mb-6 p-4">
        <div className=" p-2 pl-10 pt-6 justify-center items-center border-r-2 ">
          <label className="font-semibold  text-sm">Salary (Rupees)</label>
          <br />
          <label className="font-semibold text-green-600 text-xs md:text-base">
            ₹100,000 - ₹200,000
          </label>
          <br />
          <label className="font-light text-xs">Yearly Salary</label>
        </div>

        <div className=" p-4 pl-12 items-center justify-center">
          <GrMapLocation size={40} color="#0047AB" />
          <br />
          <label className="font-semibold text-sm">Job Location</label>
          <br />
          <label className="font-light text-sm text-gray-500">
            {props.location}
          </label>
        </div>
      </div>
    </div>
  );
};

export default JobLocation;