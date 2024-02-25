import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthenticationContxt } from '../context/AuthenticationContxt'

const Guest = () => {
     const { token } = useContext(AuthenticationContxt)
     if (token) {
          return <Navigate to="/dashboard" />
     }
     return (
          <div className='bg-slate-100 flex justify-center items-center min-h-screen '>
               <Outlet />
          </div>
     )
}

export default Guest