import React, { useEffect, useState } from 'react'
import Link from 'next/link'


import { AiFillDashboard} from "react-icons/ai";
const Navbar = ({key,user,logout}) => {
  

  return (
    <>
      <header key={key} className="text-gray-400 bg-gray-900 body-font sticky top-0 z-50">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'/'} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">H@ckDroid</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={'/'} className="mr-5 hover:text-white cursor-pointer">Home</Link>
      <Link href='/course' className="mr-5 hover:text-white cursor-pointer ">Course</Link>
      <a className="mr-5 hover:text-white cursor-pointer">Blog</a>
      <a className="mr-5 hover:text-white cursor-pointer">About</a>
    </nav>

  


    

<div>

  {user.value && 
  <>
  

  <Link href={"/dashboard"} type="button" class="  inline-flex items-center  text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-5 py-2   dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> <div className='flex justify-center items-center '><AiFillDashboard/> <p> Dashboard </p></div></Link>
  
  <Link onClick={logout} href={'/'} className="inline-flex items-center bg-red-800 border-0 py-1 px-3 text-lg hover:bg-red-900 rounded mt-4 md:mt-0 mx-3">
   Logout
   <svg
     fill="none"
     stroke="currentColor"
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={2}
     className="w-4 h-4 ml-1"
     viewBox="0 0 24 24"
   >
     <path d="M5 12h14M12 5l7 7-7 7" />
   </svg>
 </Link>
  

 </>
 }
 
   {!user.value &&
   <Link href={'/sign'} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 mx-3">
      SignUp
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
        >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>

}

{!user.value &&

<Link href={'/login'} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
  Login
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="w-4 h-4 ml-1"
    viewBox="0 0 24 24"
    >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
</Link>
    }

    
  </div>
  </div>
</header>

    </>
  )
}

export default Navbar
