import React from "react";

function CardItem({ data, limit, deleteData }) {
  console.log(limit);
  return (
    <div className="cards">
      <h2>Name:{data.name}</h2>
      <h2>Email:{data.email}</h2>
      <h2>City:{data.address.city}</h2>
      <button
        style={{ display: limit > 3 ? "block" : "none" }}
        onClick={() => deleteData(data.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default CardItem;
