import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const SingleUser = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res.data);
      });
  }, [id]);
  return (
    <div>
      {loading ? (
        <h1>loading....</h1>
      ) : (
        <div>
          <h1>User Single Page</h1>
          <h3>
            {" "}
            Name: {data.first_name} {data.last_name}
          </h3>
          <img src={data.avatar} alt={data.first_name} />
          <h4>{data.email}</h4>
          <div>
            <Link to="/user">Go back</Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default SingleUser;
