
import React from 'react';

import { FaSearch } from 'react-icons/fa'

import Image from "next/image";


import PopularVacancies from './PopularVacancies';
import Procedure from './Procedure';



const HeroSection = () => {
   

    return (
        <>
            <section className="relative bg-custom-gray flex  justify-around items-center  h-screen p-40">
                <div className="grid grid-cols-1 gap-2">
                    <p className='text-black font-semibold w-10/12 text-4xl max-w-xl'>
                        Find Internships that suits your interest & skills.
                    </p>
                    <p className='text-text-gray text-sm w-10/12 mt-4'>
                        Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
                    </p>
                    <div className="relative w-10/12 flex">
                        <FaSearch className="absolute top-1/2 left-3 font-thin transform -translate-y-1/2 text-hero-bg" />
                        <input className="pl-10 w-full rounded-sm p-4 border mr-2" type="text" placeholder="Job title, Company, keyword" />
                        <button className="bg-hero-bg absolute right-4 rounded-sm top-2 font-semibold justify-center text-white px-2 py-2">Find a Job</button>
                    </div>
                

                </div>




                <div className="ml-auto">
                    <Image src="/images/hero.png" alt='shrey' width={500} height={500} />
                </div>
            </section>



            <section className="flex flex-col   p-20 space-y-10 relative">
            
                <PopularVacancies/>
            </section>
            
            <section className="flex flex-col justify-center items-center  bg-custom-gray   p-20 space-y-10 relative">
            <h1 className='font-bold items-center justify-center pl-10 text-3xl'>How InternSpirit Works</h1>
                <Procedure/>
            </section>





        </>
    );
}

export default HeroSection;