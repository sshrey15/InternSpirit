import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { CiStopwatch } from "react-icons/ci";
import { PiStackThin } from "react-icons/pi";
import { PiWalletThin } from "react-icons/pi";
import { PiSuitcaseSimpleThin } from "react-icons/pi";

const JobOverview = (props) => {
  return (
    <div className=" ">
      {/* Job Overview */}
      <div className="p-3 border-2 border-gray-300">
        <div className="p-2">
          <label className="font-semibold text-base">Job Overview</label>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 p-4 gap-2">
          <div className="p-2">
            <CiCalendarDate size={40} color="blue" />
            <label className="font-light text-xs text-gray-600">
              JOB POSTED:
            </label>
            <br />
            <label className="font-semibold text-sm text-black">
              {props.postedAt}
            </label>
          </div>
          <div className="p-2 ">
            <CiStopwatch size={40} color="blue" />
            <label className="font-light text-xs text-gray-600">
              JOB EXPIRE IN:
            </label>
            <br />
            <label className="font-semibold text-sm text-black">
              29 JUNE, 2024
            </label>
          </div>
          <div className="p-2 ">
            <PiStackThin size={40} color="blue" />
            <label className="font-light text-xs text-gray-600">
              JOB LEVEL:
            </label>
            <br />
            <label className="font-semibold text-sm text-black">
              Entry Level
            </label>
          </div>
          <div className="p-2 ">
            <PiWalletThin size={40} color="blue" />
            <label className="font-light text-xs text-gray-600">
              EXPERIENCE:
            </label>
            <br />
            <label className="font-semibold text-sm text-black">
              $50k-80k/month
            </label>
          </div>
          <div className="p-2 ">
            <PiSuitcaseSimpleThin size={40} color="blue" />
            <label className="font-light text-xs text-gray-600">
              EDUCATION:
            </label>
            <br />
            <label className="font-semibold text-sm text-black">
              Graduation
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOverview