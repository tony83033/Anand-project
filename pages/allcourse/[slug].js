import React from 'react'
import { useRouter } from 'next/router'
import mongoose from 'mongoose'


const course = ({course}) => {
    
  
  return (
    
      <>
  {/* Jumbotron */}
 

  
   <div  className="p-6 shadow-lg rounded-lg my-10 mx-10 bg-gray-100 text-gray-700">
    <h2 className="font-semibold text-3xl mb-5"></h2>
    <p>
    
    </p>
    <hr className="my-6 border-gray-300" />
    <p>
      
    </p>
    
  </div>
  
  {/* Jumbotron */}
</>

   
  )
}

export async function getServerSideProps(context) {
  
}

export default Blog