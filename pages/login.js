import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import { account } from './appwrite/appwriteConfig'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
const login = () => {
  const myrouter = useRouter();
  const [user,setuser] = useState({email:"",password:""});

  const onHandleChange =(e) =>{
    e.preventDefault();
    setuser({...user,[e.target.name]:[e.target.value]});
    console.log(user);
  }

  const onHandleSubmit = (e)=>{
    e.preventDefault();
    // const us = email.toString();
    // const pass = password.toString();
    // console.log("Heey Here I am",us,pass);
    const promise = account.createEmailSession(user.email.toString(),user.password.toString());

    promise.then(function (response) {
      console.log(response);
      toast.success('Login Successful', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            
            setTimeout(()=>{
              myrouter.push("/");
            },1000)
  }, function (error) {
      console.log(error);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  });
  }
  return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <div className=' flex flex-row justify-center items-center bg-gray-800 text-white h-full py-24'>
      <div className='py-2k'>
        <label className='text-lg block py-2'>email</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" onChange={onHandleChange} type="email" placeholder="email" required></input>
      
   
     
        <label className='text-lg block my-2 '>Password</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" onChange={onHandleChange} name="password" placeholder="Password" required></input>

        <button type="button" className=" my-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-full dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">
          <div className='flex'>
            <div className='bg-purple-800 '>
           <FcGoogle className='text-3xl ' />
           </div>
          <p className='text-xl py-auto w-full'>Continue with google</p> 
           </div>
           </button>

           <button onClick={onHandleSubmit} type="button" className=" text-xl my-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg  px-5 py-2.5 mb-2 w-full dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">
          Login
           </button>
           

      </div>
    </div>
      
    </>
  )
}

export default login
