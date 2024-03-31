// import React from "react";
import {useState} from "react";
import AddTodo from "./AddTodo"
import TodoList from "./Todolist"
function Todo()
{
  const [todos,setTodos]=useState([])
  const handleAdd=(text)=>
  {
    setTodos(
      [
        ...todos,{
          id:todos.length+Date.now(),
          title:text,
          status:false
        }
      ]
    )
  }
  const handleToggle=(id)=>{
   const updateData=todos.map((item)=>
  item.id===id?{
    ...item,
    status:!item.status
  }:item
  );
  setTodos(updateData)
  }
  const handleDelete=(id)=>{
    let updateData1=todos.filter((item)=>item.id!==id);
    setTodos(updateData1)
  }
  console.log(todos)
  return <div>
   <h1>Todo</h1>
  <AddTodo handleAdd={handleAdd} />
  <div>
    <TodoList data={todos.filter((item)=>!item.status)} handleToggle={handleToggle} handleDelete={handleDelete}/>
  </div>
  <div>
    <h1>Show Completed</h1>
    <TodoList data={todos.filter((item)=>item.status)} handleToggle={handleToggle} handleDelete={handleDelete}/>

  </div>


  </div>;
}
export default Todo;