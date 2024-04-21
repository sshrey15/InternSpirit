import React from 'react';

const CollegeCard = ({ college }) => {
  // Extract the required data from the college object
  const { name, jobs, applicants } = college;

  // Create a set of all unique skills from all jobs and applicants
  const skills = [...new Set([
    ...jobs.flatMap(job => job.skills || []),
    ...applicants.flatMap(applicant => (applicant.skills || []).map(skill => skill.name))
  ])];

  return (
    <div className="bg-white shadow-md rounded p-6 my-4">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700">Number of jobs: <span className="font-semibold">{jobs.length}</span></p>
      <p className="text-gray-700">Number of applicants: <span className="font-semibold">{applicants.length}</span></p>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Skills:</h3>
        <ul className="list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index} className="text-gray-700">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CollegeCard;