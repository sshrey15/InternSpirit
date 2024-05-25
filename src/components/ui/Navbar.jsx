"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { destroyCookie, parseCookies } from 'nookies';
import Searchbar from './Searchbar';
import { useAuthContext } from '@/context/AuthContext';




const Navbar= () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isLoggedIn, setIsLoggedIn } = useAuthContext();
    const cookies = parseCookies();

    useEffect(() => {
        if (cookies.applicantCookie || cookies.employerCookie) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      }, []);

    let dashboardLink = '/Dashboard/student';
    if (cookies.employerCookie) {
        dashboardLink = '/Dashboard/employer/profile';
    }

  
    const Logout = async () => {
        try {
          if (cookies.applicantCookie) {
            const response = await fetch('/api/auth/applicant/logout');
            const data = await response.json();
            console.log(data);
            destroyCookie(null, 'applicantCookie', { path: '/' });
          } else if (cookies.employerCookie) {
            const response = await fetch('/api/auth/employer/logout');
            const data = await response.json();
            console.log(data);
            destroyCookie(null, 'employerCookie', { path: '/' });
          }
      
          setIsLoggedIn(false);
        } catch (error) {
          console.error('Error:', error);
        }
      };








    return (
        <>
            <nav className="fixed w-full h-10 bg-custom-gray text-text-gray z-50 flex items-center">
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

                            <div className="hidden text-text-gray sm:block sm:ml-6">
                                <div className="flex space-x-9 ">
                                {
                                    !isLoggedIn ? (
                                             <Link href="/" className=" hover:text-hero-bg  px-3 py-2 rounded-md text-sm font-medium">Home</Link>

                                        ) : (
                                            <Link href="/" className=" hover:text-hero-bg  px-3 py-2 rounded-md text-sm font-medium">Home</Link>

                                        )
                                }

                                    <Link href={dashboardLink} className=" hover:text-hero-bg px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                                    <a href="#" className="hover:text-hero-bg  px-3 py-2 rounded-md text-sm font-medium">Contest</a>
                                    <a href="#" className=" hover:text-hero-bg px-3 py-2 rounded-md text-sm font-medium">Customer Support</a>
                                    {
                                        isLoggedIn ? (
                                            <h1 onClick={Logout} className=" hover:text-hero-bg px-3 py-2 cursor-pointer rounded-md text-sm font-medium">Logout</h1>
                                        ) : (
                                            <Link href={`/Login/student/123`} className=" hover:text-hero-bg px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                                        )
                                    }

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
            <Searchbar isLoggedIn={isLoggedIn} />

        </>
    );
}

export default Navbar;