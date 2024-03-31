import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./Redux/action";
import { useRef } from "react";

function App() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();
  const inputRef = useRef();

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(1))}>Inc</button>
      <button onClick={() => dispatch(decrement(1))}>Dec</button>
      <br />
      <input type="number" ref={inputRef} placeholder="Enter some Value" />
      <button onClick={() => dispatch(increment(+inputRef.current.value))}>
        Add By Value
      </button>
    </div>
  );
}

export default App;
