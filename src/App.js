import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import { Route, Routes } from "react-router-dom";
import UserCard from "./components/userCard/UserCard";

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
      <Routes>
        <Route index element={<Form />} />
        <Route path={"card"} element={<UserCard />} />
      </Routes>
    </div>
  );
}

export default App;
