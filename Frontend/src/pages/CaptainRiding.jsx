import React from 'react'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
  return (
    <div className='h-screen'>

    <div className='fixed p-6 top-0 w-screen'>
      <img className='w-16'
    src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
      <Link to='/' className='fixed right-2 top-2 h-10 w-10 bg-gray-400 flex items-center justify-center rounded-full'>
      <i className="text-lg font-medium ri-logout-box-r-line"></i>
    </Link>
    </div>

    <div className="h-4/5 ">
<img
  className="h-full w-full object-cover"
  src="https://cdn.sanity.io/images/yiisi04l/production/b84c6d75539481b77370c94fc96bc23c1a5aa976-2898x1947.jpg"
  alt=""
/>
</div>

<div className='h-1/5 p-6 flex items-center justify-between bg-yellow-400 relative'>

<h5
      className="p-1 text-center absolute w-[95%] top-0"
      onClick={() => {
        
      }}
    >
      <i className="text-3xl text-gray-700 ri-arrow-down-wide-line"></i>
    </h5>

<h4 className='text-xl font-semibold'>4 KM away</h4>

<button className="mt-3 px-10 bg-green-900 text-white font-semibold p-3 rounded-lg">
        Complete Ride
      </button>

</div>

</div>
  )
}

export default CaptainRiding
