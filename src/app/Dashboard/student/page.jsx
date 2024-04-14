
import React from 'react'

import AuthGuard from '@/utils/AuthGuard'
const Page = () => {

    return (
        <AuthGuard redirect="/Login/student/123">
        <div>
            <h1>Page</h1>
        </div>
        </AuthGuard>
    )
}

export default Page