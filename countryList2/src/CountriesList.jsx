import React, { useState } from 'react'
import { useEffect } from 'react'
function getData(filter) {
    if(!filter)
     {
        return fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
   
     }
     else
    { 
    return fetch(`https://restcountries.com/v3.1/region/${filter}`)
     .then(res=>res.json())
  }
}


function CountriesList() {
    const [data, setData] = useState([])
    const[filter,setFilter]=useState("")
    const[sortBy,setSortBy]=useState("")
    

    useEffect(
        () => {
            getData(filter)
            .then(res => {
                setData(res)
                console.log(res)
            })
        }
    ,[filter])

 function handleChange(e)
{
    const value=e.target.value;
     setFilter(value)
    


}
function handleChange1()
{
    let newData;
   
    if(sortBy==="lth")
    {
    newData=data?.sort((a,b)=>a.population-b.population)  
    }
    else if(sortBy==="htl")
    {
     newData=data?.sort((a,b)=>b.population-a.population)  
    }
    else{
        newData=data;
    }
    setData(newData)
  
}
console.log(filter)
useEffect(
    ()=>{
       handleChange1()
    }
,[sortBy])

console.log(data)
    return (
        <div>
            <select onChange={handleChange}>
                <option value="">All</option>
                <option value="asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Americas"> Americas</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>


            </select>
            <select onChange={(e)=>setSortBy(e.target.value)}>
                <option value="">Sort by</option>
                <option value="lth">Ascceding</option>
                <option value="htl">Decendeing</option>
             </select>

            <div className='main' style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,0.75fr)",
                gap: "30px",
                justifyContent: "center"

            }}>
   
                {
                    data.map((item) => (
                        <div style={{
                            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                        }}>

                            <img src={item.flags.png} width="200px" alt="img" />
                            <h3>Name:{item.name.common}</h3>
                            <h3 style={{ color: "blue" }}>Cpaital:{item.capital}</h3>
                            <h3 style={{ color: "red" }}>Region:{item.region}</h3>
                            <h3>population:{item.population}</h3>

                        </div>


                    ))
                }
            </div>
            </div>
            )
}
export default CountriesList
