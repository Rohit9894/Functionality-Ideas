import React, { useState } from "react";

function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");
  function Add() {
    handleAdd(text);
    setText("");
  }
  return (
    <div>
      <input
        placeholder="add something"
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={Add}>Add</button>
    </div>
  );
}

export default AddTodo;
