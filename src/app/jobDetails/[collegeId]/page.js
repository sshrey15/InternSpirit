"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link'
import JobCard from '@/components/ui/jobcard';

export default function JobDetails({params:{ collegeId }}) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await fetch(`/api/jobs/${collegeId}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('Job data:', data);
        if (data.job.length === 0) {
          console.log('No job data available');
        } else {
          setJobs(data.job); // Set the jobs array
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getJobs();
  }, [collegeId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mx-3 grid-cols-1 md:grid grid-cols-3 gap-4 mx-6'>
      {jobs.map((job) => (
        <Link href={`/jobDetails/${collegeId}/${job.id}`}>
         
          <JobCard job={job} />
        
          
        </Link>
      ))}
    </div>
  );
}