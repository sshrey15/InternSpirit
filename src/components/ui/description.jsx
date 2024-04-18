import React from 'react'
import Image from 'next/image'

const Description = () => {
  return (
    <div>
        {/* Description Header */}
        <div className='border-2 border-black p-8 mx-12 flex justify-between'>

        <div className='flex items-center ' >
        <Image src="/images/GLogo.png" alt="img" width={40} height={20} className='rounded-full'/>
            <div>
            <h1>GOOGLE</h1>
            <p className='font-light text-xs'>Information Technology</p>
            </div>
       </div>

       <div>
        <button className='text-white bg-blue-800 p-2 rounded-sm'>View Open Position</button>
       </div>
        </div>
        
        {/* CONTENT */}
        <div className='flex mx-8 mt-4'>
             {/* LHS Description */}
      <div className=' p-4'>
        <p className='font-semibold'>Description</p>
        <div><p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus corporis, voluptate minima corrupti ducimus quam consequatur optio ipsam, necessitatibus quisquam totam tempora deserunt eum recusandae veritatis rem modi eius odio? Minus dolorem est repellat! Nisi incidunt quibusdam nemo recusandae pariatur laborum minima placeat corrupti commodi. Modi unde repudiandae distinctio voluptatibus nisi eius vero deserunt praesentium quibusdam quam, repellendus in incidunt possimus aliquid laudantium ducimus quas dolorem iure eum voluptatum quae? Tempora fugit quidem id, vitae iste, ex explicabo quasi laborum possimus magni optio alias, error in tempore. Voluptatum repudiandae necessitatibus ullam culpa sed dolor illum amet debitis vel sit consectetur illo officiis unde totam blanditiis alias, in repellat commodi accusantium qui eos aliquid. Distinctio molestias cum cumque ex amet provident commodi quod corrupti perspiciatis at. Consequatur facere molestiae voluptate eaque reprehenderit necessitatibus repellendus. Voluptatum corrupti repudiandae, numquam beatae aliquam provident quo similique aperiam mollitia a quia quisquam illo at reiciendis corporis et voluptas aliquid ut nisi autem nemo exercitationem quae! Saepe laudantium rerum sint ullam at eaque cum a ducimus magni recusandae, earum voluptates, necessitatibus blanditiis explicabo labore enim accusamus, rem atque placeat. Laudantium, minus. Harum quaerat sapiente dolorum ipsam officiis neque, delectus in mollitia natus quidem laudantium laboriosam culpa perferendis laborum voluptate! Dolore aperiam.</p></div>
      </div>

      {/* RHS Date Time and Contact Info */}
      <div className='border-2 p-4 '>
        <div>
            <h1>Date and Time</h1>
        </div>

        <div>Contact Info</div>
      </div>

        </div>
       
    </div>
  )
}

export default Description
