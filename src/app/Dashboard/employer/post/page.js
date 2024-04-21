"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Loading from '@/app/loading'
import CollegeCard from '../../components/CollegeCard'
import BarGraph from '../../components/BarGraph'
import SkillBarGraph from '../../components/BarGraph'


const Page = () => {
  const [colleges, setColleges] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [skill, setSkill] = useState('');

  const handleInputChange = (e) => {
    setSkill(e.target.value);
  }

  useEffect(() => {
    fetch('/api/college', {cache: 'default'})   
      .then(response => response.json())
      .then(data => {
        if (data.message === 'error' && data.err === 'No subscription found' && data.status === 404) {
            
          router.push('/Dashboard/employer/subscription');
            
        } else {
            console.log("data proof")
            console.log(data.colleges);
          setColleges(data.colleges);
          
            setIsLoading(false);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });

  }, []);

  if (isLoading) {
    return <div><Loading/></div>;
  }

  return (
    <>
     <div className='ml-72 w-full'>
      <input type="text" value={skill} onChange={handleInputChange} placeholder="Enter a skill" className='p-4 border w-3/4' />
      <SkillBarGraph className="mt-10" colleges={colleges} skill={skill} />
    </div>

    <div className='ml-72'>
        
        {colleges.map((college, index) => (
  <CollegeCard key={index} college={college} />
))}
    </div>
    </>
  );
}

export default Page;