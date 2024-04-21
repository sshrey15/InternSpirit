import React from "react";
import JobOverview from "./jobOverview";
import JobLocation from "./jobLocation";
import ShareJob from "./shareJobs";

const JobInfo = ({job}) => {
  return (
    <div>
      <JobLocation location={job.company.location} />
      <JobOverview postedAt={job.postedAt} />
      <ShareJob />
    </div>
  );
};

export default JobInfo;