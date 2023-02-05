import '../styles/globals.css'
import Navbar from './components/Navbar'
import Footer  from './components/Footer'
import { useEffect, useState } from 'react'
import { account } from './appwrite/appwriteConfig'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [key,setkey] = useState(0);
  const [user,setuser]   = useState({value:null});
  const [progress, setProgress] = useState(0);



  useEffect(() => {
   
   
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100);
    })
    router.events.on('routeChangeStart', ()=>{
      setProgress(35);
    })
    // user token ==========================
    try{
      
      
      
      let promise = account.get();
      
      promise.then(function (response) {
        console.log(response);
        setuser({value:response})
        setkey(Math.random());
        //  console.log( "here is is login",islogin);
      }, function (error) {
        console.log(error);
        setuser({value:null});
        setkey(Math.random());
       
        
      });
    }catch{
      setuser({value:null})
      setkey(Math.random());
    }

    //=======================================
    // if(promise){
    //   setuser({value:token});
    //   setkey(Math.random())
    // }else{
    //   setuser({value:null});
    //   setkey(Math.random());
    // }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query])


  useEffect(()=>{
    setkey(Math.random());
   

  },[])

const logout = async ()=>{
  const promise = account.deleteSessions();

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
}

  return <>
  
  <LoadingBar
        color='#007acc'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
  
   <Navbar  key={key} user={user} logout={logout} /><Component {...pageProps} /> <Footer></Footer> </>
}
