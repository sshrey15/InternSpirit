
import React, { useState, useEffect } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import JobsTable from './JobsTable';

const ProfileHeader = ({employerName}) => {
    
    // const [employerName, setEmployerName] = useState('');

    // useEffect(() => {
    //   fetch('http://localhost:3000/api/employer')
    //     .then(response => response.json())
    //     .then(data => setEmployerName(data.employer.name))
    //     .catch(error => console.error('Error:', error));
    // }, []);
  return (
    <div className="flex  ml-72  flex-col  justify-start p-6 bg-white  rounded">
      <h2 className="text-2xl font-bold mb-2">Hello, {employerName}</h2>
      <p className="text-gray-600 mb-6">Here is your daily activities and applications</p>

     <JobsTable/>
    </div>
  );
}

export default ProfileHeader;