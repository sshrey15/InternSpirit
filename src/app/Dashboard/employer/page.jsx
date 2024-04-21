import AuthGuard from '@/utils/AuthGuard'
import React from 'react'
import EmployerDrawer from '../components/EmployerDrawer'

const page = () => {
  return (
    <AuthGuard redirect="/Login/employer">
      
      
    </AuthGuard>
  )
}

export default page