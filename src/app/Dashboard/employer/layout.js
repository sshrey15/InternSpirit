import React from 'react'
import EmployerDrawer from '../components/EmployerDrawer'
import AuthGuard from '@/utils/AuthGuard'
import JobpostForm from '../components/JobpostForm'

const layout = ({children}) => {
  return (
    <AuthGuard redirect="/Login/employer">
    <div 
    className="relative">
      <div className="absolute z-10 w-full">
        <EmployerDrawer/>
      </div>
      {
        
      children
      

      

      
      }   
       </div>
    </AuthGuard>
    
  )
}

export default layout