import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault()
  
      setUserData({
        fullName:{
          firstName: firstName,
        lastName: lastName
        },
  
        email: email,
        password: password,
        
      })
  
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
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
   
               <button className='bg-[#111] text-white font-semibold rounded px-4  w-full text-lg py-2 mb-3'>Login</button>
   
               
           </form>
           <p className='text-center'>Already have an account? <Link
           to="/login" className='text-blue-600'>Login here</Link></p>
   </div>
   
   <div>
      <p className='text-[10px] text-gray-700 leading-tight'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
           </div>
      
       </div>
  )
}

export default CaptainSignup
