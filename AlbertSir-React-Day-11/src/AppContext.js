import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(false);
  return (
    <AuthContext.Provider value={{ state, setState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AppContextProvider;
export const AppState = () => {
  return useContext(AuthContext);
};
