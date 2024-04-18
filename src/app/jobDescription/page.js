import React from 'react'
import Image from 'next/image'
import Description from '@/components/ui/description'


const page = () => {
  return (
    <div>
       <div className='border-2 border-gray-200 mx-12 mt-4 h-60' >
       <Image src="/images/DescriptionBg.jpg" alt="img" width={300}
      height={300} objectFit='cover'  />
       </div>

       <Description/>
    </div>
  )
}

export default page
