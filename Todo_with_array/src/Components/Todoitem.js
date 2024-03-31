function TodoItem({
  id,
  title,
  status,
  handleToggle,
  handleDelete
})
{
  return(
    <div style={{
      padding:"1rem",
      border:"1px solid tomato",
      borderRadius:"15px",
      display:"flex",
      gap:"1rem",
      justifyContent:"space-between",
      color:"white",
      backgroundColor:"black",
      marginTop:"5px"
    }}>
      <div>
        {title}
      </div>
      <div>
      {  status?"Done":"Not Done"}
      </div>

        <button style={{
          cursor:"pointer",
        }} onClick={()=>handleToggle(id)}>Toggle</button>
        <button onClick={()=>handleDelete(id)}>Delete</button>

    </div>
  )
}
export default TodoItem;
