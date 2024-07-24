"use client"
import  Link  from 'next/link';
import React, { useState } from 'react';
import { FiHelpCircle, FiMenu, FiX } from 'react-icons/fi';
import { FiUser, FiFolder,  FiAward, FiDollarSign, FiSettings, FiLogOut,FiMap } from 'react-icons/fi';

const StudentDrawer = () => {
    

    return (
        <div className={`absolute z-50 transform transition-transform duration-300   left-4 top-22 h-screen w-64 bg-white border-r      z-20`}>
         
            {/* Content of the drawer */}
            
            <ul className="list-none p-4 space-y-2 flex flex-col  h-full">
             <Link href="/Dashboard/student/profile">   <li className="py-1 flex items-center text-text-gray space-x-2"><FiUser /><h1 href="/Dashboard/employer/plan" className=" ">Student Profile</h1></li></Link>
             <Link href="/Dashboard/student/post"><li className="py-1 flex items-center text-text-gray space-x-2"><FiFolder /> <a href="/post-job" className=" ">Post your projects</a> </li></Link>
             <Link href="/Dashboard/student/post"><li className="py-1 flex items-center text-text-gray space-x-2"><FiMap /> <a href="/post-job" className=" ">Roadmaps</a> </li></Link>
             <Link href="/Dashboard/student/post"><li className="py-1 flex items-center text-text-gray space-x-2"><FiAward /> <a href="/post-job" className=" ">Contests</a> </li></Link>
             <Link href="/Dashboard/student/post"><li className="py-1 flex items-center text-text-gray space-x-2"><FiHelpCircle /> <a href="/post-job" className=" ">Ask Doubts?</a> </li></Link>


                <li className="py-1 flex items-center text-text-gray space-x-2"><FiDollarSign /><a href="/plan-pricing" className=" ">Plan and Pricing</a></li>
                <li className="py-1 flex items-center text-text-gray space-x-2"><FiSettings /><a href="/settings" className=" ">Settings</a></li>
                <li className="mt-auto py-1 flex items-center space-x-2"><FiLogOut /><a href="/logout" className="text-red-500 ">Logout</a></li>
            </ul>
        </div>
    );
}

export default StudentDrawer