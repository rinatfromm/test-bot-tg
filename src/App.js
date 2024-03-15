import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
const tg = window.Telegram.WebApp;

function App() {
  const { handleToggleButton, tg } = useTelegram;

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={handleToggleButton}>toogle</button>
    </div>
  );
}

export default App;
