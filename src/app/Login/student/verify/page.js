"use client"
import React from 'react';
import { MdMarkEmailRead } from "react-icons/md";
import {Button} from "@/components/ui/button"
import  Link  from 'next/link';
import {parseCookies} from 'nookies';


const Page = () => {
  const token = parseCookies().applicant_signUp_Cookie;
  return (
    <>
      <div className="flex justify-center  items-center h-screen">
        <div className="text-center border p-10">
          <div className='flex justify-center items-center gap-4'>
            <h1 className="text-3xl font-bold">Verify your email</h1>
            <MdMarkEmailRead className='text-green-500 text-3xl' />
          </div>
          <p className="text-gray-600">
            We have sent a verification link to your email address. 
            Please verify your email to continue.
          </p>
       
         
        </div>
      </div>
    </>
  );
}

export default Page;