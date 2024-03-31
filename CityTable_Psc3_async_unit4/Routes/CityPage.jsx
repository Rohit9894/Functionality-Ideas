import React, {useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import { getCityById } from '../api/cities'

function CityPage() {
    const[data,setData]=React.useState([])
    const {id}=useParams()
    
    useEffect(
        ()=>{
            getCityById(id)
            .then(res=>setData(res))
        },
    [])
    if(!data.id)
    {
      return <div>
        <h4>Something went wrong!</h4>
        <Link to="/">GO back to home Page </Link>
      </div>
    }
    console.log(data)
  return (
    <div>
      <table>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>
            ID
          </td>
          <td>{data.id}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{data.name}</td>
        </tr>
        <tr>
          <td>Population</td>
          <td>{data.population}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>{data.country}</td>
        </tr>
      </table>
    </div>
  )
}

export default CityPage
