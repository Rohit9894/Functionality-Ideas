import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'

import TodoList from './TodoList'

const getTodos=()=>{
    
    return fetch(`https://yoox-4324.herokuapp.com/data`)
    .then(res=>res.json());
}
function Todo() {
    const [todos,setTodos]=useState([])
    const [loading,setLoading]=useState(false)
  

   
    useEffect(
        ()=>{
  
        handleGetTodos()
      

        },[]
    )
   
    const handleGetTodos=()=>{
        console.log('Boom Boom')
        setLoading(true)
       return  getTodos()
        .then(res=>{
            setLoading(false)
            setTodos(res)
            console.log(res)
        })
        .catch(err=>{
            setLoading(false)
        })
    }
    const addTodos=(item)=>{
        return fetch("https://yoox-4324.herokuapp.com/data",{
            method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(item)
        })
        .then(res=>res.json())
    }
    const toggleTodo=(id,newStatus)=>{
      return fetch(`https://yoox-4324.herokuapp.com/data/${id}`,{
          method:"PATCH",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({status:newStatus})
      })
      .then(res=>res.json())
  }
  const deleteTodo=(id)=>{
      return fetch(`https://yoox-4324.herokuapp.com/data/${id}`,{
          method:"DELETE",
      headers:{
          "Content-Type":"application/json"
      }
     
      })
      .then(res=>res.json())
  }
  const handleToggle=(id,newStatus)=>{
    setLoading(true)
    toggleTodo(id,newStatus)
    .then(res=>{
      handleGetTodos()
    })
    .catch(err=>{
        setLoading(false)
    })
}
const handleDelete=(id)=>{
    setLoading(true)
    deleteTodo(id)
    .then(res=>{
      handleGetTodos()
    })
    .catch(err=>{
        setLoading(false)
    })
}



   



    function handleAdd(text)
    {
      const item={
        title:text,
        status:"false",
      }
      setLoading(true)
      addTodos(item)

      .then(res=>{
        console.log(res)
        handleGetTodos()
      })
      .catch(err=>{
        setLoading(false)
      })
    }
  
    
  return (
    <div>
      <h1>Todo</h1>
      {loading && "Loading"}
      <AddTodo handleAdd={handleAdd}/>
   

     {
        todos.map(item=>
            <TodoList
                key={item.id}
                title={item.title}
                status={item.status}
                id={item.id}
                handleToggle={handleToggle}
                handleDelete={handleDelete}

             

            />
        )
     }
  
  

     
    </div>
  )
}

export default Todo

