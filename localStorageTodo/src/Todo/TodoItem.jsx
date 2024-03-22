import React from "react";

function TodoItem({ data, remove, toggle }) {
  return (
    <div style={{ display: "flex" }}>
      <h1>
        {data.text} {data.status ? "completed" : "not completed"}{" "}
        <button style={{ height: "inherit" }} onClick={() => remove(data.id)}>
          Remove
        </button>{" "}
        <button style={{ height: "inherit" }} onClick={() => toggle(data.id)}>
          toggle
        </button>
      </h1>
    </div>
  );
}

export default TodoItem;
