
import { useContext } from 'react';
import './App.css';
import { AppContext } from './AppContextProvider';

const style = {
  light: {
    color: "black",
    background: "#cecece",
    padding: "50px"
  },
  dark: {
    color: "white",
    background: "black",
    padding: "50px"
  }
};
function App() {
  const {theme,toggleTheme}=useContext(AppContext)

  return (
    <div className="App" style={theme==="light"?style.light:style.dark}>
      <h1>Theme is {theme}</h1>
      <button onClick={()=>toggleTheme()}>{theme==="light"?"Night":"Day"}</button>
    </div>
  );
}

export default App;
