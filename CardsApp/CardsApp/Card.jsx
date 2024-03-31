import React, { useEffect, useState } from "react";

import CardItem from "./CardItem";
// import CardItem from "./CardItem";

function Card() {
  const [limit, setLimit] = useState(3);
  const [data, setData] = useState();
  const getData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/");
    let response = await res.json();
    setData(response);
  };
  useEffect(() => {
    getData();
    return () => getData;
  }, []);

  if (!data) {
    return <h1>...Loading</h1>;
  }
  function deleteData(id) {
    let updateData = data.filter((item) => item.id !== id);
    setData(updateData);
    setLimit(limit - 1);
  }
  return (
    <div className="main">
      {data?.slice(0, limit).map((item) => (
        <CardItem
          key={item.id}
          data={item}
          limit={limit}
          deleteData={deleteData}
        />
      ))}
      <button disabled={limit === 10} onClick={() => setLimit(limit + 1)}>
        AddCards
      </button>
    </div>
  );
}

export default Card;
