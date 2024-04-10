"use client"
import React, { useEffect, useState } from 'react';

import { FaSearch } from 'react-icons/fa'
import Marquee from "react-marquee-slider";
import times from "lodash/times";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Fade, Zoom } from 'react-awesome-reveal';
import CountUp from 'react-countup';



import VisibilitySensor from 'react-visibility-sensor';
import PopularVacancies from './PopularVacancies';
import Procedure from './Procedure';

const data = [
    { title: 'Team Work', animation: 'animate-PopOut-1' },
    { title: 'Work Remotely', animation: 'animate-PopOut-2' },
    { title: 'Team Work', animation: 'animate-PopOut-3' },

];



const HeroSection = () => {
    const logos = [

        '/logos/rit.jpg',
        '/logos/gec.png',
        '/logos/dbce.png',
        '/logos/pcce.png',
        '/logos/cho.png',
        '/logos/damo4.png',
    ];
    const comp = [
        '/images/comp1.png',
        '/images/comp2.png',
        '/images/comp3.jpg',
        '/images/comp4.jpeg',
        '/images/comp5.png',
    ]

    const [isClient, setIsClient] = useState(false);

    const [activeIndex, setActiveIndex] = useState(0);
    const totalItems = 6; // Replace with the actual number of items

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [totalItems]);


    useEffect(() => {
        setIsClient(true);
    }, []);

    const [ref, inView] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
    });

    const [companies, setCompanies] = useState(0);
    const [colleges, setColleges] = useState(0);
    const [students, setStudents] = useState(0);

    const targetCompanies = 50;
    const targetColleges = 6;
    const targetStudents = 1000;



    useEffect(() => {
        if (inView) {
            const interval = setInterval(() => {
                if (companies < targetCompanies) setCompanies(prev => prev + 5);
                if (colleges < targetColleges) setColleges(prev => prev + 2);
                if (students < targetStudents) setStudents(prev => prev + 20);
            }, 1);

            return () => clearInterval(interval);
        }
    }, [inView, companies, colleges, students]);

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
                    <p className='text-custom-bg text-sm mt-2 flex gap-2'>
                        Suggestion: <p className='text-text-gray'>
                            <ul className='flex cursor-pointer'>
                                <li className='hover:text-hero-bg'>Software Developer,</li>
                                <li className='hover:text-hero-bg'>Web Developer,</li>
                                <li className='hover:text-hero-bg '>Graphic Designer,</li>
                            </ul>
                        </p>

                    </p>

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




            <section ref={ref} className="p-20">
                <div className='relative'>
                    <h2 className="text-7xl opacity-10 text-center font-bold mb-10 text-gray-800">Our Numbers</h2>
                    <p className="font-bold z-10  font-mono underline opacity-70    text-gray-900 absolute inset-0 flex items-center text-2xl justify-center">We are growing</p>

                </div>
                <div className="flex justify-around content-center">

                    <div >


                        <VisibilitySensor>
                            {({ isVisible }) => (
                                <h3 className="text-5xl text-center font-bold mb-2 text-blue-600">
                                    <CountUp end={isVisible ? companies : 0} />
                                </h3>
                            )}
                        </VisibilitySensor>
                        <p className="text-gray-600 text-center">Companies</p>
                    </div>
                    <div >
                        <VisibilitySensor>
                            {({ isVisible }) => (
                                <h3 className="text-5xl  text-center  font-bold mb-2 text-blue-600">
                                    <CountUp end={isVisible ? colleges : 0} />+
                                </h3>
                            )}
                        </VisibilitySensor>
                        <p className="text-gray-600 text-center">Colleges</p>
                    </div>
                    <div>
                        <VisibilitySensor>
                            {({ isVisible }) => (
                                <h3 className="text-5xl  text-center  font-bold mb-2 text-blue-600">
                                    <CountUp end={isVisible ? students : 0} />
                                </h3>
                            )}
                        </VisibilitySensor>
                        <p className="text-gray-600 text-center">Students</p>
                    </div>
                </div>
            </section>

            <section id="jobs" className=" bg-blue-50 md:pl-60 md:pr-60 p-5  flex flex-col ">
                <div className='relative -mt-5  '>
                    <h2 className="text-7xl text-center font-extrabold  opacity-50 m-4 text-blue-200 mb-2 relative">Our Partners
                    </h2>
                    <p className="font-bold z-10  font-mono underline opacity-70 cursor-pointer    text-gray-900 absolute inset-0 flex items-center text-2xl justify-center">they trust us </p>
                </div>
                <div className='mt-10'>
                    {isClient && (
                        <Marquee velocity={20}>
                            {times(logos.length, Number).map(id => (
                                <div key={`marquee-example-${id}`} style={{ width: "200px", marginRight: "40px" }} className="flex items-center justify-center">
                                    <Image src={logos[id]} alt={`Logo ${id + 1}`} width={100} height={100} />
                                </div>
                            ))}
                        </Marquee>


                    )}
                </div>
                <div className='mt-10'>
                    {isClient && (
                        <Marquee velocity={20} direction='right'>
                            {times(comp.length, Number).map(id => (
                                <div key={`marquee-example-${id}`} style={{ width: "200px", marginRight: "40px" }} className="flex items-center justify-center">
                                    <Image src={comp[id]} alt={`Logo ${id + 1}`} width={100} height={100} />
                                </div>
                            ))}
                        </Marquee>


                    )}
                </div>




            </section>









        </>
    );
}

export default HeroSection;