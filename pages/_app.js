import '../styles/globals.css'
import Navbar from './components/Navbar'
import Footer  from './components/Footer'
import { useEffect, useState } from 'react'
import { account } from './appwrite/appwriteConfig'
export default function App({ Component, pageProps }) {
  const [key,setkey] = useState(0);
  const [user,setuser]   = useState({value:null})


  useEffect(()=>{
    setkey(Math.random());
    const promise = account.get();
   
    promise.then(function (response) {
      console.log(response);
      setuser({value:response})
      
    //  console.log( "here is is login",islogin);
}, function (error) {
    console.log(error);
    setkey(Math.random());
     
});
  },[])

 

  return <> <Navbar  key={key} user={user} ></Navbar> <Component {...pageProps} /> <Footer></Footer> </>
}
