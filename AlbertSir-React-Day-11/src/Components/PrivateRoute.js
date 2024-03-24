import { Navigate } from "react-router-dom";
import { AppState } from "../AppContext";

export default function PrivateRoute({ children }) {
  const { state } = AppState();
  if (!state) {
    return <Navigate to="/auth" />;
  }
  return children;
}
