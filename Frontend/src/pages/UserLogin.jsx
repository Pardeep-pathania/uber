import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const [userData, setUserData] = useState({})
  
   const submitHandler = (e) => {
      e.preventDefault()
  
      setUserData({
          email: email,
          password: password
      })
  
      console.log(userData)
  
      setEmail('')
      setPassword('')
   }
  
 

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>

<div>
<img 
         className='w-18 mb-6' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />

        <form onSubmit={submitHandler}>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>

            <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 

            className='bg-[#eeeeee] rounded px-4 border w-full text-lg placeholder:text-base mb-7 py-2'
            placeholder='email@example.com' required/>

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input
            className='bg-[#eeeeee] rounded px-4 
            border w-full text-lg py-2 placeholder:text-base mb-7'

            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
             placeholder='password' />

            <button className='bg-[#111] text-white font-semibold rounded px-4  w-full text-lg py-2 mb-3'>Login</button>

            
        </form>
        <p className='text-center'>New here? <Link 
        to="/signup" className='text-blue-600'>Create new Account</Link></p>
</div>

<div>
    <Link to="/captain-login" className='bg-[#10b461] flex items-center justify-center text-white font-semibold rounded px-4  w-full text-lg py-2 mb-5'>Sign in as Captain</Link>
        </div>
   
    </div>
  )
}

export default UserLogin
