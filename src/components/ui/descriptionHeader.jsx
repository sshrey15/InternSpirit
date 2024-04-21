import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const DescriptionHeader = ({job}) => {
  return (
    <>
      <div className="mt-4 border-b-2 border-gray-200 p-6 mx-10  items-center justify-end grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="flex items-center">
          {/* LOGO */}
          <div className="rounded-full">
            <Image
              src="/images/GLogo.png"
              alt="logo.png"
              width={80}
              height={50}
            />
          </div>

          {/* POST */}
          <div>
            <label className="font-semibold">{job.title}</label>
            <div className="flex gap-2">
              <p className="font-light text-sm text-gray-500">
                {job.company.name}
              </p>
              <label className="font-semibold text-[10px] text-white bg-green-600 p-1 ">
                {job.type}
              </label>
            </div>
          </div>
        </div>

        {/* Apply Now + Save */}
        {/* flex flex-col md:flex-row items-center md:justify-end gap-4 */}
        <div className="grid grid-cols-2 md:flex flex-row gap-2 justify-end ">
          <div>
            <button className="bg-gray-200 p-3 hover:bg-gray-300 rounded-sm">
              <CiBookmark />
            </button>
          </div>

          <div>
            <button className="text-white  font-semibold bg-blue-600 py-2 hover:bg-blue-500 p-2 md:px-6 text-sm flex gap-2 items-center rounded-sm">
              Apply Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionHeader;