import React from 'react'
import {FcGoogle} from 'react-icons/fc'
const login = () => {
  return (
    <>
    <div className=' flex flex-row justify-center items-center bg-gray-800 text-white h-full py-24'>
      <div className='py-2k'>
        <label className='text-lg block py-2'>Username</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
      
   
     
        <label className='text-lg block my-2 '>Password</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="Username"></input>

        <button type="button" class=" my-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-full dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">
          <div className='flex'>
            <div className='bg-purple-800 '>
           <FcGoogle className='text-3xl ' />
           </div>
          <p className='text-xl py-auto w-full'>Continue with google</p> 
           </div>
           </button>

           <button type="button" class=" text-xl my-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg  px-5 py-2.5 mb-2 w-full dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">
          Login
           </button>
           

      </div>
    </div>
      
    </>
  )
}

export default login
