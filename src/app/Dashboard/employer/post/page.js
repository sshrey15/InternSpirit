"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import CollegeCard from "../../components/CollegeCard";
import HardcodedBarGraph from "../../components/BarGraph";


const Page = () => {
  const [colleges, setColleges] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [skill, setSkill] = useState("");

  const handleInputChange = (e) => {
    setSkill(e.target.value);
  };

  useEffect(() => {
    fetch("/api/college", { cache: "force-cache" })
      .then((response) => response.json())
      .then((data) => {
        if (
          data.message === "error" &&
          data.err === "No subscription found" &&
          data.status === 404
        ) {
          router.push("/Dashboard/employer/subscription");
        } else {
          console.log("data proof");
          console.log(data.colleges);
          setColleges(data.colleges);

          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }, [router]);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <>

     
     <div className="w-full flex justify-between mt-4 align-middle">
     <HardcodedBarGraph/>
    <input type="text" className="border h-1/2 p-4 w-1/3  px-4 py-2" placeholder="Search..." />
  </div>
     
     

      <div className="ml-72 mt-10 ">
        <table className="w-full">
          <thead>
            <tr className="bg-custom-gray">
              <th className="px-4 py-2">College Name</th>
              <th className="px-4 py-2">Number of Jobs</th>
              <th className="px-4 py-2">Number of Applicants</th>
            
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {colleges &&
              colleges.map((college, index) => (
                <CollegeCard key={index} college={college} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Page;
