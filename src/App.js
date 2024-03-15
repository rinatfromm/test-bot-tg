import { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={handleClose}>Close</button>
    </div>
  );
}

export default App;
