import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5
      className="p-1 text-center absolute w-[93%] top-0"
      onClick={() => {
        props.setWaitingForDriver(false);
      }}
    >
      <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
    </h5>

    <div className='flex items-center justify-between'>
    <img
        className="h-16"
        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png"
        alt=""
      />
      <div className='text-right'>
      <h2 className='text-lg font-medium'>Sarthak</h2>
      <h4 className='text-xl font-semibold -mt-1 -mb-1'>CH01 AB 4032</h4>
      <p className='text-sm text-gray-600'>Maruti Suzuki Dzire</p>
      </div>
    </div>

    <div className="flex justify-between items-center flex-col">
      

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

    </div>
  </div>
  )
}

export default WaitingForDriver
