import { AppState } from "../AppContext";

const Login = () => {
  const { state, setState } = AppState();
  return (
    <button
      style={{
        cursor: "pointer",
        height: "50px",
        widht: "50px",
        background: "red",
        color: "white",
        border: "none",
        borderRadius: "10px"
      }}
      onClick={() => setState(!state)}
    >
      {!state ? "Login" : "Logout"}
    </button>
  );
};
export default Login;
