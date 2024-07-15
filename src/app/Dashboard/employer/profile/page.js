"use client";
import React, { useState, useEffect } from "react";
import ProfileHeader from "../../components/ProfileHeader";
import Loading from "../../../loading";
import JobsTable from "../../components/JobsTable";
import Map from "../../components/Map";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TrackContest from "../../components/TrackContest";

const ParentComponent = () => {
  const [employerName, setEmployerName] = useState("");
  const [jobs, setJobs] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false); // Add this line

  useEffect(() => {
    fetch("http://localhost:3000/api/employer")
      .then((response) => response.json())
      .then((data) => {
        setEmployerName(data.employer.name);
        setJobs(data.employer.jobs);
        setCompetitions(data.employer.competitions);  
        setIsSubscribed(data.employer.isSubscribed); // Set the subscription status
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ProfileHeader employerName={employerName} />
      <Tabs className="mt-4" selectedTabClassName="border-b-4 border-blue-500">
        <TabList className="flex mb-4 border-b ml-72">
          <Tab className="mr-1 py-2 px-4 font-semibold cursor-pointer animate-slide">
            Recent Jobs
          </Tab>
          <Tab className="mr-1 py-2 px-4 font-semibold cursor-pointer animate-slide">
            Nearby Interns
          </Tab>
          <Tab className="mr-1 py-2 px-4 font-semibold cursor-pointer animate-slide">
            Track Contests
          </Tab>
        </TabList>

        <TabPanel className="p-2">
          <JobsTable jobs={jobs} />
        </TabPanel>
        <TabPanel className="p-4 relative">
          <div className={`${!isSubscribed ? "blur" : ""}`}>
            <Map />
          </div>
          {!isSubscribed && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded shadow align-middle">
                <h2 className="font-bold mb-2">
                  Subscribe to unlock this feature
                </h2>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setIsSubscribed(true)} // Add this line
                >
                  Subscribe
                </button>
              </div>
            </div>
          )}
        </TabPanel>
        <TabPanel className=" -mt-4">
          
          <TrackContest competitions={competitions}/>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ParentComponent;
