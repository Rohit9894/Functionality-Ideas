
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [data,setData]=useState([])
  const[isLoading,setIsLoading]=useState(false)
  function getData()
{
  return fetch("http://localhost:3004/todos")
  .then(res=>res.json())
  .then(res=>{
    setData(res)
  })
}
  useEffect(
    ()=>{
      getData()
    
    }
  ,[])
//  console.log(data)
  function Delete()
  {
    setIsLoading(true)
   data.map((item)=>
    
    fetch(`http://localhost:3004/todos/${item.id}`,{
      method:"DELETE",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify()
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(data.length)
      data.length--;
       if(data.length===1)
       {
        
        setIsLoading(false)
        getData()
        alert("completed")
       }
    })
   )

  }
  return (
    <div className="App">

   
    <button onClick={()=>Delete()}>delete</button>
    {isLoading?<h1>...deleting</h1>:<div>
    {
      data.map((item)=>(
       <div key={item.id} style={{border:"1px solid black" , marginLeft:"300px"}}>
       <h1>{item.text}</h1>
    
       </div>
      ))
     }
    </div>}
    </div>
  );
}

export default App;
