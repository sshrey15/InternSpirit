const CollegeCard = ({ college, skill }) => {
  const { name, jobs, applicants } = college;

  // Count the number of applicants with the specified skill
  const applicantsWithSkill = applicants.filter(applicant => {
    const applicantSkills = applicant.skills || [];
    return applicantSkills.some(s => s.name === skill);
  });

  return (
    <tr className="w-full text-center">
      <td className="border text-start px-4 py-2">{name}</td>
      <td className="border  px-4 py-2">{jobs.length}</td>
      <td className="border px-4 py-2">{applicants.length}</td>
      
      <td className="p-2">
  <button className="px-4 py-2 bg-blue-500 text-white ">Post Here</button>
</td>
    </tr>
  );
}

export default CollegeCard;