"use client"
import { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import Description from "@/components/ui/description";
import DescriptionHeader from "@/components/ui/descriptionHeader";
import RelatedJobs from "@/components/ui/relatedJobs";
import DescriptionFooter from "@/components/ui/descriptionFooter";
import JobInfo from "@/components/ui/jobInfo";

export default function JobDescription({params:{ collegeId,id }}) {
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

//   const jobId = searchParams.get("id");

  useEffect(() => {
    const getJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${collegeId}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('Job data:', data);
        if (!data.job) {
          console.log('No job data available');
        } else {
          console.log('Found job data:', data.job);
          const specificJob = data.job.find(job => job.id === id); // Filter the jobs based on jobId
          setJob(specificJob); // Set the specific job object
          console.log('Specific job:', specificJob);
          console.log('Job:', id);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
  
    getJob();
  }, [id, collegeId]);
  
  if (loading || !job) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <div key={job.id}>
        <DescriptionHeader job={job} />
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6  mx-10 md:mx-32 justify-between">
          <Description job={job} />
          <JobInfo job={job} />
        </div>
  
        <RelatedJobs />
        <DescriptionFooter />
      </div>
    </div>
  );
}