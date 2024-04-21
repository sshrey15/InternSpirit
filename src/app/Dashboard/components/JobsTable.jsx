import React from 'react'
import { FiMoreVertical } from 'react-icons/fi';

const JobsTable = ({jobs}) => {
  return (
    <>
        <div className="flex  ml-72  flex-col  justify-start p-2 bg-white  rounded">
        <h1 className='mt-2 text-lg font-semibold'>Recently posted Jobs</h1>
      <table className="table-auto w-full mt-5">
        
        <thead>
          <tr className='bg-custom-gray text-text-gray text-sm font-thin'>
            <th className="px-4 py-2">JOBS</th>
            <th className="px-4 py-2">APPLICATIONS</th>
            <th className="px-4 py-2">ACTIONS</th>
            <th className="px-4 py-2">POSTED AT</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className='hover: border-hero-bg'>
        {jobs && jobs.map((job) => (
            <tr key={job.id} className='text-center border-b'>
              <td className=" px-4 py-2">{job.title}</td>
              <td className=" px-4 py-2">{job.applicants ? job.applicants.length: 0}</td>
              <td className=" font-semibold text-sm px-4 py-2">
                <button className="p-2  items-center justify-center text-hero-bg bg-custom-gray hover:bg-hero-bg hover:text-custom-gray">View Applications</button>
              </td>
              <td className=" px-4 py-2">{job.postedAt}</td>
              <td className="px-4 py-2">
                <button className="focus:outline-none" >
                  <FiMoreVertical className="h-6 w-6 text-gray-500" />
                </button>
              </td> 
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      </>
  )
}

export default JobsTable