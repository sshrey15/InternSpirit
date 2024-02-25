"use client"
import React, { useEffect, useState } from 'react';
import useFetchImage from '../../hooks/imageChange'; // Adjust this path based on your project structure
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
    { title: 'Work Remotely/In-office', animation: 'animate-PopOut-2' },
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
    const images = [
        '/images/bg4.png',
        '/images/bg5.jpg',
        '/images/bg6.jpeg',
    ];
    const [isClient, setIsClient] = useState(false);

    const [activeIndex, setActiveIndex] = useState(0);
    const totalItems = 6; // Replace with the actual number of items

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [totalItems]);

    const currentImage = useFetchImage(images);
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



            <section className="flex flex-col items-center  p-10 space-y-10 relative">

                <div className="absolute h-full w-px font-bold bg-blue-500 left-1/2"></div>

                <Zoom>
                    <div className="step items-center text-center grid grid-cols-2">
                        <h3 className="text-9xl font-extrabold mb-2 text-blue-200 opacity-50 relative">
                            01
                            <p className="font-bold z-10 opacity-100 text-gray-900 absolute inset-0 flex  items-center text-3xl justify-center">SignUp /Login </p>
                        </h3>                        <p className="text-gray-600 text-left p-5  z-10 relative">This is the first step.
                            SignUp with your credentials then Login with your collegeId and
                        </p>
                    </div>
                </Zoom>
                <Zoom>
                    <div className="step grid grid-cols-2 items-center text-center ">
                        <p className="text-gray-600 text-right p-5 z-10 relative">This is the second step. Nullam vitae semper ipsum. Suspendisse a congue velit. Proin at placerat risus.</p>

                        <h3 className="text-9xl font-extrabold mb-2 text-blue-200 opacity-50 relative">02
                            <p className="font-bold z-10     text-gray-900 absolute inset-0 flex items-center text-3xl justify-center">Search Internships </p>

                        </h3>
                    </div>
                </Zoom>
                <Zoom>
                    <div className="step grid grid-cols-2 items-center text-center">
                        <h3 className="text-9xl font-bold mb-2 text-blue-200 opacity-50 relative">03
                            <p className="font-bold z-10     text-gray-900 absolute inset-0 flex items-center text-3xl justify-center">Apply for Internships </p>

                        </h3>
                        <p className="text-gray-600 text-left p-5 z-10 relative">This is the third step. Vivamus commodo odio a dolor placerat, vel efficitur massa tincidunt. Donec at dapibus.</p>
                    </div>
                </Zoom>
            </section>



            <section id="jobs" className="bg-blue-50 md:p-10 p-5 place-content-center">
                <h2 className="text-3xl text-center font-bold m-4 text-blue-700 mb-2">Latest Internships</h2>
                <p className='text-sm font-thin text-center'>get started</p>
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
                    <div className="md:w-full grid grid-cols-1 p-6 md:p-20 -mt-10 md:grid-cols-3 gap-8">
                        {data.map((item, index) => (
                            <Fade duration={1000} key={index}>
                                <div className={`bg-white border p-6 ${item.animation} shadow-md text-center`}>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </section>




            <section ref={ref} className="p-10">
                <h2 className="text-3xl text-center font-bold mb-10 text-gray-800">Our Numbers</h2>
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

            <section id="jobs" className="mb-20 bg-blue-50 md:p-10 p-5 flex flex-col items-center justify-center">
                <h2 className="text-4xl text-center font-bold mb-10">Top colleges trust us</h2>
                {isClient && (
                    <Marquee velocity={70} className="">
                        {times(logos.length, Number).map(id => (
                            <div key={`marquee-example-${id}`} style={{ width: "200px", marginRight: "40px" }} className="flex items-center justify-center">
                                <Image src={logos[id]} alt={`Logo ${id + 1}`} width={100} height={100} />
                            </div>
                        ))}
                    </Marquee>


                )}




            </section>









        </>
    );
}

export default HeroSection;