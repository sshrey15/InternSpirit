import React from 'react';

import { Chart, LinearScale, CategoryScale, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(LinearScale, CategoryScale, BarElement);



const SkillBarGraph = ({ colleges, skill }) => {
    // Calculate the number of applicants with the specified skill for each college
    const data = colleges.map(college => {
      const count = college.applicants.reduce((total, applicant) => {
        const applicantSkills = applicant.skills || [];
        console.log('Applicant skills:', applicantSkills);
        const hasSkill = applicantSkills.length > 0 && applicantSkills.some(s => s.name === skill);
        return total + (hasSkill ? 1 : 0);
      }, 0);
      return { college: college.name, count };
    });
  
  
  

  // Prepare the data for the bar graph
  const graphData = {
    labels: data.map(d => d.college),
    datasets: [
      {
        label: `Number of applicants with skill: ${skill}`,
        data: data.map(d => d.count),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className='w-3/4 mt-0'>
      <Bar data={graphData} options={options} />
    </div>
  )
}

export default SkillBarGraph;