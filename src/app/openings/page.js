"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/ui/Navbar";
import Jobsheader from "./components/Jobsheader";
import JobCard from "./components/JobCard";

// const job1 = {
//   title: "UI/UX Designer",
//   description: "fdhsjaklkdfbvncxmz,",
// };

const Openings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/jobs`);
        const data = await res.json();
        setJobs(data.jobs.title);
      } catch (error) {
        console.log("Error");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Jobsheader />
      <JobCard jobs={jobs} />
    </>
  );
};

export default Openings;
