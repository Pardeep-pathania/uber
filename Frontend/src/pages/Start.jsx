import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-[url("https://plus.unsplash.com/premium_photo-1736435070040-c98215ce275e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-no-repeat bg-center h-screen pt-8 flex flex-col justify-between w-full'>
        <img 
         className='w-22 ml-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
        <div className='bg-white  py-5 px-5'>
          <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
          <Link to="/login" className='flex items-center w-full text-xl 
          justify-center bg-black text-white py-3 rounded-lg mt-4'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
