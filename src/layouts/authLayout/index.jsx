import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const AuthLayout = () => {
  return (
    <div className='overflow-x-hidden'>
      <div>
        <Header />
      </div>
      <div className='flex justify-center '>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout