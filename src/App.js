import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/header/Header";

function App() {
  const { handleToggleButton, tg } = useTelegram();

  useEffect(() => {
    if (tg && tg.ready) {
      tg.ready();
    }
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <button onClick={handleToggleButton}>toogle</button>
    </div>
  );
}

export default App;
