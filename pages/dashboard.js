import React from 'react'

const dashboard = () => {
  return (
   <>
   <section>
   <div className='flex justify-center bg-gray-800 p-10 '>
    <h1 className='text-xl text-white'>Welcome Back Sumit</h1>

   </div>

   <div className='flex'>
    <div className='flex-none w-1/3 h-20 bg-blue-700'></div>
    <div className=' flex-initial w-2/3 h-20 bg-red-700 '></div>

   </div>
   </section>
   </>
  )
}

export default dashboard;