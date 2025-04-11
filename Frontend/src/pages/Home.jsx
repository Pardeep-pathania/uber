import React, { useRef, useState } from "react";

import {useGSAP} from '@gsap/react'

import gsap from'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null)

  const panelRef = useRef(null)

  const panelCloseRef = useRef(null)

  const [vehiclePanel, setVehiclePanel] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        padding:24
        // opacity:1
      })
      gsap.to(panelCloseRef.current,{
        opacity: 1
      })

    }else{
      gsap.to(panelRef.current,{
        height:'0',
        padding:0
        // opacity:0
      })
      gsap.to(panelCloseRef.current,{
        opacity: 0
      })
    }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  },[vehiclePanel])


  return (
    <div className="h-screen relative">
      <img
        className="w-20 absolute left-5 top-5"
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt=""
      />

      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://cdn.sanity.io/images/yiisi04l/production/b84c6d75539481b77370c94fc96bc23c1a5aa976-2898x1947.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-5 bg-white relative">
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false)
          }} className="absolute opacity-0 right-6 top-6 text-xl">
            <i className="ri-arrow-down-wide-line"></i>
             </h5>
          <h2 className="text-2xl font-semibold">Find a trip</h2>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
            onClick={()=>{
              setPanelOpen(true)
            }}
            value={pickup}
            onChange={(e)=>{
              setPickup(e.target.value)
            }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />

            <input

onClick={()=>{
  setPanelOpen(true)
}}

value={destination}
onChange={(e)=>{
  setDestination(e.target.value)
}}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>

      <div ref={vehiclePanelRef} className="w-full fixed z-10 bottom-0 translate-y-full bg-white px-3 py-8">

        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

        <div className="flex mb-2 p-3 w-full border-2 border-gray-300  active:border-black rounded-xl items-center justify-between">
          <img className="h-14" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png" alt="" />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs text-gray-600">Affordable, compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">Rs. 180</h2> 
        </div>

        <div className="flex mb-2 p-3 w-full border-2 border-gray-300  active:border-black rounded-xl items-center justify-between">
          <img className="h-14" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">Moto<span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-medium text-xs text-gray-600">Affordable, bike rides</p>
          </div>
          <h2 className="text-lg font-semibold">Rs. 65</h2> 
        </div>

        <div className="flex mb-2 p-3 w-full border-2 border-gray-300 active:border-black rounded-xl items-center justify-between">
          <img className="h-14" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">UberAuto<span><i className="ri-user-3-fill"></i></span></h4>
            <h5 className="font-medium text-sm">8 mins away</h5>
            <p className="font-medium text-xs text-gray-600">Affordable, auto rides</p>
          </div>
          <h2 className="text-lg font-semibold">Rs. 118</h2> 
        </div>


      </div>

    </div>
  );
};

export default Home;
