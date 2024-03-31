import React from 'react'
import {Link} from "react-router-dom"

function CityRow({name,country,population,id}) {
  return (
    <div>
     <tr>
        <td>
        <Link to={`/city/${id}`}>{id}</Link>{" "}
        </td>
        <td>{name}</td>
        <td>{population}</td>
       <td>
       <Link to={`/country/${country}`}>{country}</Link>
       </td>
     </tr>
    </div>
  )
}

export default CityRow
