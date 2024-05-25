"use client"
import React, { useState } from 'react';

const CollegeCard = ({ college, skill, onSelect }) => {
  const { name, jobs, applicants } = college;
  const [isSelected, setIsSelected] = useState(false);

  // Count the number of applicants with the specified skill
  const applicantsWithSkill = applicants.filter(applicant => {
    const applicantSkills = applicant.skills || [];
    return applicantSkills.some(s => s.name === skill);
  });

  const handleSelect = () => {
    setIsSelected(!isSelected);
    onSelect(college, !isSelected);
  };

  return (
    <tr className="w-full text-center">
      <td className="border text-start px-4 py-2">{name}</td>
      <td className="border  px-4 py-2">{jobs.length}</td>
      <td className="border px-4 py-2">{applicants.length}</td>
      <td className="p-1 border ">
        <input type="checkbox" checked={isSelected} onChange={handleSelect} />
      </td>
    </tr>
  );
};

export default CollegeCard;