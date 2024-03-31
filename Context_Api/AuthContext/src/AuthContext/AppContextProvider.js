import React, { createContext, useState } from 'react'
export const AppConetxt=createContext()
function AppContextProvider({children}) {
    const [isAuth,setIsAuth]=useState(false)
    const [token,setToken]=useState("error")
    function handleLogin(token)
    {
       setIsAuth(true)
       setToken(token)
    }
    function handleLogout()
    {
        setIsAuth(false)
        setToken("error")
    }
  return (
    <div>
      <AppConetxt.Provider value={{handleLogin,handleLogout,token,isAuth}}>
        {children}
      </AppConetxt.Provider>
    </div>
  )
}

export default AppContextProvider
