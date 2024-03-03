"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import LoginModal from './LoginModal';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import StudModal from './StudModal';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white text-black z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/">
                            <h1 className="flex underline font-bold text-blue-300">Placement<p className="text-gray-600">pakka.com</p></h1>

                            </Link>

                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-9">
                                <a href="#" className=" text-gray-400 px-3 py-2 rounded-md text-sm font-medium">Internships</a>
                                <a href="#" className=" text-gray-400 px-3 py-2 rounded-md text-sm font-medium">Courses</a>
                                <div className="mr-30      flex space-x-4">
                                    <Dialog className="bg-white cursor-pointer"  >
                                        <DialogTrigger asChild>
                                    <h4  className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</h4>
                                        </DialogTrigger>
                                        <LoginModal/>
                                    </Dialog>
                                    <Dialog className="bg-white" t>
                                        <DialogTrigger asChild>
                                            <h4 className="text-gray-300 hover:bg-gray-700 cursor-pointer hover:text-white px-3 py-2 rounded-md text-sm font-medium">Student  Signup</h4>
                                        </DialogTrigger>
                                       <StudModal/>
                                    </Dialog>                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Employer Signup</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;