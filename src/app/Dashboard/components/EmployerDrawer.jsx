"use client"
import  Link  from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FiUser, FiPlus, FiBriefcase, FiHeart, FiDollarSign, FiSettings, FiLogOut } from 'react-icons/fi';

const EmployerDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`absolute z-50 transform transition-transform duration-300   left-4 top-22 h-screen w-64 bg-white border-r     ${isOpen ? 'translate-x-0' : 'translate-x-[-90%]'} z-20`}>
            {isOpen ? (
                <FiX onClick={() => setIsOpen(false)} className="text-2xl cursor-pointer absolute top-0 right-0 m-2" />
            ) : (
                <FiMenu onClick={() => setIsOpen(true)} className="text-2xl cursor-pointer absolute top-0 right-0 m-2" />
            )}
            {/* Content of the drawer */}
            <h2 className="text-md font-semibold uppercase pl-2  text-text-gray">Drawer Content</h2>
            <ul className="list-none p-4 space-y-2 flex flex-col  h-full">
             <Link href="/Dashboard/employer/profile">   <li className="py-1 flex items-center text-text-gray space-x-2"><FiUser /><h1 href="/Dashboard/employer/plan" className=" ">Employer Profile</h1></li></Link>
             <Link href="/Dashboard/employer/post"> <li className="py-1 flex items-center text-text-gray space-x-2"><FiPlus/><a href="/post-job" className=" ">Post a Job</a></li></Link>  
                <li className="py-1 flex items-center text-text-gray space-x-2"><FiBriefcase /><a href="/my-jobs" className=" ">My Jobs</a></li>
                <li className="py-1 flex items-center text-text-gray space-x-2"><FiHeart /><a href="/saved-candidates" className=" ">Saved Candidates</a></li>
                <li className="py-1 flex items-center text-text-gray space-x-2"><FiDollarSign /><a href="/plan-pricing" className=" ">Plan and Pricing</a></li>
                <li className="py-1 flex items-center text-text-gray space-x-2"><FiSettings /><a href="/settings" className=" ">Settings</a></li>
                <li className="mt-auto py-1 flex items-center space-x-2"><FiLogOut /><a href="/logout" className="text-red-500 ">Logout</a></li>
            </ul>
        </div>
    );
}

export default EmployerDrawer;