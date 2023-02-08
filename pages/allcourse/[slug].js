import React from 'react'
import { useRouter } from 'next/router'
//import { Databases } from './appwrite/appwriteConfig';
import { databases } from '../appwrite/appwriteConfig'
import {Query} from 'appwrite';

const course = ({mycourse}) => {
    


  if (!mycourse || !mycourse.documents) {
    return <p>Loading...</p>;
  }


  return (
    
      <>
{
  
mycourse.documents.map(item =>{


     
return (
     
 <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest"> {item.title}</h2>
        <h1 className="text-white text-3xl title-font font-medium mb-4">{item.title}</h1>
        <div className="flex mb-4">
          <a className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
          <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">Reviews</a>
          <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">Details</a>
        </div>
        <p className="leading-relaxed mb-4">{item.desc}</p>
        <div className="flex border-t border-gray-800 py-2">
          <span className="text-gray-500">Requirements</span>
          <span className="ml-auto text-white">{item.requirements}</span>
        </div>
        <div className="flex border-t border-gray-800 py-2">
          <span className="text-gray-500">Total Student</span>
          <span className="ml-auto text-white">{item.totalStudent}</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-800 py-2">
          <span className="text-gray-500">Quantity</span>
          <span className="ml-auto text-white">21</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-white">₹{item.price}</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>
          <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={item.img} />
    </div>
  </div>
</section>
 
)
})} 
</>

   
  )
}


export async function getServerSideProps(context) {
  let course ={};

  let promise = await databases.listDocuments(
    process.env.ANDROID_DB_ID,
    process.env.ANDROID_COLLECTION_ID,
    [
        Query.equal('title', 'Full Mobile Hacking Course')
    ]
);
    console.log("thi sis result of change",promise);

    return {
      props: {mycourse: JSON.parse(JSON.stringify(promise))}, // will be passed to the page component as props
    }

// promise.then(function (response) {
//     console.log("this is response",response);

//     return {
//       props: {mycourse: JSON.parse(JSON.stringify(response))}, // will be passed to the page component as props
//     }
    
// }, function (error) {
//     console.log(error);
//     return {
//       props: {mycourse: JSON.parse(JSON.stringify(error))}, // will be passed to the page component as props
//     }
// });


 
}


export default course