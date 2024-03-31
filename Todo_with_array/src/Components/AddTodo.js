import { useState } from "react"

function AddTodo({handleAdd})
{
  const [text,setText]=useState("");
  
  return <div>
    <input 
    className="divine"
    placeholder="Add something...."
    value={text}
    onChange={(e)=>setText(e.target.value)}
    />
    <button style={{width:"50px",height:"54px"}} onClick={()=>handleAdd(text)}>ADD</button>
  </div>
}
export default AddTodo;