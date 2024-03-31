import React, { useEffect, useState } from 'react'
// https://assignment-rohit9894.vercel.app/?page=4&sortBy=asc
import { useSearchParams } from 'react-router-dom';
import { getPage, getSort } from "../utils/utils";


 import { getCities } from '../api/cities';
import CityTable from '../Components/CityTable';
import Pagination from '../Components/Pagination';
function Home() {
  const[data,setData]=useState([])

const [searchParams, setSearchParams] = useSearchParams();
const initPage=getPage(searchParams.get("page"));
const ininSort=getSort(searchParams.get("sortOrder"));
const [page,setPage]=useState(initPage)

const [sortBy,setSortBy]=useState(ininSort)
  useEffect(
    ()=>{
       getCities({page,sortBy})
       .then((res)=>{
        setData(res)
       })
       .catch((err)=>{
        console.log(err)
       })
    }
  ,[page,sortBy])
  useEffect(
   ()=>{
    setSearchParams({
      page,
      sortBy
    })
   }
 ,[page,sortBy,setSearchParams] )
  // console.log(data)
  const isAscending = sortBy === "ASC";
  return (
    <div>
   
        <div>
        <button onClick={()=>setSortBy(isAscending?"DESC":"ASC")}>
          SHOW IN {isAscending?"DESC":"ASC"}{" "}
        </button>
        </div>
   <Pagination current={page} onChange={(page)=>setPage(page)}/>
       <CityTable data={data}/>
       
     

      
  
    </div>
  )
}

export default Home
