"use client"
import React, { useState, useEffect } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import Loading from '../../../loading';
import JobsTable from '../../components/JobsTable';



const   ParentComponent  = ()  => {
  
  const [employerName, setEmployerName] = useState('');
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('http://localhost:3000/api/employer', {cache: 'force-cache'})
      .then(response => response.json())
      .then(data => {
        setEmployerName(data.employer.name);
        setJobs(data.employer.jobs);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ProfileHeader employerName={employerName} />
     
        <JobsTable
          jobs={jobs}
        />
    
    </>
  );
};

export default ParentComponent;