import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PrivateRoute from '../Components/PrivateRoutes'
import CityPage from './CityPage'
import CountriesList from './CountriesList'
import Home from './Home'
import Login from './Login'




function AllRoutes() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/city/:id" element={<CityPage/>}/>
      <Route path="/country/:country" element={<CountriesList/>}/>

     </Routes>
    </div>
  )
}

export default AllRoutes
