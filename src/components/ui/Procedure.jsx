import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoIosCloudUpload } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import Image from 'next/image'

const Procedure = () => {
    return (
        <>


            <section className='relative grid grid-cols-4 gap-4 p-4'>
                <div className='flex flex-col p-5 items-center space-y-2'>
                    <div className='bg-white p-3     rounded-full'>
                        <CiUser className='text-hero-bg  ' size={40} />


                    </div>
                    <h1 className='font-semibold'>Create Account</h1>
                    <p className='text-text-gray font-thin'>Register to make a account</p>
                </div>
                <div className='absolute inset-x-0 top-0 left-40     '>
                    <Image src="/procedure/Arrows.png" alt="Arrow" width={200} height={200} />
                </div>
                <div className='flex flex-col rounded-md p-5 items-center space-y-2'>
                    <div className='bg-hero-bg p-3      rounded-full'>
                        <IoIosCloudUpload className='text-white  ' size={40} />


                    </div>
                    <h1 className='font-semibold'>Upload CV/Resume</h1>
                    <p className='text-text-gray font-thin'>Upload your CV to apply</p>
                </div>
                <div className='absolute inset-x-0 bottom-0  -scale-y-100 left-[430px]'>
                    <Image src="/procedure/Arrows.png" className='transform rotateX-180 rotateY-180' alt="Arrow" width={200} height={200} />
                </div>
                <div className='flex flex-col p-5 items-center space-y-2'>
                    <div className='bg-white p-3      rounded-full'>
                        <CiSearch className='text-hero-bg  font-thin ' size={40} />


                    </div>
                    <h1 className='font-semibold'>Find Suitable Internships</h1>
                    <p className='text-text-gray font-thin '>Find internships and apply</p>
                </div>
                <div className='flex flex-col  rounded-md items-center p-5 space-y-2'>
                    <div className='bg-hero-bg p-3      rounded-full'>
                        <CiCircleCheck className='text-white    font-thin ' size={40} />


                    </div>
                    <h1 className='font-semibold '>Apply Job</h1>
                    <p className='text-text-gray font-thin'>Apply for the job</p>
                </div>
                <div className='absolute inset-x-0 top-0 left-[680px]'>
                    <Image src="/procedure/Arrows.png" className='transform rotateX-180 rotateY-180' alt="Arrow" width={200} height={200} />
                </div>

            </section>
        </>
    )
}

export default Procedure