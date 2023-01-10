import {React,useState} from 'react'
import {FcGoogle} from 'react-icons/fc'
// import {account} from '../appwrite/appwiriteConfig.js'
import { account } from './appwrite/appwriteConfig'
import {  ID } from 'appwrite';
const sign = () => {
  const [user,setuser] = useState({email:"",username:"",password:"",cpassword:""});

  const onHandleChange = (e)=>{
    e.preventDefault();
    setuser({...user,[e.target.name]:[e.target.value]});


  }
  const onHandleSubmit = async (e)=>{
    e.preventDefault();
     const promise  =  await account.create(
      ID.unique(),
      user.email,
      user.username,
      user.password,
      user.cpassword
    );

    promise.then(
      function(response){
        console.log(response);
      },

      function(error){
        console.log(error)
      }
    )

    
  }
  return (
    <>
  <div className=' flex flex-row justify-center items-center bg-gray-800 text-white h-full  py-4'>
      <div className='py-2k'>

      <label className='text-lg block py-2'>Email</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Email" onChange={onHandleChange} value={user.email} ></input>
      

        <label className='text-lg block py-2'>Username</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" placeholder="Username" onChange={onHandleChange} value={user.username}></input>
      
   
     
        <label className='text-lg block my-2 '>Password</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="Username" onChange={onHandleChange} value={user.password}></input>

        <label className='text-lg block my-2 '>Confirm password</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cpassword" name="cpassword" type="password" placeholder="Confirm password" onChange={onHandleChange} value={user.cpassword}></input>

        <button type="button" className=" my-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-full dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">
          <div className='flex'>
            <div className='bg-purple-800 '>
           <FcGoogle className='text-3xl ' />
           </div>
          <p className='text-xl py-auto w-full'>Continue with google</p> 
           </div>
           </button>

           <button type="button" onClick={onHandleSubmit} className=" text-xl my-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg  px-5 py-2.5 mb-2 w-full dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">
          SignUp
           </button>
           

      </div>
    </div>

    </>
  )
}

export default sign
