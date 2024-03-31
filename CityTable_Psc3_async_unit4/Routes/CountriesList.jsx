import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getCitiesByCountryName } from '../api/cities'
import CityTable from '../Components/CityTable';

function CountriesList() {
    const [data,setData]=useState([]);
    const {country}=useParams()
    const navigate=useNavigate()
    useEffect(
        ()=>{
            getCitiesByCountryName({country})
            .then(res=>setData(res))
        }
    ,[country])
    console.log(data)

  return (
    <div>
      <div>{country}</div>
      <CityTable data={data}/>
      <div>
        <button onClick={() => navigate(-1)}> Go back </button>
      </div>
    </div>

    
  )
}

export default CountriesList
