import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

    const navigate = useNavigate()

  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')


    const {captain, setCaptain} = React.useContext(CaptainDataContext)
  
    const submitHandler = async(e) => {
      e.preventDefault()
  
      const captainData = {
        fullname:{
          firstname: firstName,
        lastname: lastName
        },
  
        email: email,
        password: password,

        vehicle:{
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType
        }
        
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData )

      console.log(captainData)


      if(response.status === 201){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
  
      
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('') 
      setVehicleType('')
    }


  return (
    <div className='py-5 px-5 flex flex-col justify-between h-screen'>
   
   <div>
   <img 
            className='w-18 mb-6' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
   
           <form onSubmit={(e)=>{
            submitHandler(e)
           }}>

          <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
          
          <div className='flex gap-3 mb-5'>
   
   <input type="text"
   className='bg-[#eeeeee] w-1/2 rounded px-4 border text-lg placeholder:text-base py-2'
   placeholder='Firstname'
    required
    value={firstName}
    onChange={(e)=> setFirstName(e.target.value) }
    />


   <input type="text"
   className='bg-[#eeeeee] w-1/2 rounded px-4 border text-lg placeholder:text-base py-2'
   placeholder='Lastname'
    value={lastName}
    onChange={(e)=> setLastName(e.target.value) }
    />



          </div>

               <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
   
               <input type="email"
               className='bg-[#eeeeee] rounded px-4 border w-full text-lg placeholder:text-base mb-5 py-2'
               placeholder='email@example.com' required
               value={email}
               onChange={(e)=> setEmail(e.target.value) }
               />
   
               <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
   
               <input
               className='bg-[#eeeeee] rounded px-4 
               border w-full text-lg py-2 placeholder:text-base mb-7'
              required
               type="password"
                placeholder='password' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>


          <h3 className='text-lg font-medium mb-2'>Vehicle Details</h3>

          <div className='flex gap-3 mb-5'>
            <input type="text"
              className='bg-[#eeeeee] w-1/2 rounded px-4 border text-lg placeholder:text-base py-2'
              placeholder='Vehicle Color'
              required
              value={vehicleColor}
              onChange={(e)=> setVehicleColor(e.target.value)}
            />

            <input type="text"
              className='bg-[#eeeeee] w-1/2 rounded px-4 border text-lg placeholder:text-base py-2'
              placeholder='Vehicle Plate Number'
              required
              value={vehiclePlate}
              onChange={(e)=> setVehiclePlate(e.target.value)}
            />
          </div>

          <div className='flex gap-3 mb-5'>
            <select 
              className='bg-[#eeeeee] w-1/2 rounded px-4 border text-lg py-2'
              value={vehicleType}
              onChange={(e)=> setVehicleType(e.target.value)}
              required
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="bike">Bike</option>
            </select>

            <input type="number"
              className='bg-[#eeeeee] w-1/2 rounded px-4 border text-lg placeholder:text-base py-2'
              placeholder='Seating Capacity'
              required
              value={vehicleCapacity}
              onChange={(e)=> setVehicleCapacity(e.target.value)}
            />
          </div>

   
               <button className='bg-[#111] text-white font-semibold rounded px-4  w-full text-lg py-2 mb-3'>Create Captain Account</button>
   
               
           </form>
           <p className='text-center'>Already have an account? <Link
           to="/captain-login" className='text-blue-600'>Login here</Link></p>
   </div>
   
   <div>
      <p className='text-[10px] mt-6 text-gray-700 leading-tight'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
           </div>
      
       </div>
  )
}

export default CaptainSignup
