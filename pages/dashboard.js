import React, { useState, useEffect } from 'react'
import { databases } from './appwrite/appwriteConfig'
import {ReactPlayer }from 'react-player'

const dashboard = ({content}) => {
  



  console.log(content);
  return (
   <>
   <section>
   <div className='flex justify-center bg-gray-800 p-10 '>
    <h1 className='text-xl text-white'>Welcome Back Sumit</h1>

   </div>

   <div className='flex'>
    <div className='flex-none w-1/3 h-full bg-blue-700'>

      {/* ========================================================== */}
    {content.documents.map(item=>{
      return (
    
      <div className='flex w-full bg-gray-900  h-20 border-solid border-2 border-white-600 m-2' >
      <button type="button" className='text-lg text-white text-center p-2 '>{item.title}</button>

      </div>
      )
      })}

      {/* ============================================================== */}

    </div>
    {/* video player */}
    <div className=' flex-initial w-2/3 h-20 bg-red-700 '>

{/* ============================== */}



   
  {/* =================================== */}
    </div>

   </div>
   </section>
   </>
  )
}

export async function getServerSideProps(context) {
  // let course ={};
 
   let promise = await databases.listDocuments(
     process.env.ANDROID_DB_ID,
     process.env.CONTENT_COLLECTION_ID,
    //  [
    //      Query.equal('title', 'Full Mobile Hacking Course')
    //  ]
 );
     console.log("thi sis result of change",promise);
 
     return {
       props: {content: JSON.parse(JSON.stringify(promise))}, // will be passed to the page component as props
     }
    }

export default dashboard;