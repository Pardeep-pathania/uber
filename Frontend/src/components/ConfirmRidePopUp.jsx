import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
  return (
    <div>
    <h5
      className="p-1 text-center absolute w-[93%] top-0"
      onClick={() => {
        props.setRidePopUpPanel(false)
      }}
    >
      <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
    </h5>

    <h3 className="text-2xl font-semibold mb-3">Confirm this ride to Start</h3>

    <div className='flex items-center justify-between p-2 rounded-lg bg-yellow-400'>
      <div className='flex items-center gap-3'>
        <img className='h-12 rounded-full object-cover w-12' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />

            <h2 className='text-lg font-medium'>Harshita Patel</h2>
        </div>
      <h5 className='text-lg font-semibold'>2.2 Km</h5>
    </div>

    <div className="flex justify-between items-center flex-col">
      <img
        className="h-17"
        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png"
        alt=""
      />

      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2 border-gray-500">
          <i className="text-lg ri-map-pin-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm -mt-1 text-gray-600">
              Kankariya Talab, Mohali
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-3 border-b-2 border-gray-600">
        <i className="text-lg ri-map-pin-user-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm -mt-1 text-gray-600">
              Kankariya Talab, Mohali
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-3 ">
        <i className="text-lg ri-currency-fill"></i>
          <div>
            <h3 className="text-lg font-medium">Rs. 180</h3>
            <p className =" text-sm -mt-1 text-gray-600">
             Cash Cash
            </p>
          </div>
        </div>
      </div>

      <Link to='/captain-riding' className="flex justify-center mt-3 w-full bg-green-900 text-white font-semibold p-3 rounded-lg">
        Confirm
      </Link>

      <button onClick={()=>{
          props.setConfirmRidePopUpPanel(false)
          props.setRidePopUpPanel(false)
        
      }} className="mt-2 w-full bg-red-500 text-white font-semibold p-3 rounded-lg">
        Cancel
      </button>

    </div>
  </div>
  )
}

export default ConfirmRidePopUp
