"use client"
import React from 'react'
import { FaSearch } from 'react-icons/fa'
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


const Searchbar = () => {
    return (
        <nav className="flex items-center justify-between p-5 pt-16 bg-white">
            <div className="text-hero-bg font-bold text-2xl">InternSpirt</div>
            <div className="flex-1 px-4 gap-2 flex items-center">

                <div className="relative w-1/2">
                    <FaSearch className="absolute top-1/2 left-3 font-thin transform -translate-y-1/2 text-hero-bg" />
                    <input className="pl-10 w-full rounded-sm p-2 border" type="text" placeholder="Job title, Company, keyword" />
                </div>
            </div>
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
                    <LoginModal />
                </Dialog>
            </div>
        </nav>
    )
}

export default Searchbar