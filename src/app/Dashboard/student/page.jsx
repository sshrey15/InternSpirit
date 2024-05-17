
import React from 'react'
import StudentProfileHeader from '../components/StudentProfileHeader'

import AuthGuard from '@/utils/AuthGuard'
const Page = () => {

    return (
        <AuthGuard redirect="/Login/student/123">
        <div className='ml-72 p-5'>
            <StudentProfileHeader/>

        </div>
        </AuthGuard>
    )
}

export default Page