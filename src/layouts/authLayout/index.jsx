import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Background from "../../assets/icons/login-background.svg"

const AuthLayout = () => {
  return (
    // <div className=''>
      <div
          style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}
          className='w-full h-screen opacity-80 overflow-x-hidden' 
          loading="lazy"
      >
        <div>
          <Header />
        </div>
        <div className='flex z-10 justify-center '>
          <Outlet />
        </div>
      </div>
    // </div>
  )
}

export default AuthLayout