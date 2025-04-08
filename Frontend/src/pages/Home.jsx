import React, { useRef, useState } from "react";

import {useGSAP} from '@gsap/react'

import gsap from'gsap';
import 'remixicon/fonts/remixicon.css'

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const [panelOpen, setPanelOpen] = useState(false)

  const panelRef = useRef(null)

  const panelCloseRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        // opacity:1
      })
      gsap.to(panelCloseRef.current,{
        opacity: 1
      })

    }else{
      gsap.to(panelRef.current,{
        height:'0',
        // opacity:0
      })
      gsap.to(panelCloseRef.current,{
        opacity: 0
      })
    }
  },[panelOpen])


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

        <div ref={panelRef} className="bg-red-500 h-0"></div>
      </div>
    </div>
  );
};

export default Home;
