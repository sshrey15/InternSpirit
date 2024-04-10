import React from 'react'

const PopularVacancies = () => {
  const jobTitles = [
    { title: 'Software Engineer', positions: 10 },
    { title: 'Data Scientist', positions: 5 },
    { title: 'Product Manager', positions: 7 },
    { title: 'Frontend Developer', positions: 12 },
    { title: 'Backend Developer', positions: 8 },
    { title: 'UI/UX Designer', positions: 6 },
    { title: 'DevOps Engineer', positions: 9 },
    { title: 'Database Administrator', positions: 4 },
    { title: 'System Analyst', positions: 11 },
    { title: 'Full Stack Developer', positions: 15 },
    { title: 'Mobile Developer', positions: 13 },
    { title: 'Security Engineer', positions: 14 }
  ]

  return (
    <>
      <h1 className='font-bold pl-10 text-3xl'>Most Popular Vacancies</h1>
      <section className='grid grid-cols-4 gap-4 p-4'> 
        {jobTitles.map((job, index) => (
          <div key={index} className="p-4 border cursor-pointer hover:text-hero-bg hover:underline rounded-md">
            {job.title}
            <p className="text-sm text-gray-500">{job.positions} open positions</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default PopularVacancies