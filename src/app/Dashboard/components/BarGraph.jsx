import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarElement } from 'chart.js';

// Register the scales
Chart.register(LinearScale, CategoryScale, BarElement);

const HardcodedBarGraph = () => {
  // Hardcoded data for the bar graph
  const graphData = {
    labels: ['GEC', 'DBCE', 'College 3', 'College 4', 'College 5','GEC', 'DBCE', 'College 3', 'College 4', 'College 5',],
    datasets: [
      {
        label: 'Number of applicants',
        data: [12, 40, 3, 52  , 25, 3, 47, 20, 63],
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='w-1/2 ml-72 '>
      <Bar data={graphData} options={options} />
    </div>
  );
}

export default HardcodedBarGraph;