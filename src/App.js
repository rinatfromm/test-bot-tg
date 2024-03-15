import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";

function App() {
  const { handleToggleButton, tg } = useTelegram();

  useEffect(() => {
    if (tg && tg.ready) {
      tg.ready();
    }
  }, [tg]);

  return (
    <div className="App">
      <button onClick={handleToggleButton}>toogle</button>
    </div>
  );
}

export default App;
