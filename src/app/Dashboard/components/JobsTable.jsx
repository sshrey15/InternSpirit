import React from 'react'
import { FiMoreVertical } from 'react-icons/fi';

const JobsTable = ({}) => {
  return (
    <>
        <h1 className='mt-10 text-lg font-semibold'>Recently posted Jobs</h1>
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
          {/* Replace this with your actual data */}
          <tr className='text-center border-b'>
            <td className=" px-4 py-2">Job 1</td>
            <td className=" px-4 py-2">10 Applications</td>
            <td className=" font-semibold text-sm px-4 py-2">
                <button className="p-2  items-center justify-center text-hero-bg bg-custom-gray hover:bg-hero-bg hover:text-custom-gray">View Applications</button>
            </td>
            <td className=" px-4 py-2">2022-01-01</td>
            <td className="px-4 py-2">
            <button className="focus:outline-none" >
                <FiMoreVertical className="h-6 w-6 text-gray-500" />
              </button>
           
            </td> 
          </tr>
        </tbody>
      </table>
      </>
  )
}

export default JobsTable