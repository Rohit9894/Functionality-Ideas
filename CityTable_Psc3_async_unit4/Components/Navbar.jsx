import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { AuthContext } from '../Context/AuthContext'

function Navbar() {
  const {isAuth,logoutUser}=useContext(AuthContext)
  return (
    <div>
      <Link to ="/">Home</Link>
      {
        isAuth?(
          <button onClick={()=>logoutUser()}>LOGOUT</button>
        ):(
          <Link to="/login">Login</Link>
        )
      }
    </div>
  )
}

export default Navbar
