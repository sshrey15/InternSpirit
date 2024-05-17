import React from 'react'
import Image from 'next/image'
import { FiEdit, FiFacebook, FiTwitter,FiGithub , FiLinkedin } from 'react-icons/fi';

const StudentProfileHeader = () => {
    return (
        <>
            <div className='bg-white p-4 shadow-sm '>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-5'>
                        <Image src='/images/user.png' alt='hero' width={100} height={100} className=" rounded" />
                        <div>
                            <h1 className='font-bold text-2xl'>John Doe</h1>
                            <p className='text-text-gray'>Student</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center space-y-2'>
                        <div className='flex items-center space-x-5 mb-2'>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
                            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
                        </div>
                        <div className="flex space-c-3">
                            <button className='bg-white text-hero-bg border p-3 rounded-sm'>Update Profile</button>
                            <button className='bg-white text-hero-bg border p-3 rounded-sm'>Update Profile</button>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentProfileHeader