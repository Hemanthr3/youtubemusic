import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function authorize() {
    const router = useRouter()
     const {access_token,refresh_token} = router.query;

      useEffect(()=>{
      if(access_token && refresh_token){
        localStorage.setItem("ACCESS_TOKEN",access_token)
        localStorage.setItem("REFRESH_TOKEN",refresh_token)
        window.location.href="/"
       
      }
    
  },[router.query])
  return (
    <div>authorize</div>
  )
}

export default authorize