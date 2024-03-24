import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../Components/Pagination";
const User = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    setSearchParams({
      page
    });
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.avatar} alt={item.first_Name} />
          <Link style={{ color: "red" }} to={`/user/${item.id}`}>
            {" "}
            <h3>{`${item.first_name} ${item.last_name}`}</h3>
          </Link>
        </div>
      ))}
      <Pagination page={page} totalPage={2} onchange={(a) => setPage(a)} />
    </div>
  );
};
export default User;
