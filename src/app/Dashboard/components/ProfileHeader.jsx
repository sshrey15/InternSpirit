import React from 'react';
import { FaBriefcase, FaTrophy } from "react-icons/fa"; // Import suitable icons
import Image from 'next/image';
import Link from 'next/link';
const ProfileHeader = ({employerName}) => {
  return (
    <div className="flex ml-72 flex-col justify-start p-4 bg-white rounded">

      <div className="flex justify-between  items-center">
        <div className='flex gap-5 items-center'>
      <Image src="/images/user.png" alt="employer" width={90} height={90} className="rounded-full " />

        <div className='items-center'>
          <h2 className="text-2xl font-bold mb-2">Hello, {employerName}</h2>
          <p className="text-gray-600 mb-6">Here is your daily activities and applications</p>
        </div>
        </div>

        <div className="flex gap-4">
          
          <button className="gap-3 items-center rounded-full flex bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 px-4 ">
            <FaTrophy /> Contest
          </button>
          
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold flex items-center gap-3 py-2 px-4 rounded-full">
          
            <FaBriefcase /> 
            <Link href="/Dashboard/employer/forms">
             Internship
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;