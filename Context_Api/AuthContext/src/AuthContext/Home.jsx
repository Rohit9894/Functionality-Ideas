import React, { useContext } from 'react'
import { AppConetxt } from './AppContextProvider'

function Home() {
    const{handleLogin,handleLogout,token,isAuth}=useContext(AppConetxt)
   
    
    function postReq()
    {
        fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            })
        })
        .then(res=>res.json())
        .then(res=>{
            handleLogin(res.token)
        })
    }
    const style={
        error:{color:"red"},
        token:{color:"blue"}
    }
  return (
    <div>
      <div>
         <div style={{display:"flex",gap:"50px",justifyContent:"center"}}>
         <button style={{padding:"1rem",background:"blue",color:"white",fontSize:"18px",borderRadius:"10px"}} disabled={isAuth} onClick={postReq}>Login</button>
        <button style={{padding:"1rem",background:"red",color:"white",fontSize:"18px",borderRadius:"10px"}} disabled={!isAuth} onClick={handleLogout}>Logout</button>
         </div>
        <h1>Your token is:<span style={token==='error'?style.error:style.token}>{token}</span></h1>
      </div>
    </div>
  )
}

export default Home
