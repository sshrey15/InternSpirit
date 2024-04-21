import React from "react";
import Image from "next/image";

const Description = ({job}) => {
  return (
    <>
      <div className=" p-2">
        {/* Description */}
        <div>
          <label className="font-semibold">Job Description</label>
          <p className="font-extralight text-sm">{job.description}</p>
        </div>

        {/* Requirements */}
        <div className="mt-7">
          <label className="font-semibold">Requirements</label>
          <p className="font-extralight text-sm">{job.requirements}</p>
        </div>

        {/* Benefits */}
        <div className="mt-7">
          <label className="font-semibold">Benefits</label>
          <p className="font-extralight text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            qui?
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;