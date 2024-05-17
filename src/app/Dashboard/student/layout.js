import React from 'react'
import StudentDrawer from '../components/StudentDrawer'
import AuthGuard from '@/utils/AuthGuard'

const layout = ({children}) => {
  return (
    <AuthGuard redirect="/Login/student/123">
    <div className="relative">
      <div className="absolute z-10 w-full">
        <StudentDrawer/>
      </div>
      {children}
    </div>
    </AuthGuard>
    
  )
}

export default layout