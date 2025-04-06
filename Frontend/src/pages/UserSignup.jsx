import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext} from '../context/UserContext'

const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})


  const navigate = useNavigate()

  const {user, setUser} = React.useContext(UserDataContext)

  const submitHandler = async(e) => {
    e.preventDefault()

    const newUser ={
      fullname:{
        firstname: firstName,
        lastname: lastName
      },

      email: email,
      password: password,
      
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser )

    if(response.status === 201){
      const data = response.data

      setUser(data.user)

      localStorage.setItem('token', data.token)

      navigate('/home')
    }

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
   
   <div>
   <img 
            className='w-18 mb-6' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
   
           <form onSubmit={(e)=>{
            submitHandler(e)
           }}>

          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          
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

               <h3 className='text-lg font-medium mb-2'>What's your email</h3>
   
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
   
               <button className='bg-[#111] text-white font-semibold rounded px-4  w-full text-lg py-2 mb-3'>Create account</button>
   
               
           </form>
           <p className='text-center'>Already have an account? <Link 
           to="/login" className='text-blue-600'>Login here</Link></p>
   </div>
   
   <div>
      <p className='text-[10px] text-gray-700 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
           </div>
      
       </div>
  )
}

export default UserSignup
