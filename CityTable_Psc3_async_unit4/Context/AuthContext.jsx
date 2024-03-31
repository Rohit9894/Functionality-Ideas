import React, { useState } from 'react'
export const AuthContext=React.createContext();
function AuthContextProvider({children}) {
    const [isAuth,setIsAuth]=useState(false)
    const [email,setEmail]=useState("")
    const [token,setToken]=useState(null)
    const toggle=()=>{
        setIsAuth(!isAuth)
    }
    const loginUser=(email,token)=>{
        setEmail(email)
        setToken(token)
        setIsAuth(true)
    };
    const logoutUser=()=>{
        setEmail("");
        setToken(null)
        setIsAuth(false)
    }

  return (
    <div>
      <AuthContext.Provider
      value={{isAuth,toggle,loginUser,logoutUser,email,token}}
      >
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
