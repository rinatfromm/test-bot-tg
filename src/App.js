import { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;

function App() {
  const handleClose = () => {
    tg.close();
  };

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
