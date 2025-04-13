import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)

  const ridePopUpPanelRef = useRef(null)
  const confirmRidePopUpPanelRef = useRef(null)

  useGSAP(function(){
    if(ridePopUpPanel){
      gsap.to(ridePopUpPanelRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(ridePopUpPanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[ridePopUpPanel])

  useGSAP(function(){
    if(confirmRidePopUpPanel){
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePopUpPanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[confirmRidePopUpPanel])

  return (
    <div className='h-screen'>

    <div className='fixed p-6 top-0 w-screen'>
      <img className='w-16'
    src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
      <Link to='/' className='fixed right-2 top-2 h-10 w-10 bg-gray-400 flex items-center justify-center rounded-full'>
      <i className="text-lg font-medium ri-logout-box-r-line"></i>
    </Link>
    </div>

    <div className="h-3/5 ">
<img
  className="h-full w-full object-cover"
  src="https://cdn.sanity.io/images/yiisi04l/production/b84c6d75539481b77370c94fc96bc23c1a5aa976-2898x1947.jpg"
  alt=""
/>
</div>

<div className='h-2/5 p-6'>
<CaptainDetails/>
</div>

<div ref={ridePopUpPanelRef} className="w-full fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">

   <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>

<div ref={confirmRidePopUpPanelRef} className="w-full fixed h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">

   <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>

      </div>

</div>
  )
}

export default CaptainHome
