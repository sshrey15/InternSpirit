"use client"
import React from 'react';
import useFetchImage from '../../hooks/imageChange'; // Adjust this path based on your project structure
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const HeroSection = () => {
    const images = [
        '/images/bg4.png',
        '/images/bg5.jpg',
        '/images/bg6.jpeg',
    ];

    const [activeIndex, setActiveIndex] = React.useState(0);
    const totalItems = 6; // Replace with the actual number of items
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((activeIndex + 1) % totalItems);
      }, 3000); // Change slide every 3 seconds
  
      return () => clearInterval(interval);
    }, [activeIndex]);

    const currentImage = useFetchImage(images);

    return (
        <>
            <section id="landing" className="h-[50vh] flex items-center justify-center text-center p-6 relative">
                <div className="absolute inset-0 bg-center bg-cover transition-opacity duration-500 ease-in-out" style={{ backgroundImage: `url(${currentImage})`, opacity: 0.5 }}></div>
                <div className="relative z-10">
                    <h1 className="text-6xl font-bold mb-7 ">Start Your Career with <span className='text-6xl text-purple-500'>Frover</span></h1>
                    <Link href='/openings'>
                        <button variant="default" className="px-4 text-lg bg-gradient-to-r from-[#5B21FF] from-20% rounded-full to-[#8C19FF] hover:bg-purple-600 text-white h-12" size="lg">Search Jobs</button>
                    </Link>
                </div>
            </section>

            {/* <section id="culture" className="mb-6 p-10  flex md:p-10 bg-gray-100 flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center">

                <div className="w-full m-5 lg:w-1/2">
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/QQgXTLutn7s"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="w-full lg:w-1/2 ">
                    <button className='bg-[#D9D9D9] p-3 pl-4 pr-4  m-4'>ABOUT</button>
                    <h2 className="text-3xl font-bold m-4 text-[#5B21FF] mb-2">Who we are?</h2>
                    <p className='m-5'>
                        At Frover, our culture is a vibrant tapestry woven with diversity, collaboration, and passion. We celebrate each
                        other successes, big or small, and foster an environment of continuous learning and growth. Integrity is at the core
                        of everything we do, and we take pride in our transparency and honesty. Together, we embrace the power of micro-influencers,
                        driving innovation and delivering exceptional results for our clients. Our commitment to giving back to the community and having
                        fun along the way ensures that every day at Frover is fulfilling and rewarding.
                        Join us in shaping the future of influencer marketing with positivity, teamwork, and dedication.
                    </p>
                </div>
            </section> */}

            <section id="jobs" className="mb-6 md:p-10 p-5 place-content-center ">
                <h2 className="text-3xl text-center   font-bold m-4 text-[#5B21FF] mb-2">Latest Internships</h2>
                <p className='text-sm font-thin text-center'>get started</p>
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">




                    <div className="md:w-full grid grid-cols-1 p-6 md:p-20  -mt-10 md:grid-cols-3 gap-8">
                        <div className="bg-white border p-6 animate-PopOut-1  shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Team Work</h3>


                        </div>
                        <div className="bg-white border p-6 animate-PopOut-2  shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Work Remotely/In-office</h3>

                        </div>
                        <div className="bg-white border p-6 animate-PopOut-3 shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Team Work</h3>
                        </div>
                        <div className="bg-white border p-6 animate-PopOut-4 shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Work Remotely/In-office</h3>
                        </div>
                        <div className="bg-white border p-6 animate-PopOut-5 shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Learning Opportunity</h3>
                        </div>
                        <div className="bg-white border animate-PopOut-6 p-6  shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Upgrade Skills</h3>

                        </div>
                    </div>
                </div>
            </section>

            <section id="jobs" className="mb-6 md:p-10 p-5 place-content-center ">
                <Carousel 
                activeIndex={activeIndex}
               
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-sm"
                >
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="bg-white border p-6  shadow-md text-center">
                                <h3 className="text-xl font-bold mb-2">Team Work</h3>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="bg-white border p-6  shadow-md text-center">
                                <h3 className="text-xl font-bold mb-2">Team Work</h3>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="bg-white border p-6  shadow-md text-center">
                                <h3 className="text-xl font-bold mb-2">Team Work</h3>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="bg-white border p-6  shadow-md text-center">
                                <h3 className="text-xl font-bold mb-2">Team Work</h3>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="bg-white border p-6  shadow-md text-center">
                                <h3 className="text-xl font-bold mb-2">Team Work</h3>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                            <div className="bg-white border p-6  shadow-md text-center">
                                <h3 className="text-xl font-bold mb-2">Team Work</h3>
                            </div>
                        </CarouselItem>
                        {/* ...rest of your divs... */}
                    </CarouselContent>
            
                </Carousel>

            </section>




        </>
    );
}

export default HeroSection;