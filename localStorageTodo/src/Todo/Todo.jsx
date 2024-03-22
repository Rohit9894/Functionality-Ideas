import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { loadData, saveData } from "./localstorage";
import TodoItem from "./TodoItem";

function Todo() {
  const [data, setData] = useState(loadData("todos") || []);
  console.log(data);

  function handleAdd(text) {
    let newData = {
      id: Date.now() + data.length,
      text,
      status: false,
    };

    setData([...data, newData]);

    console.log(data);
  }

  function remove(id) {
    let updateData = data.filter((item) => item.id !== id);
    setData(updateData);
  }
  function toggle(id) {
    let updateData = data.map((item) =>
      item.id === id
        ? {
            ...item,
            status: !item.status,
          }
        : item
    );
    setData(updateData);
  }
  useEffect(() => {
    saveData("todos", data);
  }, [data]);

  return (
    <div
      style={{
        width: "600px",
        textAlign: "center",
      }}
    >
      <AddTodo handleAdd={handleAdd} />
      {data.map((item) => (
        <TodoItem key={item.id} data={item} remove={remove} toggle={toggle} />
      ))}
    </div>
  );
}

export default Todo;
