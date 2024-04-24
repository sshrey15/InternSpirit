"use client"
import React, {useState, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa'
import Image from 'next/image'

import {parseCookies} from 'nookies'
import LoginModal from './LoginModal';
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import StudModal from './StudModal';
import EmployerModal from './EmployerModal'



const Searchbar = ({isLoggedIn}) => {
  


   

    return (
        <nav className="flex  items-center justify-between p-5 pt-16 bg-white">
            <div className="text-hero-bg font-bold text-2xl">InternSpirit</div>
            <div className="flex-1 px-4 gap-2 flex items-center">

                <div className="relative w-1/2">
                    <FaSearch className="absolute top-1/2 left-3 font-thin transform -translate-y-1/2 text-hero-bg" />
                    <input className="pl-10 w-full rounded-sm p-2 border" type="text" placeholder="Job title, Company, keyword" />
                </div>
            </div>
            {
                isLoggedIn 
                
                ? (
                    <Image src="/images/user.png" className='rounded-full' alt="profile" width={50} height={50}/>

                ): (
                    <div className="flex gap-1 space-x-4">
            
                <Dialog className="bg-white" t>
                    <DialogTrigger asChild>
                        <button className="bg-white border font-semibold text-hero-bg rounded-sm px-4 py-2">Sign Up</button>
                    </DialogTrigger>
                    <StudModal />
                </Dialog>
                <Dialog className="bg-white cursor-pointer"  >
                    <DialogTrigger asChild>
                        <button className="bg-hero-bg font-semibold text-white rounded-sm px-4 py-2">Post a Job</button>

                    </DialogTrigger>
                    <EmployerModal/>
                </Dialog>
            </div>

                )
            }
            
        </nav>
    )
}

export default Searchbar