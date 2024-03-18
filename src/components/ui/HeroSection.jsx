"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Marquee from "react-marquee-slider";
import times from "lodash/times";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Fade, Zoom } from 'react-awesome-reveal';
import CountUp from 'react-countup';



import VisibilitySensor from 'react-visibility-sensor';
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
            <section className="relative flex opacity-50 items-center justify-center h-screen">
                <div className="absolute inset-0 z-10 bg-white opacity-50"></div>
                <div className="absolute inset-0 z-0">

                </div>
            </section>





            <section className="flex flex-col items-center  p-10 space-y-10 relative">


                <div className="absolute h-full w-px font-bold bg-blue-500 left-1/2 -mt-10">

                </div>



                <Zoom>
                    <div className="step items-center text-center grid grid-cols-2">
                        <h3 className="text-9xl font-extrabold mb-2 text-blue-200 opacity-50 relative">
                            01
                            <p className="font-bold z-10 opacity-100 font-mono text-gray-900 absolute inset-0 flex  items-center text-3xl justify-center">SignUp /Login </p>
                        </h3>                        <p className="text-gray-600 text-left p-5 font-semibold  z-10 relative">This is the first step.
                            SignUp with your credentials then Login with your collegeId and
                        </p>
                    </div>
                </Zoom>
                <Zoom>
                    <div className="step grid grid-cols-2 items-center text-center ">
                        <p className="text-gray-600 font-semibold text-left p-5 z-10 relative">This is the second step. Nullam vitae semper ipsum. Suspendisse a congue velit. Proin at placerat risus.</p>

                        <h3 className="text-9xl font-extrabold mb-2 text-blue-200 opacity-50 relative">02
                            <p className="font-bold z-10   font-mono  text-gray-900 absolute inset-0 flex items-center text-3xl justify-center">Search Internships </p>

                        </h3>
                    </div>
                </Zoom>
                <Zoom>
                    <div className="step grid grid-cols-2 items-center text-center">
                        <h3 className="text-9xl font-bold mb-2 text-blue-200 opacity-50 relative">03
                            <p className="font-bold z-10 font-mono      text-gray-900 absolute inset-0 flex items-center text-3xl justify-center">Apply for Internships </p>

                        </h3>
                        <p className="text-gray-600 text-left p-5 z-10 relative">This is the third step. Vivamus commodo odio a dolor placerat, vel efficitur massa tincidunt. Donec at dapibus.</p>
                    </div>
                </Zoom>
            </section>



            <section id="jobs" className="bg-blue-50 md:p-10 p-5 place-content-center">
                <div className='relative'>
                    <h2 className="text-7xl text-center font-extrabold  opacity-50 m-4 text-blue-200 mb-2 relative">Latest Internships
                    </h2>
                    <p className="font-bold z-10  font-mono underline opacity-70 cursor-pointer    text-gray-900 absolute inset-0 flex items-center text-2xl justify-center">Apply now </p>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
                    <div className="md:w-full grid grid-cols-1 p-6 md:p-20 -mt-10 md:grid-cols-3 gap-8">
                        {data.map((item, index) => (
                            <Fade duration={1000} key={index}>
                                <div className={`bg-white border p-6 ${item.animation} shadow-md text-center`}>
                                    <h3 className="text-xl font-mono     font-bold mb-2">{item.title}</h3>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
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