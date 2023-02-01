import {React,use,useEffect,useState} from 'react'
import {FcGoogle} from 'react-icons/fc'
// import {account} from '../appwrite/appwiriteConfig.js'
import { account } from './appwrite/appwriteConfig'
//import {  ID } from 'appwrite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

import { v4 as uuidv4 } from 'uuid';
import Router from 'next/dist/server/router';
const sign = () => {

  useEffect(()=>{
    const promise = account.get();

promise.then(function (response) {
    console.log(response);
    myrouter.push("/");
}, function (error) {
    console.log(error);
});
  })

  const myrouter = useRouter();
  const [user,setuser] = useState({email:"",username:"",password:"",cpassword:""});

  const onHandleChange = (e)=>{
    e.preventDefault();
    setuser({...user,[e.target.name]:[e.target.value]});
    console.log(user);


  }
  const onHandleSubmit = async (e)=>{
    e.preventDefault();
      let myemail = user.email.toString();
      let mypassword = user.password.toString();
      let myusername = user.username.toString();
      let mycpass    = user.cpassword.toString();
     // console.log(myemail)

    if(mypassword === mycpass){
      const promise  =  account.create(
        uuidv4(),
        myemail,
        mypassword,
        myusername,
        
      );
  
      promise.then(
        function(response){
          console.log(response);
           account.createEmailSession(myemail, mypassword);
          toast.success('Sign Up Successful', {
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
            },2000)
        },
  
        function(error){
          console.log(error)
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
        }
      )

    }else{
      toast.error('Password and confirm password not match ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
     

    
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
  <div className=' flex flex-row justify-center items-center bg-gray-800 text-white h-full  py-4'>
      <div className='py-2k'>

      <label className='text-lg block py-2'>Email</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Email" onChange={onHandleChange} value={user.email} required ></input>
      

        <label className='text-lg block py-2'>Username</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" placeholder="Username" onChange={onHandleChange} value={user.username} required></input>
      
   
     
        <label className='text-lg block my-2 '>Password</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="Username" onChange={onHandleChange} value={user.password} required></input>

        <label className='text-lg block my-2 '>Confirm password</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cpassword" name="cpassword" type="password" placeholder="Confirm password" onChange={onHandleChange} value={user.cpassword} required></input>

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
