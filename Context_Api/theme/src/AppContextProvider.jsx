import React, { createContext, useState } from 'react'
export const AppContext=createContext();
function AppContextProvider({children}) {
    const[theme,setTheme]=useState("light")
    function toggleTheme()
    {
        setTheme(theme==="light"?"dark":"light")
    }
  return (
    <div>
      <AppContext.Provider value={{toggleTheme,theme}}>
        {
            children
        }
      </AppContext.Provider>
    </div>
  )
}

export default AppContextProvider
