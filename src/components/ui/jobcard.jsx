"use client"
import React from 'react';
import { differenceInDays } from 'date-fns';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import Image from 'next/image';
import { CiLocationOn } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";


const JobCard = ({ job }) => {
  const daysAgo = differenceInDays(new Date(), new Date(job.postedAt));

  return (
    <Card className="mt-10   h-40  ">
      <hr className='text-purple-500'/>
      <CardHeader className="flex gap-3 align-middle">
        <div className='flex gap-10'>
          
          <CardTitle className="text-sm font-bold hover:text-purple-500 cursor-pointer">{job.title}</CardTitle>
        </div>
      </CardHeader>
      <hr />
      <CardContent className="mt-2  flex justify-between">
         <div className='text-xs text-orange-600 font-bold bg-slate-100'>{job.type}</div>
        <p className='text-xs font-normal text-gray-400'>Salary: $20,000 - $25,000</p>
      </CardContent>
      <CardFooter>
        
      <div className='grid grid-cols-3 gap-x-20'>
        <div className='gap-20 flex    '>
            <div><Image src="/images/GLogo.png" alt="img" width={40} height={40} className='rounded-full'/></div>
            </div>
            
       <div className='flex justify-between items-end   '>
        <div>
        <p className='text-sm font-semibold'>{job.company.name}</p>
        <div className='flex'>
        <CiLocationOn />
          <p className='text-xs  font-light text-gray-500'>
            {job.company.location}</p>
        </div>
        </div>
        </div>
        
           <div className='' > 
           <button className='hover:bg-gray-200 rounded-sm p-2' ><CiBookmark /></button>
            </div>
            </div>   
           
            
       

        
      </CardFooter>
    </Card>
  );
};

export default JobCard;