import React from 'react'

function TodoList({
    title,
    status,
    id,
    handleToggle,
    handleDelete

  
}) {
  return (
    <div style={{display:"flex",gap:"20px"}}>
      <div>{title}</div>
      <div>{!status?"Done":"Not Done"}</div>
      <button onClick={()=>handleToggle(id,!status)}>Toggle</button>
      <button onClick={()=>handleDelete(id)}>Delete</button>
    
    </div>
  )
}

export default TodoList
   

