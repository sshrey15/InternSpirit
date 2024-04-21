import React from "react";
import JobCard from "./jobcard";

const RelatedJobs = () => {
  return (
    <>
      <div className="mx-10 md:mx-32 mt-24">
        <div>
          <label className="text-2xl font-medium">Related Jobs</label>
        </div>

        <div className="grid grid-cols-3 mt-10 border-2 border-black p-10"></div>
      </div>
    </>
  );
};

export default RelatedJobs;