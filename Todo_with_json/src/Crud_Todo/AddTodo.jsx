import React, { useState } from 'react'

function AddTodo({handleAdd}) {
    const [text,setText]=useState("");
    function handleChange(e)
    {
        setText(e.target.value)
    }
    function handleSubmit()
    {
        handleAdd(text)
    }
  return (
    <div>
      <input onChange={handleChange} placeholder='addSomething'/>
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default AddTodo
