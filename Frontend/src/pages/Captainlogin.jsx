import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainlogin = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const [captainData, setCaptainData] = useState({})

 const submitHandler = (e) => {
    e.preventDefault()

    setCaptainData({
        email: email,
        password: password
    })

    console.log(captainData)

    setEmail('')
    setPassword('')
 }


  return (
    <div className='p-7 flex flex-col justify-between h-screen'>

    <div>
    <img 
             className='w-18 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
    
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
            <p className='text-center'>Join a fleet? <Link 
            to="/captain-signup" className='text-blue-600'>Register as a Captain</Link></p>
    </div>
    
    <div>
        <Link to="/login" className='bg-[#d5622d] flex items-center justify-center text-white font-semibold rounded px-4  w-full text-lg py-2 mb-5'>Sign in as User</Link>
            </div>
       
        </div>
  )
}

export default Captainlogin
